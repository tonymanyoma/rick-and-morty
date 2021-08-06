<template>
  <div class="home">
    <div class="img-background"></div>

      <vs-tabs alignment="fixed">
      <vs-tab label="Home">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Documents">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.img-background {
  background-image: url("../assets/images/fondo.jpg") ;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  filter: brightness(0.4);
  z-index: -1;
}
</style>
