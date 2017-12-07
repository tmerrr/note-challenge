(function(exports) {

  function NoteListView(notelist = new NoteList){
    this.noteListModel = notelist
  }

  NoteListView.prototype.noteListModelToHTML = function(){
    return PutInUnorderedList(this.putInListElements())
  }

  NoteListView.prototype.putInListElements = function(){
    textarr = this.noteListModel.notes.map(function(note){
      return `<li><div><a href="#${note.id}">${note.text.slice(0, 20)}</a></div></li>`
    });
    return textarr.join('')
  }

  exports.NoteListView = NoteListView;
})(this);
