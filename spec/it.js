(function (exports) {

  function it(description, test) {

    var elem = document.getElementById('tests')
    try {
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${description}</li>` +
      `<p style='color: green; font-weight: bold'> ${test()} </p>`
    }
    catch(error) {
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${description}</li>` +
      `<p style='color: red; font-weight: bold'> ${error.message} </p>`
    }
  }
  exports.it = it;
})(this);
