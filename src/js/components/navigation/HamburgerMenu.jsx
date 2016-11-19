import React from "react"
import $ from "jquery"
import sidebar from "../../../vendor/js/semantic-ui/sidebar"

export default class HamburgerMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Menu'
        }
    }

    componentWillMount(){
        $.fn.sidebar.settings.context = '#huntmaster-container';
    }
    toggleMenu(){
        if(this.state.title == 'Menu'){
            this.setState({title: 'Close'})
        }else{
            this.setState({title: 'Menu'})
        }
        $('.ui.sidebar').sidebar('toggle');
    }

    render(){
        const {title} = this.state;
        return(
            <div className="ui right item" onClick={this.toggleMenu.bind(this)}>{title}</div>
        )
    }
}