(function (exports) {

  function NoteController(notelistview = new NoteListView(new NoteList())){
    this.noteListView = notelistview
  }

  NoteController.prototype = {
    createNote: function (text) {
      this.noteListView.noteListModel.createAndStoreNote(text)
    },

    renderHTML: function () {
      var elem = document.getElementById('app')
      elem.innerHTML = this.noteListView.noteListModelToHTML()
    },

    createSingleNoteView: function (note) {
      var singleNoteDiv = document.getElementById('single-note')
      var noteId = this.getIdFromHash();
      var singleNote = note || this.getNote (noteId)
      singleNote = new SingleNoteView(singleNote)
      singleNoteDiv.innerHTML = singleNote.noteTextToHTML();
    },

    getNote: function (id) {
      return this.noteListView.noteListModel.notes[id - 1]
    },

    getIdFromHash: function () {
      return Number(window.location.href.split('#')[1])
    },

  }

  NoteController.prototype.openNote = function () {
    window.addEventListener("hashchange", this.createSingleNoteView())
  }

  exports.NoteController = NoteController;
})(this)
