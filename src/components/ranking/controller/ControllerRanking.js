import axios from "axios";

export default class ControllerRanking {
  carregarRanking() {
      return new Promise((resolve, reject) => {
          axios
            .get("http://192.168.0.104:3000/carregarRanking")
            .then(function(response) {
              resolve(response.data)
            })
            .catch(function(error) {
              reject(null)
              console.log(error);
            });
      })
  }

  atualizarPontuacao (email) {
    return new Promise((resolve, reject) => {
      axios.get('http://192.168.0.104:3000/atualizaPontos', {
        params: {
          email: email
        }
      }).then(result => {
        if(result.data)
          resolve(true)
        else
          resolve(false)
      }) 
      .catch((error) => {
        console.log(error);
        resolve(false)
        reject(false)
      })
    })
  }
}
