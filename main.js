function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_R1_J-AL0kfzRst-J_RnfvwYysxK44GW9q5E3CzeUUT5O09hD06ETl2Os632Qb7WmJSOY2uDMtAiU/pubhtml',
                   callback: showInfo(data, tabletop) {
                       console.log(data)
                   },
                   simpleSheet: true } )
}

function showInfo(data, tabletop){
  for (var i = 0; i < data.length; i++) {
  $(‘.post’).append(
  ‘<div class=”text”>’ +
  ‘<h1>’ + data[i].artist + ‘</h1>’+
  data[i].album +
  ‘</div> ‘ + ‘<div class=”meta-info”>’ +
  ‘<div class=”date”>’ + data[i].date-discovered + ‘</div>’ +
  ‘</div>’ +
  ‘</div>’);
  }
}
window.addEventListener('DOMContentLoaded', init)
