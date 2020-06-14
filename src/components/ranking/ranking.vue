<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex shrink>
        <v-alert color="light-blue" style="color: white">RANKING DE USUÁRIOS</v-alert>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :options="options"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ControllerRanking from "./controller/ControllerRanking";

const controllerRanking = new ControllerRanking();

export default {
  name: "principal",
  data() {
    return {
      drawer: null,
      dataUsuario: [],
      headers: [
        {
          text: "Classificação",
          align: "center",
          sortable: false,
          value: "classificacao"
        },
        {
          align: "center",
          sortable: false,
          text: "Usuário",
          value: "usuario"
        },
        {
          align: "center",
          sortable: false,
          text: "Pontos",
          value: "pontos"
        }
      ],
      desserts: [],
      options: {
        itemsPerPageText: "Itens por pagina"
      }
    };
  },
  methods: {
    
  },
  created() {
    this.email = localStorage.getItem("email");
    //Carregar o ranking
    controllerRanking.carregarRanking().then(data => {
      let autoinc = 1;
      data.forEach(usuario => {
        let obj = {
          classificacao: autoinc,
          usuario: usuario.email,
          pontos: usuario.pontos
        };
        this.desserts.push(obj);
        autoinc++;
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300&display=swap");

.design {
  font-family: "Josefin Sans", sans-serif;
}
</style>
