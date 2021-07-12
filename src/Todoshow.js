import React, { useState } from "react";
import Todoadd from "./Todoadd";
import { Table } from "react-bootstrap";
import "./Todo.css";

function Todoshow() {
  const [task, setTask] = useState([]);
  function addTask(listData) {
    setTask([...task, {
        title : listData,
        status : "active"
    }]);
  }

  function deleteTask(id) {
    setTask(function (task) {
      return task.filter(function (taskvalue, taskindex) {
        return taskindex !== id;
      });
    });
  }

  function completeTask(id){
    setTask(function (task) {
        return task.filter(function (taskvalue, taskindex) {
            if(taskindex === id){
                return taskvalue.status = "Completed";
            }else{
                return taskvalue;
            }
        });
      });
  }

  return (
    <div className="container-fluid">
      <h1>Todo List</h1>
      <Todoadd addInList={addTask} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.length
            ? task.map((task, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td className={task.status === 'active' ? "" : "task-completed"}>{task.title}</td>
                    <td>
                        <button onClick={() => completeTask(id)} className="btn btn-success mr-2">Completed 👍</button>
                        <button onClick={() => deleteTask(id)} className="btn btn-danger">Delete 🗑️</button>
                    </td>
                  </tr>
                );
              })
            : "No Task added"}
        </tbody>
      </Table>
    </div>
  );
}

export default Todoshow;
