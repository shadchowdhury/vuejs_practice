<template>
    <div>
        <h1 class="header">{{ msg }}</h1>

        <product-card 
            v-for="product in products" 
            :key="product.name" 
            :product="product" 
            @buy-now-clicked="buyNow" 
            @add-to-cart-clicked="addToCart"
            @toggle-favourite="handleToggle"
        >
       
        </product-card>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    data() {
        return {
            msg: "Welcome to Vue3 Practice with CLI",
            products: [
                {
                name: "Apple iPhone 12 Pro",
                thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
                price: "BDT 161999 Tk.",
                addedToFavourite: true
                },
                {
                name: "Vivo Y58",
                thumbnail: "https://www.mobiledokan.co/wp-content/uploads/2024/06/Vivo-Y58-Sundarbans-Green-300x300.webp",
                price: "BDT 30,000 Tk.",
                addedToFavourite: false
                },
                {
                name: "Xiaomi Poco F6",
                thumbnail: "https://www.mobiledokan.co/wp-content/uploads/2023/05/Xiaomi-Poco-F6-Green-300x300.webp",
                price: "BDT 42000 Tk.",
                addedToFavourite: true
                }
            ]
        }
    },

    methods: {
        buyNow(product) {
            console.log("Buying");
            console.log(product);
        },
        addToCart(product) {
            console.log("Adding");
            console.log(product);
        },
        handleToggle(product){
            product.addedToFavourite = !product.addedToFavourite;
        }
    },

    components: {
        ProductCard
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

</style>