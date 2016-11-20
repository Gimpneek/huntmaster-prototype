import { EventEmitter } from 'events';

class CVStore extends EventEmitter {
    constructor() {
        super();
        this.resumes = [
            {
                id: 1,
                title: 'Developer',
                sections: [
                    {
                        id: 1,
                        title: 'Education',
                        entries: []
                    },
                    {
                        id: 2,
                        title: 'Experience',
                        entries: []
                    },
                    {
                        id: 3,
                        title: 'Skills',
                        entries: []
                    }
                ]
            }
        ]
    }

    getCVs(){
        return this.resumes;
    }
}

const cvStore = new CVStore();
export default cvStore