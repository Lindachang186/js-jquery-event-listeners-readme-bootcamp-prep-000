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

function pressIt(){
  $('form').on('submit', function() {
    if(key.which == 71).val() === 'correct' {
        alert('You have pressed G')
    }
  })
}

$(document).ready(function(){
// call functions here
});
