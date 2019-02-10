function myFunction() {
    // Declare variables

  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  
  cardstack = document.getElementById("repository");
  card = cardstack.getElementsByClassName("card");
 

  for (i = 0; i < card.length; i++) {
    a = card[i].getElementsByTagName("h5")[0];
    txtValue = a.textContent || a.innerText;
    console.log(txtValue);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
  }