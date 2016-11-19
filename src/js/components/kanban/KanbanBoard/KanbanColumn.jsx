import React from "react"
import KanbanCard from "./KanbanCard"

export default class KanbanColumn extends React.Component{
    render(){
        const { processStart } = this.props;
        const { cards } = this.props;
        const CardList = cards.map((card, i) => {
            return <KanbanCard
                position={card.position}
                company={card.company}
                actionDate={card.actionDate}
                tasksCompleted={card.tasksCompleted}
                tasksTotal={card.tasksTotal}
                attachments={card.attachments}
                key={i}
            />
        });

        return (
            <div className="ui segment">
                <h2 className="ui header">{this.props.name}</h2>
                {CardList}
                {processStart &&
                    <button className="fluid bottom attached ui primary button">Add Application</button>
                }
            </div>
        )
    }
}