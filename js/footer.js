var display = "hide";

var json = {
  hearts: 0,
  webhits: 0
};

function showModal() {
  display = "show";
  $(".ui.modal")
    .modal({
      blurring: true
    })
    .modal(display);
}

$(document).ready(function() {
  getJSON(true);
});

function getJSON(boolean) {
  if (boolean === true) {
    let get = new XMLHttpRequest();

    get.onreadystatechange = () => {
      if (get.readyState == XMLHttpRequest.DONE) {
        json = JSON.parse(get.responseText);
        var fileName = location.href.split("/").slice(-1);
        console.log(fileName);
        if (fileName == "") {
          console.log("incrementing");
          json.webhits++;
        } else {
          console.log("not on homepage");
          $(".value")[0].innerHTML = json.webhits;
          $(".value")[1].innerHTML = json.hearts;
        }

        postJSON(true);
      }
    };
    get.open(
      "GET",
      "https://api.jsonbin.io/b/5c5b0f8d4c4430170a9c08f5/2",
      true
    );
    get.setRequestHeader(
      "secret-key",
      "$2a$10$lFB8cBUsA81aQwasd4d9ku7iMDJjDdXllAWhanIuA4Nhf3gTVDmnS"
    );
    get.send();
  }
}

function incrementHearts(event) {
  $(".ui.button").blur();
  json.hearts++;
  $(".value")[1].innerHTML = json.hearts;
  postJSON(true);
}

function postJSON(boolean) {
  if (boolean == true) {
    let put = new XMLHttpRequest();
    put.open("PUT", "https://api.jsonbin.io/b/5c5b0f8d4c4430170a9c08f5", true);
    put.setRequestHeader("Content-type", "application/json");
    put.setRequestHeader(
      "secret-key",
      "$2a$10$lFB8cBUsA81aQwasd4d9ku7iMDJjDdXllAWhanIuA4Nhf3gTVDmnS"
    );
    put.setRequestHeader("versioning", "false"); // change base values
    put.send(JSON.stringify(json));
  }
}
