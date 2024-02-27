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
    },
    data() {
        return {
            newName: this.name,
            newBirthYear: this.birthYear
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('update', {
                newName: this.newName,
                newBirthYear: this.newBirthYear
            });
        }
    }
};
</script>
<template>
    <form @submit.prevent="handleSubmit">
        <label for="formName">New Name:</label>
        <input type="text" name="formName" id="" v-model="newName">
        <label for="formYear">New Year:</label>
        <input type="number" name="formYear" id="" v-model="newBirthYear">
        <button type="submit">Change</button>
    </form>
</template>
<style></style>