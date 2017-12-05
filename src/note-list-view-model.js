(function(exports) {

  function NoteListView(notelist = NoteList){
    this.noteListModel = new notelist()
  }

  NoteListView.prototype.noteListModelToHTML = function(){
    return PutInUnorderedList(this.putInListElements())
  }

  NoteListView.prototype.putInListElements = function(){
    textarr = []
    this.noteListModel.notes.forEach(function(note){
      textarr.push(PutInLiAndDiv(note.text))
    });
    return textarr.join('')
  }

  function PutInLiAndDiv(notetext){
    return "<li><div>" + notetext + "</div></li>"
  }

  function PutInUnorderedList(list){
    return "<ul>" + list + "</ul>"
  }

  exports.PutInLiAndDiv = PutInLiAndDiv;
  exports.NoteListView = NoteListView;
  exports.PutInUnorderedList = PutInUnorderedList;
})(this);
