const TodoList = ({
  text,
  id,
  isCompleted,
  deleteTask,
  toggle,
  changeTask,
}) => {
  return (
    <div className="flex items-center mb-4">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 gap-2 items-center cursor-pointer"
      >
        {isCompleted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-7 fill-[#3490dc] hover:fill-[#FFBC4C]"
          >
            <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-7 fill-[#3490dc] hover:fill-[#FFBC4C]"
          >
            <path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" />
          </svg>
        )}

        <p
          className={`text-[18px] ml-4 text-[#3490dc] font-bold font-(family-name:--font-list) hover:underline hover:underline-offset-8  ${
            isCompleted ? "line-through decoration-[#CB0404] decoration-2" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <svg
        onClick={() => changeTask(id)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 cursor-pointer pr-2 fill-[#748DAE] hover:fill-[#FFBC4C]"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
      </svg>
      <svg
        onClick={() => deleteTask(id)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className="w-5 cursor-pointer fill-[#748DAE] hover:fill-[#CB0404]"
      >
        <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
      </svg>
    </div>
  );
};

export default TodoList;
