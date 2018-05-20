<template>
  <div>
    <h1>Добавить инцидент</h1>

    <label>Выберите инцидент:</label>
      <div>
        <input type="radio" value="1" v-model="picked" id="one" checked='true'> <label for="one">Остановка</label>
      </div>
      <div>
        <input type="radio" value="2" v-model="picked" id="two"> <label for="two">Вибросито</label> <!-- вибросиэто -->
      </div>
      <div class="form-edit">
        <label>Дата время</label>
        <input type="text" v-model='dt'>
      </div>
      <button class="btn btn-new" @click.prevent="send">
        Добавить
      </button>
  </div>
</template>
<script>
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
  name: 'NewIncident',
  data() {
    return {
      picked: 1,
      dt: '',
    };
  },
  computed: {
    ...mapGetters(['newIncident']),
  },
  mounted() {
    this.dt = this.newIncident.dateTime;
  },
  methods: {
    send() {
      let type = 0;
      if (this.picked === 1) {
        type = 'stop';
      } else {
        type = 'vibr';
      }
      const datetime = moment(this.dt, 'DD.MM.YYYY hh:mm:ss').format('YYYY-MM-DDThh:mm:ss');

      this.$api.sendIncident({
        type,
        datetime,
        user: {
          pk: 1,
        },
      })
        .then((res) => {
          console.log('rere', res);
          this.$store.commit('CLOSE_INCIDENT');
        });
    },
  },
};
</script>
<style>
textarea, input[type=text] {
  background: #FFFFFF;
  border: none;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
  min-height: 30px;
  max-height: 400px;
  border: 1px solid #e8e8e8;
}
.text-input {
  display: block;
}
.form-edit {
  margin-bottom: 10px;
}
</style>
