const verifyEmail = function (text) {
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regex.test(text)
}

export { verifyEmail }