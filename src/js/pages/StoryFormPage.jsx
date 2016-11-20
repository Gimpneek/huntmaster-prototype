import React from "react"
import Main from "../components/containers/Main"
import StoryStore from "../stores/StoryStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import TextArea from "../components/form/TextArea"

export default class StoryFormPage extends React.Component{
    constructor(props){
        super();
        const { storyID } = props.params;
        this.state = {
            story: StoryStore.getStory(storyID)
        }
    }
    render(){
        const { story } = this.state;
        return(
            <Main>
                <Form title="Edit Story">
                    <TextInput field="title" label="Title" placeholder="What would you like to call this story?" value={story.title}/>
                    <TextInput field="summary" label="Summary (shown on CV)" placeholder="How would you like this be shown on your CV?" value={story.summary}/>
                    <TextArea field="situation" label="Problem you had to solve" value={story.situation}/>
                    <TextArea field="action" label="Action you took" value={story.action}/>
                    <TextArea field="result" label="Outcome" value={story.result}/>
                </Form>
            </Main>
        )
    }
}