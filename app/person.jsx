var React = require('react');
var ReactDOM = require('react-dom');

class WebIndex extends React.Component {
  componentDidMount(){
  }
  render() {
    var style = {display:"none"};
    return (
      <div className="web_index">
        <div className="borrow_person_car">
          <p className="borrow_name">
            <span>周一</span>
            <span>LOGO</span>
          </p>
          <p className="card_num">123 456 789 987 654 321</p>
          <p className="borrow_data">
            <span>2017/7/23</span>
            <span>2017/9/23</span>
          </p>
          <p className="card_name">佑佑教育培训机构</p>
        </div>

        <p className="borrow_card"><span>借书证</span></p>
        <div className="borrow_infor">
          <p><i className="fa fa-book fa-fw fa-book_color"></i><span className="borrow_left_title">&nbsp;  <i className="dian1">.</i> 借阅中</span><span className="borrow_right_infor">1</span></p>
          <p><i className="fa fa-times-rectangle fa-fw fa-times-rectangle_color"></i><span className="borrow_left_title">&nbsp;  <i className="dian2">.</i> 已过期</span><span className="borrow_right_infor">1</span></p>
          <p><i className="fa fa-credit-card fa-fw fa-credit-card_color"></i><span className="borrow_left_title">&nbsp;  <i className="dian3">.</i> 卡号</span><span className="borrow_right_infor">123456789987654321</span></p>
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
