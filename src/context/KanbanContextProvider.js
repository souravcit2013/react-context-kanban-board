import React, { useReducer } from "react";
import KanbanContext from "./KanbanContext";
import { CREATE_TASK, MOVE_TASK } from "../constant/kanBanConst";

const initialState = {
    loading: false,
    data: [],
    error: false
}

const kanbanReducer = (state, { type, data }) => {
    switch (type) {
        case CREATE_TASK:
            return { ...state, data }
        case MOVE_TASK:
            return { ...state }
        default:
            return { ...state }
    }
}

const KanbanContextProvider = ({ children }) => {
    const [tasksData, dispatch] = useReducer(kanbanReducer, initialState)
    const createData = ({ taskName }) => {
        dispatch({ type: CREATE_TASK, data: [...tasksData.data, taskName] })
    }
    console.log({ tasksData })
    return <KanbanContext.Provider value={{ createData, tasksData }}>
        {children}
    </KanbanContext.Provider>
}

export default KanbanContextProvider