import React from "react";
import { addList,editList } from "../actions";
import { connect } from "react-redux";

class CreateList extends React.Component {
  
  state = { term: "", inputHolder: "Add To-do Data",updateHolder: "Update To-do Data" };
  
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  
  onSearchSubmit = event => {
    event.preventDefault();

    /* send this value to reducer using action creator */
    if (this.state.term !== "") {
      this.props.addList(this.state.term);
      this.setState({ term: "" });
    } else {
      alert("enter To Do item");
    }
  };

  onUpdateSubmit = event => {
    event.preventDefault();
    /* send this updated value to reducer using action creator */
      
    this.props.editList(this.state.term,this.props.triggerChildUpdate.editKey);
    this.setState({ term: "" });
    
    /* updateApp callback function for reseting the values of
      state after updation task is completed. */
    
    this.props.updateApp();
  };

 listForm() {
   if(this.props.triggerChildUpdate.editTable && this.props.mydata.length !==0){
     return (
       <div className=" search-bar ui segment">
        <form onSubmit={this.onUpdateSubmit} className="ui form">
          <div className="field">
          <label>Update To Do Item</label>
          <input
            id="textData"
            type="text"
            value={this.state.term}
            placeholder={this.state.updateHolder}
            onChange={this.onInputChange}
          />
          </div>
        </form>
       </div>
     );
    }else{
      return (
        <div className=" search-bar ui segment">
          <form onSubmit={this.onSearchSubmit} className="ui form">
            <div className="field">
              <label>Add To Do Item</label>
              <input 
              type="text"
              value={this.state.term}
              placeholder={this.state.inputHolder}
              onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      );
    }
}
  render() {
    return <div className="ui relaxed divided list">{this.listForm()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    mydata: state.mydata
  };
};

export default connect(
  mapStateToProps,
  { addList,editList }
)(CreateList);
