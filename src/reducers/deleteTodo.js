export default (todolist=[], action) => {
  console.log(todolist)
  console.log(action.payload, 'payload')
  switch (action.type) {

    // pull the id's row from array todolist
    case 'DELETE_TODO': 
      todolist.slice(action.payload, 1)
      //console.log(todolist)
      return todolist;
      
    default:
      return todolist
  }
}
