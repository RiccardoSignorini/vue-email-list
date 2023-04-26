/*
---PROBLEMA---
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// INTESTAZIONE VUE
const {createApp} = Vue

createApp({
    data() {
        return{
            // VARIABILI
            randomEmail: []
        }
    },

    mounted() {
        for(i=0; i<10; i++){
           this.emailRandom()
        }
    },	

    methods: {
        // FUNZIONI
        emailRandom(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(email=>{
                console.log(email.data.response)
                this.randomEmail.push(email.data.response)
            })  
        }
    }
}).mount('#app')