<template>
  <div>
    <p>These are 3 of my favorite movies, pick one to reveal the name.</p>
    <hr>
    <ul class="list-group">
      <router-link
        tag="li"
        to="/movies/Big"
        class="list-group-item"
        style="cursor: pointer">
        Movie #1
      </router-link>
      <router-link
        tag="li"
        to="/movies/Sicario"
        class="list-group-item"
        style="cursor: pointer">
        Movie #2
      </router-link>
      <router-link
        tag="li"
        to="/movies/Suspiria"
        class="list-group-item"
        style="cursor: pointer">
        Movie #3
      </router-link>
    </ul>
  </div>
</template>
