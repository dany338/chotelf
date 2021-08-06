const returnError = (text, setAlerts) => {
  const strgTxt = String(text).toLowerCase()
  let finalError = ''
  if (strgTxt.indexOf('bad request') > -1) {
    console.log(strgTxt)
  } else if (strgTxt.indexOf('the user may have been deleted') > -1) {
    finalError = 'We couldn’t find any account with that email'
  } else if (strgTxt.indexOf('the password is invalid') > -1) {
    finalError = 'Oh no, wrong password, try again'
  } else if (strgTxt.indexOf('please resend') > -1) {
    finalError = 'Wrong code, try again'
  } else if (text) {
    finalError = text
  } else {
    finalError = 'Connection error: Try again or contact support.'
  }
  if (finalError && setAlerts) {
    setAlerts(ov => [...ov, {
      message: finalError,
      variant: 'error'
    }])
  }
}

export default returnError