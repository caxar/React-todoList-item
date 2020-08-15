import React from "react";

class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onChangeInput = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="Add-input">
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.onChangeInput} value={input} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddInput;
