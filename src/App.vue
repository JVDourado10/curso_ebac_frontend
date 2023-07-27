<script setup>
  import { reactive } from 'vue';

  const state = reactive ({
    filtro: '+',
    num1: 0,
    num2: 0,
    resultado: 0
  })

  function attNum1(evento) {
    state.num1 = evento.target.value;
    calcula()
  }

  function attNum2(evento) {
    state.num2 = evento.target.value;
    calcula()
  }


  function calcula() {
    if(state.filtro === '+') {
      state.resultado = +state.num1 + +state.num2;
    } else if(state.filtro === '-'){
      state.resultado = state.num1 - state.num2;
    } else if(state.filtro === 'x'){
      state.resultado = state.num1 * state.num2;
    } else {
      state.resultado = state.num1 / state.num2;
    }
  }

  function mudaFiltro(event) {
    state.filtro = event.target.value
    calcula()
  }
</script>

<template>
  <header>
    <h1>Calculadora Aritmética</h1>
  </header>
  <main>
    <div class="container">
      <input @keyup="attNum1" id="num1" type="number">
      <select @change="mudaFiltro" name="operador" id="operador">
        <option>+</option>
        <option>-</option>
        <option>x</option>
        <option>/</option>
      </select>
      <input @keyup="attNum2" id="num2" type="number">
      <p>= {{state.resultado}}</p>



    </div>
  </main>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #000;
  }
  header h1 {
    color: #fff;
    text-align: center;
    padding: 20px;
  }

  .container {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    gap: 8px;
  }
  input, select{
    width: 100px;
    height: 100px;
    font-size: 60px;
    text-align: center;
  }
  p {
    font-size: 60px;
    text-align: center;
    align-self: center;
  }

</style>
