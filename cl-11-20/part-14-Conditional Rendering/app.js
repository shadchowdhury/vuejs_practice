const app = Vue.createApp({
    data(){
        return {
            show: false,

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

    methods: {
        toggle() {
            this.show = !this.show;
        }
    }

});

app.mount("#app");