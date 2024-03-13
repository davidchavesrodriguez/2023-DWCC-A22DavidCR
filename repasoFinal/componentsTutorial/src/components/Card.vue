<template>
    <div class="card">
        <slot></slot>
        <slot name="second"></slot>
    </div>
</template>

<script>
    export default {
        name: "Card",
    }
</script>

<style scoped>
    .card{
        box-shadow: 1px 1px 1px;
        background-color: goldenrod;
    }
</style>