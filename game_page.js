player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");
player1_score = 0;
player2_score = 0;

document.getElementById("pl1_name").innerHTML = player1_name
document.getElementById("pl2_name").innerHTML = player2_name
document.getElementById("pl1_score").innerHTML = " = " + player1_score
document.getElementById("pl2_score").innerHTML = " = " + player2_score

document.getElementById("player_question").innerHTML = "questions turn " + player1_name
document.getElementById("player_answer").innerHTML = "answer turn " + player2_name

function send() {

    number1 = Number(document.getElementById("no1").value);
    number2 = Number(document.getElementById("no2").value);
    word = number1 * number2;
    a = "<h4>" + number1 + " X " + number2 + "</h4>";

    b = "<br>Answer : <input type='text' id='input_check_box'>";
    c = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = a + b + c;
    document.getElementById("output").innerHTML = row;


}

question_turn = "player1"
answer_turn = "player2"

function check() {

    answer = document.getElementById("input_check_box").value;

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            console.log(player1_score)
            document.getElementById("pl1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("pl2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";

}