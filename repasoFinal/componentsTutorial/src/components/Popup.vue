<template>
    <div>
        <h2>This is a popup</h2>
        <input type="text" name="" id="" v-model="name">
        <button type="button" @click="$emit('close', name)">Close</button>
    </div>
</template>
<script>
export default {
    name: "Popup",
    emits: {
        close: (name) => {
            if (!name) {
                return false
            } else {
                return true
            }
        }
    },
    data() {
        return {
            name: "",
        }
    },
}
</script>
<style></style>