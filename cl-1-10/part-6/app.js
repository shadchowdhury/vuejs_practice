const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase(evt,amount) {
            this.count= this.count + amount;
            console.log(evt);
        },

        decrease(amount) {
            if (this.count>0) {
                this.count= this.count - amount;
            }else{
                this.count = 0;
            }
        },

        test(event) {
            console.log("Test");
            console.log(event);
        }
    }
});
app.mount('#app');