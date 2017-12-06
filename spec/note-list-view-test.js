// Note Double
function DoubleNote(text){
  this.text = text
}

// Note List Double
function DoubleNoteList(notes) {
  this.notes = notes
}

DoubleNoteList.prototype = {
  returnAllNotes: function () {
    return this.notes
  }
}

// TESTS

describe('converts notelist to HTML', function(){
  var noteListView = new NoteListView(new DoubleNoteList([new DoubleNote('hello')]))
  return assert.isTrue(noteListView.noteListModelToHTML() === "<ul><li><div>hello</div></li></ul>")
});

describe('trims a string to 20 characters', function(){
  var noteListView = new NoteListView(new DoubleNoteList([new DoubleNote('the quick brown dog jumped over the lazy fox')]))
  return assert.isTrue(noteListView.noteListModelToHTML() === '<ul><li><div>the quick brown dog </div></li></ul>')
});
