import React from "react"


export default class Form extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <form className="ui form">
                {this.props.children}
                </form>
            </div>
        )
    }
}