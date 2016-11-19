import React from "react"
import { render } from "react-dom"

import HuntMasterApp from "./HuntMasterApp"

class HuntMaster extends React.Component {
    render(){
        return(
            <HuntMasterApp/>
        )
    }
}
render(<HuntMaster/>, document.getElementById('huntmaster-app'));