<template>
  <div id="app">
    <b-container>
      <b-col cols="6" offset="3">
        <b-card class="mt-2 card-background">
          <b-row class="justify-content-between mx-2">
            <div class="border px-4 py-2">
              {{ currentClip }}
            </div>
            <b-form-checkbox v-model="power" switch size="lg" class="good-text">
              Power
            </b-form-checkbox>
          </b-row>
          <b-row class="mx-2 mt-4">
            <label for="volume">Volume</label>
            <b-form-input v-model="volume" type="range" class="custom-range" min="0" max="1" step="0.01" id="volume"/>
          </b-row>
        </b-card>
        <b-card class="mt-2">
          <b-row class="justify-content-center">
            <div 
              :class="['sound-button border m-1  card unselectable', 
                power ? 'border-warning' : 'sounds-disabled']"
              v-for="clip in clips"
              :key="clip.name"
              @click="playClip(clip, volume)"
            >
              {{clip.name}}
            </div>
          </b-row>
        </b-card>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import clips from './clips'

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      clips,
      power: true,
      currentClip: "",
      volume: 0.5
    }
  },
  methods: {
    playClip({name, url}, volume){
      if(this.power){
        let s = new Audio(url)
        s.volume = volume
        s.play()
        this.currentClip = name
      }
    }
  }
}
</script>

<style lang="scss">
.sound-button {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
}
.sounds-disabled{
  border-color: gray !important;
  background: lightgray;
  &:hover {
    cursor: not-allowed;
  }
  text-emphasis: none;
}
.unselectable {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
}

.card-background {
  background-blend-mode: soft-light;
  background-color:thistle;
}

.good-text {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
</style>
