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

    openNote: function () {
      var singleNote = document.getElementById('single-note')
      singleNote.innerHTML = '<div>the quick brown fox jumped over the lazy dog</div>'
    },

    getNoteIdFromHash: function (url) {
      return url.split('#')[1]
    }

  }

  exports.NoteController = NoteController;
})(this)
