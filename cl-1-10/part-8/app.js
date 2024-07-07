const app = Vue.createApp({
    data() {
        return {
            num: "",
            result: "",
            checkedNames: [],
            picked: "One",
            selected: "",
            myName: "",
            selected: "A",
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    methods: {
        // handleInput(e) {
        //     this.num = e.target.value;
        // },

        getDouble() {
            this.result = this.num * 2;
        },

        getSquare() {
            this.result = this.num * this.num;
        },

        addTen() {
            this.result = this.num + 10;
        },

        reset() {
            this.num = "";
            this.result = "";
        }
    }
});
app.mount('#app');