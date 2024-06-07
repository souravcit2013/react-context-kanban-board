import React from "react";
import KanbanBoardContainer from "./components/KanbanBoardContainer";
import KanbanContextProvider from "./context/KanbanContextProvider";

const App = () => {
    return <>
        <KanbanContextProvider>
            <h1>Hello Webpack react-app...</h1>
            <KanbanBoardContainer />
        </KanbanContextProvider>
    </>
}

export default App