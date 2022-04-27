<template>
  <h3>{{this.id}}</h3>
  <div :class="$style.root">
    <Table parentComponent = 'course'
           :headers="[
        {value: 'id', text: 'ID'},
        {value: 'name', text: 'Название'},
        {value: 'teacher', text: 'Преподаватель'},
        {value: 'program', text: 'Программа'},
        {value: 'cost', text: 'Стоимость'},
        {value: 'control', text: 'Действие'},
      ]"
           :items="items"
    >
      <template v-slot:control="{ item }">
        <Btn @click="onClickEdit(item.id)" theme="info">Изменить</Btn>
        <Btn @click="onClickRemove(item.id)" theme="danger">Удалить</Btn>
      </template>
    </Table>
    <router-link :to="{ name: 'CourseEdit' }">
      <Btn :class="$style.create" theme="info">Создать</Btn>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { selectFilteredItems, removeItem, fetchItems } from '@/store/courses/selectors';
import Table from '@/components/Table/Table';
import Btn from '@/components/Btn/Btn';

export default {
  name: "CourseFilter",
  props:{
    id:String,
  },
  components: {
    Table,
    Btn,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      fetchItems(store);
    });
    return {
      items: computed(() => selectFilteredItems(store)),
      onClickRemove: id => {
        const isConfirmRemove = confirm('Вы действительно хотите удалить запись?')
        if (isConfirmRemove) {
          removeItem(store, id)
        }
      },
      onClickEdit: id => {
        router.push({ name: 'CourseEdit', params: { id } })
      }
    }
  }

}
</script>
<style module lang="scss">
.root {

  .create {
    margin-top: 16px;
  }

}
</style>


<style scoped>

</style>