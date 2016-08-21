// validateEmail('user@example.com') => true
// validateEmail('user123456') => false
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// validatePhone('+79161234567') => true
// validatePhone('84950000') => false
function validatePhone(phone) {
    return /^\+[0-9]+$/.test(phone);
}
