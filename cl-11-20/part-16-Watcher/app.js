const app = Vue.createApp({
    data() {
        return {
            mobile: '',
            name: {
                firstName: '',
                lastName: ''
            },
            items: ['Item 1', 'Item 2', 'Item 3']
        }
    },

    watch: {
        mobile(newValue, oldValue) {
            console.log(newValue, oldValue);

            if (isNaN(newValue)) {
                alert('Enter a valid mobile number');
                this.mobile = oldValue;
            }

            if (newValue.length == 11) {
                alert('Sent OTP to this mobile number');
            }
        },

        // 'name.firstName': function(newValue, oldValue) {
        //     console.log(newValue,oldValue);
        // },

        name: {
            deep: true,
            handler: function (newValue) {
                console.log('New Value:', newValue);
            }
        },

        items: {
            deep: true,
            handler: function (newValue) {
                console.log('New Value:', newValue);
            }
        }
    },

    methods: {
        addItem(){
            this.items.push(`Item ${this.items.length + 1}`);
        }
    }
});

app.mount('#app');