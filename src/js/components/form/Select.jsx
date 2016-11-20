import React from "react"
import { Form } from "semantic-ui-react"

export default class Select extends React.Component{
    render(){
        const defaultValue = this.props.value ? this.props.value : false;
        return(
            <Form.Field>
                <Form.Select label={this.props.label} name={this.props.field} placeholder={this.props.placeholder} options={this.props.options} defaultValue={defaultValue} search/>
            </Form.Field>
        )
    }
}