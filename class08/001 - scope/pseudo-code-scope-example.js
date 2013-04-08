var username = false;

$(document).ready(function() {
    $("#signin").click(function() {
        FB.login(function(data) {
            if(data.success) {
               username = data.username;
               console.log(username); // the fb username;
            }
        });
    });
    
    console.log(username); // false, no matter what
});