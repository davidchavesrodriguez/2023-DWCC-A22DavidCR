<template>
    <div>
        <form action="" @submit.prevent = 'submitForm'>
            <input type="text" name="" id="" v-model="resource.nome">
            <input type="text" name="" id="" v-model="resource.descripcion">
            <input type="text" name="" id="" v-model="resource.link">
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Formulario",
    data() {
        return {
            resource: {
                nome: "",
                descripcion: "",
                link: ""
            }
        };
    },
    methods: {
        submitForm() {
            this.$emit("submitedForm", this.resource)
        }
    }
};
</script>

<style scoped></style>
