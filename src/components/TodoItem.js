import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    todo_item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // borderBottom: "1px solid #F50057",
        marginBottom: "5px",
        borderRadius: "3px",
    },
    todo_item_label: {
        cursor: "pointer",
    }

}));

function TodoItem({ todo, onChange, onDelete }) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.todo_item}>
            <label className={classes.todo_item_label}>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}
            />
            <span>{todo.text}</span>
            </label>
            
            <IconButton color="secondary" aria-label="delete" onClick={() => {
                onDelete(todo);
            }} >
                <DeleteIcon />
            </IconButton>



        </div>
    );
}

export default TodoItem;