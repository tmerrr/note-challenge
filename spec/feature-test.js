describe('Feature Test', function () {
  it('can create a note using the Form on the index page', function () {
    var noteController = new NoteController();
    noteController.onSubmit()
    var textBox = document.getElementById('note-text')
    textBox.innerText = "Hi Everybody!"
    document.getElementById('create-note').click()
    expect(noteController.getNote(1).returnText()).toEqual('Hi Everybody!')
  })

  it('clears text after form submission', function() {
    var noteController = new NoteController();
    noteController.onSubmit()
    var textBox = document.getElementById('note-text')
    textBox.value = "Hi Dr. Nick!"
    document.getElementById('create-note').click()
    expect(textBox.value).toEqual('')
  })

  it('does nothing if no text is entered', function () {
    var noteController = new NoteController();
    noteController.onSubmit()
    document.getElementById('create-note').click()
    expect(noteController.getAllNotes().length).toEqual(0);
  })
})
