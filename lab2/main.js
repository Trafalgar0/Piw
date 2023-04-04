"use strict";

var listItems = document.getElementsByTagName("li");
var i;
for(i=0;i<listItems.length;i++)
{
    listItems[i].appendChild(addX());
}

function addX()
{
    var span = document.createElement("SPAN");
    span.onclick = function()
    {
        var t = this.parentElement;
        t.style.display = "none";
    }
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    return span;
}

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});


function newTask()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("in").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Puste pole!");
    } else {
      document.getElementById("list-of-tasks").appendChild(li);
      listItems[i].appendChild(addX());
      i++;
    }
    document.getElementById("in").value = "";
}