//Componentes de Vue
const {createApp, ref} = Vue;

//Funcion que crea una instancia de Vue.
const app = createApp({
    //Tipo de configuración cuando la app se monta
    setup(){
        //Uso de ref para crear una VARIABLE REACTIVA
        const message = ref("I'm batman") //Convierte message a variable reactiva.
        const author = ref("Batman")

        //Funcion para controlar el boton en nuestro HTML.
        const changeQuote = ()=>{
            message.value = "Hola, Soy Goku"
            author.value = "Goku"
        }
        return{
            message, author, changeQuote
        }
    }


})

//Montar nuestra constante app en el ID= # nombre del id= myApp
app.mount('#myApp')