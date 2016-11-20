import React from "react"
import { Link } from "react-router"

export default class ListItem extends React.Component{
    render(){
        return(
          <div className="ui segment">
              <Link to={this.props.link}>{this.props.name}</Link>
          </div>
        )
    }
}