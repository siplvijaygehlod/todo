export default (todolist = [] , action) => {
  switch (action.type) {
    // push term in array todolist
    case 'ADD_TODO':
      return [...todolist, action.payload]
    case 'DELETE_TODO':
      //console.log(todolist, 'DELETE_TODO')
      todolist.splice(action.payload, 1)
      return [...todolist]
    default:
      return todolist
  }
}