import { useReducer, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./Todo-list";
import { todoReducer } from "./todoReducer";

const getInitialTodos = () => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};

export const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, getInitialTodos);
  const inputRef = useRef(); //-- for getting input directly
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    //-- run code when components update
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const inputText = inputRef.current?.value || "";
    if (inputText.trim() === "") {
      return;
    }
    if (editId) {
      dispatch({ type: "changed", id: editId, text: inputText });
      setEditId(null);
    } else {
      dispatch({
        type: "added",
        id: uuidv4(), //-- for getting random id
        text: inputText,
      });
    }
    inputRef.current.value = "";
  };

  const handleDeleteTodo = (id) => {
    return dispatch({
      type: "deleted",
      id: id,
    });
  };

  const handleChangeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      inputRef.current.value = todo.text;
      setEditId(id);
    }
  };

  return (
    <div className="bg-white h-[650px] w-[500px] rounded-lg p-9">
      {/*--------title----------*/}
      <div className="flex flex-1 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-7 fill-[#E55050]"
        >
          <path d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z" />
        </svg>
        <h1 className="text-[55px] font-semibold text-[#E55050] font-(family-name:--font-title) ">
          To-Do List
        </h1>
      </div>
      {/*--------input----------*/}
      <div className="mt-4 flex flex-1 gap-2 justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your task"
          className="border-0 outline-none bg-[#748DAE] text-white rounded-lg w-[300px] h-[35px] p-2"
        ></input>
        <button
          onClick={handleAddTodo}
          className="border-0 cursor-pointer bg-[#FFBC4C] rounded-lg inline-block text-blue-400 h-9 p-2 font-semibold hover:bg-[#748DAE] hover:text-[#FFBC4C]"
        >
          {editId ? "UPDATE" : "ADD +"}
        </button>
      </div>
      {/*--------todo list----------*/}
      <div className="mt-6">
        {todos.map((item) => {
          return (
            <TodoList
              key={item.id}
              text={item.text}
              id={item.id}
              isCompleted={item.isCompleted}
              deleteTask={handleDeleteTodo}
              changeTask={handleChangeTodo}
              toggle={() => dispatch({ type: "toggled", id: item.id })}
            />
          );
        })}
      </div>
    </div>
  );
};
