(function (exports) {

  function NoteController (noteListView = new NoteListView(new NoteList () )) {
    this.noteListView = noteListView
  }

  NoteController.prototype.createNote = function (text) {
    if (text.length > 0) {
      this.noteListView.noteListModel.createAndStoreNote(text);
      this.renderHTML()
    }
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

  NoteController.prototype.onSubmit = function () {
    var noteController = this;
    var newNoteForm = document.getElementById('new-note-form')
    var textBox = document.getElementById('note-text')
    newNoteForm.addEventListener("submit", function() {
      event.preventDefault();
      noteController.createNote(event.srcElement.children[0].value)
      textBox.value = ''
    })
  };


  exports.NoteController = NoteController;
})(this)
