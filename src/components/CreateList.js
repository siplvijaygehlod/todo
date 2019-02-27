import React from "react";
import { addList } from "../actions";
import { connect } from "react-redux";

class CreateList extends React.Component {
  state = { term: "", inputHolder: "Add To-do Data" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    //send this value to reducer using action creator
    if (this.state.term !== "") {
      this.props.addList(this.state.term);
      this.setState({ term: "" });
    } else {
      alert("enter To Do item");
    }
  };

  listForm() {
    return (
      <div className=" search-bar ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Add To Do Item</label>
            <input 
              id="textData"
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
  render() {
    return <div className="ui relaxed divided list">{this.listForm()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    mydata: state.mydata
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(CreateList);
