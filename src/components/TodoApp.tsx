import React, { useState } from 'react';
import '../styles/todoApp.scss';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { Container, Tabs, Tab } from '@material-ui/core';

export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
}

const initialTodos = [
  {
    id: 1,
    title: "仕事する",
    isDone: true
  },
  {
    id: 2,
    title: "遊ぶ",
    isDone: false
  },
];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filterdTodos, setFilterdTodos] = useState<Todo[]>(todos);
  const [input, setInput] = useState<string>("hello");
  const [currentTab, setCurrentTab] = useState("all");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    const newTodo = {
      id: todos.length + 1,
      title: input,
      isDone: false,
    }
    setTodos((todos) => ([...todos, newTodo]));
    setInput("");
    setCurrentTab("all");
    setFilterdTodos([...todos, newTodo]);
  }

  const handleDelete = (id: number) => {
    setTodos((todos) => (todos.filter(todo => todo.id !== id)));
  }

  const handleIsDoneClick = (id: number) => {
    const newTodos = todos.reduce((acc: Todo[], current) => {
      if (current.id === id) {
        current.isDone = !current.isDone;
      }
      acc.push(current);
      return acc;
    }, [])
    setTodos(newTodos);
  }

  const handleTabsChange = (e :React.ChangeEvent<{}> , newValue: string) => {
    switch(newValue) {
      case "notDone":
        const notDoneTodos = todos.filter((todo) => {
          return todo.isDone === false;
        })
        setFilterdTodos(notDoneTodos)
        break;
      case "done":
        const doneTodos = todos.filter((todo) => {
          return todo.isDone === true;
        });
        setFilterdTodos(doneTodos);
        break;
      default:
        setFilterdTodos(todos);
    }
    setCurrentTab(newValue);
  }

  return (
    <Container>
      <TodoInput 
        input={input}
        onChange={handleChange}
        onClick={handleClick}
      />
      <Tabs 
        indicatorColor="primary"
        value={currentTab}
        onChange={handleTabsChange}
      >
        <Tab 
          value="all"
          label="すべて"
        />
        <Tab
          value="notDone"
          label="未終了"
        />
        <Tab
          value="done"
          label="終了済み"
        />
      </Tabs>
      {filterdTodos.map((todo) => (
        <TodoItem 
          key = {todo.id}
          todo = {todo}
          onDelete = {handleDelete}
          onIsDoneClick = {handleIsDoneClick}
        />
      ))}
    </Container>
  )
}

export default TodoApp;