import React from "react"
import Navigation from "./navigation/Navigation"
import Main from "./containers/Main"
import KanbanBoard from "./kanban/KanbanBoard"

export default class HuntMasterApp extends React.Component{
    render(){
        return (
            <div>
                <Navigation user="Joe Seeker"/>
                <Main>
                    <KanbanBoard/>
                </Main>
            </div>
        )
    }
}