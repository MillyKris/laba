import Api from '@/api/index';

class Teachers extends Api {

  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  teachers = () => this.rest('/teachers/list.json');

  /**
   * Удалит группу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/teachers/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param group объект группы, взятый из FormGroup
   * @returns {Promise<Response>}
   */
  add = ( teacher ) => this.rest('teachers/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(teacher),
  }).then(() => ({...teacher, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param group объект группы, взятый из FormGroup
   * @returns {Promise<*>}
   */
  update = ( teacher ) => this.rest('teachers/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(teacher),
  }).then(() => teacher) // then - заглушка, пока метод ничего не возвращает

}

export default new Teachers();
