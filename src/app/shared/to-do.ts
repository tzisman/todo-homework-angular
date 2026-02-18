import { ToDoStatus } from './to-do-status';

export interface ToDo {
    id: string;
    title: string;
    deadline: any;
    status: ToDoStatus;
}
