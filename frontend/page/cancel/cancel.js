document.addEventListener("DOMContentLoaded", function () {
	const bookings = [
		{
			code: "TT-241010",
			email: "vana@example.com",
			phone: "0966123456",
			operator: "Nhà xe Tân Quang Dũng",
			route: {
				from: "TP.HCM",
				to: "Đà Lạt",
				depart: "2025-10-24T20:30:00+07:00",
				arrive: "2025-10-25T06:10:00+07:00"
			},
			tickets: [
				{
					id: "TT-241010-01",
					passenger: "Nguyễn Văn A",
					seat: "05A",
					fare: 360000,
					refundPercent: 0.85,
					status: "confirmed",
					bookedAt: "2025-10-10T09:20:00+07:00"
				},
				{
					id: "TT-241010-02",
					passenger: "Trần Thị B",
					seat: "05B",
					fare: 360000,
					refundPercent: 0.85,
					status: "confirmed",
					bookedAt: "2025-10-10T09:20:00+07:00"
				}
			]
		},
		{
			code: "TT-241112",
			email: "huong.le@example.com",
			phone: "0987654321",
			operator: "Nhà xe Phương Trang",
			route: {
				from: "Đà Nẵng",
				to: "Nha Trang",
				depart: "2025-11-12T22:00:00+07:00",
				arrive: "2025-11-13T06:00:00+07:00"
			},
			tickets: [
				{
					id: "TT-241112-01",
					passenger: "Lê Thị Hương",
					seat: "12C",
					fare: 420000,
					refundPercent: 0.9,
					status: "confirmed",
					bookedAt: "2025-10-28T10:05:00+07:00"
				},
				{
					id: "TT-241112-02",
					passenger: "Trần Minh Quân",
					seat: "12D",
					fare: 420000,
					refundPercent: 0.9,
					status: "processing",
					bookedAt: "2025-10-28T10:05:00+07:00"
				}
			]
		}
	];

	const reasons = [
		{ value: "plan_change", label: "Thay đổi kế hoạch cá nhân" },
		{ value: "health_issue", label: "Lý do sức khỏe" },
		{ value: "double_booking", label: "Đặt nhầm/đặt trùng" },
		{ value: "operator_issue", label: "Nhà xe đổi lịch" },
		{ value: "other", label: "Khác" }
	];

	const form = document.getElementById("cancelLookupForm");
	const noticeEl = document.getElementById("cancelFormNotice");
	const resultWrapper = document.getElementById("cancelResult");
	let activeBooking = null;

	if (!form || !noticeEl || !resultWrapper) {
		return;
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		resetNotice();
		resultWrapper.innerHTML = "";
		activeBooking = null;

		const codeInput = document.getElementById("bookingCode");
		const contactInput = document.getElementById("contactValue");

		const bookingCode = codeInput?.value.trim().toUpperCase();
		const contactValue = contactInput?.value.trim();

		if (!bookingCode || !contactValue) {
			showNotice("Vui lòng nhập đầy đủ thông tin.", false);
			return;
		}

		const booking = findBooking(bookingCode, contactValue);
		if (!booking) {
			showNotice("Không tìm thấy vé phù hợp. Vui lòng kiểm tra lại thông tin.", false);
			return;
		}

		activeBooking = booking;
		showNotice("Đã tìm thấy vé. Bạn có thể chọn vé cần hủy phía dưới.", true);
		renderBooking(booking);
	});

	function resetNotice() {
		noticeEl.textContent = "";
		noticeEl.className = "cancel-form__notice";
	}

	function showNotice(message, isSuccess) {
		noticeEl.textContent = message;
		noticeEl.className = "cancel-form__notice";
		noticeEl.classList.add(isSuccess ? "is-success" : "is-error");
	}

	function findBooking(code, contact) {
		const normalizedCode = (code || "").toUpperCase();
		const normalizedContact = (contact || "").toLowerCase();
		const digitsContact = normalizedContact.replace(/[^0-9]/g, "");

		return bookings.find(function (item) {
			const emailMatch = item.email.toLowerCase() === normalizedContact;
			const phoneMatch = item.phone.replace(/[^0-9]/g, "") === digitsContact;
			return item.code === normalizedCode && (emailMatch || phoneMatch);
		}) || null;
	}

	function renderBooking(booking) {
		if (!booking) {
			resultWrapper.innerHTML = "";
			return;
		}

		const summaryHtml = `
			<div class="cancel-ticket__summary">
				<strong>${booking.route.from} → ${booking.route.to}</strong>
				<p>Mã đặt vé: ${booking.code}</p>
				<p>Nhà xe: ${booking.operator}</p>
				<p>Khởi hành: ${formatDate(booking.route.depart)} · ${formatTime(booking.route.depart)} (${formatRelativeTime(booking.route.depart)})</p>
			</div>
		`;

		const listHtml = booking.tickets.map(createTicketRow).join("");
		const reasonOptions = reasons.map(function (reason) {
			return `<option value="${reason.value}">${reason.label}</option>`;
		}).join("");

		const actionHtml = `
			<div class="cancel-actions">
				<div class="cancel-form__group">
					<label for="cancelReason">Lý do hủy *</label>
					<select id="cancelReason" required>
						<option value="" selected disabled>Chọn lý do</option>
						${reasonOptions}
					</select>
				</div>
				<div class="cancel-form__group">
					<label for="cancelNote">Ghi chú</label>
					<textarea id="cancelNote" rows="3" placeholder="Thông tin bổ sung để TripTicket hỗ trợ nhanh hơn"></textarea>
				</div>
				<div class="cancel-form__group cancel-form__group--submit">
					<button type="button" class="cancel-actions__btn" id="cancelSubmitButton">Gửi yêu cầu hủy</button>
				</div>
			</div>
			<div class="cancel-summary" id="cancelSummary"></div>
		`;

		resultWrapper.innerHTML = `
			<div class="cancel-result__card" data-code="${booking.code}">
				${summaryHtml}
				<div class="cancel-ticket__list">${listHtml}</div>
				${actionHtml}
			</div>
		`;

		attachResultEvents();
	}

	function createTicketRow(ticket) {
		const statusMeta = getStatusMeta(ticket.status);
		const disabledAttr = ticket.status !== "confirmed" ? "disabled" : "";
		const checkboxId = `ticket-${ticket.id}`;
		const refundValue = Math.round(ticket.fare * ticket.refundPercent);

		return `
			<div class="cancel-ticket__item" data-ticket-id="${ticket.id}">
				<div class="cancel-ticket__top">
					<label class="cancel-ticket__select" for="${checkboxId}">
						<input type="checkbox" class="cancel-ticket__checkbox" id="${checkboxId}" data-ticket="${ticket.id}" ${disabledAttr}>
						<span>${ticket.passenger} · Ghế ${ticket.seat}</span>
					</label>
					<span class="cancel-ticket__status ${statusMeta.className}" data-ticket-status="${ticket.id}">${statusMeta.label}</span>
				</div>
				<div class="cancel-ticket__timeline">Đặt lúc: ${formatDate(ticket.bookedAt)} · ${formatTime(ticket.bookedAt)}</div>
				<div class="cancel-ticket__refund">Hoàn tối đa ${Math.round(ticket.refundPercent * 100)}% · ${formatCurrency(refundValue)}</div>
			</div>
		`;
	}

	function attachResultEvents() {
		const cancelButton = document.getElementById("cancelSubmitButton");
		if (cancelButton) {
			cancelButton.addEventListener("click", handleCancelRequest);
		}
	}

	function handleCancelRequest() {
		if (!activeBooking) {
			return;
		}

		const summaryEl = document.getElementById("cancelSummary");
		const reasonSelect = document.getElementById("cancelReason");
		const noteInput = document.getElementById("cancelNote");
		const selectedCheckboxes = Array.from(document.querySelectorAll(".cancel-ticket__checkbox:checked"));

		if (!selectedCheckboxes.length) {
			showSummary(summaryEl, "Vui lòng chọn ít nhất một vé để hủy.", false);
			return;
		}

		if (!reasonSelect || !reasonSelect.value) {
			showSummary(summaryEl, "Vui lòng chọn lý do hủy vé.", false);
			reasonSelect?.focus();
			return;
		}

		const reasonLabel = reasons.find(function (item) {
			return item.value === reasonSelect.value;
		})?.label || "";
		const noteValue = noteInput?.value.trim();

		let refundTotal = 0;
		const updatedTickets = [];

		selectedCheckboxes.forEach(function (checkbox) {
			const ticketId = checkbox.dataset.ticket;
			const ticket = activeBooking.tickets.find(function (item) {
				return item.id === ticketId;
			});
			if (!ticket || ticket.status !== "confirmed") {
				return;
			}
			ticket.status = "processing";
			refundTotal += Math.round(ticket.fare * ticket.refundPercent);
			updatedTickets.push(ticket);
		});

		if (!updatedTickets.length) {
			showSummary(summaryEl, "Các vé được chọn không thể hủy hoặc đã gửi yêu cầu trước đó.", false);
			return;
		}

		updatedTickets.forEach(function (ticket) {
			const statusEl = document.querySelector(`[data-ticket-status="${ticket.id}"]`);
			const checkboxEl = document.querySelector(`.cancel-ticket__checkbox[data-ticket="${ticket.id}"]`);
			const statusMeta = getStatusMeta(ticket.status);
			if (statusEl) {
				statusEl.textContent = statusMeta.label;
				statusEl.className = `cancel-ticket__status ${statusMeta.className}`;
			}
			if (checkboxEl) {
				checkboxEl.checked = false;
				checkboxEl.disabled = true;
			}
		});

		const summaryLines = [
			`<p class="cancel-summary__success">Đã ghi nhận yêu cầu hủy ${updatedTickets.length} vé.</p>`,
			`<p>Số tiền hoàn tạm tính: ${formatCurrency(refundTotal)} · Lý do: ${reasonLabel}</p>`,
			`<p>TripTicket sẽ gửi email xác nhận đến ${activeBooking.email} trong vòng 4 giờ.</p>`
		];

		if (noteValue) {
			summaryLines.push(`<p>Ghi chú của bạn: ${escapeHtml(noteValue)}</p>`);
		}

		showSummary(summaryEl, summaryLines.join(""), true, true);
		reasonSelect.value = "";
		if (noteInput) {
			noteInput.value = "";
		}
	}

	function showSummary(element, message, isSuccess, allowHtml) {
		if (!element) {
			return;
		}
		element.className = "cancel-summary";
		element.innerHTML = "";
		if (!message) {
			return;
		}
		if (isSuccess) {
			element.innerHTML = allowHtml ? message : `<p class="cancel-summary__success">${message}</p>`;
		} else {
			const content = allowHtml ? message : `<p class="cancel-summary__error">${message}</p>`;
			element.innerHTML = content;
		}
	}

	function getStatusMeta(status) {
		if (status === "processing") {
			return { label: "Đang xử lý hủy", className: "status--processing" };
		}
		if (status === "cancelled") {
			return { label: "Đã hủy", className: "status--cancelled" };
		}
		return { label: "Đã giữ chỗ", className: "status--confirmed" };
	}

	function formatDate(isoString) {
		if (!isoString) {
			return "";
		}
		return new Intl.DateTimeFormat("vi-VN", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		}).format(new Date(isoString));
	}

	function formatTime(isoString) {
		if (!isoString) {
			return "";
		}
		return new Intl.DateTimeFormat("vi-VN", {
			hour: "2-digit",
			minute: "2-digit"
		}).format(new Date(isoString));
	}

	function formatRelativeTime(isoString) {
		const target = new Date(isoString);
		const now = new Date();
		const diffMs = target - now;
		if (diffMs <= 0) {
			return "Đã khởi hành";
		}
		const totalMinutes = Math.floor(diffMs / 60000);
		const days = Math.floor(totalMinutes / (60 * 24));
		const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
		const minutes = totalMinutes % 60;
		const parts = [];
		if (days > 0) {
			parts.push(`${days} ngày`);
		}
		if (hours > 0) {
			parts.push(`${hours} giờ`);
		}
		if (!days && minutes > 0) {
			parts.push(`${minutes} phút`);
		}
		return parts.length ? `Còn ${parts.join(" ")}` : "Sắp khởi hành";
	}

	function formatCurrency(value) {
		return value.toLocaleString("vi-VN") + "đ";
	}

	function escapeHtml(value) {
		return value.replace(/[&<>"]+/g, function (match) {
			const map = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;"
			};
			return map[match] || match;
		});
	}
});
