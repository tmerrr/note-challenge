(function (exports) {

  function NoteController (noteListView = new NoteListView(new NoteList () )) {
    this.noteListView = noteListView
  }

  NoteController.prototype.createNote = function (text) {
    this.noteListView.noteListModel.createAndStoreNote(text);
    this.renderHTML()
  }

  NoteController.prototype.renderHTML = function () {
    var elem = document.getElementById('notes')
    elem.innerHTML = this.noteListView.noteListModelToHTML()
  }

  NoteController.prototype.getAllNotes = function () {
  return this.noteListView.noteListModel.notes;
  }

  NoteController.prototype.getIdFromHash = function () {
    return Number(window.location.hash.split('#')[1])
  }

  NoteController.prototype.getNote = function (id) {
    return this.getAllNotes()[id - 1]
  }

  NoteController.prototype.createSingleNoteView = function (note) {
    var singleNoteDiv = document.getElementById(`note${note.id}`)
    var singleNote = new SingleNoteView(note)
    singleNoteDiv.innerHTML = singleNote.noteTextToHTML();
  }

  NoteController.prototype.openNoteListener = function () {
    var noteController = this;
    window.addEventListener("hashchange", function() {
      var noteId = noteController.getIdFromHash();
      noteController.createSingleNoteView(noteController.getNote (noteId))
    })
  }


  exports.NoteController = NoteController;
})(this)
