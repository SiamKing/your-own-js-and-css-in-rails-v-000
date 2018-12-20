$('#hide_this').click(hideWhenClicked);

function hideWhenClicked(event) {
    const $target = $(event.target);
    $target.hide();
}