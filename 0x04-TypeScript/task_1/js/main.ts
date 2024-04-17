interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number | null;
    location: string;
    [key: string]: any;
}
interface Directors extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher = (firstName: string, lastName: string) => firstName[0] + '. ' + lastName;

interface student {
    firstName: string;
    lastName: string;
    workOnHomework: () => string;
    displayName: () => string;
}

class StudentClass implements student{
    constructor(public firstName: string, public lastName: string) {}
    workOnHomework = () => 'Currently working';
    displayName = () => this.firstName;
}
