import React from "react"
import ActivityStore from "../../stores/ActivityStore"
import ListInputItem from "../list/ListInputItem"
import { Dropdown } from "semantic-ui-react"


export default class ActivityListWithInput extends React.Component{
    constructor(props){
        super();
        this.state = {
            activities: ActivityStore.getActivities(),
            currentValue: props.value
        }
    }
    handleAddition = (event, {value}) => {
        if(event.currentTarget.className != 'selected item') {
            const {activities} = this.state;
            const {currentValue} = this.state;
            const newID = activities.length + 1;
            activities.push({id: newID, title: value});
            currentValue.push(newID);
            this.setState(
                {
                    activities: activities,
                    currentValue: currentValue
                }
            )
        }
    };
    handleChange = (event, {value}) => {
        const { currentValue } = this.state;
        currentValue.push(value);
        this.setState(
            {
                currentValue: currentValue
            }
        );
    };
    render(){
        const { currentValue } = this.state;
        console.log(currentValue);
        const selectedActivities = this.state.activities.filter((activity, i) => {
            if(currentValue.indexOf(activity.id) > -1){
                return activity;
            }
        }).map((activity, i) => {
            return <ListInputItem name={activity.title} key={i} activityID={activity.id}/>;
        });
        const availableActivities = this.state.activities.filter((activity, i) => {
            if (currentValue.indexOf(activity.id) < 0) {
                return activity;
            }
        }).map((activity, i) => {
            return {value: activity.id, text: activity.title}
        });
        return(
            <div className="field">
                <label><strong>{this.props.label}</strong></label>
                <div className="ui segments">
                    {selectedActivities}
                </div>
                <Dropdown name={this.props.field} options={availableActivities} onAddItem={this.handleAddition} onChange={this.handleChange} placeholder="Search for activities or create a new one" search selection allowAdditions/>
            </div>
        )
    }
}