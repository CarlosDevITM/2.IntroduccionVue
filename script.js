//Componentes de Vue
const {createApp, ref} = Vue;

//Funcion que crea una instancia de Vue.
const app = createApp({
    //Plantilla de prueba
    template: `
        <h1>Hola mundo</h1>
        <p>Desde app.js</p>
    `
})

//Montar nuestra constante app en el ID= # nombre del id= myApp
app.mount('#myApp')