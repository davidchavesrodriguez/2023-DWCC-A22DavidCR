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
    <form action="">
        <label for="formName">New Name:</label>
        <input type="text" name="formName" id="">
        <label for="formYear">New Year:</label>
        <input type="number" name="formYear" id="">
    </form>
</template>
<style></style>