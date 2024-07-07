const app = Vue.createApp({
    data() {
        return {
            name: ""            
        }
    },
    methods: {
        handleKeyup(e) {
            this.name = e.target.value;
        },

        handleFormSubmit() {
            console.log("Form Submitted!");
            // e.preventDefault();
        },

        handleCardClick(e) {
            console.log(e);
            console.log("Card Clicked!");
        },

        handleViewClick(e) {
            console.log(e);
            // e.stopPropagation();
            console.log("View Clicked!");
        }
    }
});
app.mount('#app');