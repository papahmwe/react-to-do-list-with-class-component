import React from "react";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import ListItem from "./Components/ListItems";

class App extends React.Component {
  state = {
    todos: null,
    inputValue: "",
  };

  addHandler = () => {
    if (this.state.todos) {
      const id = this.state.todos.length + 1;
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id,
            item: this.state.inputValue,
            isEdit: false,
            isCompolete: false,
          },
        ],
        inputValue: "",
      });
    } else {
      this.setState({
        todos: [
          {
            id: 1,
            item: this.state.inputValue,
            isEdit: false,
            isCompolete: false,
          },
        ],
        inputValue: "",
      });
    }
  };

  deleteHandler = (id) => {
    const result = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: result });
  };

  onChangeText = (value) => {
    this.setState({ inputValue: value });
  };

  updateHandler = (currentIndex, value) => {
    const todo = [...this.state.todos];
    todo[currentIndex].item = value;
    todo[currentIndex].isEdit = false;
    this.setState({ todos: todo });
  };

  editHandler = (id) => {
    const todo = [...this.state.todos];
    todo[id].isEdit = true;
    this.setState({ todos: todo });
  };

  completeHandler = (id) => {
    const todo = [...this.state.todos];
    todo[id].isComplete = true;
    this.setState({ todos: todo });
  };

  render() {
    return (
      <div className="container mx-auto mt-8">
        <Header title="To do list" />
        <AddForm
          placeholder="Enter New Task.."
          btnTitle="Add Task"
          addHandler={this.addHandler}
          inputValue={this.state.inputValue}
          onChangeText={this.onChangeText}
        />
        <ListItem
          todos={this.state.todos}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
          updateHandler={this.updateHandler}
          completeHandler={this.completeHandler}
        />
      </div>
    );
  }
}

export default App;
