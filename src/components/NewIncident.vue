<template>
  <div>
    <h1>Добавить инцидент</h1>

    <label>Выберите инцидент:</label>
      <div>
        <input type="radio" value="1" v-model="picked" id="one"> <label for="one">Ошибка</label>
      </div>
      <div>
        <input type="radio" value="2" v-model="picked" id="two"> <label for="two">Вибросито</label>
      </div>
      <div class="form-edit">
        <label>Дата время</label>
        <input type="text">
      </div>
      <button class="btn btn-new">
        Добавить
      </button>
  </div>
</template>
<script>
export default {
  name: 'NewIncident',
  data() {
    return {
      picked: {},
    };
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
