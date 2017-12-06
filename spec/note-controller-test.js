
// DOUBLES

function DoubleNoteListView(doublenotelistclass){}
DoubleNoteListView.prototype.noteListModelToHTML = function(){
  return '<ul><li><div>test note</div></li></ul>'
}

function DoubleNoteList(noteclass){}

function DoubleNote(){}

// TESTS

describe('checks that notecontroller is instantiated', function(){
  return assert.isTrue(new NoteController() instanceof NoteController)
});

describe('checks that HTML is rendered to page', function(){
  var noteListController = new NoteController(new DoubleNoteListView(new DoubleNoteList()))
  elem = document.getElementById('app')
  noteListController.renderHTML()
  return assert.isTrue(elem.innerHTML === '<ul><li><div>test note</div></li></ul>')
});
