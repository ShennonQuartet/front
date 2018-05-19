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
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of incidents" :key="item.id">
          <td scope="row">{{item.datetime}}</td>
          <td>{{item.who}}</td>
          <td>{{item.type}}</td>
          <td v-if="item.confirmed" class="confirmed">Подтвержден</td>
          <td v-else class="refused">Отклонен</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  components: {
    LineChart,
  },
  name: 'Dashboard',
  data() {
    return {
      incidents: [
        {
          id: 0,
          datetime: '21.12.2017 11:54',
          who: 'Оператор',
          type: 'Остановка',
          confirmed: true,
        },
        {
          id: 1,
          datetime: '22.12.2017 11:54',
          who: 'Система',
          type: 'Вибросито',
          confirmed: true,
        },
        {
          id: 2,
          datetime: '23.12.2017 11:54',
          who: 'Система',
          type: 'Остановка',
          confirmed: false,
        },
      ],
    };
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
      color: red;
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

</style>
