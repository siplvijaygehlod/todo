import React from "react";
import CreateList from "./CreateList";
import ShowList from "./ShowList";

class App extends React.Component {
  state = { editTable: false,editKey:''};

 /* function that get the value from child component for editing */
 
  getUpdateKey = val =>{
    /* to set the dom for edit mode */
    if(val !== undefined){
      this.setState({editTable:true,editKey:val});
    }
  }

  /* to reset the input form to insert mode */ 
  resetToCreate = () =>{
    this.setState({editTable:false,editKey:""});
  }

  render(){
    return (
    <div className="ui container">
    {/* 
    triggerChildUpdate  is for sending the props to child
    
    updateApp callback function for reseting the values of
      state after updation task is completed.

    triggerParentUpdate is also callback function for getting 
      value of key.

     */}
      <CreateList triggerChildUpdate={this.state} updateApp={this.resetToCreate}/>
      <ShowList triggerParentUpdate={this.getUpdateKey}/>
    </div>
  )};
};

export default App;
