import React from "react";
import { connect } from "react-redux";

// connect されることで、
// props に number, plus, minus が入ってくる
const App = ({ number, plus, minus }) => (
  <div>
    <h2>App {number}</h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      + 10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      - 10
    </button>
  </div>
);

// number という名前で state をコンポーネントに渡す
const mapStateToProps = state => {
  return {
    number: state
  };
};

// plus と minus という名前で
// action を dispatch するメソッドをコンポーネントに渡す
const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch({ type: "PLUS", payload: { num: num } });
    },
    minus: num => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }
  };
};

// connect で App コンポーネントに、
// 「state」 と 「action を dispatchするメソッド」を渡す
export default connect(mapStateToProps, mapDispatchToProps)(App);
