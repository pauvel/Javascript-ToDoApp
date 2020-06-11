import './styles.css'; // Incluimos los estilos globales
import {ToDo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(element => {
    crearTodoHtml(element);
});