export default (todolist = [], action) => {
  console.log(action.payload,"payload");
  switch (action.type) {
    
    //push term in array todolist
    case "DELETE_TODO": {
      return todolist.slice(action.payload, 1);
       
    }

    default:
      return todolist;
  }
};
