
// Define function for searching through projects
function search_project() {
    
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    // Store user search into input
    input = document.getElementById('myInput');
    // Standardize search
    filter = input.value.toUpperCase();
    // Store project list into ul
    ul = document.getElementById("myUL");
    // Store each project into li
    li = ul.getElementsByTagName('li');
  
    // Iterate through each letter of project name
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      // Check if the project name matches search query
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

