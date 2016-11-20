import { EventEmitter } from 'events';

class StoryStore extends EventEmitter {
    constructor() {
        super();
        this.stories = [
            {
                id: 1,
                title: 'Augmented Reality',
                summary: 'Augmented Reality with ARToolkit',
                situation:  "As part of my degree I had a year long research " +
                            "project that accounted for 60% of my final mark. " +
                            "I was interested in Augmented Reality so chose this",
                action: "I downloaded and built ARToolkit and started to experiment. " +
                        "Eventually I used Apple's Quartz Composer with an ARToolkit " +
                        "patch to control parameters on music instruments in Logic Pro.",
                result: "I received a very high mark and was featured in the local paper."
            }
        ]
    }

    getStories(){
        return this.stories;
    }
}

const storyStore = new StoryStore();
export default storyStore