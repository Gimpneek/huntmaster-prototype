import React from "react"
import Main from "../components/containers/Main"
import ListItem from "../components/list/ListItem"
import StoryStore from "../stores/StoryStore"

export default class StoryListPage extends React.Component{
    constructor(){
        super();
        this.state = {
            stories: StoryStore.getStories()
        }
    }
    render(){
        const { stories } = this.state;
        const storyList = stories.map((story, i) => {
           return <ListItem name={story.title} key={i}/>
        });
        return(
            <Main>
                <div className="ui segments">
                   {storyList}
               </div>
               <button className="fluid ui primary button">Add Story</button>
            </Main>
        )
    }
}