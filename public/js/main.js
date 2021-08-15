$(document).ready(function(e) {
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());
    if (params.name) {
        $('#name_div').text(params.name);
    }
});
