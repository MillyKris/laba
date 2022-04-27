import Api from '@/api/index';

class Courses extends Api {

  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  courses = () => this.rest('/courses/list.json');

  coursesFilter = (teacherId)  => this.rest('/courses/list-filtered.json?id=' + teacherId);

  /**
   * Удалит студента по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/courses/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param student объект студента, взятый из FormStudent
   * @returns {Promise<Response>}
   */
  add = ( course ) => this.rest('/courses/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(course),
  }).then(() => ({...course, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param student объект студента, взятый из FormStudent
   * @returns {Promise<*>}
   */
  update = ( course ) => this.rest('/courses/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(course),
  }).then(() => course) // then - заглушка, пока метод ничего не возвращает

}

export default new Courses();
