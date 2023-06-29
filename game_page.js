player1_name=localStorage.getItem("player1_name") 
player2_name=localStorage.getItem("player2_name") 
player1_score=0
player2_score=0
document.getElementById("player_1name").innerHTML=player1_name+" : "
document.getElementById("player_2name").innerHTML=player2_name+" : "
document.getElementById("player_1score").innerHTML=player1_score
document.getElementById("player_2score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="Question turn : "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name
function send() {
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    q="<h4 id='word_display'>Q.  "+n1+"x"+n2+"</h4>"
    input_box="<br>Answer :<input type='text' id='input_check_box'> "
    check_button="<br><br><button class='btn btn-info' onclick='check()'> check</button>"
    row=q+input_box+check_button
    document.getElementById("output").innerHTML=row
    document.getElementById("n1").value=""
    document.getElementById("n2").value=""
}

