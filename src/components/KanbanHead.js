import React, { useContext, useState } from "react";
import KanbanContext from "../context/KanbanContext";

const KanbanHead = () => {
    const [taskName, createTask] = useState('');
    const { createData } = useContext(KanbanContext);
    const handleClick = (e) => {
        e.preventDefault();
        createTask('');
        taskName && createData({ taskName })
    }
    return <>
        <div className="create-task-form">
            <span>Create task </span>
            <input type="text" name="create-task" id="create-task" value={taskName} onChange={(e) => createTask(e.target.value)} />
            <button onClick={handleClick}> Create Task </button>
        </div>
    </>
}

export default KanbanHead