<template>
  <div class="welcome">
    <div class="img-background"></div>
      <img class="img-logo" src="../assets/images/logo.png" />

      <h1 class="title">Bienvenido a Rick and Morty</h1>
      <br>
      <p class="text">En esta prueba, evaluaremos su capacidad para construir la aplicación mediate el análisis de código y la reproducción del siguiente diseño.</p>

      <router-link to="/home"><input type="submit" class="btn-welcome" value="Continuar" /></router-link>
  </div>
</template>

<script>
</script>

<style scoped>
.img-background {
  background-image: url("../assets/images/fondo.jpg");
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  filter: brightness(0.4);
  z-index: -1;
}

.img-logo {
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  z-index: 1;
}

.btn-welcome{
  display: block;
  width: 120px;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #11555f, #11555f, #11555f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
  margin-left: auto;
  margin-right: auto;
}

.title{
  color: #fff;
  font-weight: normal;
  font-size: 40px;
}

.text{
  color: #fff;
  font-size: 20px;
}

</style>
