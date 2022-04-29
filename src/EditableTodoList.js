import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todoList: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todoList, update, remove }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <EditableTodo todo={todo} update={update} remove={remove} />;
      })}
    </div>
  );
}

export default EditableTodoList;
