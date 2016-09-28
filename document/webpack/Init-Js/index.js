/**
 * author:nero
 * version:v1.0
 * plugin:init js
 */
'use strict';
//var vm = require('vm');
var fs = require('fs');
var phantom = require('phantom');

//constructor
function InitJs(options) {
  // Default options
  this.options = {
    filename: options.filename || './front/plugin/init/page/init.html',
    template:options.template || "./front/plugin/init/source/js/init.js",
    sTag:"<%",
    eTag:"%>",
    debugcompiler:false,
    data:options.data || {},
    newfile:false,
    initType:options.initType || "new"
  };
}

//bootstrap of this program
InitJs.prototype.apply = function(compiler) {
  let self=this;

  compiler.plugin('emit', function(compilation, callback) {
    var file=compilation.options.output.path+self.options.filename;

    if(self.options.initType=="new"){
      //write file
      let tpl = fs.readFileSync(self.options.template).toString();
      let data=self.options.data;
      let str= self.renderdata(tpl,data);
      //write my file And Report
      self.writeAndReport(file,str,compilation);
    }else if(self.options.initType=="static"){
      self.staticpage(file,self.options.template,compilation);
    }else if(self.options.initType=="delete"){
      self.deleteSource(file);
    }
    
    callback();
  });
};

//delete source from path
InitJs.prototype.deleteSource=function (dir) {
  let filename=dir.substr(dir.lastIndexOf("/")+1);
  let mydir=dir.substr(0,dir.lastIndexOf("/")+1);
  let arrdir=this.arrdir(mydir);

  if(fs.existsSync(dir) && filename){
    fs.unlinkSync(dir);
    console.log(dir +" delete successed!");
  }

  for(let dir of arrdir){
    this.deleteDir(dir);
  }
}

//foreach the path to delete file
InitJs.prototype.deleteDir=function (dir) {
  if(fs.existsSync(dir)){
    //if dir is empty,delete dir.
    if(!fs.readdirSync(dir).length){
      fs.rmdirSync(dir);
      console.log(dir+" delete successed!");
    }
  }else{
    console.error("error,file is not exist!");
  }
}

//write file and report to webpack controller
InitJs.prototype.writeAndReport=function (file,cont,compilation) {
  let promise=new Promise( (resolve,reject) => {
    resolve(this.writejs(file,cont));
  })

  promise.then( () => {
    //update assets infor
    if(this.options.newfile){
      compilation.assets[this.options.filename] = {
        source: () => {
          return cont;
        },
        size: function() {
          return this.source().length;
        }
      };
    };
  })
}

InitJs.prototype.writejs=function (file,content) {
  let index=file.lastIndexOf("/");
  let dir=file.substr(0,index+1);
  let self=this;
  this.mymkdirs(dir);

  fs.writeFileSync(file, content);
  self.options.newfile=true;
}

//search all dir from dir path
InitJs.prototype.arrdir=function (dir) {
  let longdir=dir;
  let arrdir=[longdir];
  while (longdir){
    if(longdir=="./"){
      longdir=false;
      break;
    }else {
      longdir=longdir.substring(0,longdir.lastIndexOf("/"));
      longdir=longdir.substring(0,longdir.lastIndexOf("/")+1);
      longdir=="./" || arrdir.push(longdir);
    }
  }
  return arrdir;
}

//foreach to create dir
InitJs.prototype.mymkdirs=function (dir) {
    let arrdir=this.arrdir(dir).reverse();
    //create dir
    for(let dir of arrdir){
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir,function(err){});
        }
    }
}

//renderdata
InitJs.prototype.renderdata = function(tpl,data) {
  var sTag=this.options.sTag,eTag=this.options.eTag,tpls = tpl.split(sTag),debugcompiler=this.options.debugcompiler,code = "var js=''";
  for(let t = 0;t < tpls.length;t++){
    let p = tpls[t].split(eTag);
    if(t!=0){
      //code += this.parsepage(p[0]);
      code += this.parsepage(p[0]);
    }
    //\' support single quotation mark model
    code += "+'"+p[p.length-1].replace(/\'/g,"\\'").replace(/\r\n/g, '\\n').replace(/\n/g, '\\n').replace(/\r/g, '\\n')+"'";
  }
  code += ";return js;";
  if(debugcompiler){
    console.log(code);
    console.log(data);
    console.log(this.func(data,code));
  }
  return data ? this.func(data,code) : this.func;
}

//make function by running
InitJs.prototype.func=function(d,code){
  var i, k = [], v = [];
  for (i in d) {
    k.push(i);
    v.push(d[i]);
  };
  //apply(this,v)
  return (new Function(k, code)).apply(d,v);
};

//encode html code
InitJs.prototype.encodeHTML=function(source) {
  return String(source).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\\/g,'&#92;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
};

//parse page
InitJs.prototype.parsepage=function(line) {
  if(line.substr(0,1)=="="){
    line="+("+line.substr(2)+")";
  }else if(line.substr(0,3)==":h="){
    line="+("+this.encodeHTML(line.substr(3))+")";
  }else if(line.substr(0,3)==":u="){
    line="+encodeURI("+line.substr(3)+")";
  }else{
    line=";"+line.replace(/\r\n/g,'')+"js=js";
  }
  return line;
}

//create static code,and insert into the page file
InitJs.prototype.staticpage=function (file,url,compilation) {
  var sitepage = null;
  var phInstance = null;
  var self=this;

  phantom.create()
      .then(instance => {
        phInstance = instance;
        return instance.createPage();
      })
      .then(page => {
        sitepage = page;
        return page.open(url);
      })
      .then(status => {
        return sitepage.property('content');
      })
      .then(content => {
        if(content && content!="<html><head></head><body></body></html>"){
          sitepage.evaluate(function() {
            return document.getElementById("container").innerHTML;
          }).then(function(html){
            if(html.length){
              //write file
              let tpl = fs.readFileSync(file).toString();
              let data={container:html};
              let str= self.renderdata(tpl,data);
              self.writeAndReport(file,str,compilation);
              console.log(file+" was overwrite!");
            }else{
              console.log("html is empty!staic failed!");
            }
          });
          console.log(file+" is ready to complete!");
        }else{
          console.log("file is loading failed!please check your proxy!");
        }
        sitepage.close();
        phInstance.exit();
      })
      .catch(error => {
        console.log(error);
        phInstance.exit();
      });
}

module.exports = InitJs;