var imgs = ["IMG_0041.JPG","IMG_0109.JPG","IMG_0161.JPG","IMG_6067.JPG", "IMG_6180.JPG", "IMG_6218.JPG", "IMG_6447.JPG", "IMG_6820.JPG"];
var currentI = 0;
var image = document.getElementById("photo");
image.src = imgs[currentI];

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
