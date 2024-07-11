<template>
    <div>
        <h1 class="header">{{ msg }}</h1>

        <!-- <div class="main">
            <h3>Rating: {{ myRating }}</h3>
            <the-rating v-model="myRating"></the-rating>
        </div> -->


    </div>
</template>

<script>
import TheRating from './TheRating.vue'

export default {
    data() {
        return {
            msg: "Welcome to Vue3 Practice with Vite",
            myRating: 1,
            nameOnCard: "",
            cardNumber: "",
            Expiry: "",
            
        }
    },

    methods: {},

    components: {
        TheRating
    }
}
</script>

<style scoped>
.header {
    text-align: center;
    background-color: blueviolet;
    color: aqua;
    padding: 22px;
    margin: 0;
}

.main {
    margin: 22px;
}
</style>