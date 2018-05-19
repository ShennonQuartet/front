<template>
  <div class="wrap">
    <div class="backdrop" @click.stop="$emit('close')"></div>
    <div class="content container mx" @click.stop >
      <div class="">
        <div class="close-button" @click.self="$emit('close')"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
.wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.65);
  z-index: 11022;
  overflow-y: scroll;
}

.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11033;
  cursor: pointer;
}

.content {
  transform-origin: left top 0px;
  transition: transform .3s cubic-bezier(0.4, 0, 0.22, 1);
  z-index: 11034;
}

.container {
  position: relative;
  background: white;
  padding: 25px;
  margin-top: 40px;
}

.close-button {
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 15px;
  top: 10px;
  border-radius: 50%;
  $size: 13px;
  $left: 13px;
  $top: 13px;
  $width: 2px;
  $color: rgb(145, 145, 145);
  transform: rotate(45deg);
  &::before{
    content: '';
    display: block;
    position: absolute;
    left: $left - $size/2 ;
    top: $top;
    height: 0px;
    width: $size;
    border-bottom: $width solid $color;
  }
  &::after{
    content: '';
    display: block;
    position: absolute;
    left: $left ;
    top: $top - $size/2 ;
    width: 0px;
    height: $size;
    border-left: $width solid $color;
  }
}

.fancy-box-image-wrapper img {
  max-width: 100%;
  max-height: 100%;
}

.fancy-enter,
.fancy-leave-active {
  opacity: 0;
}

.fancy-enter-active,
.fancy-leave-active {
  transition: .2s;
}
.mx {
  max-width: 700px;
}
</style>
