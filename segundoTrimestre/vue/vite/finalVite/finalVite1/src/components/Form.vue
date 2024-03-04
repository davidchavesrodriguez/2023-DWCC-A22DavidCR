<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Link</label>
            <input type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    form {
        max-width: 60%;
        margin: 0 auto;
    }
</style>