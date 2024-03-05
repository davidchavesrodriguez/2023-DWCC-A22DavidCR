<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="formName">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control" v-model="formDesc">
        </div>
        <div class="mb-3">
            <label class="form-label">Link</label>
            <input type="text" class="form-control" v-model="formLink">
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            formName: "",
            formLink: "",
            formDesc: ""
        }
    },
    methods: {
        submitForm() {
            const formData = {
                formName: this.formName,
                formLink: this.formLink,
                formDesc: this.formDesc
            };
            this.$emit("formSubmitted", formData);

            // Reset form fields
            this.formName = "";
            this.formDesc = "";
            this.formLink = "";
        }

    }
}
</script>

<style scoped>
form {
    max-width: 60%;
    margin: 0 auto;
}
</style>