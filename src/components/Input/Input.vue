<template>
  <input v-model = "name" :class="$style.input" :id="id" :placeholder="placeholder" >
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String,
    id: String,
  }
}
</script>

<style module lang="scss">
.root {

}
.input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
