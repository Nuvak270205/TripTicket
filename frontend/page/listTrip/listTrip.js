document.addEventListener("DOMContentLoaded", function() {

    // Section1 - search box
    function renderSection1(){
        const section1 = document.querySelector('.section1');
        const htmlSection1 = `
            <div class="container">
                <div class="section1__body">
                    <div class="section1__content">
                        <div class="section1__content-item item-go">
                            <i class="fa-solid fa-location-dot"></i>
                            <div class="section1__content-go">
                                <label for="go">Đi từ</label>
                                <input type="text" id="go" name="go" placeholder="">
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
                                <input type="text" id="to" name="to" placeholder="">
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
                        <div class="section1__content-item item-dateto">
                            <div class="section1__content-date">
                                <label for="date">Ngày về</label>
                                <input type="date" id="date" name="date" placeholder="Ngày về">
                            </div>
                        </div>
                        <div class="content__icon">
                            <i class="fa-solid fa-left-right"></i>
                        </div>
                    </div>
                    <button class="btn btn--primary btn-search">Search</button>
                </div>
            </div>
        </section1>`;
        if(section1){
            section1.innerHTML = htmlSection1;
        }else{
            console.error("Element with class 'section1' not found.");
        }
    }

    renderSection1();
    // Ket thuc section1

    // Section2 - body
    function renderSection2(){
        const section2 = document.querySelector('.section2');
        const htmlSection2 = `
            <div class="container">
                <div class="section2__left">
                    <div class="section2__left-body">
                        <div class="left__body-soft">
                            <h3 class="body__soft-title">Sắp xếp</h3>
                            <div class="body__soft-content">
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft1" name="soft1">
                                    <label for="soft1">Mặc định</label>
                                </div>
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft2" name="soft2">
                                    <label for="soft2">Giờ đi sớm nhất</label>
                                </div>
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft3" name="soft3">
                                    <label for="soft3">Giờ đi trễ nhất</label>
                                </div>
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft4" name="soft4">
                                    <label for="soft4">Đánh giá cao nhất</label>
                                </div>
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft5" name="soft5">
                                    <label for="soft5">Giá tăng dần</label>
                                </div>
                                <div class="soft__content-item">
                                    <input type="checkbox" id="soft6" name="soft6">
                                    <label for="soft6">Đánh giá cao nhất</label>
                                </div>
                            </div>
                        </div>
                        <div class="left__body-filter">
                            <h3 class="body__soft-title">Lọc</h3>
                            <div class="body__filter-content">
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Giờ đi</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="filter-box">    
                                            <div class="slider-container">
                                                <input type="range" id="minRangeHour" min="0" max="24" value="0" step="0.5">
                                                <input type="range" id="maxRangeHour" min="0" max="24" value="24" step="0.5">
                                                <div class="slider-track"></div>
                                                <div class="slider-track2"></div>
                                                <span id="tooltipMinHour" class="tooltip"></span>
                                                <span id="tooltipMaxHour" class="tooltip"></span>
                                            </div>
                                            <div class="slider-value">
                                                <div class="value__fromhour">
                                                    <label for="fromhour">Từ</label>
                                                    <div class="fromhour__value">00 : 00</div>
                                                </div>
                                                <div class="value__tohour">
                                                    <label for="tohour">Đến</label>
                                                    <div class="tohour__value">24 : 00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Nhà xe</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="item__dropdown-content">
                                            <input type="text" placeholder="Tìm kiếm nhà xe..." class="dropdown__content-search">
                                            <ul class="dropdown__content-list">
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house1">
                                                    <label for="house1">Nhà xe A</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house2">
                                                    <label for="house2">Nhà xe B</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house3">
                                                    <label for="house3">Nhà xe C</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house4">
                                                    <label for="house4">Nhà xe D</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house5">
                                                    <label for="house5">Nhà xe E</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house6">
                                                    <label for="house6">Nhà xe F</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house7">
                                                    <label for="house7">Nhà xe G</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house8">
                                                    <label for="house8">Nhà xe H</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house9">
                                                    <label for="house9">Nhà xe I</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="house10">
                                                    <label for="house10">Nhà xe J</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Giá vé</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="filter-box">    
                                            <div class="slider-container">
                                                <input type="range" id="minRangePrice" min="0" max="2000000" value="0" step="50000">
                                                <input type="range" id="maxRangePrice" min="0" max="2000000" value="2000000" step="50000">
                                                <div class="slider-track slider__track-price"></div>
                                                <div class="slider-track2"></div>
                                            </div>
                                            <div class="slider__value-price">
                                                <div class="value__price-from"></div>
                                                <div class="value__price-to"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Điểm đón</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="item__dropdown-content">
                                            <input type="text" placeholder="Tìm kiếm điểm đón..." class="dropdown__content-search">
                                            <ul class="dropdown__content-list">
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon1">
                                                    <label for="điemdon1">Quận 1</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon2">
                                                    <label for="điemdon2">Quận 2</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon3">
                                                    <label for="điemdon3">Quận 3</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon4">
                                                    <label for="điemdon4">Quận 4</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon5">
                                                    <label for="điemdon5">Quận 5</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon6">
                                                    <label for="điemdon6">Quận 6</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon7">
                                                    <label for="điemdon7">Quận 7</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon8">
                                                    <label for="điemdon8">Nhà xe H</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon9">
                                                    <label for="điemdon9">Nhà xe I</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon10">
                                                    <label for="điemdon10">Nhà xe J</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon11">
                                                    <label for="điemdon11">Thủ Đức</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemdon12">
                                                    <label for="điemdon12">Bình Thạnh</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Điểm trả</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="item__dropdown-content">
                                            <input type="text" placeholder="Tìm kiếm điểm trả..." class="dropdown__content-search">
                                            <ul class="dropdown__content-list">
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra1">
                                                    <label for="điemtra1">Quận 1</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra2">
                                                    <label for="điemtra2">Quận 2</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra3">
                                                    <label for="điemtra3">Quận 3</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra4">
                                                    <label for="điemtra4">Quận 4</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra5">
                                                    <label for="điemtra5">Quận 5</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra6">
                                                    <label for="điemtra6">Quận 6</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra7">
                                                    <label for="điemtra7">Quận 7</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra8">
                                                    <label for="điemtra8">Nhà xe H</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra9">
                                                    <label for="điemtra9">Nhà xe I</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra10">
                                                    <label for="điemtra10">Nhà xe J</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra11">
                                                    <label for="điemtra11">Thủ Đức</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="điemtra12">
                                                    <label for="điemtra12">Bình Thạnh</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Vị trí ghế</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="item__dropdown-content">
                                            <input type="text" placeholder="Tìm kiếm vị trí ghế" class="dropdown__content-search">
                                            <ul class="dropdown__content-list">
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="type1">
                                                    <label for="type1">Hàng đầu</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="type2">
                                                    <label for="type2">Hàng giữa</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="type3">
                                                    <label for="type3">Hàng cuối</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__content-item">
                                    <div class="filter__content-show">
                                        <div class="content__item-name">Loại xe</div>
                                        <div class="content__item-icon">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div class="content__item-dropdown">
                                        <div class="item__dropdown-content">
                                            <input type="text" placeholder="Tìm loại xe..." class="dropdown__content-search">
                                            <ul class="dropdown__content-list">
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="stylecar1">
                                                    <label for="stylecar1">16 chỗ</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="stylecar2">
                                                    <label for="stylecar2">29 chỗ</label>
                                                </li>
                                                <li class="dropdown__content-item">
                                                    <input type="checkbox" name="car" id="stylecar3">
                                                    <label for="stylecar3">45 chỗ</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section2__right">
                    <div class="section2__right-body">
                        <div class="right__body-title">
                            Kết quả: <p>500 chuyến đi</p>
                        </div>
                        <div class="right__body-Notification">
                        </div>
                        <div class="right__body-listTrip">
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
                </div>
            </div>`;
        if (section2){
            section2.innerHTML = htmlSection2;

            // JS phần điều chỉnh chiều cao bên trái
            const header = document.querySelector('.header');
            const section1 = document.querySelector('.section1');
            const sideLeft = document.querySelector('.section2__left');
            let height = window.innerHeight;
            let maxHeight = height - header.scrollHeight - 50 ;


            function adjustSideLeftPosition() {
                const headerHeight = header.scrollHeight;
                const section1Height = section1.scrollHeight;
                const scrollY = window.scrollY || window.pageYOffset;
                let minHeight = height - headerHeight - section1Height + scrollY - 40 - 40 - 20;
                if (maxHeight < minHeight) {
                    minHeight = maxHeight;
                }
                sideLeft.style.maxHeight = minHeight + 'px';
            }

            window.addEventListener('scroll', adjustSideLeftPosition);
            window.addEventListener('resize', function() {
                height = window.innerHeight;
                adjustSideLeftPosition();
            });

            adjustSideLeftPosition();
            // end điều chỉnh chiều cao bên trái

            // slider time
            const minRange = document.getElementById("minRangeHour");
            const maxRange = document.getElementById("maxRangeHour");
            const tooltipMin = document.getElementById("tooltipMinHour");
            const tooltipMax = document.getElementById("tooltipMaxHour");
            const fromHour = document.querySelector(".fromhour__value");
            const toHour = document.querySelector(".tohour__value");
            const track = document.querySelector(".slider-track");
            const minGap = 0.5;

            function updateSlider(event) {
                let minVal = parseFloat(minRange.value);
                let maxVal = parseFloat(maxRange.value);

                if (maxVal - minVal <= minGap) {
                    if (event) {
                        if (event.target.id === "minRangeHour") {
                            minRange.value = maxVal - minGap;
                        } else {
                            maxRange.value = minVal + minGap;
                        }
                    }
                    minVal = parseFloat(minRange.value);
                    maxVal = parseFloat(maxRange.value);
                }
                if(Number.isInteger(minVal)){
                    fromHour.textContent = minVal + ":00";
                }else{
                    fromHour.textContent = Math.floor(minVal) + ":30";
                }

                if(Number.isInteger(maxVal)){
                    toHour.textContent = maxVal + ":00";
                }else{
                    toHour.textContent = Math.floor(maxVal) + ":30";
                }

                const percent1 = (minVal / 24) * 100;
                const percent2 = (maxVal / 24) * 100;
                track.style.left = percent1 + "%";
                track.style.width = (percent2 - percent1) + "%";

                tooltipMin.style.left = percent1 + "%";
                if(Number.isInteger(minVal)){
                    tooltipMin.textContent = minVal + "h";
                }else{
                    tooltipMin.textContent = Math.floor(minVal) + "h 30";
                }

                tooltipMax.style.left = percent2 + "%";
                if(Number.isInteger(maxVal)){
                    tooltipMax.textContent = maxVal + "h";
                }else{
                    tooltipMax.textContent = Math.floor(maxVal) + "h 30";
                }
            }

            minRange.addEventListener("input", (e) => updateSlider(e));
            maxRange.addEventListener("input", (e) => updateSlider(e));

            updateSlider();
            // end slider time

            // slider price
            const minRangePrice = document.getElementById("minRangePrice");
            const maxRangePrice = document.getElementById("maxRangePrice");
            const fromPrice = document.querySelector(".value__price-from");
            const toPrice = document.querySelector(".value__price-to");
            const trackPrice = document.querySelector(".slider__track-price");
            const minGapPrice = 50000;

            function updateSliderPrice(event) {
                let minVal = parseInt(minRangePrice.value);
                let maxVal = parseInt(maxRangePrice.value);

                if (maxVal - minVal <= minGapPrice) {
                    if (event) {
                        if (event.target.id === "minRangePrice") {
                            minRangePrice.value = maxVal - minGapPrice;
                        } else {
                            maxRangePrice.value = minVal + minGapPrice;
                        }
                    }
                    minVal = parseInt(minRangePrice.value);
                    maxVal = parseInt(maxRangePrice.value);

                }
                
                fromPrice.textContent = minVal.toLocaleString('vi-VN') + "đ";
                toPrice.textContent = maxVal.toLocaleString('vi-VN') + "đ";

                const percent1 = (minVal / 2000000) * 100;
                const percent2 = (maxVal / 2000000) * 100;
                trackPrice.style.left = percent1 + "%";
                trackPrice.style.width = (percent2 - percent1) + "%";
            }

            minRangePrice.addEventListener("input", (e) => updateSliderPrice(e));
            maxRangePrice.addEventListener("input", (e) => updateSliderPrice(e));

            updateSliderPrice();
            // end slider price

            // filter dropdown
            const filterItems = document.querySelectorAll('.filter__content-item');
            
            filterItems.forEach((item, index) => {
                const show = item.querySelector('.filter__content-show');
                const dropdown = item.querySelector('.content__item-dropdown');
                const icon = item.querySelector('i');
                    
                show.addEventListener('click', () => {
                    dropdown.classList.toggle('active');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // end filter dropdown

            //downdrop search

            const downdropSearchs = document.querySelectorAll('.item__dropdown-content');
            downdropSearchs.forEach((item) => {
                const input = item.querySelector('.dropdown__content-search');
                const listItems = item.querySelectorAll('.dropdown__content-item');

                input.addEventListener('input', () => {
                    const searchTerm = input.value.toLowerCase();
                    listItems.forEach((listItem) => {
                        const text = listItem.textContent.toLowerCase();
                        listItem.style.display = text.includes(searchTerm) ? 'block' : 'none';
                    });

                });
            });
             //end downdrop search
        }else{
            console.error("Element with class 'section2' not found.");
        }
    }

    renderSection2();


});
