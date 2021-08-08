<template>
  <div class="home">
    <div class="img-background"></div>

    <img class="img-logo" src="../assets/images/logo.png" />

    <form class="search-container">
      <input type="text" id="search-bar" placeholder="Buscar personaje"  v-on:keyup.enter="filterCharacters()" v-model="textSearch">
      <a href="#"><vs-icon icon="search" class="search-icon" color="#fff" /></a>
  </form>

      <div class="tabs">
        <vs-tabs alignment="fixed" color="#34c759" >
          <vs-tab label="All" class="label-tab" @click="changeTab('all')">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span class="text-favorites">Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0" @click="showFavorites()" href="" />
            <br><br>
            </div>
              <vs-row vs-justify="center" v-if="this.showClearFilter == true">

                <vs-col vs-w="12" >
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" @click="clearFilters()" />
                </vs-col>
              </vs-row>
                <vs-row vs-justify="center" v-if="this.showClearFilter == false">
                <vs-col vs-w="4"  vs-type="flex" vs-justify="center" vs-align="center" v-for="character in Characters" v-bind:key="character.id" >
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image" class="image-characters">
                          <a @click="addFavorites(character)" href="#"><vs-icon icon="stars" :class="classFavorites"  /></a>
                        </vs-col>
                        <a @click="detailCharacter(character)" :href="modal" style="color:black;">
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
                        </a>
                      </div>
                  </vs-card>
                </vs-col>
              </vs-row>

            </div>
          </vs-tab>

          <vs-tab label="Unknown" @click="changeTab('unknown')">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span class="text-favorites">Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0"/>
            <br><br>
            </div>
              <vs-row vs-justify="center" v-if="this.showClearFilter == true">
                <vs-col vs-w="12" >
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" @click="clearFilters()" />
                </vs-col>
              </vs-row>
              <vs-row v-if="this.showClearFilter == false">
                <vs-col vs-w="4" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in UnknownCharacters" v-bind:key="character.id" >
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image" class="image-characters">
                          <a @click="addFavorites(character)" href="#"><vs-icon icon="stars"  class="icon-favorites-img" /></a>
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
          <vs-tab label="Female" @click="changeTab('female')">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span class="text-favorites">Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0"/>
            <br><br>
            </div>
              <vs-row vs-justify="center" v-if="this.showClearFilter == true">
                <vs-col vs-w="12" >
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" @click="clearFilters()" />
                </vs-col>
              </vs-row>
                <vs-row v-if="this.showClearFilter == false">
                <vs-col vs-w="4" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in FemaleCharacters" v-bind:key="character.id" >
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image" class="image-characters">
                          <a @click="addFavorites(character)" href="#"><vs-icon icon="stars"  class="icon-favorites-img" /></a>
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
          <vs-tab label="Male" @click="changeTab('male')">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span class="text-favorites">Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0"/>
            <br><br>
            </div>
              <vs-row vs-justify="center" v-if="this.showClearFilter == true">
                <vs-col vs-w="12" >
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" @click="clearFilters()" />
                </vs-col>
              </vs-row>
                <vs-row v-if="this.showClearFilter == false">
                <vs-col vs-w="4" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in MaleCharacters" v-bind:key="character.id" >
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image" class="image-characters">
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
          <vs-tab label="Genderless" @click="changeTab('genderless')">
            <div>
              <br><br>
            <div class="col-2" style="display: flex">
               <span class="text-favorites">Mostrar Favoritos:</span>
              <vs-icon icon="stars" class="icon-favorites" color="#b0b0b0"/>
            <br><br>
            </div>
              <vs-row vs-justify="center" v-if="this.showClearFilter == true">
                <vs-col vs-w="12" >
                    <h1>Uh-ho!</h1>
                    <h3>¡Pareces perdido en tu viaje!</h3>
                    <input type="submit" class="btn-welcome" value="Eliminar filtros" @click="clearFilters()" />
                </vs-col>
              </vs-row>
                <vs-row v-if="this.showClearFilter == false">
                <vs-col vs-w="4" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in GenderlessCharacters" v-bind:key="character.id" >
                  <vs-card class="characters-cards" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image" class="image-characters">
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
        </vs-tabs>
      </div>

