import React from "react"
import TaskStore from "../../stores/TaskStore"
import CheckListItem from "./CheckListItem"


export default class TaskList extends React.Component{
    constructor(props) {
        super();
        const {value} = props;
        const taskIDs = value.map((task, i) => {
           return task.id
        });
        const tasks = TaskStore.getTasks(taskIDs);
        const taskList = tasks.map((task, i) => {
            const jobTask = value.filter((t, ind) => {
                if(t.id == task.id){
                    return t;
                }
            });
            if(jobTask){
                task.completed = jobTask[0].completed;
            }
            return task;
        });
        this.state = {
            tasks: taskList
        }
    }
    // handleChange = (event, {value}) => {
    //     const fileName = event.currentTarget.files[0].name;
    //     const { currentValue } = this.state;
    //     const { attachments } = this.state;
    //     const newID = attachments.length + 1;
    //     attachments.push({id: newID, title: fileName});
    //     currentValue.push(newID);
    //     this.setState(
    //         {
    //             currentValue: currentValue,
    //             attachments: attachments
    //         }
    //     );
    // };
    render(){
        const tasks = this.state.tasks.map((task, i) => {
            return <CheckListItem name={task.id} key={i} label={task.title} completed={task.completed}/>;
        });
        return(
            <div className="field">
                <label><strong>{this.props.label}</strong></label>
                <div className="ui segments">
                    {tasks}
                </div>
            </div>
        )
    }
}