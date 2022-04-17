
const server = 'https://fe-checker.herokuapp.com/'
const sheet = 'https://docs.google.com/spreadsheets/d/1qncIIBs7t6aa90KdMsqH2TDphh80RLqf2mxXNk1pC6c/edit'
$('#submit').click(function(e) {
    e.preventDefault();
    const name = $(".name").val()
    const link = $(".link").val()
    if (!name || !link) {
        alert("empty")
        return;
    }
    $('.loading').fadeIn().css({display: 'flex'});
    $.post(server, {
        name, link
    }, (data,err) => {
        $(".name").val('')
        $(".link").val('')
        $('.loading').fadeOut();
        alert(sheet)
    })
})