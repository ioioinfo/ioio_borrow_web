var React = require('react');
var ReactDOM = require('react-dom');

class WebIndex extends React.Component {
  constructor(props) {
      super(props);
  }
  handleClick1(e){
    var dataid = $(e.target).data("role");
    var id = e.target.id;
    $(".weui-actionsheet__cell").removeClass("alert_style");
    $("#"+id).addClass("alert_style");
  }
  componentDidMount(){
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

          <div className="book_type_nav" onClick={this.handleClick}><i className="fa fa-navicon fa-fw"></i></div>

          <div className="weui-skin_android" id="book_type_infor" style={style}>
            <div className="weui-mask"></div>
            <div className="weui-actionsheet">
                <div className="weui-actionsheet__menu">
                    <div className="weui-actionsheet__cell" data-role="1" id="1" onClick={this.handleClick1}>全部图书</div>
                    <div className="weui-actionsheet__cell" data-role="2" id="2" onClick={this.handleClick1}>童话故事</div>
                    <div className="weui-actionsheet__cell" data-role="3" id="3" onClick={this.handleClick1}>拼音读物</div>
                    <div className="weui-actionsheet__cell" data-role="4" id="4" onClick={this.handleClick1}>小说</div>
                    <div className="weui-actionsheet__cell" data-role="5" id="5" onClick={this.handleClick1}>寓言神话</div>
                    <div className="weui-actionsheet__cell" data-role="6" id="6" onClick={this.handleClick1}>散文诗歌</div>
                    <div className="weui-actionsheet__cell" data-role="7" id="7" onClick={this.handleClick1}>儿童歌谣</div>
                    <div className="weui-actionsheet__cell" data-role="8" id="8" onClick={this.handleClick1}>名人传记</div>
                </div>
            </div>
        </div>
        <Top/>
      </div>
    );
  }
};

class Top extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick=this.handleClick.bind(this);
  }
  // 点击返回顶部
  handleClick(e){
     $('body,html').animate({scrollTop:0},400);
  }
  // 页面发生变化的时候触发
  componentDidMount() {
    $(window).scroll(function(){
      var topHeight=$(window).scrollTop();
      console.log(topHeight);
      if (topHeight>500){
        //当滚动条的位置处于距顶部1000像素以下时，就是大于1000象数时，跳转出现
        $(".top").fadeIn(250);
      }else{ //否则就消失
        $(".top").fadeOut(250);
      }

    })
  }

  render() {
    var topHeight=$(window).scrollTop();

      return (
        <div className="top" onClick={this.handleClick}><img src="images/scroll-to-top-icon.png" alt="" /></div>
      );
  }
};


// 返回到页面
ReactDOM.render(
    <WebIndex/>,
    document.getElementById("admin")
);
