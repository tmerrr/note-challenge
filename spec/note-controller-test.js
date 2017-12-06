window.onload = function() {

function DoubleNoteListView(doublenotelistclass){}
DoubleNoteListView.prototype.noteListModelToHTML = function(){
  return '<ul><li><div>test note</div></li></ul>'
}

function DoubleNoteList(noteclass){}

function DoubleNote(){}


  function testNoteControllerInstantiation() {
    assert.isTrue(new NoteController() instanceof NoteController)
  }

  testNoteControllerInstantiation()

  function testCreationOfHTML() {
    var noteListController = new NoteController(DoubleNoteList, DoubleNoteListView)
    elem = document.getElementById('app')
    noteListController.renderHTML()
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>test note</div></li></ul>')
  }

  testCreationOfHTML()

}
