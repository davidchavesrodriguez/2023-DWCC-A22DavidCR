<template>
    <div>
        <h2>Article Component</h2>
        <h3>{{ title }}</h3>
        <h4>{{ likes }}</h4>
        <h4>Published - {{ isPublished ? "Yes" : "No" }}</h4>
    </div>
</template>
<script>
export default {
    name: "Article",
    props: {
        title: {
            type: String,
            required: true,
            default: "Articles has no name",
        },
        likes: Number,
        isPublished: Boolean,
    }
}
</script>
<style scoped></style>