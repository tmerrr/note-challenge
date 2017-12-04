(function (exports) {

  function NoteList (note = Note) {
    this.notes = []
    this.noteClass = note
  }

  NoteList.prototype.createAndStoreNote = function (text) {
    this.notes.push(new this.noteClass(text))
  }

  NoteList.prototype.returnAllNotes = function () {
    this.notes.forEach(function (note) {
      return note
    })
  }
  exports.NoteList = NoteList;
})(this);
