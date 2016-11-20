import React from "react"
import { Checkbox } from "semantic-ui-react"

export default class CheckListItem extends React.Component{
    render(){
        const { completed } = this.props;
        const checked = completed ? "checked" : false;
        return(
          <div className="ui segment">
              <Checkbox label={this.props.label} name={this.props.field} checked={checked}/>
          </div>
        )
    }
}