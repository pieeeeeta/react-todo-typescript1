import React from 'react';
import type { Todo } from './TodoApp';
import '../styles/todoItem.scss';
import { Card, CardContent, IconButton, Box, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  todo: Todo;
  onDelete: Function;
  onIsDoneClick: Function;
}
const TodoItem: React.FC<Props> = (props) => {
const { todo, onDelete, onIsDoneClick } = props;
  return (
    <Box mt={2}>
      <Card className="todo-item__card">
        <CardContent>
          <Typography className={todo.isDone ? "todo-item__todo-title--line-through" : "todo-item__todo-title" }>{todo.title}</Typography>
          <IconButton
            onClick={() => onDelete(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
          <FormControlLabel 
            control={
              <Checkbox
                checked={todo.isDone}
                onChange={() => onIsDoneClick(todo.id)}
                name="checkedB"
                color="secondary"
              />
            }
            label="終了"
          />
          {/* <input type="checkbox" checked={todo.isDone} onChange={() => onIsDoneClick(todo.id)}/>
          { todo.isDone ? <span>終了</span> : "" } */}
        </CardContent>
      </Card>
    </Box>
  )
}

export default TodoItem;