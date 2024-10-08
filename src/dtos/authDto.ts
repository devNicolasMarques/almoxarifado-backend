export interface RegisterDTO {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}