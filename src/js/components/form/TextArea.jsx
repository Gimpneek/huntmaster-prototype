import React from "react"
import { Form } from "semantic-ui-react"

export default class TextArea extends React.Component{
    render(){
        const defaultValue = this.props.value ? this.props.value : false;
        return(
            <Form.Field>
                <Form.TextArea label={this.props.label} name={this.props.field} defaultValue={defaultValue}/>
            </Form.Field>
        )
    }
}