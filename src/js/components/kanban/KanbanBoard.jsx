import React from "react"
import KanbanColumn from "./KanbanBoard/KanbanColumn"

export default class KanbanBoard extends React.Component{
    render(){
        const { stages } = this.props;
        const { boardType } = this.props;
        const StageColumns = stages.map((stage, i) => {
            const name = stage.title;
            const cards = stage.items;
            const processStart = stage.processStart;
            return <KanbanColumn
                name={name}
                key={i}
                cards={cards}
                processStart={processStart}
                boardType={boardType}
            />;
        });
        return (
            <div className="ui horizontal kanban segments">
                {StageColumns}
            </div>
        )
    }
}