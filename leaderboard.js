window.onload = init;

function init() {
  console.log('Window has loaded, executing JS');
  var fccCamperRequest = new XMLHttpRequest();

  fccCamperRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = fccCamperRequest.responseText;
    }
  };

  fccCamperRequest.open("GET", "https://fcctop100.herokuapp.com/api/fccusers/top/recent", true);
  fccCamperRequest.send();
}
