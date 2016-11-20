import React from "react"
import JobKanbanCard from "./JobKanbanCard"
import CVKanbanCard from "./CVKanbanCard"

export default class KanbanColumn extends React.Component{
    render(){
        const { processStart } = this.props;
        const { cards } = this.props;
        const { boardType } = this.props;
        const { stageID } = this.props;
        const CardList = cards.map((card, i) => {
            if(boardType == "CV"){
                return <CVKanbanCard
                        title={card.title}
                        institution={card.institution}
                        startDate={card.startDate}
                        endDate={card.endDate}
                        stories={card.stories}
                        activities={card.activities}
                    />

            }else{
                return <JobKanbanCard
                position={card.position}
                company={card.company}
                actionDate={card.actionDate}
                tasksCompleted={card.tasksCompleted}
                tasksTotal={card.tasksTotal}
                attachments={card.attachments}
                key={i}
                jobID={card.id}
                stageID={stageID}
            />
            }
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