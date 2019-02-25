import React from "react";
import { connect } from "react-redux";
import "./showList.css";
import {removeList} from "../actions";

class ShowList extends React.Component {
  /* tableHead(){
    return (<thead>
      <tr><td>a</td>
      <td>a</td>
      <td>a</td>
      <td>a</td></tr>
    </thead>);
  } */

  removetask = dataValue => {
    return (
      //console.log(dataValue)
      this.props.removeList(dataValue)
    );
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
                <td className="data">{data}</td>
                <td>
                  <i
                    onClick={(id) => this.removetask(id)}
                    className="fa fa-pencil-square-o"
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
