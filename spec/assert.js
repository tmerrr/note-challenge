var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw("Assertion failed: expected "  + assertionToCheck + " to be true")

    }
  }
}