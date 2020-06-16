<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="light-blue" dark flat>
                    <v-toolbar-title>WEB Fisioterapia</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-img src="/img/paralisia.png"></v-img>
                    <v-form>
                      <v-text-field
                        label="E-mail"
                        name="email"
                        v-model="email"
                        prepend-icon="person"
                        type="text"
                        @keyup.enter="entrar"
                      ></v-text-field>

                      <v-text-field
                        id="senha"
                        label="Senha"
                        name="senha"
                        prepend-icon="lock"
                        type="password"
                        v-model="senha"
                        @keyup.enter="entrar"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="light-blue"
                      style="color:white"
                      @click="dialogEsqueciSenha = true"
                    >Esqueci a Senha</v-btn>
                    <v-btn color="light-blue" style="color:white" @click="dialogInformativoCad = true">Cadastrar</v-btn>
                    <v-btn color="light-blue" style="color:white" @click="entrar">Entrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-content>
      </v-app>
    <!--Informativo ao usuário-->
    <v-snackbar v-model="snackbar" right top v-bind:color="snacColor">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
    </v-app>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-alert color="blue" style="color: white">Cadastro de Usuários</v-alert>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="E-mail"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  placeholder="E-mail"
                  outlined
                  @keyup.enter="cadastrar(email, senha)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Senha"
                  type="password"
                  v-model="senha"
                  placeholder="Senha"
                  outlined
                  @keyup.enter="cadastrar(email, senha)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" class="mx-2" dark @click="fecharDiloagCadastro">
            <v-icon dark>mdi-close-box-multiple</v-icon>
          </v-btn>
          <v-btn
            v-if="email.length > 0 && senha.length > 0"
            color="blue darken-1"
            class="mx-2"
            dark
            @click="cadastrar(email, senha)"
          >
            <v-icon dark style="width: 50px">mdi-content-save-all</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogEsqueciSenha" persistent max-width="600px">
      <v-card>
        <v-alert color="blue" style="color: white">Esqueci minha senha</v-alert>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="E-mail"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  placeholder="E-mail"
                  outlined
                  @keyup.enter="pedirSenha(email)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" class="mx-2" dark @click="dialogEsqueciSenha = false">
            <v-icon dark>mdi-close-box-multiple</v-icon>
          </v-btn>
          <v-btn
            v-if="email.length > 0"
            color="blue darken-1"
            class="mx-2"
            dark
            @click="pedirSenha(email)"
          >
            <v-icon dark style="width: 50px">mdi-content-save-all</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogInformativoCad" persistent max-width="500">
      <v-card id="cardInfo">
        <v-alert color="light-blue" style="color: white; font-size: 25px">Informativo</v-alert>
        <v-card-title class="headline"></v-card-title>
        <v-card-text style="font-size: 20px">Favor utilizar um e-mail valido, pois se acontecer de se perde a senha, não será possível a recuperação da conta.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="light-blue" style="font-size: 20px" text @click="fecharDialogInf">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ControllerLogin from "../login/controllers/ControllerLogin";

const controllerLogin = new ControllerLogin();

export default {
  name: "login",
  data: () => {
    return {
      email: "",
      senha: "",
      dialog: false,
      dialogEsqueciSenha: false,
      dialogInformativoCad: false,
      snackbar: false,
      text: "",
      snacColor: "",
      overlay: false,
      emailRules: [
        v => !!v || "E-mail é obrigatório",
        v => /.+@.+\..+/.test(v) || "E-mail deve ser valido"
      ]
    };
  },

  watch: {
    email(val) {
      this.email = val.toUpperCase();
    }
  },

  methods: {
    entrar() {
      this.overlay = true;
      const vm = this;

      controllerLogin.logar(this.email, this.senha).then(response => {
        if (response == true) {
          vm.openSnackbar(true, "green", "Logado com sucesso.");
          vm.overlay = false;
          vm.$router.push({ path: "/principal" });
        } else {
          vm.openSnackbar(true, "red darken-1", "Credencias inválidas.");
          vm.email = "";
          vm.senha = "";
          vm.overlay = false;
        }
      });
    },
    fecharDialogInf (){
      this.dialog = true
      this.dialogInformativoCad = false
    },
    openSnackbar(bool, cor, text) {
      this.snackbar = bool;
      this.text = text;
      this.snacColor = cor;
    },
    cadastrar(email, senha) {
      if (this.IsEmail(email)) {
        this.overlay = true;
        const vm = this;
        controllerLogin
          .cadastarUsuario(email, senha)
          .then(response => {
            if (response) {
              vm.openSnackbar(true, "green", "Cadastrado com sucesso.");
              vm.email = "";
              vm.senha = "";
              vm.overlay = false;
              vm.dialog = false;
            } else
              vm.openSnackbar(
                true,
                "red darken-1",
                "Não possível cadastrar um novo usuário."
              );
            vm.overlay = false;
          })
          .catch(error => {
            console.log(error);
          });
      } else
        this.openSnackbar(true, "red darken-1", "Informe um e-mail valido..");
    },
    fecharDiloagCadastro() {
      this.dialog = false;
      this.email = "";
      this.senha = "";
    },
    IsEmail(email) {
      /*eslint-disable */
      let temp = new RegExp(
        /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
      );
      if (temp.test(email)) return true;
      return false;
    },
    pedirSenha(email) {
      this.overlay = true
      const vm = this;
      controllerLogin.pedirSenha(email).then((result) => {
        if(result){
          vm.openSnackbar(true, "green", "E-mail enviado com sucesso.");
          vm.email = ''
          vm.senha = ''
          vm.dialogEsqueciSenha = false
        }
        else{
          vm.openSnackbar(true, "red darken-1", "Não foi possível o envio do e-mail, tente novamente.");
          vm.dialogEsqueciSenha = false
          vm.email = ''
          vm.senha = ''
        }
          vm.overlay = false
      })
      .catch((error) => console.log(error))
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;300;500&display=swap");

* {
  font-family: "Barlow Condensed", sans-serif;
}

#cardInfo{
  font-size: 50px;
}
</style>