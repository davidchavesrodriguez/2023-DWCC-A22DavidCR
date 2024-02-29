<!-- MyComponent.vue -->
<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        // mock remote data fetching
        setTimeout(() => {
            this.items = [
                { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
                { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 },
            ];
        }, 1000);
    },
};
</script>

<template>
    <div v-if="items.length==0">
        Loading...
    </div>
    <div>
      <slot :items="items"></slot>
    </div>
  </template>