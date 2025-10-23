document.addEventListener("DOMContentLoaded", function () {
    const methodButtons = Array.from(document.querySelectorAll(".payment-method"));
    const instructionBox = document.getElementById("paymentInstruction");
    const cardForm = document.getElementById("cardForm");
    const couponInput = document.getElementById("couponInput");
    const couponStatus = document.getElementById("couponStatus");
    const applyCouponButton = document.getElementById("applyCouponButton");
    const policyCheckbox = document.getElementById("policyCheckbox");
    const confirmPaymentButton = document.getElementById("confirmPaymentButton");
    const paymentNotice = document.getElementById("paymentNotice");
    const baseFare = document.getElementById("baseFare");
    const serviceFee = document.getElementById("serviceFee");
    const discountAmount = document.getElementById("discountAmount");
    const totalAmount = document.getElementById("totalAmount");
    const pricingNote = document.getElementById("pricingNote");
    const countdown = document.getElementById("paymentCountdown");

    const METHOD_INSTRUCTIONS = {
        vnpay: {
            instruction: "<strong>VNPay QR:</strong> Mở app ngân hàng hoặc VNPay, chọn quét QR và hoàn tất trong 5 phút. Mã giữ chỗ sẽ được gửi ngay sau thanh toán.",
            fee: 0,
            discount: {
                code: "TRIPVNPAY",
                amount: 20000,
                message: "Đã áp dụng mã TRIPVNPAY - Giảm 20.000đ cho thanh toán VNPay."
            }
        },
        momo: {
            instruction: "<strong>MoMo:</strong> Chọn thanh toán bằng ví MoMo, quét mã QR. Hoàn tiền 20.000đ sẽ về ví trong 24h với khách mới.",
            fee: 3000
        },
        card: {
            instruction: "<strong>Thẻ quốc tế/ATM:</strong> Nhập thông tin thẻ và xác thực OTP. TripTicket không lưu thông tin thẻ của bạn.",
            fee: 4500
        },
        office: {
            instruction: "<strong>Thanh toán tại văn phòng:</strong> Giữ vé đến 12h trước giờ khởi hành. Thanh toán tại 283 Phạm Ngũ Lão, Q1, TP.HCM.",
            fee: 0
        }
    };

    const COUPONS = {
        TRIPVNPAY: {
            amount: 20000,
            methods: ["vnpay"],
            description: "Giảm 20.000đ khi thanh toán qua VNPay"
        },
        TRIPWELCOME: {
            amount: 15000,
            methods: ["vnpay", "momo", "card"],
            description: "Giảm 15.000đ cho người dùng mới"
        },
        TRIPGROUP: {
            amount: 30000,
            methods: ["vnpay", "card"],
            description: "Giảm 30.000đ cho nhóm từ 2 khách"
        }
    };

    let selectedMethod = "vnpay";
    let appliedCoupon = null;
    let baseFareValue = parseCurrency(baseFare?.textContent || "0");

    function parseCurrency(value) {
        return Number(value.replace(/[^\d]/g, "")) || 0;
    }

    function formatCurrency(value) {
        return value.toLocaleString("vi-VN") + "đ";
    }

    function updateSummary() {
        const methodConfig = METHOD_INSTRUCTIONS[selectedMethod] || { fee: 0 };
        const fee = methodConfig.fee || 0;
        let discount = 0;

        if (appliedCoupon && appliedCoupon.methods.includes(selectedMethod)) {
            discount = appliedCoupon.amount;
        }

        serviceFee.textContent = formatCurrency(fee);
        discountAmount.textContent = `-${formatCurrency(discount)}`;
        const total = Math.max(baseFareValue + fee - discount, 0);
        totalAmount.textContent = formatCurrency(total);
    }

    function renderInstruction() {
        const methodConfig = METHOD_INSTRUCTIONS[selectedMethod];
        if (!instructionBox || !methodConfig) {
            return;
        }
        instructionBox.innerHTML = methodConfig.instruction;
        if (appliedCoupon && !appliedCoupon.methods.includes(selectedMethod)) {
            instructionBox.innerHTML += `<p><strong>Lưu ý:</strong> Mã ${couponInput.value.toUpperCase()} chỉ áp dụng cho ${appliedCoupon.methods.join(", ")}.</p>`;
        }
    }

    function toggleCardForm() {
        if (!cardForm) {
            return;
        }
        cardForm.hidden = selectedMethod !== "card";
        const inputs = Array.from(cardForm.querySelectorAll("input"));
        if (selectedMethod === "card") {
            inputs.forEach(function (input) {
                input.required = true;
            });
        } else {
            inputs.forEach(function (input) {
                input.required = false;
                input.value = "";
            });
        }
    }

    function handleMethodChange(method, btn) {
        if (!methodButtons.length) {
            return;
        }
        selectedMethod = method;
        methodButtons.forEach(function (button) {
            button.classList.toggle("is-active", button === btn);
        });
        renderInstruction();
        toggleCardForm();
        updateSummary();
        if (couponStatus) {
            couponStatus.textContent = "";
            couponStatus.className = "payment-coupon__status";
        }
        if (paymentNotice) {
            paymentNotice.textContent = "";
            paymentNotice.className = "payment-card__notice";
        }
    }

    methodButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const method = button.dataset.method;
            if (!method) {
                return;
            }
            handleMethodChange(method, button);
        });
    });

    function validateCoupon(code) {
        const upperCode = code.toUpperCase();
        const coupon = COUPONS[upperCode];
        if (!coupon) {
            return { valid: false, message: "Mã không tồn tại." };
        }
        if (!coupon.methods.includes(selectedMethod)) {
            return {
                valid: false,
                message: `Mã áp dụng cho: ${coupon.methods.join(", ")}.`
            };
        }
        return { valid: true, coupon, message: coupon.description };
    }

    if (applyCouponButton && couponInput) {
        applyCouponButton.addEventListener("click", function () {
            const code = couponInput.value.trim();
            if (!code) {
                couponStatus.textContent = "Vui lòng nhập mã.";
                couponStatus.className = "payment-coupon__status is-error";
                return;
            }
            const result = validateCoupon(code);
            if (result.valid && result.coupon) {
                appliedCoupon = result.coupon;
                couponStatus.textContent = result.message;
                couponStatus.className = "payment-coupon__status is-success";
            } else {
                appliedCoupon = null;
                couponStatus.textContent = result.message;
                couponStatus.className = "payment-coupon__status is-error";
            }
            updateSummary();
        });
    }

    function validateCardForm() {
        if (!cardForm || cardForm.hidden) {
            return true;
        }
        const cardNumber = cardForm.cardNumber.value.replace(/\s+/g, "");
        const cardName = cardForm.cardName.value.trim();
        const cardExpiry = cardForm.cardExpiry.value.trim();
        const cardCvv = cardForm.cardCvv.value.trim();

        if (!cardNumber || cardNumber.length < 12) {
            showPaymentNotice("Vui lòng nhập số thẻ hợp lệ.");
            return false;
        }
        if (!cardName) {
            showPaymentNotice("Tên in trên thẻ không được để trống.");
            return false;
        }
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showPaymentNotice("Định dạng ngày hết hạn không hợp lệ (MM/YY).");
            return false;
        }
        if (!/^\d{3,4}$/.test(cardCvv)) {
            showPaymentNotice("Mã CVV không hợp lệ.");
            return false;
        }
        return true;
    }

    function showPaymentNotice(message, isSuccess) {
        if (!paymentNotice) {
            return;
        }
        paymentNotice.textContent = message;
        paymentNotice.className = "payment-card__notice";
        if (isSuccess === true) {
            paymentNotice.classList.add("is-success");
        } else if (isSuccess === false) {
            paymentNotice.classList.add("is-error");
        }
    }

    if (confirmPaymentButton) {
        confirmPaymentButton.addEventListener("click", function () {
            showPaymentNotice("", null);
            if (!policyCheckbox?.checked) {
                showPaymentNotice("Vui lòng đồng ý với điều khoản trước khi thanh toán.", false);
                policyCheckbox?.focus();
                return;
            }
            if (!validateCardForm()) {
                return;
            }
            confirmPaymentButton.disabled = true;
            confirmPaymentButton.classList.add("is-loading");
            confirmPaymentButton.textContent = "Đang xử lý...";

            setTimeout(function () {
                confirmPaymentButton.disabled = false;
                confirmPaymentButton.classList.remove("is-loading");
                confirmPaymentButton.textContent = "Thanh toán & giữ chỗ";
                showPaymentNotice("Thanh toán thành công! Vé và hóa đơn đã được gửi đến email của bạn.", true);
                setTimeout(function () {
                    location.href = "../home/index.html";
                }, 1800);
            }, 2500);
        });
    }

    function startCountdown() {
        if (!countdown) {
            return;
        }
        let secondsRemaining = 600;
        updateCountdownText(secondsRemaining);
        const countdownInterval = window.setInterval(function () {
            secondsRemaining -= 1;
            if (secondsRemaining <= 0) {
                window.clearInterval(countdownInterval);
                countdown.textContent = "00:00";
                showPaymentNotice("Hết thời gian giữ chỗ. Vui lòng đặt lại chuyến.", false);
                confirmPaymentButton.disabled = true;
                confirmPaymentButton.classList.add("is-disabled");
                return;
            }
            updateCountdownText(secondsRemaining);
        }, 1000);
    }

    function updateCountdownText(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        countdown.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    function setupAutoFocusMasking() {
        if (!cardForm) {
            return;
        }
        const cardNumberInput = cardForm.cardNumber;
        const cardExpiryInput = cardForm.cardExpiry;

        cardNumberInput.addEventListener("input", function () {
            let value = cardNumberInput.value.replace(/[^\d]/g, "");
            const chunked = value.match(/.{1,4}/g) || [];
            cardNumberInput.value = chunked.join(" ");
        });

        cardExpiryInput.addEventListener("input", function () {
            let value = cardExpiryInput.value.replace(/[^\d]/g, "");
            if (value.length >= 3) {
                value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
            }
            cardExpiryInput.value = value;
        });
    }

    renderInstruction();
    toggleCardForm();
    updateSummary();
    startCountdown();
    setupAutoFocusMasking();
});
