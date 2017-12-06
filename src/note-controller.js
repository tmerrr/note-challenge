(function (exports) {

  function NoteController(notelistview = new NoteListView(new NoteList())){
    this.noteListView = notelistview
  }

  NoteController.prototype.createNote = function(text){
    this.noteListView.noteListModel.createAndStoreNote(text)
  }

  NoteController.prototype.renderHTML = function() {
    elem = document.getElementById('app')
    elem.innerHTML = this.noteListView.noteListModelToHTML()
  }

  NoteController.prototype.getNoteIdFromHash = function (url) {
    return url.split('#')[1]
  }

  exports.NoteController = NoteController;
})(this)
