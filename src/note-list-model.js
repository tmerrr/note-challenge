(function (exports) {

  function NoteList(note = Note) {
    this.notes = []
    this.noteClass = note
  }

  NoteList.prototype.createAndStoreNote = function(text){
    this.notes.push(new this.noteClass(text))
  }

  exports.NoteList = NoteList;
})(this);
