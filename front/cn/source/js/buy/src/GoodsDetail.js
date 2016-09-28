/**
 * Created by MG on 16/8/10.
 */
// let timer = null;
class GoodsDetail extends React.Component{
    render(){
        let descUrl = this.props.descUrl;

        // clearTimeout(timer);
        // timer = setTimeout(()=>{
        //     var ifm= document.getElementById("goodsDetail");
        //     var subWeb = document.frames ? document.frames["goodsDetail"].document :
        //         ifm.contentDocument;
        //     if(ifm != null && subWeb != null) {
        //         ifm.height = subWeb.body.scrollHeight;
        //     }
        // },2000);

        if(descUrl && typeof descUrl === 'string'){
            if(/^(https?)?\/\//i.test(descUrl)){

                return (<div className="detail-goodsDetail"><iframe id="goodsDetail" src={descUrl}></iframe></div>)

            }else{
                return(<div className="detail-goodsDetail" dangerouslySetInnerHTML={{__html : descUrl}}></div>)
            }

        }else{

            return (<div className="detail-goodsDetail">{this.props.model.main.details.failed}</div>)
        }

    }
}

/**
 * 获取详情页html
 * */
// function fGetHTML(url){
//     return fetch(url,{
//         method: 'GET',
//         headers: {"Content-type":"text/html; charset=UTF-8"}
//     })
// }

export default GoodsDetail;