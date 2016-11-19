import React from "react"
import $ from "jquery"
import sidebar from "../../../vendor/js/semantic-ui/sidebar"

export default class HamburgerMenu extends React.Component{
    componentWillMount(){
        $.fn.sidebar.settings.context = '#huntmaster-container';
    }
    toggleMenu(){
        $('.ui.sidebar').sidebar('toggle');
    }

    render(){
        return(
            <div className="ui right item" onClick={this.toggleMenu.bind(this)}>Menu</div>
        )
    }
}