import React from "react"

export default class ListInputItem extends React.Component{
    render(){
        return(
          <div className="ui segment">
              <strong>{this.props.name}</strong>
          </div>
        )
    }
}