const questions = [
  'Where did Frodo destroy the One Ring?',
  'What is Batman\'s real name?',
  'Which company developed the video game Minecraft?',
  'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
  'Who likes to jump around on his tail in the Winnie The Pooh stories?'];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];

function oefening3(){
  //hulpfunctie
  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  //tabel aanmaken
  let table = document.createElement("table")
  table.setAttribute("style","border-spacing: 10px;border-collapse:separate");
  let tablebody = document.createElement("tbody");
  tablebody.setAttribute("id","tableBodyAwnsers");
  table.appendChild(tablebody);
  insertAfter(table,document.getElementsByClassName("oefening3")[0]);

  for (let i = 0; i < questions.length; i++) {
    let row = tablebody.insertRow(i);
    let cell = row.insertCell(0);
    cell.setAttribute("class","tableRowsQuiz");
    cell.setAttribute("style","padding:20px;padding-bottom:5px;text-align:center;color:white;margin:10px;border-radius:10px");
  }

  //vragen opvragen
  counter = 0;
  while (counter!=questions.length) {
    let answer = window.prompt(`${questions[counter]}`);   
    let row = document.getElementsByClassName("tableRowsQuiz")[counter];
    if (answer.toString() == answers[counter].toString()) {
        row.style.backgroundColor = "green";
        row.innerHTML = `<p><b>${questions[counter]}</b><br> You answered: ${answer} </p>`;
    }
    else {
      row.style.backgroundColor = "red";
      row.innerHTML = `<p><b>${questions[counter]}</b><br>You answered: ${answer} <br>The correct answer was ${answers[counter]}</p>`;
    }
    counter += 1;
  }

}