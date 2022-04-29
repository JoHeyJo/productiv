import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";
import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todoList, setTodoList] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const todoWithId = { ...newTodo, id: uuid() };
    setTodoList((list) => [...list, todoWithId]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const id = updatedTodo.id;
    setTodoList((list) =>
      list.map((todo) =>
        todo.id === id ? (todo = updatedTodo) : (todo = todo)
      )
    );
  }

  /** delete a todo by id */
  function remove(id) {
    let newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todoList.length > 0 ? (
            <EditableTodoList
              todoList={todoList}
              update={update}
              remove={remove}
            />
          ) : (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          {todoList.length > 0 && (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todoList={todoList} />
            </section>
          )}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm update={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
