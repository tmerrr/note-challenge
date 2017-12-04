(function(exports) {
  function testTextOfNote() {
      var note = new Note("My favourite language is JavaScript");

      if (note.text !== "My favourite language is JavaScript") {
        throw("Text doesn't match");
      }
  }
  testTextOfNote();
})(this);
