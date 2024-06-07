import React from "react";
import BacklogItem from "./BacklogItem";
import InProgressItem from "./InProgressItem";
import ClosedItems from "./ClosedItems";

const KanbanTaskContainer = () => {
    return <>
        <BacklogItem />
        <InProgressItem />
        <ClosedItems />
    </>
}

export default KanbanTaskContainer