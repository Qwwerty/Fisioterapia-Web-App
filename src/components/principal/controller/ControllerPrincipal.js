import axios from 'axios'

export default class ControllerPrincipal {

    atualizarSenha (email, senha) {
        return new Promise((resolve, reject) => {
            axios.put('http://paralisiabackend-com-br.umbler.net/usuarios/' + email.toUpperCase(), {
                senha: senha
            })
            .then((result) => {
                if(result.data.status == true)
                    resolve(true)
                else
                    resolve(false)
            })
            /* eslint-disable */ 
            .catch((error) => {
                resolve(false)
                reject(false)
            })
        })
    }

}