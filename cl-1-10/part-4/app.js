const app = Vue.createApp({
    data() {
        return {
            tutorialInfo: {
                name: "Vue JS 3 Bangla tutorial",
                githubLink: "https://github.com/shadchowdhury"
            },
            htmlCode: '<a href="https://github.com/shadchowdhury">GitHub</a>'
        }
    }
})

app.mount('#app')