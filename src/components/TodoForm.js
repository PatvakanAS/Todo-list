import React from 'react';
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    from_add: {
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    input_filled: {
       color: "#fff!important",
    }
    

}));


function TodoForm({ onAdd }) {
    const [text, setText] = useState("");
    const classes = useStyles();
    return (
        <form className={classes.from_add} onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <TextField
                className={classes.input_filled}
                id="standard-full-width"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                color="primary"
               
                value={text} onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <Button variant="text" color="inherit" href="#outlined-buttons" onClick={(e) => {
                onAdd(text);
                setText("");
            }}>Add</Button >
        </form>
    );
}

export default TodoForm;