// 現在の state と受け取った action の内容から
// 新しい state を作成し、
// state を更新するための関数
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;

    case "MINUS":
      return state - action.payload.num;

    default:
      return state;
  }
};

export default reducer;
