import React from "react"
import Main from "../components/containers/Main"
import JobBoardStore from "../stores/JobBoardStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import TextArea from "../components/form/TextArea"

export default class JobFormPage extends React.Component{
    constructor(props){
        super();
        const { stageID } = props.params;
        const { jobID } = props.params;
        this.state = {
            stage: JobBoardStore.getStage(stageID),
            job: JobBoardStore.getJob(stageID, jobID)
        }
    }
    render(){
        const { stage } = this.state;
        const { job } = this.state;
        return(
            <Main>
                <Form title="Edit Application">
                    <TextInput field="position" label="Position" placeholder="What position are you applying for?" value={job.position}/>
                    <TextInput field="company" label="Company" placeholder="What company is the position with?" value={job.company}/>
                    <TextInput field="actionDate" label={stage.actionDateLabel} value={job.actionDate}/>
                </Form>
            </Main>
        )
    }
}