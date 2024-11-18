let val = Math.floor(Math.random() * 100 + 1);
let total = 0;
function gen() {
  let numbe = document.getElementById("numb").value;
  console.log(val);
  if (total < 10) {
    if (numbe == val) {
      total++;
      document.getElementById("display").innerHTML =
        "Congrats you guessed the right number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total;
        
    } else if (numbe > val) {
      total++;
      document.getElementById("display").innerHTML =
        "The number entered is greater than the original number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total;
        
    } else if (numbe < val) {
      total++;
      document.getElementById("display").innerHTML =
        "The number entered is smaller than the original number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total
    }
  } 
  else
  {
    alert("Sorry you ran out of chances");
  }
}

function eon() {
  document.getElementById("display").innerHTML = " ";
  document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= 0";
  document.getElementById("numb").value="Enter a digit";
  val = Math.floor(Math.random() * 100 + 1);

  total=0;
}
