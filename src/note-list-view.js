(function(exports) {

  function NoteListView(notelist){
    this.noteListModel = notelist
  }

  NoteListView.prototype.noteListModelToHTML = function(){
    return PutInUnorderedList(this.putInListElements())
  }

  NoteListView.prototype.putInListElements = function(){
    textarr = this.noteListModel.notes.map(function(note){
      return "<li><div>" + note.text.slice(0, 20) + "</div></li>"
    });
    return textarr.join('')
  }

  function PutInUnorderedList(list){
    return "<ul>" + list + "</ul>"
  }

  exports.NoteListView = NoteListView;
  exports.PutInUnorderedList = PutInUnorderedList;
})(this);
