<template>
  <h2>{{customTitle}}</h2>
  <p> {{counterData}} <sup>2</sup> = {{squareCounter}}</p>
  <p data-testid="counter"> {{counterData}}</p>

  <div class="buttons-container">
    <button @click="increase()">+1</button>
    <button  @click="decrease()">-1</button>
  </div>
</template>

<script>

export default {
    props: {
        titulo: String,
        start: {
            type: Number,
            default: 100,
            validator(value){
                return value >= 0
            }
            // required: true
        }  
    },
    // name: 'patito'
    data() {
        return {
            counterData: this.start
        }
    },
    methods: {
        getSquareValue(){
            console.log('getSquareValue')
            return this.counterData * this.counterData
        },
        increase(){
            this.counterData++
        },
        decrease(){
            this.counterData--
        }
    },
    computed: {
        squareCounter(){
            console.log('Computed squareCounter')
            return this.counterData * this.counterData
        },
        customTitle(){
            return this.titulo || 'Counter'
        }
    },
}
</script>

<style>

button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0, 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}
button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>