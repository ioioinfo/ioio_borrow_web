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
        <div className="row book_transfers_campus">
          <p className="book_transfers_zhu text_align_center col-md-2">东南校区</p>
          <p className="book_transfers_icon text_align_center col-md-1"><i className="fa fa-angle-double-right fa-fw book_transfers_icon_style"></i><i className="fa fa-angle-double-right fa-fw book_transfers_icon_style"></i></p>
          <p className="book_transfers_fu text_align_center col-md-2">西北校区</p>
          <p className="book_transfers_number text_align_center col-md-2 col-md-offset-2">共100本</p>
          <p className="book_transfers_button text_align_center col-md-2 col-md-offset-1"><span className="book_transfers_button_span">确认调拨</span></p>
        </div>
        <div>
          <Table tabthitems={this.state.tabthitems} tabtritems={this.state.tabtritems} sort={this.state.sort} onSort={this.handleSort}  checkTd={checkTd} />
          <PageTab setPage={this.setPage} allNum={this.state.allNum} everyNum={this.state.everyNum} thisPage={this.state.thisPage} />
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
