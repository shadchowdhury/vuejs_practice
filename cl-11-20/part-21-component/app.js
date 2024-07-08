const app = Vue.createApp({
    data() {
        return { }
    }
});

app.component("contact-details" , {
    data() {
        return {
            name: "Md. Shad Chowdhury",
            website: "http://blogworld-bd.great-site.net",
            address: "Dhaka, Bangladesh"
        }
    },

    template: `
        <h1>Contact Details</h1>
        <p><strong>Name: </strong>{{ name }}</p>
        <p><strong>Website: </strong><a :href="website">BlogWorld</a></p>
        <p><strong>Address: </strong>{{ address }}</p>
    `
});


app.mount("#app");
