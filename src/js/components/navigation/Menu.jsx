import React from "react"
import HamburgerMenu from "./HamburgerMenu"
import UserStore from "../../stores/UserStore"

export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            user: UserStore.getUser(),
        }
    }
    render(){
        const { user } = this.state;
        const name = user.firstName + " " + user.lastName;
        return (
            <div className="ui fixed text menu">
              <div className="ui container">
                <div className="header item">
                  <img src="/images/logo.png"/>
                    {name}
                </div>
                <HamburgerMenu/>
              </div>
            </div>
        )
    }
}