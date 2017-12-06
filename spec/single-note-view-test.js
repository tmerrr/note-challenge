function DoubleNote (text) {
  this.text = text;
}

DoubleNote.prototype.returnText = function () {
  return this.text;
};

describe ('can instantiate a SingleNoteView with a Note', function () {
  var singleNoteView = new SingleNoteView(new DoubleNote('Hi Lewis'))
  return assert.isTrue(singleNoteView._note instanceof DoubleNote)
})

describe('returns text from Note as HTML', function () {
  var singleNoteView = new SingleNoteView(new DoubleNote('Hi Lewis'))
  HTMLstring = "<div>Hi Lewis</div>";
  return assert.isTrue(singleNoteView.noteTextToHTML() === HTMLstring);
})
