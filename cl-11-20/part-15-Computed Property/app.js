const app = Vue.createApp({
    data(){
        return {
            review: '',
            skills: [
                {name: 'HTML', experience: 10}, 
                {name: 'CSS', experience: 10}, 
                {name: 'JS', experience: 6},
                {name: 'Java', experience: 4}, 
                {name: 'PHP', experience: 6}, 
                {name: 'Python', experience: 5},
                {name: 'Ajax', experience: 3}, 
                {name: 'jquery', experience: 2}, 
                {name: 'Laravel', experience: 1},
            ],
            
        }
    },

    computed: {
        totalCount1(){
            console.log('Count from computed property');
            return this.skills.length;
        },

        experiencedSkills(){
            let expSkills = this.skills.filter( (item) => {
                return item.experience >= 6;
            });

            return expSkills;
        }
    },

    methods: {
        removeSkill(i) {
            this.skills.splice(i,1);
        },

        totalCount(){
            console.log('Count from method');
            return this.skills.length;
        },
    }

});

app.mount("#app");