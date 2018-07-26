function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
  })
};

function frameIt(){
  $('img').on('load', function() {
    const img = window.$('img')
    img.trigger('load');
  })
}

$(document).ready(function(){
// call functions here
});
