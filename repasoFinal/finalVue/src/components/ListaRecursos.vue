<template>
    <div>
        <h1>{{ resource.nome }}</h1>
        <p>{{ resource.descripcion }}</p>
        <a :href="resource.link"></a>
    </div>
</template>

<script>
export default {
    name: "ListaRecursos",
    props:{
        resource: Object,
    }
}
</script>

<style scoped></style>