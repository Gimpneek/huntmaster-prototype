import React from "react"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import Navigation from "./components/navigation/Navigation"
import JobHuntingBoardPage from "./pages/JobHuntingBoardPage"
import JobFormPage from "./pages/JobFormPage"
import CVListPage from "./pages/CVListPage"
import CVBoardPage from "./pages/CVBoardPage"
import CVFormPage from "./pages/CVFormPage"
import StoryListPage from "./pages/StoryListPage"
import StoryFormPage from "./pages/StoryFormPage"
import UserProfilePage from "./pages/UserProfilePage"

export default class HuntMasterApp extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Navigation}>
                    <IndexRoute component={JobHuntingBoardPage}/>
                    <Route path="/jobs" component={JobHuntingBoardPage}/>
                    <Route path="/jobs/:stageID/:jobID" component={JobFormPage}/>
                    <Route path="/resumes" component={CVListPage}/>
                    <Route path="/resumes/:CVID" component={CVBoardPage}/>
                    <Route path="/resumes/:CVID/section/:sectionID/entry/:entryID" component={CVFormPage}/>
                    <Route path="/stories" component={StoryListPage}/>
                    <Route path="/stories/:storyID" component={StoryFormPage}/>
                    <Route path="/profile" component={UserProfilePage}/>
                </Route>
            </Router>
        )
    }
}