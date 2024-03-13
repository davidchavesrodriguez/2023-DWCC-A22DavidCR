<template>
    <div>
        <h3 v-for="name in names" :key="name.firstName">
            <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h3>
    </div>
</template>

<script>
export default {
    name: "NameList",
    data() {
        return {
            names: [
                { firstName: 'David', lastName: 'González' },
                { firstName: 'Ana', lastName: 'Martínez' },
                { firstName: 'Juan', lastName: 'Pérez' },
                { firstName: 'María', lastName: 'López' }
            ]
        }
    },
}
</script>

<style scoped></style>