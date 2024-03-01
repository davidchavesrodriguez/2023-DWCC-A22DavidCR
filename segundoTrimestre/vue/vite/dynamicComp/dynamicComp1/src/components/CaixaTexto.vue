<template>
    <div>
        <input type="text" v-model="inputText">
        <h2>{{ inputText }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        };
    }
}
</script>

<style>
</style>
