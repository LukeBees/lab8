var imgs = ["IMG_6067.JPG", "IMG_6180.JPG", "IMG_6218.JPG", "IMG_6447.JPG", "IMG_6820.JPG"];
var currentI = 0;
var image = document.getElementById("photo");

//var image = document.getElementById("photo").src;

function goBack()
{
  console.log(currentI);
  if(currentI == 0)
  {
    currentI = imgs.length-1;
  }
  else
  {
    currentI = currentI - 1;
  }
  document.getElementById("photo").src = imgs[currentI];
}

function goNext()
{
  if(currentI == imgs.length-1)
  {
    currentI = 0;
  }
  else
  {
    currentI = currentI + 1;
  }
  document.getElementById("photo").src = imgs[currentI];
}
