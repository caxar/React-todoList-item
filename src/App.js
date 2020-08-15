import React from "react";
import "./styles.css";
import Notes from './components/Notes';
import AddInput from './components/Add-item';

class App extends React.Component {

  maxId = 100;

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {title: 'Купить молоко,масло,сыр', done: false, id: 0},
        {title: 'Поехать на дачу, выкопать картошку', done: false, id: 1},
        {title: 'Вынести мусор', done: false, id: 2}
      ]
    }
  }

  deleteItem = id => {
    this.setState(({notes}) => {
      const idx = notes.map(item => item.id).indexOf(id);

      const newArray = [...notes.slice(0, idx), 
      ...notes.slice(idx + 1)];
      
      return {
        notes: newArray
      }
    })
  }

  addItem = text => {
    this.setState(({notes}) => {
      const newItem = ({
        title: text,
        done: false,
        id: this.maxId++
      });
      const newArr = [newItem, ...notes];
      return {
        notes: newArr
      }
    })
  }

  render() {
    const {notes} = this.state;

    return (
      <div className="App">
        <h1>Active Tasks: {notes.length}</h1>
        < AddInput addItem={this.addItem} />
        <Notes notes={notes} 
        deleteItem={this.deleteItem} />
      </div>
    )
  }
}



export default App;