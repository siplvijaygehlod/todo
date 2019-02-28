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
      <CreateList triggerChildUpdate={this.state} updateApp={this.resetToCreate}/>
      <ShowList triggerParentUpdate={this.getUpdateKey}/>
    </div>
  )};
};

export default App;
