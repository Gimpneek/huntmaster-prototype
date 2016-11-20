import React from "react"
import AttachmentStore from "../../stores/AttachmentStore"
import ListInputItem from "../list/ListInputItem"
import { Input } from "semantic-ui-react"


export default class AttachmentListWithInput extends React.Component{
    constructor(props) {
        super();
        const {value} = props;
        this.state = {
            attachments: AttachmentStore.getAttachments(value),
            currentValue: value
        }
    }
    handleChange = (event, {value}) => {
        const fileName = event.currentTarget.files[0].name;
        const { currentValue } = this.state;
        const { attachments } = this.state;
        const newID = attachments.length + 1;
        attachments.push({id: newID, title: fileName});
        currentValue.push(newID);
        this.setState(
            {
                currentValue: currentValue,
                attachments: attachments
            }
        );
    };
    render(){
        const attachments = this.state.attachments.map((attachment, i) => {
            return <ListInputItem name={attachment.title} key={i} attachmentID={attachment.id}/>;
        });
        return(
            <div className="field">
                <label><strong>{this.props.label}</strong></label>
                <div className="ui segments">
                    {attachments}
                </div>
                <Input type="file" name={this.props.field} onAddItem={this.handleAddition} onChange={this.handleChange} placeholder="Select an attachment to upload"/>
            </div>
        )
    }
}