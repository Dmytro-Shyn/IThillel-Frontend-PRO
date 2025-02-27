class Student {
  constructor(firstName, secondName, birthday, grades) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = birthday;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.log("Всі 25 записів вже заповнені!");
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.log("Всі 25 записів вже заповнені!");
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthday;
  }

  getAverageGrade() {
    return (
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    );
  }

  summary() {
    const averageGrade = this.getAverageGrade();

    const attendedLessons = this.attendance.filter(
      (value) => value !== null
    ).length;
    const presentLessons = this.attendance.filter(
      (value) => value === true
    ).length;

    const averageAttendance =
      attendedLessons > 0 ? presentLessons / attendedLessons : 0;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Петро", "Порошенко", 1980, [95, 92, 90, 94, 98]);
const student2 = new Student("Іван", "Франко", 1990, [85, 82, 88, 90, 75]);
const student3 = new Student("Тарас", "Шевченко", 1995, [70, 65, 72, 68, 75]);

console.log(`${student1.firstName} ${student1.secondName}:`);
console.log(`Вік: ${student1.getAge()} років`);
console.log(`Середній бал: ${student1.getAverageGrade().toFixed(1)}`);

for (let i = 0; i < 10; i++) {
  student1.present();
}

console.log(
  `Підсумок для ${student1.firstName} ${
    student1.secondName
  }: ${student1.summary()}`
);

console.log(`\n${student2.firstName} ${student2.secondName}:`);
console.log(`Вік: ${student2.getAge()} років`);
console.log(`Середній бал: ${student2.getAverageGrade().toFixed(1)}`);

for (let i = 0; i < 8; i++) {
  student2.present();
}
for (let i = 0; i < 2; i++) {
  student2.absent();
}

console.log(
  `Підсумок для ${student2.firstName} ${
    student2.secondName
  }: ${student2.summary()}`
);

console.log(`\n${student3.firstName} ${student3.secondName}:`);
console.log(`Вік: ${student3.getAge()} років`);
console.log(`Середній бал: ${student3.getAverageGrade().toFixed(1)}`);

for (let i = 0; i < 5; i++) {
  student3.present();
}
for (let i = 0; i < 5; i++) {
  student3.absent();
}

console.log(
  `Підсумок для ${student3.firstName} ${
    student3.secondName
  }: ${student3.summary()}`
);
