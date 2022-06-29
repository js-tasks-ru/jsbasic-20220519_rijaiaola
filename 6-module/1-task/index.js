import createElement from '../../assets/lib/create-element.js';

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #items = [];
  #parent;
  // #container;
  // #cont;
  elem;

  constructor(rows) {
    this.#items = rows;
    // this.#parent = document.createElement('div');
    this.#parent = document.createElement('table');
    // this.#container = this.#parent.innerHTML;
    // this.#cont = this.#template();
    // this.elem = this.#cont;
    this.elem = createElement(this.render());

    // console.log(this.#parent.innerHTML);
    // this.render();
  }

  get container() {
    return this.#parent.querySelectorAll('button');
  }

  // #onQuitButton () => {

  // }

  #template() {
    return `
          <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${this.#items.map(item => `<tr>
                                              <td>${item.name}</td>
                                              <td>${item.age}</td>
                                              <td>${item.salary}
                                              </td><td>${item.city}</td>
                                              <td><button>X</button></td>
                                            </tr>` )
                            .join('')}
            </tbody>
          </table>
        `

  }

   render() {
    return this.#parent.innerHTML = this.#template();

    // this.#parent.innerHTML = createElement(this.#template());
    // let a = this.#parent.innerHTML;
    //   a = this.#template();
    // return a;
  }
}
