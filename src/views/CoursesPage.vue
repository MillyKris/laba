<template>
  <Layout title="Курсы">
    <CourseList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import CourseList from '@/components/CourseList/CourseList';

export default {
  name: 'Courses',
  components: {
    Layout,
    CourseList,
  }
}
</script>
