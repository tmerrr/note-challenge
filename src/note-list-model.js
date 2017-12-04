(function (exports) {

  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.createAndStoreNote = function(text){
    this.notes.push(new Note(text))
  }

  exports.NoteList = NoteList;
})(this);
