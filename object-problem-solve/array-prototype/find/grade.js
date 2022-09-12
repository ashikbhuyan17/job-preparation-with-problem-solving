const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const student = students.find(data => data.grade === 65)
console.log(student);
console.log(student ? `grade is equal than 65 = ${student.grade}` : "grade is no equal");