document.addEventListener("DOMContentLoaded", function() {
    // Section 1 - Chon diem di va diem den
    function renderSection1() {
        const section1 = document.querySelector(".section1");
        const htmlSection1 = `
                    <div class="container">
                        <div class="section1__content">
                            <div class="section1__content-item item-go">
                                <i class="fa-solid fa-location-dot"></i>

                                <div class="section1__content-go">
                                    <label for="go">Đi từ</label>
                                    <input  type="text" id="go" name="go" placeholder="">

                                    <div class="downdrop__go">
                                        <div class="location-item">Hà Nội</div>
                                        <div class="location-item">Đà Nẵng</div>
                                        <div class="location-item">Hồ Chí Minh</div>
                                    </div>
                                </div>
                            </div>
                            <div class="section1__content-item item-to">
                                <i class="fa-solid fa-flag-checkered"></i>

                                <div class="section1__content-to ">
                                    <label for="to">Đến</label>
                                    <input  type="text" id="to" name="to" placeholder="">

                                    <div class="downdrop__to">
                                        <div class="location-item">Hà Nội</div>
                                        <div class="location-item">Đà Nẵng</div>
                                        <div class="location-item">Hồ Chí Minh</div>
                                    </div>
                                </div>
                            </div>
                            <div class="section1__content-item item-date">
                                <div class="section1__content-date">
                                    <label for="date">Ngày đi</label>
                                    <input type="date" id="date" name="date" placeholder="Ngày đi">
                                </div>
                            </div>
                            <button class="btn btn--primary btn-search">Search</button>
                            <div class="content__icon">
                                <i class="fa-solid fa-left-right"></i>
                            </div>
                        </div>
                    </div>`;
        if (section1) {
            section1.innerHTML = htmlSection1;

            const inputgo = document.getElementById("go");
            const inputto = document.getElementById("to");
            const labelgo = document.querySelector("label[for='go']");
            const labelto = document.querySelector("label[for='to']");
            const dropdownGo = document.querySelector(".downdrop__go");
            const dropdownTo = document.querySelector(".downdrop__to");
            const locationItemTo = document.querySelectorAll(".downdrop__to .location-item");
            const locationItemGo = document.querySelectorAll(".downdrop__go .location-item");
            const icon = document.querySelector(".content__icon");

            // hien thi dropdown khi focus vao input
            inputgo.addEventListener("focus", function() {
                dropdownGo.style.display = "block";
            });

            // an dropdown khi click ngoai
            document.addEventListener("click", function(e) { 
                if (labelgo.contains(e.target) || inputgo.contains(e.target) || dropdownGo.contains(e.target)){
                    return;
                }
                dropdownGo.style.display = "none";
            });     

            // gan gia tri vao input khi click vao item
            locationItemGo.forEach(function(item) {
                item.addEventListener("click", function() {
                    inputgo.value = this.textContent;
                    dropdownGo.style.display = "none";
                });
            });

            // hien thi dropdown khi focus vao input
            inputto.addEventListener("focus", function() {
                dropdownTo.style.display = "block";
            });
            // an dropdown khi click ngoai
            document.addEventListener("click", function(e) {
                if (labelto.contains(e.target) || inputto.contains(e.target) || dropdownTo.contains(e.target)){
                    return;
                }
                dropdownTo.style.display = "none";
            });
            // gan gia tri vao input khi click vao item
            locationItemTo.forEach(function(item) {
                item.addEventListener("click", function() {
                    inputto.value = this.textContent;
                    dropdownTo.style.display = "none";
                });
            });

            // doi vi tri 2 input

            icon.addEventListener("click", function() {
                let temp = inputgo.value;
                inputgo.value = inputto.value;
                inputto.value = temp;
            });


            // dat ngay hien tai la ngay nho nhat co the chon
            function MinDay() {
                const today = new Date();
                const year = today.getFullYear();
                let month = today.getMonth() + 1;
                let day = today.getDate();
                const date = document.getElementById("date");
                if (month < 10) month = "0" + month;
                if (day < 10) day = "0" + day;
                const minDate = year + "-" + month + "-" + day;
                date.setAttribute("min", minDate);

            }

            MinDay();
        }else{
            console.error("Section 1 element not found");
        }


    }    
    renderSection1();
    // Ket thuc Section 1

    // Section 2 - Tuyen noi bat
    function renderSection2(){
        const section2 = document.querySelector(".section2");
        const htmlSection2 = `
                    <div class="container">
                        <div class="section2__content">
                            <div class="section2__header">
                                <h1>Tuyến đường nổi bật</h1>
                            </div>
                            <div class="section2__content">
                                <div class="router__list">
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body1">
                                            <span class="item__body-name">TPHCM - Vũng Tàu</span>
                                            <span class="item__body-price">Giá từ: 300.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body2">
                                            <span class="item__body-name">TPHCM - Đà Lạt</span>
                                            <span class="item__body-price">Giá từ: 400.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body3">
                                            <span class="item__body-name">TPHCM - Nha Trang</span>
                                            <span class="item__body-price">Giá từ: 500.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body4">
                                            <span class="item__body-name">TPHCM - Nha Trang</span>
                                            <span class="item__body-price">Giá từ: 500.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body5">
                                            <span class="item__body-name">TPHCM - Phú Quốc</span>
                                            <span class="item__body-price">Giá từ: 1.000.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body6">
                                            <span class="item__body-name">TPHCM - Phú Quốc</span>
                                            <span class="item__body-price">Giá từ: 1.000.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body7">
                                            <span class="item__body-name">TPHCM - Phú Quốc</span>
                                            <span class="item__body-price">Giá từ: 1.000.000 VND</span>
                                        </div>
                                    </a>
                                    <a href="../listTrip/index.html" class="router__item">
                                        <div class="router__item-img">
                                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="router 1">
                                        </div>
                                        <div class="router__item-body router__item-body8">
                                            <span class="item__body-name">TPHCM - Phú Quốc</span>
                                            <span class="item__body-price">Giá từ: 1.000.000 VND</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="section2__btn section2__btn-left">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </div> 
                                <div class="section2__btn section2__btn-right active">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>`;
        if (section2) {
            section2.innerHTML = htmlSection2;

            const routerList = document.querySelector(".router__list");
            const btnLeft = document.querySelector(".section2__btn-left");
            const btnRight = document.querySelector(".section2__btn-right");
            const routerItems = document.querySelectorAll(".router__item");
            const routerItemWidth = routerItems[0].offsetWidth;
            const routerItemGap = getComputedStyle(routerList).gap ? parseInt(getComputedStyle(routerList).gap) : 0;
            let scrollAmount = 0;
            const scrollPerClick = routerItemWidth + routerItemGap; 
            const maxScroll = routerList.scrollWidth - routerList.clientWidth;

            btnRight.addEventListener("click", function() {
                if (scrollAmount < maxScroll) {
                    routerList.scrollBy({
                        left: scrollPerClick,
                        behavior: "smooth"
                    });
                    scrollAmount += scrollPerClick;
                }
                updateButtonState();
            });
            btnLeft.addEventListener("click", function() {
                if (scrollAmount > 0) {
                    routerList.scrollBy({
                        left: -scrollPerClick,
                        behavior: "smooth"
                    });
                    scrollAmount -= scrollPerClick;
                }
                updateButtonState();
            });
            function updateButtonState() {
                btnLeft.classList.toggle("active", scrollAmount > 0);
                btnRight.classList.toggle("active", scrollAmount < maxScroll);
            }
        }else{
            console.error("Section 2 element not found");
        }
    }

    renderSection2();
    // Ket thuc Section 2

    // Section 3 - Tại sao chọn TripTicket
    function renderSection3(){
        const section3 = document.querySelector(".section3");
        const htmlSection3 = `
                <div class="container">
                    <div class="section3__content">
                        <h1 class="section3__title">Chuyến đi nổi bật</h1>
                        <div class="section3__list">
                            <a href="../trip/index.html" class="trip__item">
                                <div class="trip__item-img">
                                    <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="Chuyến đi 1">
                                </div>
                                <div class="trip__item-content">
                                    <div class="item__content-node">
                                        <div class="content__node-busoper">
                                            <div class="node__busoper-name">Nhà xe A  <span class="node__busoper-rating">4.5 <i class="fa-solid fa-star"></i></span></div>
                                            <div class="node__busoper-type">Xe 16 chỗ</div>
                                        </div>
                                        <div class="content__node-price">
                                            <div class="node__price-value">200,000 VND</div>
                                            <div class="node__price-old"> 
                                                <p>250,000 VND</p> 
                                                <span class="node__price-percent">-20%</span>
                                            </div>
                                            <div class="node__promotion">
                                                <i class="fa-solid fa-bolt"></i> Giảm 20k cho đơn từ 200k
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item__content-node">
                                        <div class="content__node-time">
                                            <div class="node__time-icon">
                                                <i class="fa-regular fa-circle"></i>
                                                <span class="line"></span>
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="content__node-route">
                                                <div class="node__route-from">
                                                    <div class="route__from-time">08:00 &middot; <p title="293 / p.Phạm Ngũ Lão - Văn Phòng Phạm Ngũ Lão / Quận 1">Văn Phòng Phạm Ngũ Lão</p></div>
                                                </div>
                                                <div class="node__route-timego">2h 30m</div>
                                                <div class="node__route-to">
                                                    <div class="route__to-time">10:30 &middot; <p title="123 / p.Bình Thạnh - Bến Xe Miền Đông / Quận Bình Thạnh">Bến Xe Miền Đông</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content__node-totalprice">
                                            <div class="node__totalprice-seats">Còn 5 chỗ</div>
                                            <button class="node__totalprice-bookbtn">Đặt vé</button>
                                        </div>
                                    </div>
                                    <div class="trip__item-notification">Không cần đặt cọc</div>
                                </div>
                            </a>
                            <a href="../trip/index.html" class="trip__item">
                                <div class="trip__item-img">
                                    <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="Chuyến đi 1">
                                </div>
                                <div class="trip__item-content">
                                    <div class="item__content-node">
                                        <div class="content__node-busoper">
                                            <div class="node__busoper-name">Nhà xe A  <span class="node__busoper-rating">4.5 <i class="fa-solid fa-star"></i></span></div>
                                            <div class="node__busoper-type">Xe 16 chỗ</div>
                                        </div>
                                        <div class="content__node-price">
                                            <div class="node__price-value">200,000 VND</div>
                                            <div class="node__price-old"> 
                                                <p>250,000 VND</p> 
                                                <span class="node__price-percent">-20%</span>
                                            </div>
                                            <div class="node__promotion">
                                                <i class="fa-solid fa-bolt"></i> Giảm 20k cho đơn từ 200k
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item__content-node">
                                        <div class="content__node-time">
                                            <div class="node__time-icon">
                                                <i class="fa-regular fa-circle"></i>
                                                <span class="line"></span>
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="content__node-route">
                                                <div class="node__route-from">
                                                    <div class="route__from-time">08:00 &middot; <p title="293 / p.Phạm Ngũ Lão - Văn Phòng Phạm Ngũ Lão / Quận 1">Văn Phòng Phạm Ngũ Lão</p></div>
                                                </div>
                                                <div class="node__route-timego">2h 30m</div>
                                                <div class="node__route-to">
                                                    <div class="route__to-time">10:30 &middot; <p title="123 / p.Bình Thạnh - Bến Xe Miền Đông / Quận Bình Thạnh">Bến Xe Miền Đông</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content__node-totalprice">
                                            <div class="node__totalprice-seats">Còn 5 chỗ</div>
                                            <button class="node__totalprice-bookbtn">Đặt vé</button>
                                        </div>
                                    </div>
                                    <div class="trip__item-notification">Không cần đặt cọc</div>
                                </div>
                            </a>
                            <a href="../trip/index.html" class="trip__item">
                                <div class="trip__item-img">
                                    <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="Chuyến đi 1">
                                </div>
                                <div class="trip__item-content">
                                    <div class="item__content-node">
                                        <div class="content__node-busoper">
                                            <div class="node__busoper-name">Nhà xe A  <span class="node__busoper-rating">4.5 <i class="fa-solid fa-star"></i></span></div>
                                            <div class="node__busoper-type">Xe 16 chỗ</div>
                                        </div>
                                        <div class="content__node-price">
                                            <div class="node__price-value">200,000 VND</div>
                                            <div class="node__price-old"> 
                                                <p>250,000 VND</p> 
                                                <span class="node__price-percent">-20%</span>
                                            </div>
                                            <div class="node__promotion">
                                                <i class="fa-solid fa-bolt"></i> Giảm 20k cho đơn từ 200k
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item__content-node">
                                        <div class="content__node-time">
                                            <div class="node__time-icon">
                                                <i class="fa-regular fa-circle"></i>
                                                <span class="line"></span>
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="content__node-route">
                                                <div class="node__route-from">
                                                    <div class="route__from-time">08:00 &middot; <p title="293 / p.Phạm Ngũ Lão - Văn Phòng Phạm Ngũ Lão / Quận 1">Văn Phòng Phạm Ngũ Lão</p></div>
                                                </div>
                                                <div class="node__route-timego">2h 30m</div>
                                                <div class="node__route-to">
                                                    <div class="route__to-time">10:30 &middot; <p title="123 / p.Bình Thạnh - Bến Xe Miền Đông / Quận Bình Thạnh">Bến Xe Miền Đông</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content__node-totalprice">
                                            <div class="node__totalprice-seats">Còn 5 chỗ</div>
                                            <button class="node__totalprice-bookbtn">Đặt vé</button>
                                        </div>
                                    </div>
                                    <div class="trip__item-notification">Không cần đặt cọc</div>
                                </div>
                            </a>
                            <a href="../trip/index.html" class="trip__item">
                                <div class="trip__item-img">
                                    <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/v3g5itqsqcigeuloqxa9.jpg" alt="Chuyến đi 1">
                                </div>
                                <div class="trip__item-content">
                                    <div class="item__content-node">
                                        <div class="content__node-busoper">
                                            <div class="node__busoper-name">Nhà xe A  <span class="node__busoper-rating">4.5 <i class="fa-solid fa-star"></i></span></div>
                                            <div class="node__busoper-type">Xe 16 chỗ</div>
                                        </div>
                                        <div class="content__node-price">
                                            <div class="node__price-value">200,000 VND</div>
                                            <div class="node__price-old"> 
                                                <p>250,000 VND</p> 
                                                <span class="node__price-percent">-20%</span>
                                            </div>
                                            <div class="node__promotion">
                                                <i class="fa-solid fa-bolt"></i> Giảm 20k cho đơn từ 200k
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item__content-node">
                                        <div class="content__node-time">
                                            <div class="node__time-icon">
                                                <i class="fa-regular fa-circle"></i>
                                                <span class="line"></span>
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="content__node-route">
                                                <div class="node__route-from">
                                                    <div class="route__from-time">08:00 &middot; <p title="293 / p.Phạm Ngũ Lão - Văn Phòng Phạm Ngũ Lão / Quận 1">Văn Phòng Phạm Ngũ Lão</p></div>
                                                </div>
                                                <div class="node__route-timego">2h 30m</div>
                                                <div class="node__route-to">
                                                    <div class="route__to-time">10:30 &middot; <p title="123 / p.Bình Thạnh - Bến Xe Miền Đông / Quận Bình Thạnh">Bến Xe Miền Đông</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content__node-totalprice">
                                            <div class="node__totalprice-seats">Còn 5 chỗ</div>
                                            <button class="node__totalprice-bookbtn">Đặt vé</button>
                                        </div>
                                    </div>
                                    <div class="trip__item-notification">Không cần đặt cọc</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>`;
        if (section3) {
            section3.innerHTML = htmlSection3;
        }else{
            console.error("Section 3 element not found");
        }   
    }
    renderSection3();
    // Ket thuc Section 3

    // Section4 - Thống kê
    function renderSection4(){
        const section4  = document.querySelector(".section4");
        const htmlSection4 = `
                <div class="container">
                    <div class="section4__body">
                        <div class="section4__content">
                            <div class="section4__content-information">
                                <div class="section4__content-title">
                                    ĐẶT , <b>VÉ XE Khách RẺ NHẤT</b> VỚI TRIPTICKET
                                </div>
                                <div class="section4__content-description">
                                    <span class="short-text">
                                        TripTicket là một dự án nhỏ được xây dựng với mong muốn đơn giản hóa việc đặt vé xe khách cho mọi người. 
                                    </span>
                                    <span class="more-text">
                                        TripTicket là một dự án nhỏ được xây dựng với mong muốn đơn giản hóa việc đặt vé xe khách cho mọi người. Chúng tôi kết nối với các nhà xe đáng tin cậy khắp Việt Nam, cho phép bạn tìm chuyến, chọn chỗ và hoàn tất thanh toán nhanh chóng, an toàn. Mục tiêu của TripTicket là đem lại trải nghiệm đặt vé tiện lợi và thân thiện và nếu còn thiếu sót, đội ngũ chúng tôi luôn mong nhận góp ý để phục vụ tốt hơn từng hành khách.
                                    </span>
                                    <span class="read-more">
                                        Đọc thêm
                                    </span>
                                </div>
                                <div class="section4__content-icon">
                                    <div class="content__icon-item">
                                        <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800395/ia9owty18ifaanusljbj.svg" alt=""> Thanh toán nhanh chóng, tránh xếp hàng
                                    </div>
                                    <div class="content__icon-item">
                                        <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/zh3vov8oetvqvym9omc5.svg" alt=""> Không tính phụ phí
                                    </div>
                                    <div class="content__icon-item">
                                        <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/gjvx84yzco2pudju3xsd.svg" alt=""> Chuyến đi an toàn và không lo lắng
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section4__content-image">
                            <img src="https://res.cloudinary.com/dpnza0kof/image/upload/v1758800396/nzfqbid01icy6djau2w2.png" alt="">
                        </div>
                    </div>
                </div>`;
        if(section4){
            section4.innerHTML += htmlSection4;

            const readMore = document.querySelector(".read-more");
            const moreText = document.querySelector(".more-text");
            let isExpanded = false;

            readMore.addEventListener("click", () => {
            if (!isExpanded) {
                moreText.style.display = "inline";   
                readMore.textContent = " Đọc ít hơn";
                isExpanded = true;
            } else {
                moreText.style.display = "none";    
                readMore.textContent = " Đọc thêm"; 
                isExpanded = false;
            }
            });

        }else{
            console.error("Section 4 element not found");
        }
    }

    renderSection4();
    // Kết thúc section4

    // Section 5 - mota
    function renderSection5(){
        const section5 = document.querySelector(".section5");
        const htmlSecyion5 =   `
                <div class="container">
                    <div class="section5__content">
                        <div class="section5__content-title">
                            Đặt vé xe khách nhanh chóng, tiện lợi tại Việt Nam cùng TripTicket
                        </div>
                        <div class="section5__content-body section5__content-soft">
                            <span>
                                TripTicket là nền tảng đặt vé xe khách trực tuyến dành cho người Việt, được xây dựng nhằm giúp mọi hành trình trở nên dễ dàng và thuận tiện hơn. Với TripTicket, bạn có thể nhanh chóng tìm kiếm các tuyến xe kết nối gần như mọi thành phố và thị trấn trên khắp Việt Nam, từ các tuyến ngắn trong nội tỉnh đến các tuyến liên tỉnh dài. Chúng tôi hợp tác với nhiều nhà xe uy tín, cung cấp đa dạng lựa chọn từ xe ghế ngồi tiêu chuẩn, xe giường nằm thoải mái, cho đến xe cabin và limousine sang trọng, nhằm đáp ứng mọi nhu cầu di chuyển của hành khách. Ngoài ra, TripTicket còn cung cấp thông tin chi tiết về giá vé, lịch trình, tiện nghi trên xe, điểm đón trả khách, cùng các đánh giá từ hành khách tr... <span class="read-more2"> Đọc hết</span>
                            </span>
                        </div>
                        <div class="section5__content-body section5__content-active">
                            <span>
                                TripTicket là nền tảng đặt vé xe khách trực tuyến dành cho người Việt, được xây dựng nhằm giúp mọi hành trình trở nên dễ dàng và thuận tiện hơn. Với TripTicket, bạn có thể nhanh chóng tìm kiếm các tuyến xe kết nối gần như mọi thành phố và thị trấn trên khắp Việt Nam, từ các tuyến ngắn trong nội tỉnh đến các tuyến liên tỉnh dài. Chúng tôi hợp tác với nhiều nhà xe uy tín, cung cấp đa dạng lựa chọn từ xe ghế ngồi tiêu chuẩn, xe giường nằm thoải mái, cho đến xe cabin và limousine sang trọng, nhằm đáp ứng mọi nhu cầu di chuyển của hành khách. Ngoài ra, TripTicket còn cung cấp thông tin chi tiết về giá vé, lịch trình, tiện nghi trên xe, điểm đón trả khách, cùng các đánh giá từ hành khách trước, giúp bạn dễ dàng đưa ra quyết định phù hợp nhất.
                            </span>
                            <span>Khi đặt vé trên TripTicket, bạn có thể dễ dàng kiểm tra giá vé xe khách và xe limousine tại Việt Nam, xem lịch trình, tiện nghi trên xe, các điểm đón trả ưa thích, cũng như đánh giá từ những hành khách trước. Nền tảng của chúng tôi cung cấp nhiều phương thức thanh toán trực tuyến an toàn, giúp bạn đặt vé nhanh chóng và thuận tiện. TripTicket mang đến các lợi ích như xác nhận tức thì, hủy vé linh hoạt, ưu đãi độc quyền và nhiều chương trình giảm giá hấp dẫn, giúp hành trình của bạn tiết kiệm chi phí và thoải mái hơn.</span>
                            <div class="content__second-title">
                                Cách đặt vé xe trực tuyến tại Việt Nam với TripTicket
                            </div>
                            <span>
                                Việc đặt vé trực tuyến tại TripTicket rất đơn giản: bạn chỉ cần chọn tuyến, ngày đi và phương thức thanh toán. Hệ thống sẽ gửi vé ngay sau khi thanh toán qua email và SMS trên điện thoại đã đăng ký. TripTicket cũng cung cấp các tùy chọn hủy vé linh hoạt và các ưu đãi độc quyền, giúp bạn tiết kiệm chi phí và có trải nghiệm di chuyển an toàn, thuận tiện.
                            </span>
                            <span>
                                Chúng tôi luôn lắng nghe phản hồi từ hành khách để không ngừng cải thiện dịch vụ, mang đến trải nghiệm đặt vé trực tuyến tốt nhất. Nếu bạn cần hỗ trợ thêm, phần Câu hỏi thường gặp và mục Liên hệ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc.
                            </span>
                        </div>
                    </div>
                </div>`;
        if(section5){
            section5.innerHTML += htmlSecyion5;

            const readMore2 = document.querySelector(".read-more2");
            const section5_soft = document.querySelector(".section5__content-soft");
            const section5_active = document.querySelector(".section5__content-active");

            readMore2.addEventListener("click", () =>{
                section5_soft.style.display = "none";
                section5_active.style.display = "flex";
            })

        }else{
            console.error("Section 5 element not found");
        }
    }
   
    renderSection5();
    // Kết thúc section5

    // Section 6 - Cau hoi thuong gap
    function renderSection6(){
        const section6 = document.querySelector(".section6");
        const htmlSection6 = `
                <div class="container">
                    <div class="section6__content">
                        <h2 class="section6-title">Những câu hỏi thường gặp</h2>
                        <div class="faq__list">
                            <div class="faq__list-nav">
                                <div id="faq1" class="list__nav-item active">Tổng quan</div>
                                <div id="faq2" class="list__nav-item">Đặt vé</div>
                                <div id="faq3" class="list__nav-item">Hủy vé</div>
                                <div id="faq4" class="list__nav-item">Thanh toán</div>
                                <div id="faq5" class="list__nav-item">Giảm giá & khuyến mãi</div>
                            </div>
                            <div class="faq__list-content">
                                <div id="faq1-content" class="list__content-item active">
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Làm thế nào để đặt vé xe trực tuyến tại Việt Nam?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Đặt vé xe trực tuy ến tại Việt Nam thật tiện lợi với TripTicket. Chỉ cần làm theo các bước sau: đăng nhập vào trang web TripTicket, chọn ngày đi, chọn nhà điều hành và tuyến đường bạn muốn, rồi tiến hành thanh toán.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Các tuyến xe phổ biến ở Việt Nam là gì?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Việt Nam tự hào có nhiều tuyến xe phổ biến, bao gồm Hà Nội đến Huế, Hà Nội đến Đà Nẵng, Đà Nẵng đến Thành phố Hồ Chí Minh, Thành phố Hồ Chí Minh đến Mũi Né, Huế đến Hội An, Thành phố Hồ Chí Minh đến Phan Thiết, Đà Nẵng đến Nha Trang, Hà Nội đến Sapa và Hà Nội đến Ninh Bình.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Bạn nên ghé thăm những địa điểm du lịch nào ở Việt Nam?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Việt Nam có nhiều địa điểm không thể bỏ qua như Vịnh Hạ Long, Ninh Bình, Đà Nẵng, Hạ Long, Huế, Hội An, Nha Trang, Thành phố Hồ Chí Minh và Sapa.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Có dịch vụ xe khách kết nối các thành phố lớn và các điểm du lịch ở Việt Nam không?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Chắc chắn có! Dịch vụ xe khách thường xuyên kết nối các thành phố lớn với các điểm du lịch ở Việt Nam. Bạn có thể thuận tiện đặt vé xe các tuyến này thông qua TripTicket.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Giá vé xe khách thông thường ở Việt Nam là bao nhiêu?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Xe khách là phương tiện đi lại giá cả phải chăng ở Việt Nam. Chi phí vé xe khách trực tuyến của bạn ở Việt Nam có thể khác nhau tùy thuộc vào đại lý du lịch bạn chọn, nhà cung cấp dịch vụ xe khách đường dài, tuyến đường cụ thể và bất kỳ tiện nghi trên xe nào do công ty xe khách cung cấp.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="faq2-content" class="list__content-item">
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Tôi có thể đặt vé xe khách trên TripTicket như thế nào?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Đặt vé xe khách trên TripTicket rất dễ dàng. Để đặt vé, hãy truy cập trang chủ và nhập thành phố khởi hành và thành phố đến của bạn vào các trường "Từ" và "Đến". Nhập ngày đi và nhấp vào nút tìm kiếm. Bây giờ, bạn sẽ thấy danh sách các xe khách có sẵn trên tuyến xe khách đã chọn. Bạn có thể sử dụng các tùy chọn lọc, chẳng hạn như thời gian, giá vé, loại xe khách, v.v., để sắp xếp lại danh sách. Điều này giúp khách hàng dễ dàng đặt vé xe khách trực tuyến với TripTicket.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Có bắt buộc phải in vé không?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Tùy thuộc vào nhà xe khách mà bạn đã đặt vé xe khách trực tuyến. Ngay cả vé điện tử cũng có sẵn trên TripTicket. Đối với các nhà xe hỗ trợ vé điện tử, tin nhắn SMS được gửi đến điện thoại di động của bạn có thể được tạo khi lên xe và bạn sẽ được phép đi lại. Đối với các nhà xe không hỗ trợ vé điện tử, bạn phải in vé điện tử và xuất trình khi lên xe. Vé điện tử được gửi đến ID email đã cung cấp khi lên xe. Để biết nhà xe nào hỗ trợ vé điện tử, hãy tìm biểu tượng mTicket bên dưới cột vé điện tử khi tìm kiếm xe khách.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Tại sao một số hãng xe khách trên TripTicket chỉ hiển thị tùy chọn chọn số lượng vé thay vì cho phép chọn chỗ ngồi cụ thể?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Một số hãng xe hiện không hỗ trợ tùy chọn chọn chỗ ngồi cụ thể. Thay vào đó, hãng xe sẽ linh hoạt sắp xếp chỗ ngồi khi hành khách lên xe. Do đó, bạn chỉ cần chọn số lượng vé khi đặt vé trực tuyến. Sau khi hoàn tất thanh toán, bạn sẽ nhận được xác nhận đặt vé thành công cho tổng số vé đã đặt. Tuy nhiên, một số hãng xe sẽ thông báo cho bạn vị trí ghế ngồi khi bạn đặt chỗ.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Tôi đã thanh toán thành công cho vé của mình và nhận được mTicket. Khi nào thì nhân viên điều hành xe khách sẽ gọi cho tôi?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Bạn có thể nhận được cuộc gọi xác nhận chuyến đi, tùy thuộc vào nhà xe. Nếu điểm đón là văn phòng nhà xe hoặc bến xe, bạn nên đến trước giờ khởi hành 30 phút (ngày thường) hoặc 60 phút (ngày lễ/Tết) và xuất trình thông tin vé để làm thủ tục.</p>
                                            <p>Nếu bạn được đón tại nhà hoặc trên đường đi, tài xế/nhân viên sẽ liên hệ với bạn trước, nhưng thời gian tùy thuộc vào từng nhà xe. Vui lòng chuẩn bị sẵn điện thoại và chủ động liên hệ với nhà xe nếu cần.</p>
                                            <p>Nếu bạn đã đăng ký dịch vụ đưa đón, vui lòng chuẩn bị trước 60 phút và đảm bảo điện thoại của bạn có thể liên lạc được. Tài xế sẽ thông báo cho bạn về dịch vụ đưa đón hoặc bạn có thể chủ động liên hệ với nhà xe để biết thêm thông tin.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="faq3-content" class="list__content-item">
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Tôi có thể hủy vé xe khách trực tuyến không</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Việc hủy vé đã đặt trên trang web TripTicket phụ thuộc vào chính sách của hãng xe buýt, vì hiện tại TripTicket chưa có chính sách hủy và hoàn tiền riêng biệt.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Làm thế nào tôi có thể hủy vé xe khách trực tuyến?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Người mua có thể gửi yêu cầu hủy vé đến TripTicket bằng cách liên hệ với TripTicket theo số 1900989901 hoặc qua email contact@TripTicket.vn. Ngoài ra, người mua có thể yêu cầu hủy vé trực tiếp trên trang web TripTicket thông qua chức năng "Hủy" trên trang chủ. Cụ thể, người mua phải nhập số vé và địa chỉ email để yêu cầu TripTicket hủy vé.</p>
                                            <p>TripTicket sẽ xác minh yêu cầu hủy ngay khi người mua yêu cầu hủy vé trên trang web TripTicket hoặc khi gọi điện cho TripTicket. Nếu người mua yêu cầu hủy vé qua email, TripTicket sẽ xác minh yêu cầu hủy sau 4-5 giờ kể từ khi nhận được email.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Tôi đã lỡ chuyến xe khách Tôi có được hoàn tiền không?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>TripTicket hoàn lại 100% tiền nếu xe buýt bị lỡ do lỗi của TripTicket hoặc công ty đối tác. Tuy nhiên, sẽ không hoàn lại tiền nếu xe buýt bị lỡ vì bất kỳ lý do nào không liên quan trực tiếp đến TripTicket.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="faq4-content" class="list__content-item">
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Bạn thanh toán vé xe khách ở Việt Nam bằng cách nào?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Bạn có thể đặt vé xe khách tại bến xe khách bằng tiền mặt. Ngoài ra, bạn cũng có thể chọn các trang web đặt vé xe khách uy tín như TripTicket. TripTicket hỗ trợ thanh toán trực tuyến bằng thẻ ATM, thẻ tín dụng quốc tế (Visa, Mastercard, JCB), Internet Banking và ví điện tử (Momo, ZaloPay, AirPay, VNPay, v.v.). Với TripTicket, bạn cũng có thể sử dụng tùy chọn Thanh toán sau để thanh toán cho chuyến đi xe khách của mình. Ngoài ra, khi thanh toán qua các nền tảng đặt vé xe khách, người dùng có thể nhận được các khoản giảm giá và khuyến mại để tiết kiệm tiền cho chuyến đi của mình.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Có những phương thức thanh toán nào khi đặt vé xe khách trực tuyến?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Trang web và ứng dụng TripTicket hỗ trợ nhiều phương thức thanh toán linh hoạt cho khách hàng khi đặt vé xe khách trực tuyến như thẻ tín dụng/thẻ ghi nợ (Visa, MasterCard, JCB), thẻ ATM nội địa MOMO, VietQR, ví điện tử MOMOPay, hoặc thanh toán sau đối với một số tuyến đường và nhà xe được lựa chọn. Bên cạnh đó, người dùng có thể nhập mã phiếu giảm giá để được ưu đãi và tận dụng các chương trình redDeals nhằm tiết kiệm chi phí khi mua vé.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="faq5-content" class="list__content-item">
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">TripTicket có chương trình khách hàng thân thiết hoặc ưu đãi đặc biệt nào dành cho khách hàng tạo tài khoản không?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>Người dùng mới trên TripTicket sẽ nhận được mã giảm giá cho lần đặt chỗ đầu tiên. Với mã DAUTIEN, Người dùng mới có thể được giảm giá tới 30% cho lần đặt chỗ đầu tiên. Ngoài ra, TripTicket thường xuyên thông báo cho người dùng về các chương trình khuyến mãi và ưu đãi sắp tới.</p>
                                        </div>
                                    </div>
                                    <div class="content__item-question">
                                        <div class="item__question-primary">
                                            <div class="question-title">Làm thế nào tôi có thể tiết kiệm nhiều hơn khi đặt vé xe khách trực tuyến trên TripTicket?</div>
                                            <div class="question__icon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div class="content-item__answer">
                                            <p>TripTicket thường xuyên hợp tác với các nhà điều hành phổ biến để cung cấp các khoản giảm giá độc quyền cho khách hàng của mình.  Hãy cập nhật thông tin về các chương trình khuyến mãi và các ưu đãi độc quyền của TripTicket được gọi là redDeals trên  trang Ưu đãi của TripTicket Vietnam  để tiết kiệm nhiều hơn khi đặt vé xe khách và xe limousine . Sao chép và dán mã giảm giá trong quá trình thanh toán để tận dụng ưu đãi.</p>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        if(section6){
            section6.innerHTML += htmlSection6;

            const listItemNav = document.querySelectorAll(".list__nav-item");
            const listContentItem = document.querySelectorAll(".list__content-item");

            listItemNav.forEach(item => {
                item.addEventListener("click", () => {
                    let itemId = item.getAttribute("id");
                    let contentId = itemId + "-content";
                    let contentItem = document.querySelector("#" + contentId);
                    if (!contentItem.classList.contains("active")){
                        document.querySelector(".list__content-item.active").classList.remove("active");
                        contentItem.classList.add("active");
                    }
                    if (!item.classList.contains("active")){
                        document.querySelector(".list__nav-item.active").classList.remove("active");
                        item.classList.add("active");
                    }
                });
            });
            listContentItem.forEach(item => {
                const questions = item.querySelectorAll(".content__item-question");

                questions.forEach(q => {
                    q.addEventListener("click", (e) => {
                        const currentAnswer = q.querySelector(".content-item__answer");
                        const currentIcon = q.querySelector(".question__icon i");
                        const activeAnswer = item.querySelector(".content-item__answer.active");

                        if (activeAnswer && activeAnswer !== currentAnswer) {
                            const activeIcon = item.querySelector(".question__icon i.fa-minus");
                            if (activeAnswer) {
                                activeAnswer.classList.remove("active");
                            }
                            if (activeIcon) { 
                                activeIcon.classList.remove("fa-minus");
                                activeIcon.classList.add("fa-plus");
                            }
                        }

                        currentAnswer.classList.toggle("active");

                        if (currentAnswer.classList.contains("active")) {
                            currentIcon.classList.remove("fa-plus");
                            currentIcon.classList.add("fa-minus");
                        } else {
                            currentIcon.classList.remove("fa-minus");
                            currentIcon.classList.add("fa-plus");
                        }
                    });
                });
            });

        }else{
            console.error("Section 6 element not found");
        }
    }
    renderSection6();
    // Kết thúc section 6
});