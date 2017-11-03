const Student = function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
};

const Course = function Course(name, department, credits, weekDays, timeBlock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.weekDays = weekDays;
  this.timeBlock = timeBlock;
  this.students = [];
};

Student.prototype.name = function() {
  return `${this.fName} ${this.lName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function() {
  const resultH = {};

  this.courses.forEach(function(course) {
    if (resultH[course.department]) {
      resultH[course.department] += course.credits;
    } else {
      resultH[course.department] = course.credits;
    }
  });
  return resultH;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(course) {
  const that = this;
  var conflicts = false;
  this.weekDays.forEach(function(day) {
    if (course.weekDays.includes(day)) {
      if (that.timeBlock === course.timeBlock) {
        conflicts = true;
      }
    }
  });

  return conflicts;
};

const kyle = new Student ("Kyle", "Chen");
const max = new Student ("Maxim", "Tocarev");

const ruby = new Course ("Ruby 101", "CS", 4, ['M', 'W', 'F'], 1);
const math = new Course ("Algebra", "Math", 4, ['T', 'W', 'R'], 1);
const arts = new Course ("Modern Arts", "Arts", 2, ['M', 'W', 'F'], 3);
const js101 = new Course ("JavaScript 101", "CS", 4, ['M', 'W', 'F'], 4);
