const app = Vue.createApp({
    data(){
        return {
            aboutMe: {
                Name: 'Md. Shad Chowdhury',
                NickName: 'Shad',
                Website: 'https://mdshadchowdhury.com'
            },

            skills: [
                {name: 'HTML', experience: '5 years'}, 
                {name: 'CSS', experience: '10 years'}, 
                {name: 'JS', experience: '12 years'}
            ],
            
        }
    },

    methods: {

    }

});

app.mount("#app");