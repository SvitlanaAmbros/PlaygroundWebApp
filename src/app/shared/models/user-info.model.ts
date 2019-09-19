export interface UserInfo {
    name: string;
    surname: string;
    login: string;
    password: string;
    confirmPassword: string;
    studentTicket?: string;
    isStudent?: boolean;
}
