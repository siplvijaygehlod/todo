export const addList = term => {
  //console.log(term);
  return {
    type: "ADD_TODO",
    payload: term
  };
};

export const removeList = id => {
  console.log(id);
  return {
    type: "DELETE_TODO",
    payload: id
  };
};
