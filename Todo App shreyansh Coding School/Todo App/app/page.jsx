"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(() => event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(() => event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    setMainTask([
      ...mainTask,
      {
        title,
        desc,
      },
    ]);

    console.log(mainTask);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let alltasks = (
    <h2 className="font-semibold text-xl text-center">
      Currently no task available!
    </h2>
  );

  if (mainTask.length > 0) {
    alltasks = mainTask.map((task, index) => {
      return (
        <li key={index} className="flex items-center justify-between my-3">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h2 className="pr-5 text-2xl font-semibold">
              Title : {task.title}
            </h2>
            <h4 className="pl-5 text-2xl font-medium">Desc : {task.desc}</h4>
          </div>
          <button
            className="bg-red-400 text-white rounded font-bold p-4"
            onClick={() => deleteHandler(index)}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className="bg-black text-white p-5 font-bold text-center text-5xl">
        Harsh Todo's List
      </h1>

      <form
        onSubmit={formSubmitHandler}
        className="flex justify-center items-center p-5"
      >
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Title"
          value={title}
          onChange={titleChangeHandler}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Description"
          value={desc}
          onChange={descChangeHandler}
        />

        <button className="bg-black text-white px-4 py-2 font-bold rounded text-2xl m-5">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{alltasks}</ul>
      </div>
    </div>
  );
};

export default page;
