import React from "react"
import Navigation from "./components/navigation/Navigation"
import JobHuntingBoardPage from "./pages/JobHuntingBoardPage"

export default class HuntMasterApp extends React.Component{
    render(){
        return (
            <div>
                <Navigation user="Joe Seeker">
                    <JobHuntingBoardPage/>
                </Navigation>
            </div>
        )
    }
}