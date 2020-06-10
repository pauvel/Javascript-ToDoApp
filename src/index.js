import './styles.css'; // Incluimos los estilos globales
import {ToDo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// const tarea1 = new ToDo('Practicar javascript');
// todoList.nuevoTodo(tarea1);
// console.log({tarea1});
// crearTodoHtml(tarea1);