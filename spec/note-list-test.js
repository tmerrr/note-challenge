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

// DOUBLES

function DoubleNote(){

}
