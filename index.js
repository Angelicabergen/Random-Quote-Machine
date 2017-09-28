$(document).ready(function () {
    var quote;
    var author;
    function makeNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            type: 'GET',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (data) {
                quote = data.quoteText;
                author = data.quoteAuthor;
                $('#quote').text('"' + quote + '"');
                if (author) {
                    $('#author').text('- ' + author);
                } else {
                    $('#author').text('- unknown');
                }
                console.log(quote);
                console.log(author);
            },
            cache: false,
            error: function (error) {
                console.error(error);
            }

        });
    };
    makeNewQuote();

    $('#get-quote-btn').on('click', function (event) {
        event.preventDefault();
        makeNewQuote();
    })
    $('#twitter-btn').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " -- " + author));
    })
});