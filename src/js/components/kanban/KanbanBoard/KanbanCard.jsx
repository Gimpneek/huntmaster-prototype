import React from "react"

export default class KanbanCard extends React.Component{
    render(){
        return (
            <div className="ui card">
              <div className="content">
                <div className="header">{this.props.position}</div>
                <div className="meta">
                  <span>{this.props.company}</span>
                </div>
                <div className="ui list">
                  <div className="item"><strong>Apply By:</strong> {this.props.date}</div>
                  <div className="item"><strong>Tasks:</strong> {this.props.tasks}</div>
                  <div className="item"><strong>Attachments:</strong> {this.props.attachments}</div>
                </div>
              </div>
            </div>
        )
    }
}