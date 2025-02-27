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

  getAttendance() {
    return this.attendance;
  }

  getAgeAndGrades() {
    const averageGrade =
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    return `Вік студента: ${
      2025 - this.birthday
    }, середній бал: ${averageGrade.toFixed(1)}`;
  }
}

const grades = [9, 10, 11, 8, 10];
const Petro = new Student("Petro", "Poroshenko", 1980, grades);

console.log(Petro.getAgeAndGrades());

Petro.present();
Petro.absent();
Petro.present();
console.log(Petro.getAttendance());
