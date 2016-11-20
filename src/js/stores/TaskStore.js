import { EventEmitter } from 'events';

class TaskStore extends EventEmitter {
    constructor() {
        super();
        this.tasks = [
            {
                id: 1,
                title: "Cover Letter"
            },
            {
                id: 2,
                title: "Send off Application"
            }
        ];
    }

    getAllTasks(){
        return this.tasks;
    }

    getTasks(taskIDs){
        return this.tasks.filter((task, i) => {
            if(taskIDs.indexOf(task.id) > -1){
                return task;
            }
        });
    }
}

const taskStore = new TaskStore();
export default taskStore;
