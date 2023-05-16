<template>
  <div class="header">
    <p>LOGO</p>
    <div class="container">
      <div class="wrap">
        <img src="../assets/Type=google, name=zoom-out-map-rounded.svg" alt="" />
      </div>
      <div class="wrap">
        <img src="../assets/Type=google, name=Account.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  background: linear-gradient(90deg, #416eb6 0%, #715ca8 100%);
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  p {
    width: 113px;
    height: 54px;
    font-size: 40px;
  }
  .container {
    position: absolute;
    right: 0;
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    background: none;
    .wrap {
      width: 30px;
      height: 30px;
      object-fit: cover;
      background: none;
      img {
        width: 100%;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%)
          contrast(102%);
      }
    }
  }
}
</style>
