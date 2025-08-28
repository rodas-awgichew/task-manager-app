import React, { useReducer } from 'react';

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASK':
            return action.payload;
        case 'CLEAR_TASK':
            return '';
        default:
            return state; // Return the current state as the default case
    }
};

const TaskInput = () => {
    const [task, dispatch] = useReducer(taskReducer, '');

    return (
        <div>
            <input
                type="text"
                onChange={(e) => dispatch({ type: 'SET_TASK', payload: e.target.value })}
                value={task} // Correctly bind the task variable
            />
            <button onClick={(e) => dispatch({ type: 'SET_TASK'})}>Add Task</button>
            <button onClick={() => dispatch({ type: 'CLEAR_TASK' })}>Clear Task</button>
        </div>
    );
};

export default TaskInput;