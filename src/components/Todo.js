import React from 'react';

export default (props) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
        <div
            style={{
                textDecoration: props.todo.complete ? 'line-through' : '',
                color: props.todo.complete ? 'red' : 'black'
            }}
            key={props.todo.key}
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <button onClick={props.onDelete}>x</button>
    </div>
);
