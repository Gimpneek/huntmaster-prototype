import React from "react"

export default class MainContainer extends React.Component{
    render(){
        return (
            <div className="pusher">
                <div className="ui main container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}