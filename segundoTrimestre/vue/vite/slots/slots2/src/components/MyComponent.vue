<template>
    <slot v-for="x in foods" :key="x" :foodName="x">
    </slot>
</template>
<script>
export default {
    data() {
        return {
            foods: ['Apple', 'Pizza', 'Rice', 'Fish', 'Cake'],
        };
    },
};
</script>