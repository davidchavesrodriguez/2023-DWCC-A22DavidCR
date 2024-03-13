<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ descripcion }}</p>
        <a :href="enlace">Pulsa</a>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        enlace: {
            type: String,
            required: true
        }
    }
}
</script>
<style></style>