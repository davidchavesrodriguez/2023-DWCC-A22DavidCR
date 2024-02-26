<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        birthYear: {
            type: Number,
            required: true
        }
    }
}
</script>
<template>
    <h1>{{ name }}</h1>
    <p>Birth Year: {{ birthYear }} BBY</p>
</template>
<style></style>