import React from "react";
import { connect } from "react-redux";
import "./showList.css";
import {removeList} from "../actions";

class ShowList extends React.Component {
  
  state = { editable: false};
  removeTask = dataValue => {
    return (
      //console.log(dataValue,"fun")
      this.props.removeList(dataValue)
    );
  };

  editTask = dataVal => {
    this.props.triggerParentUpdate(dataVal);
  }; 

  listData() {
    //console.log(this.props.mydata, "showList");
    return this.props.mydata.map((data, id) => {
      return (
        <div key={id}>
          <table border="1" className="table">
            <tbody>
              <tr>
                <td>{id + 1}</td>
                <td id={`data-${id}`}>
                {data}
                </td>
                <td onClick={() => this.editTask(id)}>
                  <i                    
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                  />
                </td> 
                <td onClick={() => this.removeTask(id)}>
                  <i                    
                    className="fa fa-trash"
                    aria-hidden="true"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }
  render() {
    return <div>{this.listData()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    mydata: state.mydata
  };
};

export default connect(
  mapStateToProps,
  { removeList }
)(ShowList);
