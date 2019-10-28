import React, { Component } from "react";

class Function extends Component {
  constructor(props) {
    super(props);
    //let firstData;
    let currentData = JSON.parse(localStorage.getItem("permanentData")) || [];

    /* if (addData.length > 0) {
      firstData = addData;
    } else {
      firstData = ["initialData"];
    } */
    this.state = {
      container: currentData, //change [] with firstData,
      givenWord: ""
    };
  }

  handleInput = e => {
    this.setState({
      givenWord: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.givenWord !== "") {
      let myContainer = this.state.container;
      myContainer.push(this.state.givenWord);
      this.setState(
        {
          container: myContainer,
          givenWord: ""
        },
        () => {
          let saveData = JSON.stringify(this.state.container);
          localStorage.setItem("permanentData", saveData);
        }
      );
    }
  };
  handleDelete = d => {
    let deleteIt = this.state.container;
    deleteIt.splice(d, 1);
    this.setState(
      {
        container: deleteIt
      },
      () => {
        localStorage.setItem(
          "permanentData",
          JSON.stringify(this.state.container)
        );
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="text"
                  type="text"
                  /* className="validate" */
                  onChange={this.handleInput}
                  value={this.state.givenWord}
                />
                <label htmlFor="text">Your todos</label>
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
                <div>
                  {this.state.container.map((item, d) => {
                    return (
                      <div className="flex" key={d}>
                        <p className="card">{item}</p>
                        <button onClick={() => this.handleDelete(d)}>X</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Function;
