<!-- Contador.vue -->
<template>
    <div>
        <h1>Contador: {{valorContador}}</h1>
        <button type="button" @click="valorContador++">Suma!</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valorContador: 0
        }
    },
}
</script>
<style>
</style>