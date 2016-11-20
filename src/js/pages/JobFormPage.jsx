import React from "react"
import Main from "../components/containers/Main"
import JobBoardStore from "../stores/JobBoardStore"
import CVStore from "../stores/CVStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import Select from "../components/form/Select"
import AttachmentListWithInput from "../components/form/AttachmentListWithInput"
import TaskList from "../components/form/TaskList"

export default class JobFormPage extends React.Component{
    constructor(props){
        super();
        const { stageID } = props.params;
        const { jobID } = props.params;
        this.state = {
            stage: JobBoardStore.getStage(stageID),
            job: JobBoardStore.getJob(stageID, jobID),
            resumes: CVStore.getCVs()
        }
    }
    render(){
        const { stage } = this.state;
        const { job } = this.state;
        const { resumes } = this.state;
        const resumesAsOptions = resumes.map((cv, i) => {
           return {text: cv.title, value: cv.id}
        });
        return(
            <Main>
                <Form title="Edit Application">
                    <TextInput field="position" label="Position" placeholder="What position are you applying for?" value={job.position}/>
                    <TextInput field="company" label="Company" placeholder="What company is the position with?" value={job.company}/>
                    <TextInput field="actionDate" label={stage.actionDateLabel} value={job.actionDate}/>
                    <Select field="cv" label="CV to use" value={job.cv} options={resumesAsOptions}/>
                    <AttachmentListWithInput field="attachments" label="Attachments" value={job.attachments}/>
                    <TaskList field="tasks" label="Tasks" value={job.tasks}/>
                </Form>
            </Main>
        )
    }
}