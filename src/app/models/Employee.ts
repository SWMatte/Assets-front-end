import { EmployeeRole } from "./EmployeeRole";

export class Employee{
    constructor(
        public idEmployee?: number,
        public firstName?: string,
        public lastName?: string,
        public cf?: string,
        public address?: string,
        public birthDate?: Date,
        public birthPlace?: string,
        public registrationDate?: Date,
        public employeeRole?: EmployeeRole,
        public personalPhoneNumber?:string,
        public companyPhoneNumber?:string,
        public personalEmail?:string,
        public companyEmail?:string,
        public company?: any,
        public createdBy?: any

    ) {}
}