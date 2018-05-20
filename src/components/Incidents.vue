<template>
  <div class="hello">
    <h1>Инциденты</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Дата и время</th>
          <th scope="col">Кем зарегистрирован</th>
          <th scope="col">Тип</th>
          <th scope="col">Подтверждение</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of incidents" :key="item.pk">
          <td scope="row">{{item.datetime}}</td>
          <td><span v-if="item.user">{{item.user.username}}</span><span v-else>system</span></td>
          <td v-if="item.type === 'stop'">Остановка</td>
          <td v-else >Вибросито</td>
          <td v-if="item.confirmed" class="confirmed">Подтвержден</td>
          <td v-else class="refused">Не подтвержден</td>
          <td><button class="btn btn-confirm" @click.prevent="confirm(item)">Подтвердить</button> <button class="btn btn-refuse" @click.prevent=refuse(item)>Отклонить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from './LineChart';

export default {
  components: {
    LineChart,
  },
  name: 'Dashboard',
  data() {
    return {

    };
  },
  methods: {
    confirm(item) {
      item.confirmed = true;
      this.$api.editIncident(item)
        .then((res) => {
          console.log('res', res);
        });
    },
    refuse(item) {
      item.confirmed = false;
      this.$api.editIncident(item)
        .then((res) => {
          console.log('res', res);
        });
    },
  },
  computed: {
    ...mapGetters(['incidents']),
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scope>
  @import 'src/assets/scss/functions.scss';

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: $spacer;
  background-color: $table-bg; // Reset for nesting within parents with `background-color`.

  th,
  td {
    padding: $table-cell-padding;
    vertical-align: top;
    border-bottom: $table-border-width solid $table-border-color;

  }
  td {
    font-weight: 400;
    font-size: 13px;
    color: rgba(0,0,0,0.87);
    line-height: 15px;
    &.confirmed {
      color: green;
    }
    &.refused {
      color: gray;
    }
  }
  thead th {
    vertical-align: bottom;
    border-top: none;
    font-weight: 400;
    font-size: 14px;
    color: #505E77;
    line-height: 15px;
  }

  .table {
    background-color: $body-bg;
  }
}
.btn-confirm {
  font-weight: 500;
  color: #0a9221;
  border-color: #0a9221;
  &:hover{
    background: #0a9221;
    color: #fff;
    cursor: pointer;
  }
}
.btn-refuse {
  font-weight: 500;
  color: #920a0a;
  border-color: #920a0a;
  &:hover{
    background: #920a0a;
    color: #fff;
    cursor: pointer;
  }
}
</style>
