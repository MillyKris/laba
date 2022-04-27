<template>
  <button :disabled="disabled"  :class="[$style.root, $style[theme]]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    theme: String,
    disabled: Boolean,
  }
}
</script>

<style module lang="scss">

.root {
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  & + .root {
    margin-left: 8px;
  }

  &[disabled] {
    cursor: default;
    pointer-events: none;
    background: #c8cccc;
  }
}

.danger {
  background-color: #DF008D;
  &:hover {
    background-color: #9B0363;
  }
}

.info {
  background-color: #0e62e3;
  &:hover {
    background-color: #0148B3;
  }
}

</style>
