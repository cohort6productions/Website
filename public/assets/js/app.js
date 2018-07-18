let messageSent = false;

function submitForm(data) {
    return $.post("/comment", data, (status) => {
        if (status === "OK") {
            messageSent = true;
        }
        console.log(status)
    })
};

$("#comment-form").on("submit", (e) => {
    e.preventDefault();

    const data = {
        name: $("#form-name").val(),
        email: $("#form-email").val(),
        message: $("#form-message").val(),
    };

    if (messageSent === true) {
        return
    } else {
        if (data.name === "") {

        };
        if (data.email === "") {

        };
        if (data.message === "") {

        };


        if (data.name !== "" && data.email !== "" && data.message !== "") {
            submitForm(data)
        } else {
            return
        }
    }

});