import React from "react"

export default class KanbanColumn extends React.Component{
    render(){
        return (
            <div className="ui segment">
                <h2 className="ui header">{this.props.name}</h2>
                {this.props.children}
            </div>
        )
    }
}