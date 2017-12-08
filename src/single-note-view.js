(function(exports) {
  function SingleNoteView (note) {
    this._note = note;
  }

  SingleNoteView.prototype.noteTextToHTML = function () {
    return `${this._note.returnText()}`
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
