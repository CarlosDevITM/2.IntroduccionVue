//Componentes de Vue
const {createApp, ref} = Vue;

//Funcion que crea una instancia de Vue.
const app = createApp({
    //Plantilla de prueba
    template: `
        <!-Doble llave usada para referenciar el message -->
        <h1>{{message}}</h1>
        <p>{{author}}</p>
    `
    //Inicio del compositionAPI
    //Tipo de configuración cuando la app se monta
    ,setup(){
        //Uso de ref para crear una VARIABLE REACTIVA
        const message = ref("I'm batman") //Convierte message a variable reactiva.
        const author = ref("Bruce Wayne")

        setTimeout(() => {
            //Al ser una variable reactiva, esta tiene propiedades como value, por lo que ya no estamos cambiando el valor de una constante
            message.value = 'Soy Goku'
            author.value = 'Goku'
        },1000)
        //Return que expone lo que haya dentro de el a la página.
        return{
            message, author
        }
    }


})

//Montar nuestra constante app en el ID= # nombre del id= myApp
app.mount('#myApp')