<template>
  <div>
    <h2>My Favorite Movies</h2>
    <hr>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>



<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>

