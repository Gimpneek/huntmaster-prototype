import { EventEmitter } from 'events';

class AttachmentStore extends EventEmitter {
    constructor() {
        super();
        this.attachments = [
            {
                id: 1,
                title: 'Job Specification',
                fileURL: 'blah'
            }
        ]
    }
    getAllAttachments(){
        return this.attachments;
    }

    getAttachments(attachmentIDs){
        return this.attachments.filter((attachment, i) => {
            if(attachmentIDs.indexOf(attachment.id) > -1){
                return attachment;
            }
        });
    }
}

const attachmentStore = new AttachmentStore();
export default attachmentStore;