<div id="openModal-about" class="modalDialog">
      <div>
         <a href="#close" title="Close" class="close" @click="closeModal()">X</a>
         <div id="container">
            <div id="hero-img"></div>
            <div id="profile-img">
              <img id="img-profile" :src="fillChararter.image" alt="" />
            </div>
            <div id="content"><br>
              <span>{{fillChararter.status}}</span><br>
              <h3>{{fillChararter.name}}</h3><br>
              <span>{{fillChararter.species}}</span>

            </div>
            <div>
              <vs-row  vs-w="12">
                <vs-col vs-w="2">
                  <h3>Información</h3>
                </vs-col>
              </vs-row>
               <br>
              <vs-row  vs-w="12" class="row-modal">
                <vs-col vs-w="4">
                  <div class="square">
                    <div class="content1">
                      <vs-icon icon="info" class="icon-characters-cards" color="#b0b0b0"/>
                      <span class="text-icon-modal">Gender:</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal">{{fillChararter.gender}}</span>
                    </div>
                  </div>
                </vs-col>
                <vs-col vs-w="4">
                  <div class="square">
                    <div class="content1">
                      <vs-icon icon="info" class="icon-characters-cards" color="#b0b0b0"/>
                      <span class="text-icon-modal">Origin:</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal">{{fillChararter.origin}}</span>
                    </div>
                  </div>
                </vs-col>
                <vs-col vs-w="4">
                  <div class="square">
                    <div class="content1">
                      <vs-icon icon="info" class="icon-characters-cards" color="#b0b0b0"/>
                      <span class="text-icon-modal">Type:</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal">{{fillChararter.type}}</span>
                    </div>
                  </div>
                </vs-col>
              </vs-row>
              <br>
              <vs-divider/>
              <br>
              <vs-row  vs-w="12">
                <vs-col vs-w="2">
                  <h3>Episodios</h3>
                </vs-col>
              </vs-row>
               <br>
                <vs-row  vs-w="12" v-if="this.isArray == false" class="row-modal">
                <vs-col vs-w="3">
                  <div class="square">
                    <div class="content1">
                      <span class="text-icon-modal">{{Episodes.name}}</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal-episode">{{Episodes.episode}}</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal-date">{{Episodes.air_date}}</span>
                    </div>
                  </div>
                </vs-col>
              </vs-row>
               <vs-row  vs-w="12" v-else class="row-modal">
                <vs-col vs-w="3" v-for="episode in Episodes" v-bind:key="episode.id" >
                  <div class="square">
                    <div class="content1">
                      <span class="text-icon-modal">{{episode.name}}</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal-episode">{{episode.episode}}</span>
                    </div>
                    <div class="content1">
                      <span class="text-modal-date">{{episode.air_date}}</span>
                    </div>
                  </div>
                </vs-col>
              </vs-row>
              <br>
              <vs-divider/>
              <br>
              <vs-row  vs-w="12">
                <vs-col vs-w="4">
                  <h3 class="title-interesting-character">Personajes interesantes</h3>
                </vs-col>
              </vs-row>
              <br>
              <vs-row vs-justify="center">
                <vs-col vs-w="6" vs-type="flex" vs-justify="center" vs-align="center" v-for="character in InterestingCharacters" v-bind:key="character.id" >
                  <vs-card class="characters-cards-modal" >
                    <div slot="media">
                        <vs-col vs-w="3">
                          <img :src="character.image">
                            <vs-icon icon="stars" class="icon-favorites-img" />
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
                        <h4 class="name-character-modal">{{character.location.name}}</h4>
                      </div>
                      </div>
                  </vs-card>
                </vs-col>
              </vs-row>
              <br>
              <vs-row>
                <input type="submit" class="btn-personaje" value="Compartir personaje" @click="clearFilters()" />
              </vs-row>
            </div>
          </div>
       </div>
   </div>

<div class="img-background-footer"></div>

 </div>

</template>

