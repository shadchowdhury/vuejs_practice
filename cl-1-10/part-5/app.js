const app = Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count++;
        },

        decrease() {
            if (this.count!=0) {
                this.count--;
            }
            else{
                this.count = 0;
            }
        },

        getCurrentTime() {
            let ct = new Date().toLocaleTimeString();
            return ct;
        }
    }
});
app.mount('#app');