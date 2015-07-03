function logcheck() {
    var user = usernameCheck();
    var pass = passwordCheck();
    if (user === false || pass === false) {
        return false;
    }
    else {
        return true;
    }
}

function usernameCheck() {
    var user = document.forms["login"]["loguser"].value;
    if (user === "" || user === null || !(/^[0-9a-zA-Z_-]+$/.test(user))) {
        document.forms["login"]["loguser"].style.backgroundColor = "red";
        return false;
    }
    else {
        document.forms["login"]["loguser"].style.backgroundColor = "white";
        return true;
    }
}

function passwordCheck() {
    var pass = document.forms["login"]["logpass"].value;
    if (pass === "" || pass === null) {
        document.forms["login"]["logpass"].style.backgroundColor = "red";
        return false;
    }
    else {
        document.forms["login"]["logpass"].style.backgroundColor = "white";
        return true;
    }
}

function backWhite(x) {
    x.style.background = "white";
}

