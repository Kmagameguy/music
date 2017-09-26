function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_R1_J-AL0kfzRst-J_RnfvwYysxK44GW9q5E3CzeUUT5O09hD06ETl2Os632Qb7WmJSOY2uDMtAiU/pubhtml',
                   callback: function(data, tabletop) {
                       console.log(data)
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
