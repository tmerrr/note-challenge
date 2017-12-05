window.onload = function() {


  function testNoteControllerInstantiation() {
    assert.isTrue(new NoteController() instanceof NoteController)
  }

  testNoteControllerInstantiation()

  function testCreationOfHTML() {
    var noteListController = new NoteController()
    elem = document.getElementById('app')
    noteListController.createNote('test note')
    noteListController.renderHTML()
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>test note</div></li></ul>')
  }

  testCreationOfHTML()

}
