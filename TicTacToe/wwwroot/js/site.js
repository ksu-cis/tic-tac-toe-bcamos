﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";
document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";


var squares = document.getelementsByClassName("square");
for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener("click", onClick);
}

function onClick(event)
{
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerHTML = currentTurn;
        if (!checkForWin()) {
            nextTurn();
        }
    }   
}

function nextTurn()
{
    currentTurn = currentTurn === "X" ? "O" : "X";
    turnElement = document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";
}

function declareWinner() {
    document.getElementById("turn").innerText = "Player " + currentTurn + " wins!";
}

function checkForWin()
{
    //Check for rows
    for (var i = 0; i < 9; i += 3)
    {
        if (squares[i].innerText && squares[i].innerText === squares[i + 1].innerText && squares[i + 1].innerText === squares[i + 2].innerText) {
            declareWinner();
            return true;
        }
    }

    //Check for columns
    for (var j = 0; j < 3; j += 1) {
        if (squares[j].innerText && squares[j].innerText === squares[j + 3].innerText && squares[j + 3].innerText === squares[j + 6].innerText) {
            declareWinner();
            return true;
        }
    }

    //Check for diagonals

    
}