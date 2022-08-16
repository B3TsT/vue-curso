const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p>Desde app.js</p>
    // `

    data() {
        return {
            quote: "i'm batman",
            author: 'Bruce Wayne',
            message: 'Hola mundo!!'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo methods')
            this.author = 'Francisco'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})


app.mount('#myApp')