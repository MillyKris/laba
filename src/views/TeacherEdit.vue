<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <TeacherForm
        :id="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/teachers/selectors';
import Layout from '@/components/Layout/Layout';
import TeacherForm from '@/components/TeacherForm/TeacherForm';
export default {
  name: 'TeacherEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    TeacherForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, teacher}) => id ?
          updateItem(store, { id,teacher}) :
          addItem(store, { teacher}),
    };
  }
}
</script>

