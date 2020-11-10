var student1=[];
function submit(){
var studentname1=document.getElementById("name1").value;
var studentname2=document.getElementById("name2").value;
var studentname3=document.getElementById("name3").value;
var studentname4=document.getElementById("name4").value;
student1.push(studentname1);
student1.push(studentname2);
student1.push(studentname3);
student1.push(studentname4);
console.log(student1);
document.getElementById("text").innerHTML=student1;
document.getElementById("sub_but").style.display="none";
document.getElementById("sort_but").style.display="inline-block";
}
function sortfun(){
    student1.sort();
    console.log(student1);
    document.getElementById("text").innerHTML=student1;
    console.log(student2);
    console.log(student3);
    console.log(student4);
}
