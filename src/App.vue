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
      <div class="status-wrap">
        Статус системы<span :class="{ green: (status < 1), yellow: (status >= 1 && status <= 10), red: (status > 10) }"></span>
      </div>
      <div class="button-wrap">
        <button class="btn btn-new" @click="open">
          Добавить инцидент
        </button>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <popup v-if="this.newIncident.show" @click="open" @close="close">
      <new-incident></new-incident>
    </popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
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
  methods: {
    open() {
      const dt = moment().format('DD.MM.YYYY hh:mm:ss');
      this.$store.commit('OPEN_INCIDENT', dt.valueOf());
    },
    close() {
      this.$store.commit('CLOSE_INCIDENT');
    },
  },
  computed: {
    ...mapGetters(['newIncident', 'status']),
  },
  mounted() {

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
  // max-width: 660px;
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

.button-wrap {
  padding-top: 15px;
  padding-right: 20px;
}
.status-wrap {
  text-align: center;
  // width: 100%;
  padding-top: 20px;
  padding-right: 30px;
  font-size: 14px;
  color: rgb(92, 86, 86);
  display: block;
  width: 320px;
  span {
    color: #fff;
    display: inline-block;
    border-radius: 20px;
    width: 20px;
    height: 20px;

    position: relative;
    margin-bottom: -4px;
    margin-left: 4px;
    &.green {
      background: green;
    }
    &.yellow {
      background: rgb(247, 177, 25);
    }
    &.red {
      background: red;
    }
  }
}
</style>
