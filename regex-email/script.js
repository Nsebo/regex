/*
Maybe you can describe a pattern
that you should follow, two digits
followed by any number of letters or anywhere that
starts with A and ends with S.

A regular expression is a way of
describing something you're searching for
in an abstract way. */
//

//
// In JavaScript, a regular expression is another data
// type just like
// numbers or strings and it looks like this.

const validateEmail = (email) => {
    // the code below is called regular expression
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');

    if (validateEmail(email)) {
        $result.text(email + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(email + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
};

$('#email').on('input', validate);

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
