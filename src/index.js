import './styles.css'; // Incluimos los estilos globales
import {ToDo,TodoList} from './classes';

const todoList = new TodoList();
const tarea1 = new ToDo('Practicar javascript');
const tarea2 = new ToDo('Comprar una silla gamer');
todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);
// console.log({tarea});
console.log({todoList});