$(document).ready(function() {
    $.ajax({
        url: "http://localhost:5000/conference/user"
    }).then(function(user) {
        $('.firstname').append(user.firstname);
        $('.lastname').append(user.lastname);
        $('.age').append(user.age);
    });
});