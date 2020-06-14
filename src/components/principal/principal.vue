<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-5">
        <v-list>
          <v-list-item link @click="acoes('inicio', 'inicio')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Ínicio</v-list-item-title>
          </v-list-item>

          <v-list-group prepend-icon="account_circle">
            <template v-slot:activator>
              <v-list-item-title>Paralisias</v-list-item-title>
            </template>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Paralisia Facial</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(paralisia, i) in paralisias" :key="i" link>
                <v-list-item-title
                  @click="acoes('Paralisia Facial', paralisia[0])"
                  v-text="paralisia[0]"
                ></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="paralisia[1]"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
        <template v-slot:append>
          <div class="pa-10">
            <v-btn
              style="color:white"
              color="light-blue"
              block
              @click="acoes('sair', 'sair')"
              >Sair</v-btn
            >
          </div>
        </template>
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="light-blue">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          style="color: white"
        ></v-app-bar-nav-icon>
        <v-col>
          <v-toolbar-title style="color: white" id="title" class="design"
            >Web Fisioterapia</v-toolbar-title
          >
        </v-col>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="cyan"
          @click="dialogConfig = true"
        >
          <v-icon dark>mdi-account-cog-outline</v-icon>
        </v-btn>
        <v-dialog
          v-model="dialogConfig"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="light-blue">
              <v-btn icon dark @click="dialogConfig = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Configurações do usuário</v-toolbar-title>
            </v-toolbar>
            <template>
              <v-bottom-navigation :value="activeBtn" grow color="light-blue">
                <v-btn>
                  <span></span>
                  <v-icon>mdi-hand-pointing-left</v-icon>
                </v-btn>

                <v-btn>
                  <span>Senha</span>
                  <v-icon>mdi-lock-question</v-icon>
                </v-btn>

                <v-btn>
                  <span></span>
                  <v-icon>mdi-hand-pointing-right</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </template>
            <v-container>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Senha"
                          type="password"
                          v-model="senha"
                          placeholder="Senha"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    class="mx-2"
                    dark
                    @click="senha = ''"
                  >
                    <v-icon dark>mdi-close-box-multiple</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="senha.length > 0"
                    color="blue darken-1"
                    class="mx-2"
                    dark
                    @click="atualizarSenha(email, senha)"
                  >
                    <v-icon dark style="width: 50px"
                      >mdi-content-save-all</v-icon
                    >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-card>
        </v-dialog>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex shrink>
              <h1 v-if="view_components.inicio" id="titulo">Bem Vindo!</h1>
              <exercicios v-if="view_components.exercicios"></exercicios>
              <ranking v-if="view_components.ranking"></ranking>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
          <div class="text-center ma-2">
            <v-snackbar v-model="snackbar" right top v-bind:color="snacColor">
              {{ text }}
              <v-btn color="white" text @click="snackbar = false">Fechar</v-btn>
            </v-snackbar>
          </div>
      <v-footer app>
        <span class="design">Desenvolvido por Rhalf Oliveira&copy; 2020</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import exercicios from "../../components/exercicios";
import ranking from "../../components/ranking/ranking";
import ControllerPrincipal from "../principal/controller/ControllerPrincipal";
/* eslint-disable */

const controllerPrincipal = new ControllerPrincipal();

export default {
  name: "principal",
  components: { exercicios, ranking },
  data() {
    return {
      drawer: null,
      email: "",
      senha: "",
      activeBtn: 1,
      dialogConfig: false,
      snackbar: false,
      text: "",
      snacColor: "",
      view_components: {
        inicio: true,
        exercicios: false,
        ranking: false,
      },
      paralisias: [
        ["Exercícios", "mdi-arm-flex"],
        ["Ranking", "mdi-trophy"],
      ],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"],
      ],
    };
  },
  methods: {
    acoes(acao, escolha) {
      if (acao == "sair" && escolha == "sair") {
        localStorage.removeItem("email");
        this.$router.push({ path: "/" });
      } else if (acao == "ranking") {
        this.view_components.ranking = true;
        this.view_components.exercicios = false;
      } else if (acao == "inicio" && escolha == "inicio") {
        Object.keys(this.view_components).forEach((key) => {
          if (key == "inicio") this.view_components[key] = true;
          else this.view_components[key] = false;
        });
      } else if (acao == "Paralisia Facial" && escolha == "Ranking") {
        Object.keys(this.view_components).forEach((key) => {
          if (key == "ranking") this.view_components[key] = true;
          else this.view_components[key] = false;
        });
      } else if (acao == "Paralisia Facial" && escolha == "Exercícios") {
        Object.keys(this.view_components).forEach((key) => {
          if (key == "exercicios") this.view_components[key] = true;
          else this.view_components[key] = false;
        });
      }
    },

    atualizarSenha(email, senha) {
      const vm = this;
      controllerPrincipal.atualizarSenha(email, senha).then((result) => {
        if (result) {
          vm.openSnackbar(true, "green", "Senha atualizada com sucesso.");
          vm.dialogConfig = false
          vm.senha = ''
        } else {
          vm.openSnackbar(true, "red", "Não foi possível atualizar as credencias.");
          vm.senha = ''
        }
      });
    },
    openSnackbar(bool, cor, text) {
      this.snackbar = bool;
      this.text = text;
      this.snacColor = cor;
    },
  },
  created() {
    this.email = localStorage.getItem("email");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300&display=swap");

.design {
  font-family: "Josefin Sans", sans-serif;
}

#titulo {
  font-family: "Josefin Sans", sans-serif;
  color: grey;
}
</style>
