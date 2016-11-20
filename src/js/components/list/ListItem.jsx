import React from "react"

export default class ListItem extends React.Component{
    render(){
        return(
          <div className="ui segment">
              <p>{this.props.name}</p>
          </div>
        )
    }
}