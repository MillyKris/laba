<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <CourseForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/courses/selectors';
import CourseForm from '@/components/CourseForm/CourseForm';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'CourseEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    CourseForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, img_path, name, teacher, program, cost }) => id ?
          updateItem(store, { id, img_path, name, teacher, program, cost }) :
          addItem(store, { img_path, name, teacher, program, cost } )
    }
  }

}
</script>

