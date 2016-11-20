import React from "react"
import { Link } from "react-router"

export default class CVKanbanCard extends React.Component{
    render(){
        const { boardID } = this.props;
        const { sectionID } = this.props;
        const { entryID } = this.props;
        const entryURL = "/resumes/" + boardID + "/section/" + sectionID + "/entry/" + entryID;
        return (
            <Link to={entryURL} className="ui card">
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
            </Link>
        )
    }
}