<script>
import { misMixins } from './mixins.js'
export default {
  created: function () {
    this.getCharacters()
    this.getmaleCharacters()
    this.getfemaleCharacters()
    this.getunknownCharacters()
    this.getgenderlessCharacters()
  },

  data () {
    return {
      Characters: [],
      MaleCharacters: [],
      FemaleCharacters: [],
      UnknownCharacters: [],
      GenderlessCharacters: [],
      Favorites: [],
      textSearch: '',
      popupDetailCharacter: false,
      fillChararter: {},
      modal: '',
      Episodesid: [],
      Episodes: [],
      isArray: false,
      InterestingCharacters: [],
      classFavorites: 'icon-favorites-img',
      switchTab: 'all',
      Url: '',
      showClearFilter: false

    }
  },

  mixins: [misMixins],

  methods: {
    changeTab (data) {
      this.switchTab = data
    },
    // metodo para limpiar filtro
    clearFilters () {
      this.textSearch = ''
      this.showClearFilter = false
      switch (this.switchTab) {
        case 'all':
          this.getCharacters()
          break
        case 'unknown':
          this.getunknownCharacters()
          break
        case 'female':
          this.getfemaleCharacters()
          break
        case 'male':
          this.getmaleCharacters()
          break
        case 'genderless':
          this.getgenderlessCharacters()
          break
      }
    },
    // obtener todos los personajes
    getCharacters (page) {
      this.loadingOpen()
      this.axios({
        url: 'character?page=' + page,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }).then((result) => {
        this.Characters = result.data.results
        this.loadingClose()
      })
    },
    // filtrar personajes por su nombre
    filterCharacters () {
      switch (this.switchTab) {
        case 'all':
          this.Url = 'character/?name='
          break
        case 'unknown':
          this.Url = 'character/?gender=unknown&name='
          break
        case 'female':
          this.Url = 'character/?gender=female&name='
          break
        case 'male':
          this.Url = 'character/?gender=male&name='
          break
        case 'genderless':
          this.Url = 'character/?gender=genderless&name='
          break
      }
      this.loadingOpen()
      this.axios({
        url: this.Url + this.textSearch,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }).then((result) => {
        this.textSearch = ''
        switch (this.switchTab) {
          case 'all':
            this.Characters = []
            this.Characters = result.data.results
            this.loadingClose()
            break
          case 'unknown':
            this.UnknownCharacters = []
            this.UnknownCharacters = result.data.results
            this.loadingClose()
            break
          case 'female':
            this.FemaleCharacters = []
            this.FemaleCharacters = result.data.results
            this.loadingClose()
            break
          case 'male':
            this.MaleCharacters = []
            this.MaleCharacters = result.data.results
            this.loadingClose()
            break
          case 'genderless':
            this.GenderlessCharacters = []
            this.GenderlessCharacters = result.data.results
            this.loadingClose()
            break
        }
      }).catch(error => {
        if (error) {
          this.loadingClose()
          this.showClearFilter = true
        }
      })
    },
    // obtener todos los personajes hombre
    getmaleCharacters (page) {
      this.axios({
        url: 'character/?gender=male',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.MaleCharacters = result.data.results
      })
    },
    // obtener todos los personajes mujer
    getfemaleCharacters (page) {
      this.axios({
        url: 'character/?gender=female',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.FemaleCharacters = result.data.results
      })
    },
    // obtener todos los personajes de genero desconocido
    getunknownCharacters () {
      this.axios({
        url: 'character/?gender=unknown',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.UnknownCharacters = result.data.results
      })
    },
    // obtener todos los personajes de genero desconocido
    getgenderlessCharacters () {
      this.axios({
        url: 'character/?gender=genderless',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.GenderlessCharacters = result.data.results
      })
    },
    // añadir personaje a favoritos
    addFavorites (character) {
      this.classFavorites = 'icon-favorites-update'
      this.Favorites.push(character)
      this.colorIconFavorites = '#F6C962'
      this.$vs.notify({
        text: 'Personaje añadido a favoritos',
        color: 'success',
        position: 'top-center',
        icon: 'done'
      })
    },
    showFavorites () {
      this.Characters = []
      this.Characters = this.Favorites
    },

    interestingCharacters () {
      // generar numero aleatorio para obtener una lista de personajes diferente
      var num1 = Math.round(Math.random() * (670 - 1) + 1)
      var num2 = Math.round(Math.random() * (670 - 1) + 1)
      // eslint-disable-next-line no-new-object
      var arraynum = [
        num1,
        num2
      ]
      this.axios({
        url: 'character/' + arraynum,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.InterestingCharacters = result.data
      })
    },
    detailCharacter (chararter) {
      this.modal = '#openModal-about'
      this.fillChararter.image = chararter.image
      this.fillChararter.name = chararter.name
      this.fillChararter.status = chararter.status
      this.fillChararter.species = chararter.species
      this.fillChararter.gender = chararter.gender

      // formatear origen
      var formatOrigin = chararter.origin.name.split(' ')
      this.fillChararter.origin = formatOrigin[0]
      this.fillChararter.type = chararter.type

      // obtener id de los episodios
      var arrayEpisodes = chararter.episode
      var format

      for (var i = 0; i < arrayEpisodes.length; i++) {
        format = arrayEpisodes[i].split('episode/')
        this.Episodesid.push(format[1])
      }

      this.axios({
        url: 'episode/' + this.Episodesid,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((result) => {
        this.Episodes = result.data
        this.isArray = Array.isArray(this.Episodes)
      })

      this.interestingCharacters()
    },
    closeModal () {
      this.modal = ''
      this.fillChararter = {}
      this.Episodesid = []
      this.Episodes = []
      this.isArray = false
    }
  }
}
</script>

<style scoped>
/* imagen principal */
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
/* imagen del footer */
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

/* logo rick y morty */
.img-logo {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  width: 300px;
  z-index: 1;
}

.search-container{
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar{
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 50px;
  font-size: 1rem;
  border: 1px solid #fff;
  outline: none;
  border-radius: 5px;
  background-color: #081f32;
  margin-top: 20px;
  color: #fff;
 }

.search-icon{
  position: relative;
  float: left;
  width: 75px;
  height: 75px;
  top: -40px;
  right: 15px;
  font-size: 40px;
  color:#fff !important
}

/* tabs */
.tabs{
  margin-top: 70px;
  background-color: #f2f2f2;
}

.vs-tabs--li button.vs-tabs--btn{
  padding: 20px !important;
}

.line-vs-tabs{
  margin-top: 38px !important;
}

.search{
   margin-left: auto;
  margin-right: auto;
}

.text-favorites{
  margin-left: 40px;
}

/* cards */
.card-horizontal{
    width: 100%;
}

.img-cards{
  height: 150px;
  width: 150px;
  float: left;

}

.image-characters{
  border-radius: 10px 0px 0px 10px;
}

.vs-card--content {
  padding: inherit !important;
}

.characters-cards{

  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 30px;
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
  margin-left: 25px;
  color: #fff;
}

.icon-favorites-update {
    position: absolute;
    margin-top: -40px;
    font-size: 40px;
    margin-left: 25px;
    color: #F7DE5D;
}

/* boton principal */
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

/* card avatar */
#container {
width: 100%;
height: 100%;
margin: 30px auto 0 auto;
background: #FFF;
border-radius: 10px;
box-shadow: 0 0 30px rgba(0,0,0,.3);
-webkit-box-shadow: 0 0 30px rgba(0,0,0,.3);
overflow: hidden;
}

 #hero-img {
width: 100%;
height: 200px;
background: url('../assets/images/fondo-avatar.jpg') no-repeat center center;
background-size: cover;
}

#profile-img {
width: 160px;
height: 160px;
margin: -80px auto 0 auto;
border: 6px solid #FFF;
border-radius: 50%;
box-shadow: 0 0 5px rgba(90,90,90,.3);
}

