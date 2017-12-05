(function (exports) {

  function NoteController(notelist = NoteList, notelistview = NoteListView){
    this.notelist = new notelist();
    this.noteListView = new notelistview(notelist)
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
