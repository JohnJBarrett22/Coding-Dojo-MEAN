$(document).ready(function(){

    //Queries
    $.get("https://opentdb.com/api.php?amount=4&category=9&difficulty=medium&type=multiple", function(data1){
        general = data1.results;
    })   
    $.get("https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple", function(data2){
        science = data2.results;
    })
    $.get("https://opentdb.com/api.php?amount=4&category=21&difficulty=medium&type=multiple", function(data3){
        sports = data3.results;
    })

    //General Boxes
    $("#a1").click(function(){
        $("#a1").html("<div class='center'><p>"+general[0].question+"</p><br><p>"+general[0].incorrect_answers[0]+"</p><p>"+general[0].incorrect_answers[1]+"</p><p>"+general[0].correct_answer+"</p><p>"+general[0].incorrect_answers[2]+"</p></div>");
    })

    $("#a2").click(function(){
        $("#a2").html("<div class='center'><p>"+general[1].question+"</p><br><p>"+general[1].incorrect_answers[0]+"</p><p>"+general[1].incorrect_answers[1]+"</p><p>"+general[1].correct_answer+"</p><p>"+general[1].incorrect_answers[2]+"</p></div>");
    })

    $("#a3").click(function(){
        $("#a3").html("<div class='center'><p>"+general[2].question+"</p><br><p>"+general[2].incorrect_answers[0]+"</p><p>"+general[2].incorrect_answers[1]+"</p><p>"+general[2].correct_answer+"</p><p>"+general[2].incorrect_answers[2]+"</p></div>");
    })

    $("#a4").click(function(){
        $("#a4").html("<div class='center'><p>"+general[3].question+"</p><br><p>"+general[3].incorrect_answers[0]+"</p><p>"+general[3].incorrect_answers[1]+"</p><p>"+general[3].correct_answer+"</p><p>"+general[3].incorrect_answers[2]+"</p></div>");
    })

    //Comp Science Boxes
    $("#b1").click(function(){
        $("#b1").html("<div class='center'><p>"+science[0].question+"</p><br><p>"+science[0].incorrect_answers[0]+"</p><p>"+science[0].incorrect_answers[1]+"</p><p>"+science[0].correct_answer+"</p><p>"+science[0].incorrect_answers[2]+"</p></div>");
    })

    $("#b2").click(function(){
        $("#b2").html("<div class='center'><p>"+science[1].question+"</p><br><p>"+science[1].incorrect_answers[0]+"</p><p>"+science[1].incorrect_answers[1]+"</p><p>"+science[1].correct_answer+"</p><p>"+science[1].incorrect_answers[2]+"</p></div>");
    })

    $("#b3").click(function(){
        $("#b3").html("<div class='center'><p>"+science[2].question+"</p><br><p>"+science[2].incorrect_answers[0]+"</p><p>"+science[2].incorrect_answers[1]+"</p><p>"+science[2].correct_answer+"</p><p>"+science[2].incorrect_answers[2]+"</p></div>");
    })

    $("#b4").click(function(){
        $("#b4").html("<div class='center'><p>"+science[3].question+"</p><br><p>"+science[3].incorrect_answers[0]+"</p><p>"+science[3].incorrect_answers[1]+"</p><p>"+science[3].correct_answer+"</p><p>"+science[3].incorrect_answers[2]+"</p></div>");
    })

    //Sports Boxes
    $("#c1").click(function(){
        $("#c1").html("<div class='center'><p>"+sports[0].question+"</p><br><p>"+sports[0].incorrect_answers[0]+"</p><p>"+sports[0].incorrect_answers[1]+"</p><p>"+sports[0].correct_answer+"</p><p>"+sports[0].incorrect_answers[2]+"</p></div>");
    })

    $("#c2").click(function(){
        $("#c2").html("<div class='center'><p>"+sports[1].question+"</p><br><p>"+sports[1].incorrect_answers[0]+"</p><p>"+sports[1].incorrect_answers[1]+"</p><p>"+sports[1].correct_answer+"</p><p>"+sports[1].incorrect_answers[2]+"</p></div>");
    })

    $("#c3").click(function(){
        $("#c3").html("<div class='center'><p>"+sports[2].question+"</p><br><p>"+sports[2].incorrect_answers[0]+"</p><p>"+sports[2].incorrect_answers[1]+"</p><p>"+sports[2].correct_answer+"</p><p>"+sports[2].incorrect_answers[2]+"</p></div>");
    })

    $("#c4").click(function(){
        $("#c4").html("<div class='center'><p>"+sports[3].question+"</p><br><p>"+sports[3].incorrect_answers[0]+"</p><p>"+sports[3].incorrect_answers[1]+"</p><p>"+sports[3].correct_answer+"</p><p>"+sports[3].incorrect_answers[2]+"</p></div>");
    })

})