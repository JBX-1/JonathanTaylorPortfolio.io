var typed = new Typed('.element', {
    strings: ["Welcome", "im Jonathan", "I'm a Full-Stack Software Engineer"],
    loop: true,
    typeSpeed: 100
});

$("a").click(function () {

    var selected = $(this);
    $('a').removeClass('active');
    $(selected).addClass('active');
});

var $a = $('#a'),
    $b = $('#b'),
    $c = $('#c'),
    $d = $('#d'),
    $home = $('.homeContent'),
    $aboutus = $('.aboutus'),
    $gallery = $('.gallery'),
    $contactus = $('.contactus');



$a.click(function () {
    $home.fadeIn();
    $aboutus.fadeOut();
    $gallery.fadeOut();
    $contactus.fadeOut();
});
$b.click(function () {
    $aboutus.fadeIn();
    $home.fadeOut();
    $gallery.fadeOut();
    $contactus.fadeOut();
});
$c.click(function () {
    $gallery.fadeIn();
    $home.fadeOut();
    $aboutus.fadeOut();
    $contactus.fadeOut();
});
$d.click(function () {
    $contactus.fadeIn();
    $home.fadeOut();
    $gallery.fadeOut();
    $aboutus.fadeOut();

})

$('.submitButton').on('click', function (event) {
    event.preventDefault();
    console.log("HI");
    var clients = {
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        Email: $('#email').val().trim(),
        Message: $('#message').val().trim()
    }
    // console.log(clients);
    $.post("/", clients)
        .then(function (data) {
            console.log("add.html", data);
            alert("Adding character...");
        });

})