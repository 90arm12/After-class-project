class Student {
    constructor(n) {
        this.studentName=n;
    }
    static hello() {
        return "Hello, everyone.";
    }
    present() {
        return 'My name is ' +this.studentName;
    }
}
class Grade extends Student {
    constructor(n,g) {
        super(n);
        this.studentGrade=g;
    }
    show() {
        return this.present() + ', from ' +this.studentGrade + ".";
    }
}
let myStudent = new Grade ("Akeel","grade 9");
document.getElementById("details").innerHTML=myStudent.show();
//hello() is a static method cannot be accessed by object myStudent
document.getElementById("greetings").innerHTML= Student.hello();