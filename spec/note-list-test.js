function testNoteModelArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length == 0)
}

testNoteModelArray()

function testCreateAndStoreNote() {
  var noteList = new NoteList(DoubleNote);
  noteList.createAndStoreNote()
  assert.isTrue(noteList.notes[0] instanceof DoubleNote)
}

testCreateAndStoreNote()

function testReturnAllNotes () {
  var noteList = new NoteList(DoubleNote)
  noteList.createAndStoreNote()
  assert.isTrue(noteList.returnAllNotes() instanceof DoubleNote )
}

testReturnAllNotes()
// DOUBLES

function DoubleNote(){

}
