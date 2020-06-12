import { ToDo } from "../classes";
import { todoList } from "../index";
// Referencias en el html
const divTodoList = document.querySelector('.todo-list'); // Clase de css todo list.
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

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

// Eventos

txtInput.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new ToDo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event)=>{
   const nombreElemento =  event.target.localName;
   const todoElemento = event.target.parentElement.parentElement;
   const todoId = todoElemento.getAttribute('data-id');
   if(nombreElemento.includes('input')){ // Click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
   }else if(nombreElemento.includes('button')){ // Click en el button
       todoList.eliminarTodo(todoId);
       divTodoList.removeChild(todoElemento);
   }
});

btnBorrarCompletados.addEventListener('click', (event)=>{
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length-1; i >=0; i--){
          const elemento = divTodoList.children[i];
          if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
          }           
    }
});

ulFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;
    if(!filtro) return;
    anchorFiltros.forEach(e => e.classList.remove('selected'));
    event.target.classList.add('selected');
    for(const e of divTodoList.children){
        e.classList.remove('hidden');
        const completado = e.classList.contains('completed');
        switch(filtro){
            case 'Pendientes':
                if(completado){
                    e.classList.add('hidden');
                }
            break;
            case 'Completados':
                if(!completado){
                    e.classList.add('hidden');
                }
            break;

        }
    }
});