import 'whatwg-fetch';
import 'es6-promise';
import '../../../less/help/src/leftNav.less';
import HelpContent from './HelpContent';
import HelpInformation from './HelpInformation';
class LeftNav extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
            currentSon:-1,
						currentFar : -1,
            categorys:[],
       }
	}
	
	componentDidMount() {
		this.handlerGetCategories();
	}

	handlerGetCategories(){
		let categoriesUrl = window.supervar.apiURL+'help/class-list';
		fetch(categoriesUrl,{
			method: "POST",
			credentials:'include',
			headers: {
				"Content-Type":"application/x-www-form-urlencoded"
			},
			body:JSON.stringify({
				parentId:0
			})
		})
			.then(response => response.json())
			.then(data => {
				if(data.state.toString()=="0"){
					this.setState({
						categorys:data.data
					})
					let hash = window.location.hash;
					if(hash != "#qq"){
						let pId = hash.substring(2,hash.indexOf('_'));
						let helpId = hash.indexOf('helpId');
						if(pId.length>0){
							if(pId >=0){
								if(data.data.length>0){
									if(data.data[parseInt(pId)].hasOwnProperty('sonCategory')){
										let sonNum = data.data[parseInt(pId)].sonCategory.length;
										document.getElementById('ul_'+pId).style.height = sonNum * 36 + 'px';
									}
								}
							}
						}

						if(helpId>0){
							ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
							ReactDOM.render(<HelpInformation helpId={hash.substring(helpId+6)} />,
								document.getElementById('helpMain'));
						}
					}
					else {
						this.setScrollTop(this.getScrollTop())
					}
				}
			})
	}

	setScrollTop(scroll_top) {
		document.documentElement.scrollTop = scroll_top;
		window.pageYOffset = scroll_top;
		document.body.scrollTop = scroll_top;
	}

	getScrollTop(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		return scrollTop;
	}

	showItems(i,e){
		this.setState({
			currentFar : i
		})
		window.location.hash='p'+i+'_';
		var target = e.currentTarget;

		var siblings = this.sibling(target);
		var parentSiblings = this.sibling(target.parentNode);
		for(let i = 0; i < parentSiblings.length; i++){
			parentSiblings[i].childNodes[1].style.height=0+'px';
		}
		if(!this.hasClass(target,'titleActive')){
			this.addClass(target,'titleActive');
			if(this.state.categorys[i].hasOwnProperty('sonCategory')){
				let sonNum = this.state.categorys[i].sonCategory.length;
				for(let i = 0; i < siblings.length; i++){
					siblings[i].style.height = sonNum * 36 + 'px';
				}
			}
		}
		else {
			this.removeClass(target,'titleActive')
			window.location.hash="#n";
			for(let i = 0; i < siblings.length; i++){
				siblings[i].style.height = 0 + 'px';
			}
		}
	}

	addClass(elem, cls){
		if(!this.hasClass(elem, cls)){
			elem.className += ' ' + cls;
		}
	}

	removeClass(elem, cls){
		if(this.hasClass(elem, cls)){
			var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
			while(newClass.indexOf(' ' + cls + ' ') >= 0){
				newClass = newClass.replace(' ' + cls + ' ', ' ');
			}
			elem.className = newClass.replace(/^\s+|\s+$/g, '');
		}
	}

	hasClass(elem, cls){
		cls = cls || '';
		if(cls.replace(/\s/g, '').length == 0) return false;
		return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
	}
	
	sibling(elem){
		var siblings = [];
		var n = elem.parentNode.firstChild;
      	for (; n; n = n.nextSibling) {
        	if (n.nodeType === 1 && n !== elem) {
          		siblings.push(n);
        	}
      	}
      return siblings;
	}
	
	changeContent(categoryId,categoryName,i,j,e){
		window.location.hash='p'+j+'_'+categoryId;
		window.localStorage.setItem('categoryName',categoryName);
		this.setState({
			currentSon : categoryId,
			currentName : categoryName
		})
		ReactDOM.unmountComponentAtNode(document.getElementById('helpMain'));
		ReactDOM.render(<HelpContent category={categoryId} categoryName={categoryName}/>,document.getElementById('helpMain'));
	}
	
	render(){
		let hash =window.location.hash;
		return (
			<div className="left-part">
				<h1>常见问题分类</h1>
				<ul className="ul-outer">
					{this.state.categorys.map((li,i) => {
						return(
							<li className="ul-li-outer">
								<div
									className={i == parseInt(hash.substring(2,hash.indexOf('_'))) ? "title titleActive" :"title"}
									onClick={this.showItems.bind(this,i)}>
									<h3>{li.categoryName}</h3>
									<span></span>
								</div>
								<ul className={"ul-inner"} id={'ul_'+i}>
									{
										(li.hasOwnProperty('sonCategory'))?(
											li.sonCategory.map(
												(sli,j) =>{
													return(
														<li className={parseInt(hash.substring(hash.indexOf('_')+1)) == sli.categoryId ? 'ul-li-inner son-active' :'ul-li-inner'}
															onClick={this.changeContent.bind(this,sli.categoryId,sli.categoryName,j,i)} >
															{sli.categoryName}
														</li>
													)
												}
											)
										) : ''
									}
								</ul>
							</li>
						)
					})}
				</ul>
				<div className="mail-box">
					<a className="container">
						<div>
							<h2>问题没解决?</h2>
							<h2>找话事人吐槽!</h2>
							<a className="mail" href="mailto:CEO@superbuy.com?spm=2101.892.N.N.1061f70" target="_blank" >CEO@superbuy.com</a>
						</div>
					</a>
					<div className="info">
						<h2>邮件必回复，如果超过2天没有收到请检查</h2>
						<h2>您的垃圾邮件箱，或者在论坛直接呼叫CEO</h2>
					</div>
					{/*<div ref="sendEmail" className={"send-email"}>*/}
						{/*<p className={"tips"}>邮件必回复，如果超过两天没有收到请检查您的垃圾邮件箱，或者在论坛直接呼叫CEO。</p>*/}
						{/*<a href="mailto:service@superbuy.com?spm=2101.892.N.N.1061f70" target="_blank">写邮件</a>*/}
					{/*</div>*/}
				</div>
			</div>
		);
	}
}

export default LeftNav;

