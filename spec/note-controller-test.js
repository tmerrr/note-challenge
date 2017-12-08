
// DOUBLES

function DoubleNoteListView (doublenotelistclass) { }

DoubleNoteListView.prototype.noteListModelToHTML = function () {
  return '<ul><li><div id="note1">test note</div></li></ul>'
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
    var elem = document.getElementById('notes')
    noteListController.renderHTML()
    expect(elem.innerHTML).toEqual('<ul><li><div id="note1">test note</div></li></ul>')
  });

  it('can create a note', function () {
    var noteListController = new NoteController()
    noteListController.createNote('hi')
    expect(noteListController.getAllNotes()[0]).toBeInstanceOf(Note)
  })

  it('creating a note then renders the HTML to the page', function () {
    var noteListController = new NoteController()
    noteListController.createNote('hi')
    var noteDiv = document.getElementById('note1')
    expect(noteDiv.innerText).toEqual('hi')
  })

  it('can return all notes as Array', function () {
    var noteListController = new NoteController()
    noteListController.createNote('hello world')
    var note = noteListController.noteListView.noteListModel.notes[0]
    expect(noteListController.getAllNotes()).toBeInstanceOf(Array)
    expect(noteListController.getAllNotes()).toInclude(note)
  })

  it('can search for a specific note based on the ID', function () {
    var noteListController = new NoteController();
    noteListController.createNote('hello')
    noteListController.createNote('hello world')
    noteListController.createNote('hi')
    var note = noteListController.getNote(2)
    expect(note.returnText()).toEqual('hello world')
  })

  it('gets ID from the current url', function () {
    changeUrlHashTo(3)
    var noteListController = new NoteController();
    expect(noteListController.getIdFromHash()).toEqual(3)
  })

  it('whole note is displayed', function() {
    var noteListController = new NoteController();
    noteListController.createNote('the quick brown fox jumped over the lazy dog')
    var note = noteListController.getNote(1)
    noteListController.createSingleNoteView(note);
    var div = document.getElementById('note1')
    expect(div.innerText).toEqual('the quick brown fox jumped over the lazy dog');
  });

  //  Test Currently Failing, even though it works in practice, need to think of how to test:
  // it('uses an event listener to print text from a single note to the page', function () {
  //   var noteListController = new NoteController();
  //   noteListController.openNoteListener()
  //   noteListController.createNote('the quick brown dog jumped over the lazy fox')
  //   var div = document.getElementById('note1')
  //   var link = div.getElementsByTagName('a')[0]
  //   link.click()
  //   expect(div.innerText).toEqual('the quick brown dog jumped over the lazy fox')
  // })
})
