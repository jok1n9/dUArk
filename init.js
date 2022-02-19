$(document).ready(function() {
    var path = chrome.extension.getURL('<link>');
    $('head').append($('elearning.css')
        .attr("rel","stylesheet")
        .attr("type","text/css")
        .attr("href", path));
    });