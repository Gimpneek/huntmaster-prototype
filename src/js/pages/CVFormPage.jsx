import React from "react"
import Main from "../components/containers/Main"
import CVStore from "../stores/CVStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import TextArea from "../components/form/TextArea"

export default class CVFormPage extends React.Component{
    constructor(props){
        super();
        const { CVID } = props.params;
        const { sectionID } = props.params;
        const { entryID } = props.params;
        this.state = {
            cv: CVStore.getCV(CVID),
            section: CVStore.getSection(CVID, sectionID),
            entry: CVStore.getEntry(CVID, sectionID, entryID)
        }
    }
    render(){
        const { cv } = this.state;
        const { section } = this.state;
        const { entry } = this.state;
        return(
            <Main>
                <Form title="Edit Entry">
                    <TextInput field="title" label="Title" placeholder="" value={entry.title}/>
                    <TextInput field="institution" label="Institution" placeholder="" value={entry.institution}/>
                    <TextInput field="startDate" label="Start Date" value={entry.startDate}/>
                    <TextInput field="endDate" label="End Date" value={entry.endDate}/>
                </Form>
            </Main>
        )
    }
}