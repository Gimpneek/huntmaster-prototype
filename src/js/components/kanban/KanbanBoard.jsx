import React from "react"
import KanbanColumn from "./KanbanBoard/KanbanColumn"
import KanbanCard from "./KanbanBoard/KanbanCard"

export default class KanbanBoard extends React.Component{
    render(){
        return (
            <div className="ui horizontal kanban segments">
                <KanbanColumn name="To Apply For">
                    <KanbanCard position="Developer" company="ACME Inc." date="30/11/16" tasks="1/2" attachments="1"/>
                    <KanbanCard position="Programmer" company="Hooli" date="29/11/16" tasks="0/2" attachments="0"/>
                    <KanbanCard position="UX Designer" company="Evil Tech Corp" date="31/10/16" tasks="0/2" attachments="0"/>
                    <KanbanCard position="Tester" company="Startup" date="21/11/16" tasks="0/2" attachments="0"/>
                    <button className="fluid bottom attached ui primary button">Add Application</button>
                </KanbanColumn>
                <KanbanColumn name="Awaiting Feedback"/>
                <KanbanColumn name="Interview"/>
                <KanbanColumn name="Assignment"/>
                <KanbanColumn name="Offered"/>
                <KanbanColumn name="Rejected"/>
            </div>
        )
    }
}