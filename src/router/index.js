import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/CoursesPage')
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: () => import('@/views/TeachersPage'),
  },
  {
    path: '/course-edit/:id?',
    name: 'CourseEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CourseEdit'),
  },

  {
    path: '/course-filter/:id?',
    name: 'CourseFiltered',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CourseFiltered'),
  },


  {
    path: '/teacher-edit/:id?',
    name: 'TeacherEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/TeacherEdit'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/CoursesPage'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
