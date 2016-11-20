import React from "react"
import Main from "../components/containers/Main"
import CVStore from "../stores/CVStore"
import StoryStore from "../stores/StoryStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import TextArea from "../components/form/TextArea"
import MultiSelect from "../components/form/MultiSelect"
import ActivityListWithInput from "../components/form/ActivityListWithInput"

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
        const storyOptions = StoryStore.getStories().map((story, i) => {
                return {value: story.id, text: story.title}
            });
        return(
            <Main>
                <Form title="Edit Entry">
                    <TextInput field="title" label="Title" placeholder="What did you do?" value={entry.title}/>
                    <TextInput field="institution" label="Institution" placeholder="Where did you do it?" value={entry.institution}/>
                    <TextInput field="startDate" label="Start Date" value={entry.startDate}/>
                    <TextInput field="endDate" label="End Date" value={entry.endDate}/>
                    <MultiSelect field="stories" label="Stories included in entry" placeholder="Tell the story of what you did" options={storyOptions} value={entry.stories}/>
                    <ActivityListWithInput field="activities" label="Activities included in entry" placeholder="A list of activities you did" value={entry.activities}/>
                </Form>
            </Main>
        )
    }
}