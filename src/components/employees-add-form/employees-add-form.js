import { Component } from "react";

import uniqid from "uniqid";

import "./employees-add-form.css";

class EmployessAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearState = () => {
    this.setState({
      name: "",
      salary: "",
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    (name.length > 2) & (+salary > 99)
      ? this.props.onAddItem({
          name: this.state.name,
          salary: this.state.salary,
          increase: false,
          like: false,
          id: uniqid(),
        })
      : this.clearState();
    this.clearState();
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployessAddForm;
