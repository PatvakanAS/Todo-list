import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    todo_footer: {
        marginTop: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }

}));

function TodoFooter({todos, onClearCompleted}) {
    const classes = useStyles();
    const completedSize = todos.filter((todo) => todo.isCompleted).length;

    const enabled = completedSize > 0;

    return (
        <div className={classes.todo_footer}>
            <span>{completedSize}/{todos.length} Completed</span>
            <Button disabled={!enabled}  color="secondary" href="#outlined-buttons" onClick={onClearCompleted}>Clear Completed</Button>
        </div>
    );
}

export default TodoFooter;