<template>
    <div class="the-card">
        <div class="the-card__title">
            {{ titleCard }}
        </div>
        <div class="the-card__body">
            <slot>
                Default Value Here...
            </slot>
        </div>

        <div class="the-card__footer" v-if="$slots.footer">
            <slot name="footer">
                <!-- Default Footer -->
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.default);
    },
    props: ['titleCard']
}
</script>

<style>
.the-card {
    width: 300px;
    border: 1px solid #006f88;
    min-height: 100px;
    margin: 22px auto;
}

.the-card__title {
    background-color: #006f88;
    padding: 5px 11px;
    color: #fff;
}

.the-card__body {
    padding: 11px;
    text-align: justify;
}

.the-card__body img {
    height: 111px;
}

.the-card__body ul {
    list-style:square;
    padding: 10px;
    margin: 0;
}

.the-card__footer {
    padding: 5px 11px;
    background-color: #e3e3e3;
    text-align: center;
}
</style>