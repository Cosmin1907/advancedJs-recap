let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const averageScores = students.map(student => {
  const scores = Object.values(student.results);
  const totalScore = scores.reduce((total, score) => total + score, 0);
  const averageScore = totalScore / scores.length;
  return `${student.name} has an average score of ${averageScore.toFixed(2)}`
});

console.log(averageScores);

const subjectsAndTeachers = students.map(student => {
  const details = student.subjects.map(subject => `${subject} taught by ${student.teacher[subject]}`);
  return `${student.name}'s subjects and teachers: ${details.join(', ')}`;
});

console.log(subjectsAndTeachers);

const passingStudents = students.filter(student => {
  const scores = Object.values(student.results);
  const passedAll = scores.reduce((allPassed, score) => allPassed && score > 75, true);
  return passedAll;
}).map(student => student.name);

console.log('Students who passed all subjects', passingStudents);