#img-profile {
width: 100%;
background: #FFF;
border-radius: 50%;
}

#content {
text-align: center;
width: 320px;
margin: 0 auto;
padding: 0 0 50px 0;
}

h1 {
font-size: 29px;
font-weight: 500;
margin: 20px 0 0 0;
}

.vs-popup--content {
  padding: 0px !important;
}
.popup-content {
  padding: 0px !important;
}

/* modal */
.modalDialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;
    pointer-events: none;
    overflow-y: scroll;
}
.modalDialog:target {
    opacity:1;
    pointer-events: auto;
}
.modalDialog > div {
    max-width: 1200px;
    width: 100%;
    position: relative;
    margin: 10% auto;
    border-radius: 3px;
    background: #fff;
}
.close {
    font-family: Arial, Helvetica, sans-serif;
    background: #f26d7d;
    color: #fff;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 34px;
    height: 34px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
    padding-top: 5px;
}
.close:hover {
    background: #fa3f6f;
}

.row-modal{
  margin-left:30px;
}

.square {
  position: relative;
  width: 60%;
  border: 1px solid #b0b0b0;
  border-radius: 7px;
  height: 70px;
  margin-left: 15px;
  margin-bottom: 20px;
}

.square:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.content1 {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
}
.text-icon-modal{
  margin-left: 3px;
  margin-top: 8px;
  font-size: 15px;
  color: #b0b0b0;
}

.text-modal{
  margin-top: 30px;
  margin-left: 10px;
  font-size: 18px;
}
.text-modal-episode{
  margin-top: 30px;
  margin-left: 3px;
  font-size: 18px;
}

.text-modal-date{
  margin-top: 50px;
  margin-left: 3px;
  font-size: 15px;
  color: #b0b0b0;
}

.characters-cards-modal{

  margin-left: 40px;
  margin-right: 40px;
}

.name-character-modal{
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}
.btn-personaje{
  display: block;
  width: 200px;
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
  margin-right: 20px;
}
.title-interesting-character{
  margin-right: 100px;
}
</style>
