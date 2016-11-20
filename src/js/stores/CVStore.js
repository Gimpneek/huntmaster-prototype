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
                                stories: [1],
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
        return (cv.length > 0) ? cv[0] : false;
    }

    getSection(CVID, sectionID){
        const cv = this.getCV(CVID);
        if(cv) {
            const section = cv.sections.filter((section, i) => {
                if(section.id == parseInt(sectionID)){
                    return section;
                }
            });
            return (section.length > 0) ? section[0] : false;
        }else{
            return false;
        }
    }

    getEntry(CVID, sectionID, entryID){
        const section = this.getSection(CVID, sectionID);
        if(section){
            const entry = section.items.filter((entry, i) => {
                if(entry.id == parseInt(entryID)){
                    return entry;
                }
            });
            return (entry.length > 0) ? entry[0] : false;
        }else{
            return false;
        }
    }
}

const cvStore = new CVStore();
export default cvStore