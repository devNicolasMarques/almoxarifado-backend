export interface RegisterDTO {
    username: string;
    password: string;
    position: string;
    confirmPassword: string;
}

export interface LoginDTO {
    username: string;
    password: string;
}