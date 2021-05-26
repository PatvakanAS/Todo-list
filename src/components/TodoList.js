import TodoItem from "./TodoItem";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    todo_list_block: {
        width: "100%",
    }

}));

function TodoList({todos, onDelete, onChange}) {
    const classes = useStyles();
    return (
        <div className={classes.todo_list_block}>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDelete={onDelete}
                        onChange={onChange}
                        
                        />
                    );
                })
            }
        </div>
    );
}

export default TodoList;