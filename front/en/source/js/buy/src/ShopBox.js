/**
 * Created by MG on 16/8/10.
 */

class ShopBox extends React.Component{

    render(){

        let shopIcon = (() =>{
            try{
                let icon1 = this.props.goodsInfo.goodsPrefix.toLowerCase();
                let icon2 = this.props.goodsInfo.shop.providerType.toLowerCase();
                return ` icon-${icon1||icon2}`;
            }catch(e){
                return '';
            }
        })();

        let shopName = (() => {
            try{
                return this.props.goodsInfo.shop.shopName;
            }catch(e){
                return '';
            }
        })();

        let shopUrl = (() => {
            try{
                return this.props.goodsInfo.shop.shopUrl;
            }catch(e){
                return '';
            }
        })();

        let goodsLink = (() => {
            try{
                return this.props.goodsUrl;
            }catch(e){
                return '';
            }
        })();

        let model = this.props.model;

        let evaluate = (() => {
            let obj = {
                average : '---',
                scores : [
                    {score: '---',dir:null},
                    {score: '---',dir:null},
                    {score: '---',dir:null},
                ]
            };
            try{
                let eva = this.props.goodsInfo.shop.evaluateInfo;
                let totalScore = 0;
                for(let i=0; i<3; i++){
                    let item = eva[i];
                    let score = item.score - 0;
                    let gap = item.highGap - 0;
                    totalScore += score;
                    obj.scores[i].score = item.score;
                    obj.scores[i].dir = gap === 0 ? null : gap > 0 ? 1 : 0;
                }
                obj.average = (totalScore / 3).toFixed(1);

                return obj;
            }catch(e){
                return obj;
            }
        })();

        let lowScore = (() => {
            try{
                return this.props.goodsInfo.shop.isWarning === 1;
            }catch(e){
                return false;
            }
        })();

        let isWarning = (() => {
            try{
                let credit = this.props.goodsInfo.shop.creditLevel < 6;
                let margin = this.props.goodsInfo.shop.bailAmount < 1000;
                let score = 0;
                let average = evaluate.average < 4.6;
                if(average) score++;
                if(credit) score++;
                if(margin) score++;
                // console.log(average,credit,margin);

                return score >= 2;
            }catch(e){
                return false;
            }

        })();

        let template = null;

        if(isWarning){
            let credit = this.props.goodsInfo.shop.creditLevel < 6;
            let margin = this.props.goodsInfo.shop.bailAmount < 1000;
            let creditUrl = this.props.goodsInfo.shop.creditUrl || goodsLink;

            template = <div className={(this.props.style === 1 ? 'hideBottom' : '' ) + ' buy-shopBox buy-shopBox-warn'}>
                <a className="buy-shopBox-tipHeader" href={creditUrl ? creditUrl : "javascript:;"} target="_blank">
                    <span>{model.tipHeader}</span>
                    <em>{model.tipViewCredit}</em>
                </a>
                <div className="shopBox-header">
                    <i className={'shopBox-icon' + shopIcon}></i>
                    {(()=>{
                        let name = shopName ? shopName : "---";
                        return shopUrl ? <a href={shopUrl} target="_blank">{name}</a> : <strong>{name}</strong>
                    })()}
                    <i className="icon-arrow"></i>
                </div>

                <div className="shopBox-main">

                    <div className="shopBox-body">
                        <span><em className={lowScore ? 'down' : 'up'}>{evaluate.average}</em>{model.content[0]}</span>
                        <table>
                            <tbody>
                            <tr>
                                <th>{model.content[1]}</th>
                                <th>{model.content[2]}</th>
                                <th>{model.content[3]}</th>
                            </tr>
                            <tr>
                                {evaluate.scores.map(item=>
                                    <td>{item.score}<i className={item.dir === null ? 'none' : item.dir === 1 ? 'up' : 'down'}>{item.dir === null ? '' : item.dir === 1 ? '↑' : '↓'}</i></td>
                                )}
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="shopBox-footer">
                        {credit && <p style={{marginTop:'6px'}}><em>{model.tipCredit[0]}</em><span>{model.tipCredit[1]}<i>↓</i></span></p>}
                        {margin && <p><em>{model.tipMargin[0]}</em><span>{model.tipMargin[1]}<i>↓</i></span></p>}
                        <a className={this.props.isBrokenGoods ? 'disabled' : ''} href={this.props.isBrokenGoods ? 'javascript:;' : goodsLink} target="_blank">{model.button}</a>
                    </div>
                </div>
            </div>;
        }else{
            template = <div className={(this.props.style === 1 ? 'hideBottom' : '' ) + ' buy-shopBox'}>
                <div className="shopBox-header">
                    <i className={'shopBox-icon' + shopIcon}></i>
                    {(()=>{
                        let name = shopName ? shopName : "---";
                        return shopUrl ? <a href={shopUrl} target="_blank">{name}</a> : <strong>{name}</strong>
                    })()}

                    <i className="icon-arrow"></i>
                </div>

                <div className="shopBox-main">

                    <div className="shopBox-body">
                        <span><em className={lowScore ? 'down' : 'up'}>{evaluate.average}</em>{model.content[0]}</span>
                        <table>
                            <tbody>
                            <tr>
                                <th>{model.content[1]}</th>
                                <th>{model.content[2]}</th>
                                <th>{model.content[3]}</th>
                            </tr>
                            <tr>
                                {evaluate.scores.map(item=>
                                    <td>{item.score}<i className={item.dir === null ? 'none' : item.dir === 1 ? 'up' : 'down'}>{item.dir === null ? '' : item.dir === 1 ? '↑' : '↓'}</i></td>
                                )}
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="shopBox-footer">
                        {/*<a className={this.props.isBrokenGoods ? 'disabled' : ''} href={this.props.isBrokenGoods ? 'javascript:;' : goodsLink} target="_blank">{model.button}</a>*/}
                        <a href={goodsLink} target="_blank">{model.button}</a>
                    </div>
                </div>
            </div>;
        }

        return template;

    }
}

export default ShopBox;