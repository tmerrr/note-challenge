(function(exports) {

  function NoteListView(noteList = new NoteList){
    this.noteListModel = noteList
  }

  NoteListView.prototype.noteListModelToHTML = function(){
    return PutInUnorderedList(this.putInListElements())
  }

  NoteListView.prototype.putInListElements = function(){
    textarr = this.noteListModel.notes.map(function(note){
      return `<li><div id="note${note.id}"><a href="#${note.id}">${note.text.slice(0, 20)}</a></div></li>`
    });
    return textarr.join('')
  }

  exports.NoteListView = NoteListView;
})(this);
