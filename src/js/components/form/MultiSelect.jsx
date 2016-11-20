import React from "react"
import { Form } from "semantic-ui-react"

export default class MultiSelect extends React.Component{
    render(){
        const defaultValue = this.props.value ? this.props.value : false;
        // TODO: Ensure the defaultValue is an array
        return(
            <Form.Field>
                <Form.Select label={this.props.label} name={this.props.field} options={this.props.options} placeholder={this.props.placeholder} defaultValue={defaultValue} search multiple />
            </Form.Field>
        )
    }
}