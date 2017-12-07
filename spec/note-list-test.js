// DOUBLES
function DoubleNote(text, id = 0){
  this.text = text
  this.id = id
}

// TESTS

describe ('Note List Model', function () {
  it('checks that it instantiates with an empty array', function(){
    var noteList = new NoteList();
    expect(noteList.notes.length).toEqual(0)
  });

  it('checks that create and store note adds the note to array', function(){
    var noteList = new NoteList(DoubleNote);
    noteList.createAndStoreNote()
    expect(noteList.notes[0]).toBeInstanceOf(DoubleNote)
  });

  it('ID is incremented and assigned to a Note on creation', function () {
    var noteList = new NoteList(DoubleNote)
    noteList.createAndStoreNote('hi')
    noteList.createAndStoreNote('hello')
    noteList.createAndStoreNote('hello world')
    expect(noteList.returnAllNotes()[2].id).toEqual(3)
  })

  it('checks getter method returns array', function(){
    var noteList = new NoteList(DoubleNote)
    expect(noteList.returnAllNotes()).toBeInstanceOf(Array)
  });

})
