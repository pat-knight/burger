(() => {
    $(function() {
        $('#addNew').on('click', e => {
            e.preventDefault();
            let data = {
                burger_name: $('#newBurger').val()
            };
            $.ajax('/api/burgers', {
                type: 'POST',
                data: data,
            }).then(data => location.reload());
        });

        $(".devour").on("click", e => {
            $.ajax("/api/burgers/" + $(e.target).data("id"), {
                type: "PUT",
                data: { devoured: $(e.target).data("devoured") }
            }).then(data => location.reload());
        });

    });
})();
