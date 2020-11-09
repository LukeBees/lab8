
function changes()
{
  let rebor = document.getElementById("border-red").value;
  let grbor = document.getElementById("border-green").value;
  let blbor = document.getElementById("border-blue").value;
  let widbor = document.getElementById("border-width").value;

  let reback = document.getElementById("back-red").value;
  let grback = document.getElementById("back-green").value;
  let blback = document.getElementById("back-blue").value;

  let par = document.getElementById("paragraph");

  let bc = "#"+rebor+grbor+blbor;
  par.style.borderColor = bc;
  par.style.borderWidth = widbor+"px";

  par.style.backgroundColor = "#"+reback+grback+blback; //=#(redvalue)(blue)(green)
}
