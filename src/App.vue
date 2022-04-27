<template>
  <div id="nav">
    <RouterLink :to="{ name: 'Teachers' }">Преподаватели</RouterLink>
    <RouterLink :to="{ name: 'Courses' }">Курсы</RouterLink>
  </div>
  <router-view/>
</template>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 15px;
  background: #0148B3;
}

#nav a {
  font-weight: bold;
  color: #ECECFC;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 8px;
   }
}

#nav a.router-link-exact-active {
  color: #13F9F9;
}
</style>
