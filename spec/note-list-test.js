// DOUBLES
function DoubleNote(){

}

// TESTS

describe('checks that it instantiates with an empty array', function(){
  var noteList = new NoteList();
  return assert.isTrue(noteList.notes.length === 0)
});

describe('checks that create and store note adds the note to array', function(){
  var noteList = new NoteList(DoubleNote);
  noteList.createAndStoreNote()
  return assert.isTrue(noteList.notes[0] instanceof DoubleNote)
});

describe('checks getter method returns array', function(){
  var noteList = new NoteList(DoubleNote)
  return assert.isTrue(noteList.returnAllNotes() instanceof Array)
});
