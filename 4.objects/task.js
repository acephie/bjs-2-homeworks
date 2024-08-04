function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (Object.keys(this).includes("marks")) {
    marks.forEach((item) => this.marks.push(item));
  }
};

Student.prototype.getAverage = function () {
  if (!Object.keys(this).includes("marks") || !this.marks.length) {
    return 0;
  } else {
    const sum = this.marks.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
    return sum / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
