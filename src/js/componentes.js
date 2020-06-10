import { ToDo } from "../classes";
// Referencias en el html
const divTodoList = document.querySelector('.todo-list'); // Clase de css todo list.

export const crearTodoHtml = (todo) =>{
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
    const div = document.createElement('div'); // creamos un div.
    div.innerHTML = htmlTodo; // Al div creado le insertamos el bloque html.
    divTodoList.append(div.firstElementChild); 
    // a la clase de css todo-list le incrustamos el primer hijo del div creado. (li)
    return div;
}