<template>
  <Layout title="Курсы">
      <CourseFilter :id = "id"/>
  </Layout>
</template>


<script>

import Layout from '@/components/Layout/Layout';
import CourseFilter from '@/components/CourseFilter/CourseFilter';

export default {
  name: "CourseFiltered",
  props: {
    id: String,
  },
  components: {
    Layout, CourseFilter
  }
}
</script>

<style scoped>

</style>