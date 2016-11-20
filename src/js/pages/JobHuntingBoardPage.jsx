import React from "react"
import Main from "../components/containers/Main"
import KanbanBoard from "../components/kanban/KanbanBoard"
import JobBoardStore from "../stores/JobBoardStore"

export default class JobHuntingBoardPage extends React.Component{
    constructor(){
        super();
        this.state = {
            stages: JobBoardStore.getStages(),
        }
    }
    render(){
        const { stages } = this.state;
        return(
            <Main>
                <KanbanBoard stages={stages} boardType="Job"/>
            </Main>
        )
    }
}