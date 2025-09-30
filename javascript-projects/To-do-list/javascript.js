// Function to create a "delete" button for  new list item
function addCloseButton(li) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    // Delete the list item when the close button is clicked
    span.onclick = function() {
      li.remove();
    }
  }

  // Add ore remove the "checked" class when clicking on a list item
document.querySelector('ul').addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  });

  // Add a new list item when clicking the "Add" button
function addElement() {
    const inputValue = document.getElementById("myInput").value.trim();
    if (inputValue === '') {
      alert("You must write something!");
      return;
    }
    const li = document.createElement("li");
    li.textContent = inputValue;
    addCloseButton(li);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("myInput").value = "";
  }