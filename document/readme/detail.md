### 前端细节点说明

```javascript
关于less的说明：
1.公共的plugin中，init.less是负责全局初始化的，
2.class.less是类库，里面包含了公共path的提取，此类库为按需编译
3.所有的业务less文件都必须引入class.less，我们将公共path都统一在一个文件里

关于js的说明：
1.source中的react的js文件夹里，对应page中的HTML，可以是单个JS，也可以是入口文件
2.如果是入口文件，请在入口文件同目录下创建同名资源文件夹

关于img的说明：
1.全站图片，全部采用绝对路径的形式引入，地址为：./front/en/source/img
2.公共path在class.less中设置，例如：@webpath:'//localhost:8004/en/source/img/';

关于react公共组件reactcommon的说明：
1.公共的react全局组件提取到./front/plugin/reactcommon文件夹下
2.名称按功能来命名，1个组件一个文件，方便按需编译
3.组件的资源文件都放在同一个文件夹下，包括js,less,img等，对外只提供一个入口文件，相关资源都在入口文件中封装好

关于公共模块react-plugin的说明：
1.文件夹./front/en/react-plugin下放的是公用的模块
2.这里说的公用模块指的是网站的头部导航，页脚，侧导航等，全站公用的模块。
3.公共模块封装成1个出口文件并按模块功能来命名

关于公共组件plugin文件的说明：
1.所有用到react，react-dom的同学，都可以直接引用load.js，里面已经包含了公用的组件及路由的封装。
2.window.supervar里是全站的全局变量的暴露口，尽量控制使用全局变量，要使用的时候，请在这个里面扩展
3.这里的imgsrc就是HTML里面图片路径的公共path的提取
```
