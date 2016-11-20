import React from "react"
import Main from "../components/containers/Main"
import KanbanBoard from "../components/kanban/KanbanBoard"
import CVStore from "../stores/CVStore"

export default class CVBoardPage extends React.Component{
    constructor(props){
        super();
        const { CVID } = props.params;
        this.state = {
            cv: CVStore.getCV(CVID),
        }
    }
    render(){
        const { title } = this.state.cv;
        const { sections } = this.state.cv;
        return(
            <Main>
                <h1>{title}</h1>
                <KanbanBoard stages={sections} boardType="CV"/>
            </Main>
        )
    }
}