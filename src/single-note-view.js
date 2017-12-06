(function(exports) {
  function SingleNoteView (note) {
    this._note = note;
  }

  SingleNoteView.prototype.noteTextToHTML = function () {
    return `<div>${this._note.returnText()}</div>`
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
