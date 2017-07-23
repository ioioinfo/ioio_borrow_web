var React = require('react');
var ReactDOM = require('react-dom');

class WebIndex extends React.Component {
  componentDidMount(){
  }
  render() {
    var style = {display:"none"};
    return (
      <div className="web_index">

        <div className="weui-panel__bd">
              <div className="weui-media-box weui-media-box_appmsg book_wrap">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb" src="images/sanguoyanyi.jpg" alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title book_name_color">三国演义</h4>
                      <div className="">
                        <p className="weui-media-box__desc col-xs-6 padding">作者：罗贯中</p>
                        <p className="weui-media-box__desc col-xs-6 padding">归还日期：2017/7/23</p>
                      </div>
                  </div>
              </div>

              <div className="weui-media-box weui-media-box_appmsg book_wrap">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb" src="images/xiyouji.jpg" alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title book_name_color">西游记</h4>
                      <div className="">
                        <p className="weui-media-box__desc col-xs-6 padding">作者：吴承恩</p>
                        <p className="weui-media-box__desc col-xs-6 padding">归还日期：2017/7/23</p>
                      </div>
                  </div>
              </div>

              <div className="weui-media-box weui-media-box_appmsg book_wrap">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb" src="images/shuihuzhuan.jpg" alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title book_name_color">水浒传</h4>
                      <div className="">
                        <p className="weui-media-box__desc col-xs-6 padding">作者：施耐庵</p>
                        <p className="weui-media-box__desc col-xs-6 padding">归还日期：2017/7/23</p>
                      </div>
                  </div>
              </div>

              <div className="weui-media-box weui-media-box_appmsg book_wrap">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb" src="images/hongloumeng.jpg" alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title book_name_color">红楼梦</h4>
                      <div className="">
                        <p className="weui-media-box__desc col-xs-6 padding">作者：曹雪芹</p>
                        <p className="weui-media-box__desc col-xs-6 padding">归还日期：2017/7/23</p>
                      </div>
                  </div>
              </div>

          </div>
        <p className="borrow_none">暂时没有借阅的书籍</p>
      </div>
    );
  }
};




// 返回到页面
ReactDOM.render(
    <WebIndex/>,
    document.getElementById("admin")
);
