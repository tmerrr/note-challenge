
// DOUBLES

function DoubleNoteListView (doublenotelistclass) { }

DoubleNoteListView.prototype.noteListModelToHTML = function () {
  return '<ul><li><div>test note</div></li></ul>'
}

function DoubleNoteList (noteclass) { }

function DoubleNote () { }

// TESTS

describe ('Note Contoller', function () {
  it('checks that notecontroller is instantiated', function(){
    return expect(new NoteController()).toBeInstanceOf(NoteController)
  });

  it('checks that HTML is rendered to page', function(){
    var noteListController = new NoteController(new DoubleNoteListView(new DoubleNoteList()))
    elem = document.getElementById('app')
    noteListController.renderHTML()
    return expect(elem.innerHTML).toEqual('<ul><li><div>test note</div></li></ul>')
  });

  it('whole note is displayed', function() {
    var noteListController = new NoteController();
    noteListController.createNote('the quick brown fox jumped over the lazy dog')
    noteListController.renderHTML();
    noteListController.openNote();
    singleNote = document.getElementById('single-note')
    return expect(singleNote.innerHTML).toEqual('<div>the quick brown fox jumped over the lazy dog</div>');
  });

})
