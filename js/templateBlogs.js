var STUDENT_METHOD = {
  handlerData: function(resJSON) {
    var templateSource = $("#student-template").html(),
      template = Handlebars.compile(templateSource),
      studentHTML = template(resJSON);

    $("#my-container").html(studentHTML);
    console.log($("#student-template"));
  },
  loadStudentData: function() {
    let getEntries = new XMLHttpRequest();

    getEntries.onreadystatechange = () => {
      if (getEntries.readyState == XMLHttpRequest.DONE) {
        entries = JSON.parse(getEntries.responseText);
        console.log(entries);
      }
    };
    getEntries.open(
      "GET",
      "https://api.jsonbin.io/b/5c614f11ad5128320af6cb7c",
      true
    );
    getEntries.setRequestHeader(
      "secret-key",
      "$2a$10$lFB8cBUsA81aQwasd4d9ku7iMDJjDdXllAWhanIuA4Nhf3gTVDmnS"
    );
    getEntries.send();
  }
};

$(document).ready(function() {
  
  STUDENT_METHOD.loadStudentData();
  STUDENT_METHOD.handlerData();
  
});
