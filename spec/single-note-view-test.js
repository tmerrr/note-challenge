function DoubleNote (text) {
  this.text = text;
}

DoubleNote.prototype.returnText = function () {
  return this.text;
};

describe('Single Note View', function () {
  it ('can instantiate a SingleNoteView with a Note', function () {
    var singleNoteView = new SingleNoteView(new DoubleNote('Hi Lewis'))
    expect(singleNoteView._note).toBeInstanceOf(DoubleNote)
  })

  it('returns text from Note as HTML', function () {
    var singleNoteView = new SingleNoteView(new DoubleNote('Hi Lewis'))
    HTMLstring = "<div>Hi Lewis</div>";
    expect(singleNoteView.noteTextToHTML()).toEqual(HTMLstring);
  })

})
