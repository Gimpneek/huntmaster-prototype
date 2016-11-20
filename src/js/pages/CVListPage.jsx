import React from "react"
import Main from "../components/containers/Main"
import CVStore from "../stores/CVStore"
import ListItem from "../components/list/ListItem"

export default class CVListPage extends React.Component{
    constructor(){
        super();
        this.state = {
            resumes: CVStore.getCVs()
        }
    }
    render(){
        const { resumes } = this.state;
        const CVListItems = resumes.map((cv, i) => {
            const cvURL = "/resumes/" + cv.id;
           return <ListItem link={cvURL} name={cv.title} key={i}/>
        });
        return(
            <Main>
               <div className="ui segments">
                   {CVListItems}
               </div>
               <button className="fluid ui primary button">Add CV</button>
            </Main>
        )
    }
}