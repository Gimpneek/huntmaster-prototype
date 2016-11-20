import { EventEmitter } from 'events';

class JobBoardStore extends EventEmitter{
    constructor() {
        super();
        this.stages = [
            {
                id: 1,
                title: "To Apply For",
                processStart: true,
                actionDateLabel: 'Deadline',
                items: [
                    {
                        id: 1,
                        position: "Developer",
                        company: "ACME Inc.",
                        actionDate: "30/11/16",
                        tasks: [
                            {
                                id: 1,
                                completed: true
                            },
                            {
                                id: 2,
                                completed: false
                            }
                        ],
                        attachments: [1],
                        cv: 1
                    },
                    {
                        id: 2,
                        position: "Programmer",
                        company: "Hooli",
                        actionDate: "31/12/16",
                        tasks: [],
                        attachments: []
                    },
                    {
                        id: 3,
                        position: "UX Designer",
                        company: "Evil Tech Corp",
                        actionDate: "31/10/16",
                        tasks: [],
                        attachments: []
                    },
                    {
                        id: 4,
                        position: "Tester",
                        company: "Startup",
                        actionDate: "21/11/16",
                        tasks: [],
                        attachments: []
                    }
                ]
            },
            {
                id: 2,
                title: "Awaiting Feedback",
                processStart: false,
                actionDateLabel: 'Chase up by',
                items: []
            },
            {
                id: 3,
                title: "Interview",
                processStart: false,
                actionDateLabel: 'Interview on',
                items: []
            },
            {
                id: 4,
                title: "Assignment",
                processStart: false,
                actionDateLabel: 'Submit by',
                items: []
            },
            {
                id: 5,
                title: "Offered",
                processStart: false,
                actionDateLabel: 'Inform of decision by',
                items: []
            },
            {
                id: 6,
                title: "Rejected",
                processStart: false,
                actionDateLabel: 'Analyse by',
                items: [
                    {
                        id: 5,
                        position: "Product Owner",
                        company: "SoftMicro",
                        actionDate: "1/11/16",
                        tasks: [],
                        attachments: [1]
                    }
                ]
            }
        ]
    }

    getStages(){
        return this.stages
    }

    getStage(stageID){
        const stage =  this.stages.filter((stage, i) => {
                if(stage.id == parseInt(stageID)){
                    return stage;
                }
            });
        return (stage.length > 0) ? stage[0] : false;
    }

    getJob(stageID, jobID){
        const stage =  this.getStage(stageID);
        if(stage){
            const job = stage.items.filter((job, i) => {
               if(job.id == parseInt(jobID)){
                    return job;
                }
            });
            return (job.length > 0) ? job[0]: {};
        }else{
            return  false;
        }
    }
}

const jobBoardStore = new JobBoardStore();

export default jobBoardStore;