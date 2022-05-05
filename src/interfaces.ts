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
    status: 'To do' | 'In progress' | 'Done';
}

export type theme = 'light' | 'dark';