import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    setdesc("");
    settitle("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} class="list">
          <div class="render">
            <h5 class="titleShown">{t.title}</h5>
            <h5 class="descShown">{t.desc}</h5>
          </div>
          <button
            class="btn"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1>Rahul's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button class="btn-1">Add Task</button>
      </form>
      <hr />
      <div class="hr">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
