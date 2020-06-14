import axios from "axios";

export default class ControllerLogin {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  cadastarUsuario(email, senha) {
    return new Promise((resolve, reject) => {
      axios
      .post('http://192.168.0.104:3000/usuarios', {
     // .post("http://paralisia-backend-com-br.umbler.net/usuarios", {
        email: email,
        senha: senha,
      })
       /* eslint-disable */ 
      .then(function(response) {
        resolve(true);
      })
      .catch(function(error) {
        console.log(error);
        reject(false)
      });
    })
  }

  logar(email, senha) {
    return new Promise((resolve, reject) => {
      axios
        .post('http://192.168.0.104:3000/autenticate', {
        // .post("http://paralisia-backend-com-br.umbler.net/autenticate", {
          email: email,
          senha: senha,
        })
        .then(function(response) {
          if (response.data.status == "ok") {
            localStorage.setItem("email", response.data.data.email);
            resolve(true)
          } else resolve(false);
        })
        .catch(function(error) {
          console.log(error);
          resolve(false)
          reject(false);
        });
    });
  }

  pedirSenha(email){
    return new Promise((resolve, reject) => {
      axios
      .post('http://192.168.0.104:3000/pedirSenha', {
     // .post("http://paralisia-backend-com-br.umbler.net/pedirSenha", {
        email: email
      })
       /* eslint-disable */ 
      .then(function(response) {
        resolve(true);
      })
      .catch(function(error) {
        console.log(error);
        reject(false)
      });
    })
  }
}
