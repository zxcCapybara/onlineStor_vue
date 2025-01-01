<template>
  <header class="flex items-center justify-center p-3 bg-[#252525]">
    <div class="flex justify-between items-center w-full container">
      <router-link to="/">
        <img class="w-14 h-14 rounded-full" src="@/assets/logo.png" alt="logo" />
      </router-link>

      <div class="flex items-center gap-3">
        <router-link to="/favorites">
          <vue-feather class="cursor-pointer" type="heart" />
        </router-link>
        <router-link to="/cart">
          <vue-feather class="cursor-pointer" type="shopping-cart" />
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup></script>
