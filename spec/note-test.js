describe('Note', function () {
  it('assigns string to note', function(){
    var note = new Note('My favourite language is JavaScript')
    return expect(note.text).toEqual('My favourite language is JavaScript')
  });

  it('returns string from note using getter method', function(){
    var note = new Note('My favourite language is JavaScript')
    return expect(note.returnText()).toEqual('My favourite language is JavaScript')
  });

  it('each note can hold an ID', function () {
    var note = new Note('pickled onion', 1)
    return expect(note.id).toEqual(1)
  })

})
