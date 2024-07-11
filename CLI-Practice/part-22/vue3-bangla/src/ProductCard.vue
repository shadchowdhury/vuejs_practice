<template>
    <div class="product-card">
        <div class="product-card__title">
            <div>
                {{ product.name }}
            </div>
           <img src="./images/yellow-star.png" v-if="product.addedToFavourite" alt="" @click="toggleFavourite">
           <img src="./images/gray-star.png" v-else alt="" @click="toggleFavourite">
        </div>
        <div class="product-card__body">
            <img :src="product.thumbnail" alt="">
            <p>Price: {{ product.price }}</p>
        </div>

        <div class="product-card__footer">
            <button @click="handleBuyNowClick">Buy Now</button>
            <button @click="handleAddToCartClick">Add TO Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {'product': {type: Object, default: () => ({})}},
    //event validation here in below
    // emits: {
    //     'buy-now-clicked': function(data) {
    //         if(!data) {
    //             console.error("Data missing for buy now clicked event");
    //             return false;
    //         }
    //         return true;
    //     }
    // },
    methods: {
        handleBuyNowClick() {
            this.$emit("buy-now-clicked", this.product);
            //console.log(this.product);
        },

        handleAddToCartClick() {
            this.$emit("add-to-cart-clicked", this.product);
        },
        toggleFavourite() {
            this.$emit("toggle-favourite", this.product);
        }       
    }

}
</script>

<style>
.product-card {
    width: 300px;
    border: 1px solid #006f88;
    border-radius: 5px;
    min-height: 100px;
    margin: 22px auto;
}

.product-card__title {
    background-color: #006f88;
    padding: 5px 11px;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-card__body {
    padding: 11px;
    text-align: center;
}

.product-card__body img {
    height: 111px;
}

.product-card__body ul {
    list-style:square;
    padding: 10px;
    margin: 0;
}

.product-card__footer {
    padding: 5px 11px;
    background-color: #e3e3e3;
    text-align: center;
    border-radius: 0px 0px 5px 5px;
}

button {
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
    border: 1px solid #006f88;
    border-radius: 6px;
    background-color: #006f88;
    color: #fff;
}

.product-card__title img {
    width: 25px;
    height: 25px;
    cursor: pointer;
}
</style>