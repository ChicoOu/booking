export class Student {
    constructor(private id: string,
        private name: string,
        public gender: number,
        public web: Course,
        public embeded: Course) {

    }
}

export class Course {
    constructor(private count: number, private type: number) {

    }
}

export const ALL_STUDENTS: Student[] = [
    new Student('01', 'aaa', 0, new Course(80, 0), new Course(90, 1)),
    new Student('02', 'bbb', 1, new Course(60, 0), new Course(70, 1)),
    new Student('03', 'ccc', 1, new Course(40, 0), new Course(70, 1)),
];