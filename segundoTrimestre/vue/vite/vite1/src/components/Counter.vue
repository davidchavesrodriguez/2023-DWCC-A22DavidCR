<script>
export default {
    data() {
        return {
            message: 'Contador: ',
            count: 0,
        };
    },
};
</script>
<template>
    <h1>{{ message }} {{ count }}</h1>
    <button type="button" @click="this.count++">Eu conto</button>
    <button type="button" @click="this.count++">Eu conto</button>
    <button type="button" @click="this.count++">Eu conto</button>
</template>
<style></style>