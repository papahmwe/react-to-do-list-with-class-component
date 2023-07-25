import React from "react";

class ListItem extends React.Component {
  state = {
    isEdit: false,
  };

  updateHanler = (currentIndex) => {
    this.props.updateHandler(currentIndex, this.state.inputValue);
  };
  render() {
    const { todos, deleteHandler, editHandler, completeHandler } = this.props;

    return (
      <div className="w-full lg:w-1/2 mt-8 mx-auto">
        {todos &&
          todos.map((todo, index) => {
            return (
              <div
                className="w-full bg-slate-300 my-3 p-6 rounded-lg shadow-lg flex items-center"
                key={todo.id}
              >
                <div className="w-1/2 flex">
                  <input
                    type="checkbox"
                    className="mr-3"
                    checked={todos.isComplete && "checked"}
                    onChange={() => completeHandler(index)}
                  />
                  {todo.isEdit ? (
                    <input
                      className="bg-white w-full p-3 rounded-md"
                      value={this.state.inputValue}
                      onChange={(e) => {
                        this.setState({ inputValue: e.target.value });
                      }}
                    />
                  ) : (
                    <h1
                      className={
                        todo.isComplete ? "line-through text-lg" : "text-lg"
                      }
                    >
                      {todo.item}
                    </h1>
                  )}
                </div>
                <div className="w-1/2 flex gap-5 justify-end">
                  {todo.isEdit === false ? (
                    <button
                      className="bg-sky-500 text-white p-3 px-5 rounded-md cursor-pointer hover:bg-sky-400 "
                      onClick={() => {
                        editHandler(index);
                        this.setState({ inputValue: todo.item });
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="bg-sky-500 text-white p-3 px-5 rounded-md cursor-pointer hover:bg-sky-400 "
                      onClick={() => {
                        this.updateHanler(index);
                      }}
                    >
                      Update
                    </button>
                  )}

                  <button
                    onClick={() => deleteHandler(todo.id)}
                    className="bg-red-500 text-white p-3 px-5 rounded-md cursor-pointer "
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListItem;
