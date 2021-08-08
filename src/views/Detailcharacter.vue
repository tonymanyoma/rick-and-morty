<template>
<div>
    <h1>hola</h1>
    <!-- <div id="container">
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
                <input type="submit" class="btn-personaje" value="Compartir personaje"  />
              </vs-row>
            </div>
          </div> -->
</div>
</template>

<script>
export default {

  created: function () {
    console.log(this.id)
  },
  props: ['id']
}
</script>
