const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],
    assignStudent(subject) {
        const teacher = this.teachers.find(e => e.subjects.includes(subject) && e.students.length < e.capacityLeft);
        this.students.forEach(student => {
            if(teacher.capacityLeft > 0) {
                teacher.students.push(student);
                teacher.capacityLeft -= 1;
            } else {
                console.log("Sorry,no available teachers left");
            }
        })
    },
    assignTeachersSubject(teacherId, newSubject) {
        const teacher = this.teachers.find(e => e.id === teacherId);
        let include = false;
        teacher.subjects.forEach(t => {
            if(t === newSubject) {
                include = true;
            }
        })
        if(!include) {
            teacher.subjects.push(newSubject);
        }
    }
};

// school.assignTeachersSubject(2, "talmud");
school.assignStudent("biology");
console.log(school.teachers[0]);

