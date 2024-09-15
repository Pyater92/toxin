document.getElementById("myDropdown").addEventListener ("click", myFunction, false);

function myFunction() {
  document.getElementById("dropDown__content").classList.toggle("show");
}





window.onclick = function(event) {
  if (!event.target.matches('.dropdown__guests')) {
    var dropdowns = document.getElementsByClassName("dropdown__guests-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//function myFunction() {
//  document.getElementById("myDropdown").classList.toggle("show");
//}