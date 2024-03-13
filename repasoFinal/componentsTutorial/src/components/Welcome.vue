<template>
    <h1>Bos días, {{ name }} ({{ secretName }})</h1>
</template>
<script>
export default {
    name: "Welcome",
    props: ["name", "secretName"]
}
</script>
<style></style>