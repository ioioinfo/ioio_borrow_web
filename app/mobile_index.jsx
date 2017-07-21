var React = require('react');
var ReactDOM = require('react-dom');

class WebIndex extends React.Component {
  componentDidMount(){
    var bookListHeight = $(window).height()-44;
    $(".book_list").css("height",bookListHeight+"px");
  }
  render() {
    var style = {display:"none"};
    return (
      <div className="web_index">

        <div className="weui-panel__bd book_list">
              <div className="weui-media-box weui-media-box_appmsg book_wrap">
                  <div className="weui-media-box__hd">
                      <img className="weui-media-box__thumb" src="images/sanguoyanyi.jpg" alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                      <h4 className="weui-media-box__title book_name_color">三国演义</h4>
                      <div className="">
                        <p className="weui-media-box__desc col-xs-6 padding">作者：罗贯中</p>
                        <p className="weui-media-box__desc col-xs-6 padding">借阅：允许借阅</p>
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
                        <p className="weui-media-box__desc col-xs-6 padding">借阅：允许借阅</p>
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
                        <p className="weui-media-box__desc col-xs-6 padding">借阅：允许借阅</p>
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
                        <p className="weui-media-box__desc col-xs-6 padding">借阅：允许借阅</p>
                      </div>
                  </div>
              </div>

          </div>

        <div className="weui-search-bar" id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                    <a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                </div>
            </form>
            <a href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>

        <div className="js_dialog" id="iosDialog1" style={style}>
            <div className="weui-mask"></div>
            <div className="weui-dialog">
                <div className="weui-dialog__hd"><strong className="weui-dialog__title">借阅书籍</strong></div>
                <div className="weui-dialog__bd">确认借阅后，请在2017/7/23 日之前到阅览室领取，过时取消</div>
                <div className="weui-dialog__ft">
                    <a href="javascript:;" className="weui-dialog__btn weui-dialog__btn_default">取消</a>
                    <a href="javascript:;" className="weui-dialog__btn weui-dialog__btn_primary">确认</a>
                </div>
            </div>
        </div>


      </div>
    );
  }
};




// 返回到页面
ReactDOM.render(
    <WebIndex/>,
    document.getElementById("admin")
);
