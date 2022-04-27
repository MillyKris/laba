<template>
  <div :class="$style.root">
    <table v-if="items.length" :class="$style.table">
      <thead :class="$style.head">
        <tr :class="$style.row">
          <th v-for="{ value, text } in headers" :key="value">
            {{ text }}
          </th>
      </tr>
      </thead>
      <tbody :class="$style.body">
        <tr v-for="(item, idx) in items" :key="idx">

          <td v-for="(key, idx) in colKeys" :key="idx" >
           <slot :name="key" v-bind="{ item }" v-if = "parentComponent === 'teacher' && idx == 1">
             <p style = "font-weight: bold; cursor:pointer;" @click = "goToFilter(item['id'])"> {{item[key]}}</p>
            </slot>
            <slot :name="key" v-bind="{ item }" v-if = "parentComponent !== 'teacher' || idx != 1">
              {{item[key]}}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import {useRouter} from "vue-router";

export default {
  name: 'Table',
  props: {
    items: Array,
    headers: Array,
    parentComponent:String,
  },
  computed: {
    colKeys() {
      return this.headers.map(({ value }) => value);
    }
  },

  setup() {
    const router = useRouter();
    return {
      goToFilter:  id  => {
        router.push({ name: 'CourseFiltered', params: { id } })
      }
    }
  },
}
</script>

<style module lang="scss">
.root {
  max-width: 900px;

  .table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 10px;
      text-align: center;
    }

    th {
      border-bottom: 1px solid black;
    }
  }
  .head {
  }
}

</style>
