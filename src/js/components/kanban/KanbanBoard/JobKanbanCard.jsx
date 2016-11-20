import React from "react"
import { Link } from "react-router"

export default class JobKanbanCard extends React.Component{
    render(){
        const jobURL = "/jobs/" + this.props.stageID + "/" + this.props.jobID;
        return (
            <Link to={jobURL} className="ui card">
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
            </Link>
        )
    }
}