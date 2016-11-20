import React from "react"

export default class JobKanbanCard extends React.Component{
    render(){
        return (
            <div className="ui card">
              <div className="content">
                <div className="header">{this.props.position}</div>
                <div className="meta">
                  <span>{this.props.company}</span>
                </div>
                <div className="ui list">
                  <div className="item"><strong>Apply By:</strong> {this.props.actionDate}</div>
                  <div className="item"><strong>Tasks:</strong> {this.props.tasksCompleted}/{this.props.tasksTotal}</div>
                  <div className="item"><strong>Attachments:</strong> {this.props.attachments}</div>
                </div>
              </div>
            </div>
        )
    }
}