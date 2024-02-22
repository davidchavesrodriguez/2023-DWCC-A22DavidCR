<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Isamel",
          telephone: 123456789,
          email: "lensinhofit3000@bembibre.gym"
        },
        {
          name: "Julito",
          telephone: 987654321,
          email: "oslorchosson@o.pino"
        },
        {
          name: "Dalton",
          telephone: 880808088,
          email: "redgreenblue@color.rgb"
        }
      ]
    };
  }
}
</script>

<template>
  <h1>Contact List</h1>
  <div v-for="(person, index) in contacts" :key="index">
    <PropPerson :propName="person.name" :propTelephone="person.telephone" :propEmail="person.email">
    </PropPerson>
  </div>
</template>

<style ></style>
