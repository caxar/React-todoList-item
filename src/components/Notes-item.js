import React from "react";

class NotesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false
    };
  }

  onToggleDone = () => {
    this.setState((state) => {
      return {
        done: !state.done
      };
    });
  };

  onToggleImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      };
    });
  };

  render() {
    const { items } = this.props;
    const { done, important } = this.state;

    let classNames = "Notes-item";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div>
        <span className="newImportant" onClick={this.onToggleImportant}>
          !
        </span>
        <p className={classNames} onClick={this.onToggleDone}>
          {items.title}
        </p>
      </div>
    );
  }
}

export default NotesItem;
