export interface teacherDTO {
    name: string;
    surname: string;
    email: string;
    code: string
}

export interface teacherUpdateDTO {
    id: number;
    name: string;
    surname: string;
    email: string;
    code: string
}

export interface teacherDeleteDTO {
    id: number;
}