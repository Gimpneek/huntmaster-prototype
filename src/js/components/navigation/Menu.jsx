import React from "react"

export default class Menu extends React.Component{
    render(){
        return (
            <div className="ui fixed text menu">
              <div className="ui container">
                <div className="header item">
                  <img src="/images/logo.png"/>
                    {this.props.user}
                </div>
                <div className="ui right item side-menu-button">Menu</div>
              </div>
            </div>
        )
    }
}