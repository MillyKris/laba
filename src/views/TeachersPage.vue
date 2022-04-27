<template>
  <Layout title="Преподаватели">
    <TeacherList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import TeacherList from '@/components/TeacherList/TeacherList';

export default {
  name: 'TeachersPage',
  components: {
    Layout,
    TeacherList,
  }
}
</script>
