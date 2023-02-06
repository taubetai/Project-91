 function adduser() 
{
player1_name = document.getElementById("player1_name_input").value;
player2_name = document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);
window.loation = "index.html";
}
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)

}
question_number = "<h4>" + numbeer1 + "X" + number2 +"</h4>";
input_box ="<br>Answer : <input type = 'text id='input_check_box>";
check_button = "<br><br>Mbutton class='btn btn-info' onclick='check()'>Check</button" 