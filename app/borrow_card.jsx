var React = require('react');
var ReactDOM = require('react-dom');

var AdminLeft = require('nav');

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
      // 初始化一个空对象
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="admin_right col-xs-12 col-sm-8 col-md-10">
        <AdminRightTop/>
        
        <div className="creat_card">
          <p className="borrow_card_in"><i className="fa fa-credit-card fa-fw"></i>&nbsp; 新建借书卡</p>
          <p className="borrow_card_name">
            日期：<span className="borrow_card_input_span">
            <input className="borrow_card_input_span_input" type="text" id="creat_date" />
            </span><i className="fa fa-asterisk fa-fw"></i>
            <span className="borrow_card_input_span_input_color">请点击选择办卡日期</span>
          </p>
          <p className="borrow_card_name">
            到期：<span className="borrow_card_input_span">
            <input className="borrow_card_input_span_input" type="text" id="creat_date_end"  />
            </span><i className="fa fa-asterisk fa-fw"></i>
            <span className="borrow_card_input_span_input_color">请点击选择到期日期</span>
          </p>
          <p className="borrow_card_name">
            姓名：<span className="borrow_card_input_span">
            <input className="borrow_card_input_span_input" type="text" />
            </span><i className="fa fa-asterisk fa-fw"></i>
            <span className="borrow_card_input_span_input_color">请手动输入</span>
          </p>
          <p className="borrow_card_name">
            卡号：<span className="borrow_card_input_span">
            <input className="borrow_card_input_span_input" type="text" readOnly="readOnly" />
            </span><i className="fa fa-asterisk fa-fw"></i>
            <span className="borrow_card_input_span_input_color">自动生成无需手填</span>
          </p>
          <p className="borrow_card_name">
            学号：<span className="borrow_card_input_span">
            <input className="borrow_card_input_span_input" type="text" />
            </span><i className="fa fa-asterisk fa-fw"></i>
            <span className="borrow_card_input_span_input_color">请手动输入</span>
          </p>

          <div className="button_creat_card">
            <p  className="button_style_creat_card text_align_center"><i className="fa fa-credit-card-alt fa-fw admin_creat_button "></i>&nbsp; 新 建</p>
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


// 返回到页面
ReactDOM.render(
    <AdminIndex/>,
    document.getElementById("admin")
);
