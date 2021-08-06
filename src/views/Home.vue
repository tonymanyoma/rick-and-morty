<template>
  <div class="home">
    <div class="img-background"></div>

    <img class="img-logo" src="../assets/images/logo.png" />

    <vs-input icon="search" class="search" color="#34c759" placeholder="Buscar personaje" v-model="textSearch" />

      <div class="tabs">
        <vs-tabs alignment="fixed" color="#34c759" >
          <vs-tab label="All" class="label-tab">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span >Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0"/>
            <br><br>
            </div>
              <vs-row vs-justify="center">
                <vs-col vs-w="12" v-if="characterFilter == ''">
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" />
                </vs-col>
                <vs-col vs-w="4" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in characterFilter" v-bind:key="character.id" v-else>
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image">
                          <a @click="addFavorites(character)" href="#"><vs-icon icon="stars" class="icon-favorites-img" /></a>
                        </vs-col>
                        <div class="col-2" style="display: flex">
                          <vs-icon icon="circle" class="icon-characters-cards" color="#34c759" v-if="character.status == 'Alive'"/>
                          <vs-icon icon="circle" class="icon-characters-cards" color="red" v-else/>
                          <span class="text-character">{{character.status}}-{{character.species}}</span>
                        </div>
                      <div class="col-2">
                        <h4 class="name-character">{{character.name}}</h4>
                      </div><br><br>
                      <div class="col-2">
                        <span class="title-character">Last known location:</span>
                      </div><br><br>
                      <div class="col-2">
                        <h4 class="name-character">{{character.location.name}}</h4>
                      </div>
                      </div>
                  </vs-card>
                </vs-col>
              </vs-row>

            </div>
          </vs-tab>

          <vs-tab label="Unknown">
            <div>

            </div>
          </vs-tab>
          <vs-tab label="Female">
            <div>

            </div>
          </vs-tab>
          <vs-tab label="Male">
            <div>

            </div>
          </vs-tab>
          <vs-tab label="Genderless">
            <div>

            </div>
          </vs-tab>
        </vs-tabs>
      </div>

      <div class="img-background-footer"></div>

  </div>
</template>

<script>

export default {
  created: function () {
    var page = Math.round(Math.random() * (34 - 1) + 1)
    this.getCharacters(page)
    this.getCharactersMale(page)
  },

  data () {
    return {
      Characters: [],
      CharactersMale: [],
      Favorites: [],
      textSearch: ''
    }
  },
  computed: {
    characterFilter: function () {
      var textSearch = this.textSearch
      return this.Characters.filter(function (el) {
        return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1
      })
    }

  },
  methods: {
    getCharacters (page) {
      this.axios({
        url: 'https://rickandmortyapi.com/api/character?page=' + page,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.Characters = result.data.results
      })
    },
    getCharactersMale (page) {
      this.axios({
        url: 'https://rickandmortyapi.com/api/character/?gender=male',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.CharactersMale = result.data.results
      })
    },
    addFavorites (character) {
      this.Favorites.push(character)
      this.$vs.notify({
        text: 'Personaje añadido a favoritos',
        color: 'success',
        position: 'top-center',
        icon: 'done'
      })
    }
  }
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

.img-background-footer{
  background-image: url("../assets/images/fondo.jpg") ;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  filter: brightness(0.4);
  z-index: -1;
}

.tabs{
  margin-top: 110px;
  background-color: #f2f2f2;
}

.vs-tabs--li button.vs-tabs--btn{
  padding: 20px !important;
}

.line-vs-tabs{
  margin-top: 38px !important;
}
.img-logo {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  width: 300px;
  z-index: 1;
}

.search{
   margin-left: auto;
  margin-right: auto;
}

.card-horizontal{
    width: 100%;
}

.img-cards{
  height: 150px;
  width: 150px;
  float: left;

}

.vs-card--content {
  padding: inherit !important;
}

.characters-cards{

  margin-right: 40px;
}

.icon-characters-cards{
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 15px;
}

.text-character{
  margin-top: 10px;
  margin-left: 5px;
  color: #b0b0b0;
  font-size: 15px;
}

.name-character{
  float: left;
  margin-top: 10px;
  margin-left: 12px;
}
.title-character{
  float: left;
   margin-top: 10px;
  margin-left: 12px;
  color: #b0b0b0;
  font-size: 15px;
}
.icon-favorites{
  margin-left: 5px;
  margin-bottom: 40px;
  margin-top: -10px;
  font-size: 40px;
}
.icon-favorites-img{
  position: absolute;
  margin-top: -40px;
  font-size: 40px;
  margin-left: 30px;
  color: #fff;
}

.btn-welcome{
  display: block;
  width: 150px;
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
</style>
