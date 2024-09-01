let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    ) {
    mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// modal

// const modal = document.querySelector(".modal");
// const openModalBtn = document.querySelector("#open-modal");
// const closeModalBtn = document.querySelector("#close-modal");

// openModalBtn.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// closeModalBtn.addEventListener("click", function () {
//   modal.style.display = "none";
// });


// date picker
$(document).ready(function($) {

  // Upload btn on change call function
  $(".uploadlogo").change(function() {
    var filename = readURL(this);
    $(this).parent().children('span').html(filename);
  });

  // Read File and return value  
  function readURL(input) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (
      ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
      )) {
      var path = $(input).val();
      var filename = path.replace(/^.*\\/, "");
      // $('.fileUpload span').html('Uploaded Proof : ' + filename);
      return "Uploaded file : "+filename;
    } else {
      $(input).val("");
      return "Only image/pdf formats are allowed!";
    }
  }
  // Upload btn end

});















