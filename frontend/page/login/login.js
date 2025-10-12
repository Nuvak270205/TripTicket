document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const errEmailEmpty = document.getElementById("erremail");
    const errEmailInvalid = document.getElementById("err_email");
    const errPassEmpty = document.getElementById("errmk");
    const errPassShort = document.getElementById("err_mk");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (e) {
        // e.preventDefault();
        [errEmailEmpty, errEmailInvalid, errPassEmpty, errPassShort].forEach(el => el.classList.add("d-none"));

        let isValid = true;
        const emailValue = emailInput.value.trim();
        const passValue = passwordInput.value.trim();

        if (emailValue === "") {
            errEmailEmpty.classList.remove("d-none");
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            errEmailInvalid.classList.remove("d-none");
            isValid = false;
        }

        if (passValue === "") {
            errPassEmpty.classList.remove("d-none");
            isValid = false;
        } else if (passValue.length < 8) {
            errPassShort.classList.remove("d-none");
            isValid = false;
        }

        if (isValid) {
            console.log("✅ Form hợp lệ. Tiến hành đăng nhập...");

            alert("Đăng nhập thành công (demo)");
            form.reset();
        }
    });

    emailInput.addEventListener("input", () => {
        errEmailEmpty.classList.add("d-none");
        errEmailInvalid.classList.add("d-none");
    });

    passwordInput.addEventListener("input", () => {
        errPassEmpty.classList.add("d-none");
        errPassShort.classList.add("d-none");
    });
});
