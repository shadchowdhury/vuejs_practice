<template>
    <div>
        <h1 class="header">{{ msg }}</h1>

        <!-- <contact-details v-for="contact in contacts" :key="contact.name" :name="contact.name" :websiteAddress="contact.websiteAddress"
            :address="contact.address"></contact-details> -->

        <the-card titleCard="About Me">
            <template v-slot:default>
                <p>Hi..! I am Md. Tanvir Shad Chowdhury. I'm a Software Engineer.</p>
            </template>
            <template v-slot:footer>
                <a href="https://shadchowdhury/portfolio">Learn More</a>
            </template>
        </the-card>

        <the-card titleCard="Apple iPhone 12 Pro">
            <template v-slot:default>
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg" alt="">
                <p>Versions: A2407 (International); A2341 (USA); A2406 (Canada, Japan); A2408 (China, Hong Kong)</p>
            </template>

            <template #footer>
                <button>Buy Now</button>
                <button>Add to Cart</button>
            </template>
        </the-card>

        <the-card titleCard="Services">
            <template #default>
                <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Seo Service</li>
                </ul>
            </template>
        </the-card>
    </div>
</template>

<script>
// import contactDetails from './contactDetails.vue'
import TheCard from './TheCard.vue'

export default {
    data() {
        return {
            msg: "Welcome to Vue3 Practice with CLI",
            // contacts: [
            //     {
            //         name: "Md. Shad Chowdhury",
            //         websiteAddress: "http://blogworld-bd.great-site.net/",
            //         address: "Dinajpur, Bangladesh"
            //     },
            //     {
            //         name: "Tanvir Shad Chowdhury",
            //         websiteAddress: "https://google.com",
            //         address: "Dhaka, Bangladesh"
            //     }
            // ]
        }
    },

    components: {
        // contactDetails,
        TheCard
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

button {
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
    border: 1px solid #006f88;
    background-color: #006f88;
    color: #fff;
}
</style>