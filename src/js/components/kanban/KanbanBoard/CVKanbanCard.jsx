import React from "react"

export default class CVKanbanCard extends React.Component{
    render(){
        return (
            <div className="ui card">
              <div className="content">
                <div className="header">{this.props.title}</div>
                <div className="meta">
                  <span>{this.props.institution}</span>
                </div>
                <div className="ui list">
                  <div className="item">{this.props.startDate} - {this.props.endDate}</div>
                  <div className="item"><strong>Stories:</strong> {this.props.stories}</div>
                  <div className="item"><strong>Activities:</strong> {this.props.activities}</div>
                </div>
              </div>
            </div>
        )
    }
}