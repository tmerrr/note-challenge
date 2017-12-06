describe('assigns string to note', function(){
  var note = new Note('My favourite language is JavaScript')
  return assert.isTrue(note.text === 'My favourite language is JavaScript')
});

describe('returns string from note using getter method', function(){
  var note = new Note('My favourite language is JavaScript')
  return assert.isTrue(note.returnText() === 'My favourite language is JavaScript')
});

describe('each note can hold an ID', function () {
  var note = new Note('pickled onion', 1)
  return assert.isTrue(note.id === 1)
})
