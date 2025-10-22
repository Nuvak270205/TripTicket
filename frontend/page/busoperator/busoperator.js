document.addEventListener("DOMContentLoaded", function () {
	const operators = [
		{
			id: "tan-quang-dung",
			name: "Nhà xe Tân Quang Dũng",
			origin: "TP.HCM",
			destination: "Hà Nội",
			phone: "0912 345 678",
			image: "https://play-lh.googleusercontent.com/JUa-enpuJgavR6i_kD8fEwUicF4yLHyy5JPvf5nn3us8c6DyNU4R5EA31X5eo2TcLFQ=w240-h480-rw",
			rating: 4.8,
			totalReviews: 1542,
			highlights: ["Đúng giờ 98%", "Limousine 18 chỗ", "Hỗ trợ 24/7"],
			stats: [
				{ label: "Tỷ lệ đúng giờ", value: "98%" },
				{ label: "Chuyến/tháng", value: "360+" },
				{ label: "Đánh giá 5 sao", value: "82%" }
			],
			feedbacks: [
				{
					customer: "Thu Trang",
					trip: "TP.HCM -> Hà Nội",
					date: "09/2025",
					rating: 5,
					comment: "Xe chạy êm, ghế massage thoải mái. Nhân viên chủ động gọi trước 30 phút để nhắc giờ đón.",
					tags: ["Đón đúng giờ", "Tài xế thân thiện", "Xe sạch"]
				},
				{
					customer: "Anh Vũ",
					trip: "TP.HCM -> Nam Định",
					date: "07/2025",
					rating: 4.5,
					comment: "Wifi ổn định, nước uống đầy đủ. Tài xế xử lý tình huống mưa lớn rất chắc tay.",
					tags: ["Wifi ổn định", "Lái xe an toàn"]
				},
				{
					customer: "Ngọc Ánh",
					trip: "TP.HCM -> Hà Nội",
					date: "04/2025",
					rating: 4.5,
					comment: "Nên bổ sung thêm điểm đón ở quận 7. Còn lại dịch vụ quá ổn.",
					tags: ["Hỗ trợ tốt"]
				}
			]
		},
		{
			id: "phuong-trang",
			name: "Nhà xe Phương Trang",
			origin: "Đà Nẵng",
			destination: "Nha Trang",
			phone: "0909 888 999",
			image: "https://storage.googleapis.com/futa-busline-web-cms-prod/MOMO_599_337_px_1198_674_px_1_c5785a23b4/MOMO_599_337_px_1198_674_px_1_c5785a23b4.png",
			rating: 4.6,
			totalReviews: 2470,
			highlights: ["Xe giường nằm", "SMS nhắc giờ", "Có bữa nhẹ"],
			stats: [
				{ label: "Tỷ lệ đúng giờ", value: "95%" },
				{ label: "Chuyến/tháng", value: "280+" },
				{ label: "Khách quay lại", value: "76%" }
			],
			feedbacks: [
				{
					customer: "Lê Minh Đức",
					trip: "Đà Nẵng -> Nha Trang",
					date: "10/2025",
					rating: 4.5,
					comment: "Xe sạch, khăn lạnh và nước suối luôn sẵn. Có tin nhắn nhắc giờ giúp tôi không bị trễ.",
					tags: ["Xe sạch", "Nhắc giờ"]
				},
				{
					customer: "Hải Yến",
					trip: "Đà Nẵng -> Quy Nhơn",
					date: "08/2025",
					rating: 4,
					comment: "Điểm đón trung tâm, nhân viên hỗ trợ hành lý rất nhiệt tình.",
					tags: ["Nhân viên nhiệt tình", "Điểm đón thuận tiện"]
				},
				{
					customer: "Hữu Đức",
					trip: "Đà Nẵng -> Nha Trang",
					date: "05/2025",
					rating: 5,
					comment: "Ghế ngả sâu ngủ rất đã, tài xế chạy đều và không phóng nhanh.",
					tags: ["Ghế êm", "Lái xe an toàn"]
				}
			]
		},
		{
			id: "minh-phuong",
			name: "Nhà xe Minh Phương",
			origin: "TP.HCM",
			destination: "Đà Nẵng",
			phone: "0909 888 999",
			image: "https://xeminhphuong.com/wp-content/uploads/2024/08/minhphuong.png",
			rating: 4.7,
			totalReviews: 1311,
			highlights: ["Xe limousine", "Sạc USB từng ghế", "Miễn phí khăn lạnh"],
			stats: [
				{ label: "Tỷ lệ đúng giờ", value: "97%" },
				{ label: "Chuyến/tháng", value: "190+" },
				{ label: "Đánh giá 5 sao", value: "79%" }
			],
			feedbacks: [
				{
					customer: "Kim Loan",
					trip: "TP.HCM -> Đà Nẵng",
					date: "09/2025",
					rating: 5,
					comment: "Limousine sạch, ghế da êm và có sạc riêng. Bữa ăn nhẹ chuẩn bị kỹ.",
					tags: ["Ghế êm", "Có đồ ăn"]
				},
				{
					customer: "Đình Tùng",
					trip: "TP.HCM -> Đà Nẵng",
					date: "06/2025",
					rating: 4.5,
					comment: "Nhân viên gọi xác nhận lộ trình trước 1 ngày, hỗ trợ đổi lịch linh hoạt.",
					tags: ["Hỗ trợ đổi vé", "Tư vấn tốt"]
				},
				{
					customer: "Lan Phương",
					trip: "TP.HCM -> Huế",
					date: "04/2025",
					rating: 4,
					comment: "Nên nâng cấp wifi mạnh hơn. Tuy nhiên thái độ phục vụ rất tuyệt.",
					tags: ["Thái độ tốt"]
				}
			]
		},
		{
			id: "cam-van",
			name: "Nhà xe Cẩm Vân",
			origin: "TP.HCM",
			destination: "Lâm Đồng",
			phone: "0988 222 555",
			image: "https://nhaxecamvan.com/wp-content/uploads/2025/01/CAM-VAN-2.jpg",
			rating: 4.5,
			totalReviews: 864,
			highlights: ["Tuyến đêm", "Đón tận nhà", "Ưu đãi nội bộ"],
			stats: [
				{ label: "Tỷ lệ đúng giờ", value: "93%" },
				{ label: "Chuyến/tháng", value: "150+" },
				{ label: "Khách quay lại", value: "71%" }
			],
			feedbacks: [
				{
					customer: "Thanh Bình",
					trip: "TP.HCM -> Bảo Lộc",
					date: "08/2025",
					rating: 4.5,
					comment: "Tuyến đêm giúp tôi tranh thủ thời gian. Tài xế nhẹ nhàng, không bị say xe.",
					tags: ["Chạy êm", "Tuyến đêm"]
				},
				{
					customer: "Minh Châu",
					trip: "TP.HCM -> Đà Lạt",
					date: "07/2025",
					rating: 4,
					comment: "Đón tận nhà rất tiện. Nên bổ sung thêm nước uống lạnh.",
					tags: ["Đón tận nơi"]
				},
				{
					customer: "Hoài Sơn",
					trip: "TP.HCM -> Đà Lạt",
					date: "03/2025",
					rating: 5,
					comment: "Ghế ngồi rộng, giá mềm so với chất lượng. Tôi sẽ tiếp tục đặt.",
					tags: ["Giá tốt", "Ghế rộng"]
				}
			]
		}
	];

	const operatorById = operators.reduce(function (acc, operator) {
		acc[operator.id] = operator;
		return acc;
	}, {});

	const busList = document.getElementById("busList");
	const searchInput = document.getElementById("busSearchInput");
	const searchButton = document.getElementById("busSearchButton");

	const modal = createModal();
	const modalPanel = modal.querySelector(".operator-modal__panel");
	const modalContent = modal.querySelector(".operator-modal__content");
	const closeButton = modal.querySelector(".operator-modal__close");
	let lastFocusedElement = null;

	function formatReviews(total) {
		if (!total) {
			return "0 lượt đánh giá";
		}
		return `${Number(total).toLocaleString("vi-VN")} lượt đánh giá`;
	}

	function renderStars(rating) {
		const stars = [];
		for (let i = 1; i <= 5; i += 1) {
			if (rating >= i) {
				stars.push('<i class="fa-solid fa-star"></i>');
			} else if (rating >= i - 0.5) {
				stars.push('<i class="fa-solid fa-star-half-stroke"></i>');
			} else {
				stars.push('<i class="fa-regular fa-star"></i>');
			}
		}
		return stars.join("");
	}

	function createCard(operator) {
		return `
			<div class="bus-card">
				<img src="${operator.image}" alt="${operator.name}" loading="lazy" />
				<div class="bus-info">
					<h3>${operator.name}</h3>
					<div class="bus-info__rating">
						<span class="bus-info__score">${operator.rating.toFixed(1)}</span>
						<div class="bus-info__stars" aria-hidden="true">${renderStars(operator.rating)}</div>
						<span class="bus-info__total">${formatReviews(operator.totalReviews)}</span>
					</div>
					<p><strong>Điểm đi:</strong> ${operator.origin}</p>
					<p><strong>Điểm đến:</strong> ${operator.destination}</p>
					<p><strong>Số điện thoại:</strong> ${operator.phone}</p>
					${operator.highlights && operator.highlights.length ? `
						<div class="bus-info__highlights">
							${operator.highlights.map(function (item) {
								return `<span class="bus-info__chip">${item}</span>`;
							}).join("")}
						</div>
					` : ""}
					<button type="button" class="bus-info__details" data-operator="${operator.id}">Xem chi tiết</button>
				</div>
			</div>
		`;
	}

	function renderList(data) {
		if (!busList) {
			return;
		}
		if (!data.length) {
			busList.innerHTML = '<p class="bus-list__empty">Không tìm thấy nhà xe phù hợp.</p>';
			return;
		}
		busList.innerHTML = data.map(createCard).join("");
	}

	function renderStats(stats) {
		if (!stats || !stats.length) {
			return "";
		}
		return `
			<div class="operator-modal__stats">
				${stats.map(function (item) {
					return `
						<div class="operator-stat">
							<span class="operator-stat__label">${item.label}</span>
							<span class="operator-stat__value">${item.value}</span>
						</div>
					`;
				}).join("")}
			</div>
		`;
	}

	function renderFeedbackList(feedbacks) {
		if (!feedbacks || !feedbacks.length) {
			return '<p class="operator-modal__empty">Hiện chưa có phản hồi cho nhà xe này.</p>';
		}
		return feedbacks.map(function (feedback) {
			return `
				<article class="operator-feedback">
					<div class="operator-feedback__header">
						<div>
							<div class="operator-feedback__name">${feedback.customer}</div>
							<div class="operator-feedback__meta">${feedback.trip} · ${feedback.date}</div>
						</div>
						<div class="operator-feedback__rating" aria-label="Đánh giá ${feedback.rating} trên 5">${renderStars(feedback.rating)}</div>
					</div>
					<p class="operator-feedback__comment">${feedback.comment}</p>
					${feedback.tags && feedback.tags.length ? `
						<div class="operator-feedback__tags">
							${feedback.tags.map(function (tag) {
								return `<span class="operator-feedback__tag">${tag}</span>`;
							}).join("")}
						</div>
					` : ""}
				</article>
			`;
		}).join("");
	}

	function openModal(operatorId) {
		const operator = operatorById[operatorId];
		if (!operator || !modalContent || !modalPanel) {
			return;
		}

		const modalTitleId = `${operator.id}-modal-title`;

		modalContent.innerHTML = `
			<div class="operator-modal__header">
				<div>
					<h2 class="operator-modal__title" id="${modalTitleId}">${operator.name}</h2>
					<p class="operator-modal__route">${operator.origin} -> ${operator.destination}</p>
					<p class="operator-modal__contact">Hotline: ${operator.phone}</p>
				</div>
				<div class="operator-modal__rating">
					<span class="operator-modal__rating-score">${operator.rating.toFixed(1)}</span>
					<div class="operator-modal__stars" aria-hidden="true">${renderStars(operator.rating)}</div>
					<span class="operator-modal__rating-total">${formatReviews(operator.totalReviews)}</span>
				</div>
			</div>
			${operator.highlights && operator.highlights.length ? `
				<div class="operator-modal__chips">
					${operator.highlights.map(function (item) {
						return `<span class="operator-modal__chip">${item}</span>`;
					}).join("")}
				</div>
			` : ""}
			${renderStats(operator.stats)}
			<div class="operator-modal__feedback">
				${renderFeedbackList(operator.feedbacks)}
			</div>
		`;

	modalPanel.setAttribute("aria-labelledby", modalTitleId);
		lastFocusedElement = document.activeElement;
		modal.classList.add("is-open");
		modal.setAttribute("aria-hidden", "false");
		document.body.classList.add("modal-open");
		if (closeButton) {
			closeButton.focus();
		}
		document.removeEventListener("keydown", handleKeyDown);
		document.addEventListener("keydown", handleKeyDown);
	}

	function closeModal() {
		modal.classList.remove("is-open");
		modal.setAttribute("aria-hidden", "true");
		document.body.classList.remove("modal-open");
		document.removeEventListener("keydown", handleKeyDown);
		if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
			lastFocusedElement.focus();
		}
	}

	function handleKeyDown(event) {
		if (!modal.classList.contains("is-open")) {
			return;
		}
		if (event.key === "Escape") {
			event.preventDefault();
			closeModal();
		}
	}

	function handleSearch() {
		if (!searchInput) {
			return;
		}
		const keyword = searchInput.value.trim().toLowerCase();
		if (!keyword) {
			renderList(operators);
			return;
		}
		const filtered = operators.filter(function (operator) {
			return (
				operator.name.toLowerCase().includes(keyword) ||
				operator.origin.toLowerCase().includes(keyword) ||
				operator.destination.toLowerCase().includes(keyword)
			);
		});
		renderList(filtered);
	}

	function createModal() {
		const wrapper = document.createElement("div");
		wrapper.className = "operator-modal";
		wrapper.setAttribute("aria-hidden", "true");
		wrapper.innerHTML = `
			<div class="operator-modal__panel" role="dialog" aria-modal="true">
				<button type="button" class="operator-modal__close" aria-label="Đóng">
					<i class="fa-solid fa-xmark"></i>
				</button>
				<div class="operator-modal__scroll">
					<div class="operator-modal__content"></div>
				</div>
			</div>
		`;
		document.body.appendChild(wrapper);
		return wrapper;
	}

	if (modal) {
		modal.addEventListener("click", function (event) {
			if (event.target === modal) {
				closeModal();
			}
		});
	}

	if (closeButton) {
		closeButton.addEventListener("click", closeModal);
	}

	if (busList) {
		busList.addEventListener("click", function (event) {
			const detailButton = event.target.closest("button[data-operator]");
			if (!detailButton) {
				return;
			}
			const operatorId = detailButton.getAttribute("data-operator");
			openModal(operatorId);
		});
	}

	if (searchInput) {
		searchInput.addEventListener("input", handleSearch);
		searchInput.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				event.preventDefault();
				handleSearch();
			}
		});
	}

	if (searchButton) {
		searchButton.addEventListener("click", handleSearch);
	}

	renderList(operators);
});
