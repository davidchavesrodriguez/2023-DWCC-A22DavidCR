<template>
    <form action="#">
        <div class="row">
            <label for="formName" class="form-label">Name:</label>
            <input type="text" name="formName" class="form-text">
        </div>

        <div class="row"> <label for="formLastname" class="form-label">Lastname:</label>
            <input type="text" name="formLastname" class="form-text">
        </div>
        <div class="row">
            <button class="btn btn-primary">Add</button>
            <button class="btn btn-warning">Patch</button>
            <button class="btn btn-danger">Delete</button>
        </div>


    </form>
</template>
<script>
export default {

}
</script>
<style></style>