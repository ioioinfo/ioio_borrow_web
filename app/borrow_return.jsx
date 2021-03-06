var React = require('react');
var ReactDOM = require('react-dom');

var AdminLeft = require('nav');
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
                  <div className="admin_creat_butto_wrap col-xs-12 col-sm-3 col-md-2">
                    <p  className="button_style_delect text_align_center"><i className="fa fa-trash fa-fw admin_creat_button "></i>&nbsp; 删 除</p>
                  </div>
                  <div className="admin_creat_butto_wrap col-xs-12 col-sm-3 col-md-2">
                    <p  className="button_style_new text_align_center"><i className="fa fa-plus fa-fw admin_creat_button "></i>&nbsp; 新 建</p>
                  </div>
                </div>

              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div  className="row">
                  <span className="admin_creat_search  col-xs-8 col-sm-8 col-md-8">
                    <input className="admin_creat_input" type="search" placeholder="请输入关键字" />
                  </span>
                  <button className="admin_creat_button_search col-xs-4 col-sm-4 col-md-4 button_style_search">搜 索</button>


                </div>
              </div>

            </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="creat_card">
              <p className="borrow_card_in"><i className="fa fa-credit-card fa-fw"></i>&nbsp; 学员信息</p>
              <p className="borrow_card_name">
                日期：<span className="borrow_card_input_span">
                <input className="borrow_card_input_span_input" type="text"/>
                </span>
              </p>
              <p className="borrow_card_name">
                到期：<span className="borrow_card_input_span">
                <input className="borrow_card_input_span_input" type="text"  />
                </span>
              </p>
              <p className="borrow_card_name">
                姓名：<span className="borrow_card_input_span">
                <input className="borrow_card_input_span_input" type="text" />
                </span>
              </p>
              <p className="borrow_card_name">
                卡号：<span className="borrow_card_input_span">
                <input className="borrow_card_input_span_input" type="text" readOnly="readOnly" />
                </span>
              </p>
              <p className="borrow_card_name">
                学号：<span className="borrow_card_input_span">
                <input className="borrow_card_input_span_input" type="text" />
                </span>
              </p>

              <div className="button_creat_card overflow_hidden">
                <div className="col-md-5">
                  <p  className="button_style_creat_card text_align_center"><i className="fa fa-credit-card-alt fa-fw admin_creat_button "></i>&nbsp; 还书</p>
                </div>
                <div className="col-md-5 col-md-offset-2">
                  <p  className="button_style_creat_card1 text_align_center"><i className="fa fa-book fa-fw admin_creat_button "></i>&nbsp; 借书</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-8">
            <Table tabthitems={this.state.tabthitems} tabtritems={this.state.tabtritems} sort={this.state.sort} onSort={this.handleSort}  checkTd={checkTd} />
            <PageTab setPage={this.setPage} allNum={this.state.allNum} everyNum={this.state.everyNum} thisPage={this.state.thisPage} />
          </div>

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




//判断特殊列
var checkTd = function(defaultTd) {
    var statu = this.props.item.statu;

        if(this.props.thitem.type=="operation"){
          return (
              <td>
              <a  className="btn btn-primary btn-xs operate_announce" href="#">待 定</a>
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
