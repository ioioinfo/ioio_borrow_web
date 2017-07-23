var React = require('react');
var ReactDOM = require('react-dom');


var Table = require('Table');
var PageTab = require('PageTab');

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
      this.setPage=this.setPage.bind(this);
      this.handleSort=this.handleSort.bind(this);
      this.loadData=this.loadData.bind(this);
      // 初始化一个空对象
      this.state = {tabthitems:[],tabtritems:[],allNum:0,everyNum:20,thisPage:1,sort:{name:"",dir:""}};
  }
  loadData(params1) {
      var params = {thisPage:this.state.thisPage,sort:this.state.sort};
      $.extend(params,params1);

      getTableData(params,function(data) {
          $.extend(data,params1);
          this.setState(data);
      }.bind(this));
  }
  componentDidMount() {

      var tableHeight = $(window).height()-181;
      $("#table").css("height",tableHeight+"px");
      this.loadData({});
  }
  setPage(thisPage) {
      this.loadData({thisPage:thisPage});
  }
  handleSort(sort){
      this.loadData({sort:sort});
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
        <Table tabthitems={this.state.tabthitems} tabtritems={this.state.tabtritems} sort={this.state.sort} onSort={this.handleSort}  checkTd={checkTd} />
        <PageTab setPage={this.setPage} allNum={this.state.allNum} everyNum={this.state.everyNum} thisPage={this.state.thisPage} />
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


//判断特殊列
var checkTd = function(defaultTd) {
    var id = this.props.item.id;
    var href = "product_edit?product_id="+id;
    var href1 = "product_view?product_id="+id;


    var product_down_click = function(e){
        var  product_id = this.props.item.id;
        $.ajax({
            url: "/product_down",
            dataType: 'json',
            type: 'POST',
            data: {"product_id":product_id},
            success: function(data) {
                if (data.success) {
                    this.props.refresh(product_id,this.props.item.status_name);
                }else {
                }

            }.bind(this),
            error: function(xhr, status, err) {
            }.bind(this)
        });
    }.bind(this);


    var product_up_click = function(e){
        var  product_id = this.props.item.id;
        $.ajax({
            url: "/product_up",
            dataType: 'json',
            type: 'POST',
            data: {"product_id":product_id},
            success: function(data) {
                if (data.success) {
                    this.props.refresh(product_id,this.props.item.status_name);
                }else {
                }

            }.bind(this),
            error: function(xhr, status, err) {
            }.bind(this)
        });
    }.bind(this);

        if(this.props.thitem.type=="operation"){
          return (
              <td>
              <p className="" onClick={product_down_click}><a  className="btn btn-info btn-xs operate_announce">借阅</a></p>
              </td>
          );
        }else if (this.props.thitem.type=="check") {
          return (
            <td>
              <input type="checkbox" />
            </td>
          );
        }else if (this.props.thitem.type=="images") {
          return (
            <td>
              <img className="book_img" src={"images/"+this.props.item[this.props.thitem.name]} alt="" />
            </td>
          );
        }else {
        return defaultTd;
    }
};



// 返回到页面
ReactDOM.render(
    <AdminIndex/>,
    document.getElementById("admin")
);
