import React from "react"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import Navigation from "./components/navigation/Navigation"
import JobHuntingBoardPage from "./pages/JobHuntingBoardPage"
import CVListPage from "./pages/CVListPage"
import StoryListPage from "./pages/StoryListPage"
import UserProfilePage from "./pages/UserProfilePage"

export default class HuntMasterApp extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Navigation}>
                    <IndexRoute component={JobHuntingBoardPage}/>
                    <Route path="/jobs" component={JobHuntingBoardPage}></Route>
                    <Route path="/resumes" component={CVListPage}></Route>
                    <Route path="/stories" component={StoryListPage}></Route>
                    <Route path="/profile" component={UserProfilePage}></Route>
                </Route>
            </Router>
        )
    }
}