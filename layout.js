document.addEventListener("DOMContentLoaded", function () {

    // Header
    function renderHeader() {
        const header = document.querySelector(".header");
        const activePage = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];
        const htmlheader = `
                    <div class="container">
                        <div class="header__logo">
                            <a href="./index.html" tabindex="-1">
                                <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/f6cwh6qzhvztvyrr0ano.png" class="header__logo-image" alt="TripTicket Logo">
                            </a>
                        </div>
                        <div class="header__menu">
                            <nav class="nav">
                                <ul class="nav__list">
                                    <li class="nav__item"><a href="../home/index.html" class="nav__link ${activePage === 'home' ? 'active' : ''}">Trang chủ</a></li>
                                    <li class="nav__item">
                                        <a href="../busoperator/index.html" class="nav__link ${activePage === 'busoperator' ? 'active' : ''}">
                                            <i class="fa-solid fa-bus"></i>
                                            Nhà xe
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../cancel/index.html" class="nav__link ${activePage === 'cancel' ? 'active' : ''}">
                                            <i class="fa-solid fa-trash"></i>
                                            Hủy vé
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a href="../contact/index.html" class="nav__link ${activePage === 'contact' ? 'active' : ''}">
                                            <i class="fa-solid fa-phone"></i>
                                            Hỗ trợ
                                        </a>
                                    </li>
                                    <li class="nav__item info__link">
                                        <div class="nav__link">
                                            <div class="info">
                                                <img src="" alt="" class="info__image">
                                            </div>
                                            <a href="../login/index.html" class="info__button ${activePage === 'login' ? 'active' : ''}">
                                             Đăng nhập
                                            </a>

                                        </div>
                                        <div class="info__downdrop">
                                            <ul class="info__list">
                                                <li class="info__item">
                                                    <a href="../profile/index.html" class="info__link">
                                                        <i class="fa-solid fa-user"></i>
                                                        Hồ sơ
                                                    </a>
                                                </li>
                                                <li class="info__item">
                                                    <a href="../history/index.html" class="info__link">
                                                        <i class="fa-solid fa-receipt"></i>
                                                        Lich sử đặt vé
                                                    </a>
                                                </li>
                                                <li class="info__item">
                                                    <a href="" class="info__link">
                                                        <i class="fa-solid fa-gear"></i>
                                                        Cài đặt
                                                    </a>
                                                </li>
                                                <li class="info__driver"></li>
                                                <li class="info__item">
                                                    <a href="../logout.html" class="info__link">
                                                        <i class="fa-solid fa-right-from-bracket"></i>
                                                        Đăng xuất
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    `;
        if (header) {
            try {
                header.innerHTML = htmlheader;

                const menuToggle = document.querySelector(".info__link .info");
                const dropdownMenu = document.querySelector(".info__downdrop");
                let timeOutInfo = null;

                menuToggle.addEventListener("mouseover", function () {
                    clearTimeout(timeOutInfo);
                    dropdownMenu.style.display = "block";
                });

                menuToggle.addEventListener("mouseleave", function () {
                    timeOutInfo = setTimeout(() => {
                        dropdownMenu.style.display = "none";
                    }, 800);
                });

                dropdownMenu.addEventListener("mouseover", function () {
                    clearTimeout(timeOutInfo);
                });

                dropdownMenu.addEventListener("mouseleave", function () {
                    timeOutInfo = setTimeout(() => {
                        dropdownMenu.style.display = "none";
                    }, 800);
                });


            } catch (error) {
                console.error("Error rendering header:", error);
            }
        }
    }

    renderHeader();

    // Ket thuc Header

    // Footer
    function renderFooter() {
        const footer = document.querySelector(".footer");
        const htmlfooter = `
                    <div class="container">
                        <div class="footer__link">
                            <div class="footer__link-items">
                                <div class="footer__link-item">
                                    <div class="item__title">Thông tin</div>
                                    <div class="item__list">
                                        <div class="item__node">
                                        <a href="">Điều khoản & Điều kiện</a>
                                    </div>
                                    <div class="item__node">
                                        <a href="">Chính sách bảo mật</a>
                                    </div>
                                    <div class="item__node">
                                        <a href="">Quy chế</a>
                                    </div>
                                    </div>
                                </div>
                                <div class="footer__link-item">
                                    <div class="item__title">Về TripTicket</div>
                                    <div class="item__list">
                                        <div class="item__node">
                                            <a href="">Giới thiệu</a>
                                        </div>
                                        <div class="item__node">
                                            <a href="">Liên hệ</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer__link-item">
                                    <div class="item__title">Đặt vé</div>
                                    <div class="item__list">
                                        <div class="item__node">
                                            <a href="">Nhà xe</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer__link-items">
                                <div class="footer__link-item">
                                    <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/gq87lkbezpe4eu2pqnpk.png" alt="">
                                    <div class="item__list">
                                        <div class="item__node">
                                            <p>Ⓒ 2025 TripTicket Vietnam. All Rights Reserved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer__text">
                            <p>Công ty TNHH TripTicket Việt Nam, đại diện pháp luật bởi ông Nguyễn Văn Long</p>
                            <p>Email: contact@redbus.vn</p>
                            <p>Liên hệ: 1900989901</p>
                            <p>Địa chỉ: Tầng 6 và 7, Tòa nhà Mê Linh Point, Số 2 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP. HCM</p>
                            <p>Số Giấy chứng nhận đăng ký doanh nghiệp: 0317772069 được cấp bởi Sở Kế hoạch đầu tư TP. HCM lần đầu ngày 4/6</p>
                        </div>
                </div>`;
        if (footer) {
            try {
                footer.innerHTML = htmlfooter;
            } catch (error) {
                console.error("Error rendering footer:", error);
            }
        }
    }

    renderFooter();
    // Ket thuc Footer

});