import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { gql, useQuery } from "@apollo/client";

const GET_GROCERIES = gql`
  query {
    findAllGroceries {
      id
      title
      quantity
      bought
      category
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function TaskApp() {
  const { loading, error, data } = useQuery(GET_GROCERIES);
  console.log(data?.groceries);
  const [tasks, dispatch] = useReducer(tasksReducer, data?.groceries ?? []);
  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      title: text,
    });
  }

  function handleChangeTask(task: any) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: any) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Liste d'épicerie</h1>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <AddTask onAddTask={handleAddTask} />
    </>
  );
}

function tasksReducer(tasks: any, action: any) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: { id: any }) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: { id: any }) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let nextId = 0;
