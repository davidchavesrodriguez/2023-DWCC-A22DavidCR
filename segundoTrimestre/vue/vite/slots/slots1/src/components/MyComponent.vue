<!-- MyComponent.vue -->
<template>
    <div>
        <slot v-for="item in array" :text="item.text" :count="item.count">
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            array: [
                {
                    text: "texto1",
                    count: 1
                },
                {
                    text: "texto2",
                    count: 2
                }

            ],

        }
    },
}
</script>
<style></style>