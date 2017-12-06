(function (exports) {

  function NoteController(notelistview = new NoteListView(new NoteList())){
    // this.notelist = notelist;
    this.noteListView = notelistview
  }

  NoteController.prototype.createNote = function(text){
    this.noteListView.noteListModel.createAndStoreNote(text)
  }

  NoteController.prototype.renderHTML = function() {
    elem = document.getElementById('app')
    elem.innerHTML = this.noteListView.noteListModelToHTML()
  }

  exports.NoteController = NoteController;
})(this)
