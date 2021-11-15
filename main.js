name_array=[];
function submit(){
var name_1=document.getElementById("name_1").value;
var name_2=document.getElementById("name_2").value;
var name_3=document.getElementById("name_3").value;
var name_4=document.getElementById("name_4").value;
var name_5=document.getElementById("name_5").value;
name_array.push(name_1)
name_array.push(name_2)
name_array.push(name_3)
name_array.push(name_4)
name_array.push(name_5)

document.getElementById("display").innerHTML=name_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}
function sort(){
name_array.sort();
document.getElementById("display").innerHTML=name_array;
}