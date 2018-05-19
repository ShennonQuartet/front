<template>
  <div id="app">
    <div class="panel">
      <div class="logo">
        <img src="./assets/logo.png">
      </div>
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/">Торпеда</router-link></li>
        <li class="nav-item"><router-link to="/incidents">Инциденты</router-link></li>
      </ul>
      <div class="button-wrap">
        <button class="btn btn-new" @click="show = !show">
          Добавить инцидент
        </button>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <popup v-if="show" @click="show = !show" @close="show = !show">
      <new-incident></new-incident>
    </popup>
  </div>
</template>

<script>
import Popup from './components/Popup';
import NewIncident from './components/NewIncident';

export default {
  name: 'App',
  components: {
    Popup,
    NewIncident,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.panel {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;

  .logo {
      padding: 20px;
      padding-bottom: 15px;
      padding-right: 40px;
  }
}
.nav-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  line-height: 67px;
  height: 67px;
  display: flex;
  font-size: 14px;
  width: 100%;
  vertical-align: bottom;
  .nav-item {
    display: inline-block;
    margin-right: 20px;
    a {
      display: block;
      line-height: 67px;
      height: 67px;
      color: #333;
      text-decoration: none;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 3px solid transparent;
      }
      &:hover::after {
          border-bottom-color: #bbb;
      }
    }
    a.router-link-exact-active {
      &::after {
        border-bottom-color: #0a8c92;
      }
    }
  }
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-new {
  font-weight: 500;
  color: #0a8c92;
  border-color: #0a8c92;
  &:hover{
    background: #0a8c92;
    color: #fff;
    cursor: pointer;
  }
}
.button-wrap {
  padding-top: 15px;
  padding-right: 20px;
}

</style>
