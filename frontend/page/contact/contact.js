document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactSupportForm");
    const formNotice = document.getElementById("contactFormNotice");
    const topicSelect = document.getElementById("contactTopic");

    const contactChannels = document.querySelectorAll(".contact-channel__card");
    contactChannels.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("is-hovered");
        });
        card.addEventListener("mouseleave", function () {
            card.classList.remove("is-hovered");
        });
    });

    if (topicSelect) {
        topicSelect.addEventListener("change", function () {
            const value = topicSelect.value;
            const hints = {
                booking: "Ghi rõ mã đặt vé, họ tên hành khách và thời gian khởi hành.",
                payment: "Đính kèm ảnh chụp màn hình giao dịch (nếu có).",
                refund: "Cho chúng tôi biết mã vé và phương thức refund mong muốn.",
                partner: "Để lại số điện thoại, chúng tôi sẽ liên hệ trong 24h.",
                other: "Vui lòng mô tả rõ nhu cầu để đội ngũ hỗ trợ nhanh nhất."
            };
            const helper = document.getElementById("contactTopicHint");
            if (helper) {
                helper.textContent = hints[value] || "Hãy mô tả vấn đề của bạn, TripTicket sẵn sàng hỗ trợ.";
            }
        });
    }

    if (!contactForm || !formNotice) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        resetNotice();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const formData = new FormData(contactForm);
        const name = formData.get("fullName");
        contactForm.reset();
        if (topicSelect) {
            topicSelect.value = "booking";
            const helper = document.getElementById("contactTopicHint");
            if (helper) {
                helper.textContent = "Ghi rõ mã đặt vé, họ tên hành khách và thời gian khởi hành.";
            }
        }

        showNotice(`Cảm ơn ${name || "bạn"}! TripTicket đã nhận yêu cầu và sẽ phản hồi trong 15 phút.`, true);
    });

    function showNotice(message, isSuccess) {
        formNotice.textContent = message;
        formNotice.className = "contact-form__notice";
        formNotice.classList.add(isSuccess ? "is-success" : "is-error");
    }

    function resetNotice() {
        formNotice.textContent = "";
        formNotice.className = "contact-form__notice";
    }
});
