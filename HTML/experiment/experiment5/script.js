// const username=prompt("hello ,what is your name");
// alert("hello "+username+"nice to meet you");
// message=prompt(age);
// let message = (age >= 18) ? "You are eligible to vote!" : "You are not eligible yet.";
// alert(message);
// const age=prompt("enter your age");
// age>=18 ? document.write("<h1>you are an adult") : document.write("<h1>you are minor");
const chess = document.querySelector(".chessboard");

const oddRow = `<div class="square"></div>`.repeat(8);
const evenRow = `<div class="square-rev"></div>`.repeat(8);

const completeHtml = `${oddRow} ${evenRow}`.repeat(4);

chess.innerHTML = completeHtml;