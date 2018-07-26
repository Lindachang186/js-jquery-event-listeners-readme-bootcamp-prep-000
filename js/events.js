function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
  })
};

function frameIt(){
  $('img').on('load', function() {
    return $(this).addClass('tasty')
  })
}

$(document).ready(function(){
// call functions here
});
