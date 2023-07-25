import React from "react";

class AddForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addHandler();
  };
  render() {
    const { placeholder, btnTitle, inputValue, onChangeText } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-full lg:w-1/2 mx-auto mt-10 flex flex-col items-center gap-10"
      >
        <input
          value={inputValue}
          onChange={(e) => onChangeText(e.target.value)}
          className="w-full bg-slate-300 p-5 rounded-lg shadow-lg"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="bg-amber-500 items-center gap-10 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-amber-400 "
        >
          {btnTitle}
        </button>
      </form>
    );
  }
}

export default AddForm;
