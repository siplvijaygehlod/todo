export const addList = term => {
  //console.log(term);
  return {
    type: "ADD_TODO",
    payload: term
  };
};

export const removeList = id => {
  //console.log(id,"action");
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const editList = id => {
  //console.log(id,"action");
  return {
    type: "EDIT_TODO",
    payload: id
  };
};
