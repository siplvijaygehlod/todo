export default (todolist = [], action) => {
  switch (action.type) {
    //push term in array todolist
    case "ADD_TODO":
      return [...todolist, action.payload];
    default:
      return todolist;
  }
};
