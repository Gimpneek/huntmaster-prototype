import { EventEmitter } from 'events';

class JobBoardStore extends EventEmitter{
    constructor() {
        super();
        this.stages = [
            {
                id: 1,
                title: "To Apply For",
                processStart: true,
                items: [
                    {
                        id: 1,
                        position: "Developer",
                        company: "ACME Inc.",
                        actionDate: "30/11/16",
                        tasksCompleted: 1,
                        tasksTotal: 2,
                        attachments: 1
                    },
                    {
                        id: 2,
                        position: "Programmer",
                        company: "Hooli",
                        actionDate: "31/12/16",
                        tasksCompleted: 0,
                        tasksTotal: 2,
                        attachments: 0
                    },
                    {
                        id: 3,
                        position: "UX Designer",
                        company: "Evil Tech Corp",
                        actionDate: "31/10/16",
                        tasksCompleted: 0,
                        tasksTotal: 2,
                        attachments: 0
                    },
                    {
                        id: 4,
                        position: "Tester",
                        company: "Startup",
                        actionDate: "21/11/16",
                        tasksCompleted: 0,
                        tasksTotal: 2,
                        attachments: 0
                    }
                ]
            },
            {
                id: 2,
                title: "Awaiting Feedback",
                processStart: false,
                items: []
            },
            {
                id: 3,
                title: "Interview",
                processStart: false,
                items: []
            },
            {
                id: 4,
                title: "Assignment",
                processStart: false,
                items: []
            },
            {
                id: 5,
                title: "Offered",
                processStart: false,
                items: []
            },
            {
                id: 6,
                title: "Rejected",
                processStart: false,
                items: [
                    {
                        id: 5,
                        position: "Product Owner",
                        company: "SoftMicro",
                        actionDate: "1/11/16",
                        tasksCompleted: 1,
                        tasksTotal: 2,
                        attachments: 4
                    }
                ]
            }
        ]
    }

    getStages(){
        return this.stages
    }
}

const jobBoardStore = new JobBoardStore();

export default jobBoardStore;