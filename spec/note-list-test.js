function testNoteModelArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes.length == 0)
}

testNoteModelArray()

function testCreateAndStoreNote() {
  var noteList = new NoteList();
  noteList.createAndStoreNote('My favourite language is JavaScript')
  assert.isTrue(noteList.notes[0].returnText() === 'My favourite language is JavaScript')
}

testCreateAndStoreNote()
