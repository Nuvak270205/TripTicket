document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const ratingContainer = document.querySelector(".rating");
    const ratingStars = document.querySelectorAll(".rating__star");
    const ratingInput = document.getElementById("rating");
    const ratingHint = document.querySelector(".rating__hint");
    const formNotice = document.querySelector(".form__notice");

    const ratingMessages = {
        1: "Rất tệ",
        2: "Chưa hài lòng",
        3: "Ổn, cần cải thiện",
        4: "Hài lòng",
        5: "Tuyệt vời"
    };

    function paintStars(value) {
        ratingStars.forEach(function (star) {
            const starValue = parseInt(star.dataset.value, 10);
            star.classList.toggle("is-active", starValue <= value);
            star.firstElementChild.classList.toggle("fa-solid", starValue <= value);
            star.firstElementChild.classList.toggle("fa-regular", starValue > value);
        });
    }

    ratingStars.forEach(function (star) {
        star.addEventListener("mouseenter", function () {
            const value = parseInt(star.dataset.value, 10);
            paintStars(value);
            ratingHint.textContent = ratingMessages[value];
        });

        star.addEventListener("click", function () {
            const value = parseInt(star.dataset.value, 10);
            ratingContainer.dataset.selected = String(value);
            ratingInput.value = String(value);
            paintStars(value);
            ratingHint.textContent = ratingMessages[value];
        });

        star.addEventListener("keyup", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                star.click();
            }
        });
    });

    ratingContainer.addEventListener("mouseleave", function () {
        const selected = parseInt(ratingContainer.dataset.selected, 10) || 0;
        paintStars(selected);
        ratingHint.textContent = selected ? ratingMessages[selected] : "Chưa chọn đánh giá";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        formNotice.className = "form__notice";
        formNotice.textContent = "";

        if (!ratingInput.value) {
            formNotice.classList.add("is-error");
            formNotice.textContent = "Vui lòng chọn mức đánh giá trải nghiệm.";
            ratingStars[0].focus();
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const nameValue = form.fullName.value.trim();
        form.reset();
        ratingContainer.dataset.selected = "0";
        paintStars(0);
        ratingHint.textContent = "Chưa chọn đánh giá";

        formNotice.classList.add("is-success");
        formNotice.textContent = `Cảm ơn ${nameValue || "bạn"}! TripTicket đã ghi nhận góp ý.`;
    });
});
