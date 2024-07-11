<template>
    <div class="rating">
        <div class="rating-star" v-for="index in 5" :key="index" @click="handleClick(index)">
            <img src="../images/rated-star.png" alt="" v-if="index<=modelValue">
            <img src="../images/unrated-star.png" alt="" v-else>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    emits: ["update:modelValue"],
    methods: {
        handleClick(index) {
            this.$emit("update:modelValue", index);
        }
    }

}
</script>

<style>
.rating {
    width: 200px;
    display: flex;
    align-items: center;
}

.rating-star{
    cursor: pointer;
    margin: 2px;
}

.rating-star img {
    width: 40px;
    height: 40px;
}

.rating-star img:hover {
    transform: scale(1.1);
}
</style>