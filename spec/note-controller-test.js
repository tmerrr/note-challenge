
// DOUBLES

function DoubleNoteListView (doublenotelistclass) { }

DoubleNoteListView.prototype.noteListModelToHTML = function () {
  return '<ul><li><div>test note</div></li></ul>'
}

function DoubleNoteList (noteclass) { }

function DoubleNote () { }

function changeUrlHashTo (number) {
  window.location.hash = `#${number.toString()}`
}

// TESTS

describe ('Note Contoller', function () {
  it('checks that notecontroller is instantiated', function(){
    expect(new NoteController()).toBeInstanceOf(NoteController)
  });

  it('checks that HTML is rendered to page', function(){
    var noteListController = new NoteController(new DoubleNoteListView(new DoubleNoteList()))
    elem = document.getElementById('app')
    noteListController.renderHTML()
    expect(elem.innerHTML).toEqual('<ul><li><div>test note</div></li></ul>')
  });

  it('can search for a specific not based on the ID', function () {
    var noteListController = new NoteController();
    noteListController.createNote('hello')
    noteListController.createNote('hello world')
    noteListController.createNote('hi')
    var note = noteListController.getNote(2)
    expect(note.returnText()).toEqual('hello world')
  })

  it('gets ID from the current url', function () {
    changeUrlHashTo(2)
    var noteListController = new NoteController();
    expect(noteListController.getIdFromHash()).toEqual(2)
  })

  it('whole note is displayed', function() {
    var noteListController = new NoteController();
    var singleNote = document.getElementById('single-note')
    note = new Note ('the quick brown fox jumped over the lazy dog')
    noteListController.createSingleNoteView(note);
    expect(singleNote.innerText).toEqual('the quick brown fox jumped over the lazy dog');
  });

  it('uses an event listener to print text from a single note to the page', function () {
    var singleNote = document.getElementById('single-note')
    var noteListController = new NoteController();
    changeUrlHashTo(1)
    noteListController.createNote('the quick brown dog jumped over the lazy fox')
    noteListController.openNote()
    expect(singleNote.innerText).toEqual('the quick brown dog jumped over the lazy fox')
  })
})
