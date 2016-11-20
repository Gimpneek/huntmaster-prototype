import { EventEmitter } from 'events';

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.user = {
            title: "Mr",
            firstName: "Joe",
            lastName: "Seeker",
            email: "jseeker@email.com",
            phone: "071234123412",
            profilePicture: "blah",
            induction: "Disciplined Software Development Manager and Developer with a passion for delivering high quality and valuable software."
        }
    }

    getUser(){
        return this.user;
    }
}

const userStore = new UserStore();
export default userStore