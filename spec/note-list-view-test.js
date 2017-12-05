// Note Double
function DoubleNote(text){
  this.text = text
}

DoubleNote.prototype.returnText = function () {
  return this.text
}

// Note List Double
function DoubleNoteList (note = DoubleNote) {
  this.notes = []
  this.noteClass = note
}

DoubleNoteList.prototype = {
  returnAllNotes: function () {
    return this.notes
  },

  createAndStoreNote: function (text) {
    this.notes.push(new this.noteClass(text))
  }
}

// TESTS

function testNoteListModelToHTML() {

  var noteListView = new NoteListView(DoubleNoteList)
  noteListView.noteListModel.createAndStoreNote('hello')
  assert.isTrue(noteListView.noteListModelToHTML() === "<ul><li><div>hello</div></li></ul>")
}

testNoteListModelToHTML()
