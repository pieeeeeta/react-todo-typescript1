import React from 'react';
import '../styles/todoInput.scss';
import { Card, CardContent, TextField, Button, Box } from '@material-ui/core';

type Props = {
  input: string;
  onClick: any;
  onChange: any;
}
const TodoInput: React.FC<Props> = (props) => {
  const {input, onChange, onClick} = props;

  return (
    <Box>
      <Card className="todo-input__card">
        <CardContent className="todo-input__card-content">
          <TextField 
            label="TODOを入力"
            value={input} 
            onChange={onChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            追加
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TodoInput;
