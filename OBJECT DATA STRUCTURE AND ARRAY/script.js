var student={
    name:'Akeel',
    age:'14',
    Grade: 7,
    hobbies:'Reading books and Coding',
    fav_sport:'Badminton'
};
document.write("Student's name is: " +student.name,"<br>", "Student's favorite sport is: " +student.fav_sport,"<br>","Age of student is: " +student.age,"<br>", "Grade: " +student.Grade,"<br>","The hobbies of student are: "+student.hobbies);


document.write("<br>");
document.write("<br>");
var color = ['Red', 'Blue', 'Purple', 'Pink','Orange'];
document.write("Before poping the colors are: " + color.join(' ^ '));
document.write("<br>");
document.write("<br>");
document.write("Among all these colors, my favorite color is: "+color[1]);

document.write("<br>");
document.write("<br>");
color.pop();
color.pop();
color.pop();
document.write("After poping the colors are: " +color.join(' * '));
