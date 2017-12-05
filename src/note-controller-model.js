// var noteList = new NoteList()
// var noteListView = new NoteListView(noteList)
// noteList.createAndStoreNote("I'm a test note")
//
(function (exports) {

  function NoteController(notelist = NoteList, notelistview = NoteListView){
    this.notelist = new notelist();
    this.noteListView = new notelistview(notelist)
  }

  NoteController.prototype.createNote = function(text){
    this.notelist.createAndStoreNote(text)
  }

  exports.NoteController = NoteController;
})(this)

function printNotes(){
  var elem = document.getElementById('app')
  elem.innerHTML = noteListView.noteListModelToHTML()
  console.log(document.getElementById('app').innerHTML)
  // console.log(noteListView.noteListModelToHTML())
}

// printNotes()
//
//
// function Howdy(){
// document.getElementById('app').innerHTML = 'howdy';
// }
