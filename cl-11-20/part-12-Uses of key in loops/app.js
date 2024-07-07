const app = Vue.createApp({
    data(){
        return {
            skills: [
                {name: 'HTML', experience: '5 years'}, 
                {name: 'CSS', experience: '10 years'}, 
                {name: 'JS', experience: '12 years'}
            ],
            newSkill: {name: '', experience: '1 year'}
        }
    },

    methods: {
        addSkill() {
            this.skills.push(this.newSkill);
            this.newSkill = {name: '', experience: '1 year'};
        },

        removeSkill(index) {
            this.skills.splice(index, 1);
        }
    }

});

app.mount("#app");