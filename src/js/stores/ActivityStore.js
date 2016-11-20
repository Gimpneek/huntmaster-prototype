import { EventEmitter } from 'events';

class ActivityStore extends EventEmitter {
    constructor() {
        super();
        this.activities = [
            {
                id: 1,
                title: 'Received First Class Honours Degree'
            },
            {
                id: 2,
                title: 'Featured in local newspaper'
            },
            {
                id: 3,
                title: 'Used in university promotional materials'
            }
        ]
    }
    getActivities(){
        return this.activities;
    }

    getActivity(activityID){
        const activity =  this.activities.filter((activity, i) => {
                if(activity.id == parseInt(activityID)){
                    return activity;
                }
            });
        return (activity.length > 0) ? activity[0] : false;
    }
}

const activityStore = new ActivityStore();
export default activityStore