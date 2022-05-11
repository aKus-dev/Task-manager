export interface Categories {
    id: string;
    title: string;
    desc: string;
    tasks: Task[];
    tags: string[];
}

export interface Task {
    id: string;
    title: string;
    desc: string;
    date: string;
    status: StatusOptions;
}

export type StatusOptions = 'To do' | 'In Progress' | 'Done';

export type theme = 'light' | 'dark';