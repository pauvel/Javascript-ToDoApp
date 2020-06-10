export class ToDo{
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); // hh:mm:ss
        this.completado = false;
        this.creado = new Date();
    }
}