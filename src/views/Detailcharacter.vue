<template>
<div>
    <div id="container">
            <div id="hero-img"></div>
            <div id="profile-img">
              <img id="img-profile" :src="this.image" alt="" />
            </div>
            <div id="content"><br>
              <span>{{this.status}}</span><br>
              <h3>{{this.name}}</h3><br>
              <span>{{this.species}}</span>

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
                      <span class="text-modal">{{this.gender}}</span>
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
                      <span class="text-modal">{{this.origin}}</span>
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
                      <span class="text-modal">{{this.type}}</span>
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
          </div>
</div>
</template>

<script>
export default {

  created: function () {
    console.log(this.id)
  },
  data () {
    return {

    }
  },
  props: ['id']
}
</script>
<style>
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
