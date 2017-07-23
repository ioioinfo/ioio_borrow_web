var React = require('react');
var ReactDOM = require('react-dom');

class AdminIndex extends React.Component {
  render() {
    return (
      <div className="admin_index">
        <AdminLeft/>
        <AdminRight/>
      </div>
    );
  }
};

// 左边 导航
class AdminLeft extends React.Component {
  render() {
    return (
      <div className="admin_left col-xs-6 col-sm-4 col-md-2">
        <div className="admin_logo">
          <span className="admin_index_logo">IOIO后台</span><br/>
          <span className="admin_index_name">佑佑信息科技</span>
        </div>
        <AdminLeftNav/>
      </div>
    );
  }
};


// 左边 导航
class AdminLeftNav extends React.Component {
  constructor(props) {
      super(props);
      this.state={navitem:[]};
      this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    var index= $(e.target).data("role");
    var second_nav = "nav_second"+index;
    $("#"+second_nav).slideToggle(400);
  }
  componentDidMount() {
    var navitem = [{icon:"fa fa-home fa-fw",navname:"首页",a:"index", snav:[{icon:"fa fa-home fa-fw",navname:"首页"},{icon:"fa fa-home fa-fw",navname:"首页"},{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-minus-square-o fa-fw",navname:"借阅记录",a:"borrow_books",snav:[{icon:"fa fa-home fa-fw",navname:"首页"},{icon:"fa fa-home fa-fw",navname:"首页"},{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-tags fa-fw",navname:"还书列表",a:"return_list",snav:[{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-television fa-fw",navname:"还书详情",a:"borrow_view",snav:[{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-users fa-fw",navname:"功能菜单一",snav:[{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-window-close-o fa-fw",navname:"功能菜单一",snav:[{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-automobile fa-fw",navname:"功能菜单一",snav:[{icon:"fa fa-home fa-fw",navname:"首页"}]},
              {icon:"fa fa-train fa-fw",navname:"功能菜单一",snav:[]}]
              this.setState({navitem:navitem});
  }
  render() {
    return (
      <div className="admin_index_nav">
        {this.state.navitem.map((item,index) => (
            <div className="nav_public  font_color" key={index} >
                <a href={item.a}>
                  <div className="nav_public_first" data-role={index} onClick={this.handleClick}>
                    <i className={item.icon}></i>&nbsp; {item.navname}
                  </div>
                </a>
                <SecondNav item={item} index={index} />

            </div>))
        }

      </div>
    );
  }
};


// 二级 导航
class SecondNav extends React.Component {
  render() {
    var secondNav = (  <p className="nav_second" id={"nav_second"+this.props.index}>
        {this.props.item.snav.map((item,index) => (
          <a key={index} className="nav_public_in nav_public_second font_color">
            <i className={item.icon}></i>&nbsp; {item.navname}
          </a>))
        }
      </p>)
      if(this.props.item.snav.length==0){
        secondNav = "";
      }
    return (
      <div>
        {secondNav}
      </div>
    );
  }
};
// 右边
class AdminRight extends React.Component {
  constructor(props) {
      super(props);
      // 初始化一个空对象
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="admin_right col-xs-12 col-sm-8 col-md-10">
        <AdminRightTop/>
        <div className="admin_creat overflow_hidden">
            <div className="">
              <div className="col-xs-12 col-sm-8 col-md-8">
                <div className="row">
                  <div className="admin_creat_butto_wrap col-xs-12 col-sm-3 col-md-2 cursor_pointer">
                    <p  className="button_style_delect text_align_center"><i className="fa fa-trash fa-fw admin_creat_button "></i>&nbsp; 删 除</p>
                  </div>
                  <div className="admin_creat_butto_wrap col-xs-12 col-sm-3 col-md-2 cursor_pointer">
                    <p  className="button_style_new text_align_center"><i className="fa fa-plus fa-fw admin_creat_button "></i>&nbsp; 新 建</p>
                  </div>
                </div>

              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div  className="row">
                  <span className="admin_creat_search  col-xs-8 col-sm-8 col-md-8">
                    <input className="admin_creat_input" type="search" placeholder="请输入关键字" />
                  </span>
                  <button className="admin_creat_button_search col-xs-4 col-sm-4 col-md-4 button_style_search cursor_pointer">搜 索</button>
                </div>
              </div>

            </div>
        </div>
        <p className="borrow_card_title">新建借书卡</p>
        <div className="creat_card">

        </div>
      </div>
    );
  }
};



// 右边 头部
class AdminRightTop extends React.Component {
  render() {
    return (
      <div className="admin_index_top ">
        <a className="admin_index_header"><i className="fa fa-user-o fa-fw"></i>&nbsp; 请登录</a>
        <a className="admin_index_exit"><i className="fa fa-power-off fa-fw"></i>&nbsp; 退出</a>
      </div>
    );
  }
};


// 返回到页面
ReactDOM.render(
    <AdminIndex/>,
    document.getElementById("admin")
);
