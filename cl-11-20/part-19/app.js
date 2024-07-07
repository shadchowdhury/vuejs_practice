const app1 = Vue.createApp({
    data() {
        return {
            name: ""
        }
    },

    template: `
        <h1>Enter your Name:</h1>
        <input type="text" placeholder="Enter Your Name" v-model="name">
        <br><br>
        <p>Your Name: {{ name }}</p>
    `
});

app1.mount("#app1");


const app2 = Vue.createApp({
    data() {
        return {
            message: "Hello Shad!"
        }
    },

    template: `
        <h1>{{ message }}</h1>
    `
});

app2.mount("#app2");