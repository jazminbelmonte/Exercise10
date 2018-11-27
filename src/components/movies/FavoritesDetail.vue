<template>
  <div>
    <p>The title of this movie is: {{$route.params.id}}</p>
    <div class="col-md-12" v-for="(poster,index) in posters" :key="index">
      <div v-if="$route.params.id == poster.pid">
        <h1>{{poster.title}}</h1>
        <img :src="poster.image" height="700" width="510">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        posters:[
          { pid: "Big",
            image: require('../../assets/Big.jpg')
          },
          { pid: "Sicario",
            image: require('../../assets/Sicario.jpg')
          },
          { pid: "Suspiria",
            image: require('../../assets/Suspiria.jpg')
          }
        ]
      }
    }
  }
</script>
