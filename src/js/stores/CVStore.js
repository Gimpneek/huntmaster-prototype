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
                        processStart: false,
                        items: [
                            {
                                id: 1,
                                title: 'BA (Hons) Digital Art',
                                institution: 'Thames Valley University',
                                startDate: '2006',
                                endDate: '2009',
                                stories: 10,
                                activities: 5
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Experience',
                        processStart: false,
                        items: []
                    },
                    {
                        id: 3,
                        title: 'Skills',
                        processStart: false,
                        items: []
                    }
                ]
            }
        ]
    }

    getCVs(){
        return this.resumes;
    }

    getCV(CVID){
        const cv =  this.resumes.filter((cv, i) => {
                if(cv.id == parseInt(CVID)){
                    return cv;
                }
            });
        return (cv.length > 0) ? cv[0] : {};
    }
}

const cvStore = new CVStore();
export default cvStore