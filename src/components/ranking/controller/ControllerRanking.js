import axios from "axios";

export default class ControllerRanking {
  carregarRanking() {
      return new Promise((resolve, reject) => {
          axios
            .get("http://paralisiabackend-com-br.umbler.net/carregarRanking")
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
      axios.get('http://paralisiabackend-com-br.umbler.net/atualizaPontos', {
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
