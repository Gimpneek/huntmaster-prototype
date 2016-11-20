import React from "react"
import { Form } from "semantic-ui-react"

export default class TextInput extends React.Component{
    render(){
        const defaultValue = this.props.value ? this.props.value : false;
        return(
            <Form.Field>
                <Form.Input label={this.props.label} name={this.props.field} placeholder={this.props.placeholder} defaultValue={defaultValue}/>
            </Form.Field>
        )
    }
}