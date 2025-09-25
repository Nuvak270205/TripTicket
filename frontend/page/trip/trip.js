document.addEventListener('DOMContentLoaded', function() {

    // Render Section 1
    async function renderSection1() {
        const section1 = document.querySelector('.section1');
        const htmlSection1 = `
            <div class="container">
                <div class="section1__content">
                    <!-- Trip Item -->
                    <div href="#" class="trip__item">
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
                                </div>
                            </div>
                            <div class="trip__item-notification">Không cần đặt cọc</div>
                        </div>
                    </div>

                    <!-- Additional Info -->
                    <div class="section1__content-more">
                        <!-- Trip Details -->
                        <div class="content__more-node">
                            Vé chặng thuộc chuyến 08:00 Thành Phố Hồ Chí Minh - Vũng Tàu
                        </div>

                        <!-- Amenities -->
                        <div class="content__more-environment">
                            Các tiện ích trên xe: 
                            <span class="more__environment-item">
                                <i class="fa-solid fa-snowflake"></i> Điều hòa
                            </span> 
                            <span class="more__environment-item">
                                <i class="fa-solid fa-wifi"></i> WIFI
                            </span> 
                            <span class="more__environment-item">
                                <i class="fa-solid fa-water"></i> Nước uống
                            </span> 
                            <span class="more__environment-item">
                                <i class="fa-solid fa-blanket"></i> Chăn
                            </span> 
                            <span class="more__environment-item">
                                <i class="fa-solid fa-plug"></i> Ổ cắm sạc
                            </span>
                        </div>

                        <!-- Policy -->
                        <div class="content__more-policy">
                            Chính sách vé: Vé đã mua không thể đổi hoặc hoàn tiền
                        </div>
                    </div>

                    <!-- Seat Selection -->
                    <div class="section1__content-choosechair">
                        <!-- Seat Legend -->
                        <div class="content__choosechair-note">
                            <div class="choosechair__note-title">Ghi chú:</div>
                            <div class="choosechair__note-list">
                                <!-- Regular Seat -->
                                <div class="note__list-item">
                                    <div class="chair chair--normal"></div>
                                    <div class="note-text">
                                        <div class="note__text-title">Ghế thường chưa chọn</div>
                                        <p class="note__text-price note__text-price--normal"></p>
                                    </div>
                                </div>

                                <!-- VIP Seat -->
                                <div class="note__list-item">
                                    <div class="chair chair--vip"></div>
                                    <div class="note-text">
                                        <div class="note__text-title">Ghế VIP chưa chọn</div>
                                        <p class="note__text-price note__text-price--vip"></p>
                                    </div>
                                </div>

                                <!-- Selected Seat -->
                                <div class="note__list-item">
                                    <div class="chair chair--selected"></div>
                                    <div class="note-text">
                                        <div class="note__text-title">Ghế đã được chọn</div>
                                    </div>
                                </div>

                                <!-- Currently Selecting -->
                                <div class="note__list-item">
                                    <div class="chair chair--choosing"></div>
                                    <div class="note-text">
                                        <div class="note__text-title">Ghế đang chọn</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Seat Map -->
                        <div class="content__choosechair-list">
                            <div class="choosechair__list-content">
                                <div class="content__bus">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Section -->
                    <div class="section2__content-payment">
                        <div class="content__payment-total">
                            <div class="payment__total-title">Tổng tiền:</div>
                            <div class="payment__total-value">0 VND</div>
                        </div>
                        <div class="content__payment-btn">Đặt vé</div>
                        <!-- Modal cảnh báo -->
                        <div class="modal fade" id="warningModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header bg-warning">
                                <h5 class="modal-title">Thông báo</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
                            </div>
                            <div class="modal-body">
                                Vui lòng chọn ít nhất một ghế trước khi đặt vé.
                            </div>
                            <div class="modal-footer">
                                <button tabindex="-1" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!-- Modal đặt vé -->
                        <div tabindex="-1" class="modal fade" id="bookingModal">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            
                            <div class="modal-header">
                                <h5 class="modal-title">Xác nhận đặt vé</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
                            </div>

                            <div class="modal-body">
                                <p><strong>Ghế đã chọn:</strong> <span id="modal-seats"></span></p>
                                <p><strong>Tổng tiền:</strong> <span id="modal-total"></span></p>
                            </div>

                            <div class="modal-footer">
                                <button tabindex="-1" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                <button tabindex="-1" type="button" class="btn btn-primary" id="confirmBooking">Xác nhận</button>
                            </div>

                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            `;
        if (section1) {
            section1.innerHTML = await htmlSection1;

            function renderChairSteeringWheel() {
                return `
                <div class="bus__row-item">
                    <img src="../../assets/image/steering-wheel(1).png" alt="Steering Wheel">
                </div>`;
            }
            function renderChairNormal(soGhe, giaVe, status) {
                const chairClass = status === 'booked' ? 'chair--selected' : 'chair--normal';
                return `
                <div class="bus__row-item">
                    <div class="chair ${chairClass}" data-key="${soGhe}" data-price="${giaVe}" data-status="${status}"></div>
                </div>`;
            }
            function renderChairVip(soGhe, giaVe, status) {
                const chairClass = status === 'booked' ? 'chair--selected' : 'chair--vip';
                return `
                <div class="bus__row-item">
                    <div class="chair ${chairClass}" data-key="${soGhe}" data-price="${giaVe}" data-status="${status}"></div>
                </div>`;
            }
            function renderChairNone() {
                return `
                <div class="bus__row-item">
                    
                </div>`;
            }

            // Data theo schema MongoDB
            const loaiGheData15 = [
                {
                    type: "Thuong",
                    giaVe: 100000,
                    tongSo: 11,
                    daDat: 2,
                    ghe: [
                        { soGhe: "A1", status: "available" },
                        { soGhe: "A2", status: "available" },
                        { soGhe: "A3", status: "available" },
                        { soGhe: "B1", status: "booked" },
                        { soGhe: "B2", status: "available" },
                        { soGhe: "B3", status: "available" },
                        { soGhe: "C1", status: "available" },
                        { soGhe: "C2", status: "booked" },
                        { soGhe: "C3", status: "available" },
                        { soGhe: "D1", status: "available" },
                        { soGhe: "D2", status: "available" }
                    ]
                },
                {
                    type: "VIP",
                    giaVe: 200000,
                    tongSo: 4,
                    daDat: 1,
                    ghe: [
                        { soGhe: "E1", status: "available" },
                        { soGhe: "E2", status: "available" },
                        { soGhe: "E3", status: "booked" },
                        { soGhe: "E4", status: "available" }
                    ]
                }
            ];

            const loaiGheData16 = [
                {
                    type: "Thuong",
                    giaVe: 100000,
                    tongSo: 12,
                    daDat: 2,
                    ghe: [
                        { soGhe: "A1", status: "available" },
                        { soGhe: "A2", status: "booked" },
                        { soGhe: "A3", status: "available" },
                        { soGhe: "B1", status: "available" },
                        { soGhe: "B2", status: "available" },
                        { soGhe: "B3", status: "available" },
                        { soGhe: "B4", status: "available" },
                        { soGhe: "C1", status: "booked" },
                        { soGhe: "C2", status: "available" },
                        { soGhe: "C3", status: "available" },
                        { soGhe: "D1", status: "available" },
                        { soGhe: "D2", status: "available" }
                    ]
                },
                {
                    type: "VIP",
                    giaVe: 200000,
                    tongSo: 4,
                    daDat: 1,
                    ghe: [
                        { soGhe: "E1", status: "available" },
                        { soGhe: "E2", status: "booked" },
                        { soGhe: "E3", status: "available" },
                        { soGhe: "E4", status: "available" }
                    ]
                }
            ];

            const loaiGheData29 = [
                {
                    type: "Thuong",
                    giaVe: 100000,
                    tongSo: 24,
                    daDat: 2,
                    ghe: [
                        { soGhe: "A1", status: "available" },
                        { soGhe: "B1", status: "available" },
                        { soGhe: "B2", status: "booked" },
                        { soGhe: "B3", status: "available" },
                        { soGhe: "C1", status: "available" },
                        { soGhe: "C2", status: "available" },
                        { soGhe: "C3", status: "available" },
                        { soGhe: "D1", status: "available" },
                        { soGhe: "D2", status: "available" },
                        { soGhe: "D3", status: "booked" },
                        { soGhe: "E1", status: "available" },
                        { soGhe: "E2", status: "available" },
                        { soGhe: "E3", status: "available" },
                        { soGhe: "F1", status: "available" },
                        { soGhe: "F2", status: "available" },
                        { soGhe: "F3", status: "available" },
                        { soGhe: "G1", status: "available" },
                        { soGhe: "G2", status: "available" },
                        { soGhe: "G3", status: "available" },
                        { soGhe: "H1", status: "available" },
                        { soGhe: "H2", status: "available" },
                        { soGhe: "H3", status: "available" },
                        { soGhe: "I1", status: "available" },
                        { soGhe: "I2", status: "available" }
                    ]
                },
                {
                    type: "VIP",
                    giaVe: 200000,
                    tongSo: 5,
                    daDat: 1,
                    ghe: [
                        { soGhe: "J1", status: "available" },
                        { soGhe: "J2", status: "booked" },
                        { soGhe: "J3", status: "available" },
                        { soGhe: "J4", status: "available" },
                        { soGhe: "J5", status: "available" }
                    ]
                }
            ];

            const loaiGheData35 = [
                {
                    type: "Thuong",
                    giaVe: 100000,
                    tongSo: 30,
                    daDat: 2,
                    ghe: [
                        { soGhe: "A1", status: "available" },
                        { soGhe: "B1", status: "available" },
                        { soGhe: "B2", status: "available" },
                        { soGhe: "B3", status: "booked" },
                        { soGhe: "B4", status: "available" },
                        { soGhe: "C1", status: "available" },
                        { soGhe: "C2", status: "available" },
                        { soGhe: "D1", status: "available" },
                        { soGhe: "D2", status: "available" },
                        { soGhe: "D3", status: "available" },
                        { soGhe: "E1", status: "booked" },
                        { soGhe: "E2", status: "available" },
                        { soGhe: "E3", status: "available" },
                        { soGhe: "F1", status: "available" },
                        { soGhe: "F2", status: "available" },
                        { soGhe: "F3", status: "available" },
                        { soGhe: "G1", status: "available" },
                        { soGhe: "G2", status: "available" },
                        { soGhe: "G3", status: "available" },
                        { soGhe: "H1", status: "available" },
                        { soGhe: "H2", status: "available" },
                        { soGhe: "H3", status: "available" },
                        { soGhe: "I1", status: "available" },
                        { soGhe: "I2", status: "available" },
                        { soGhe: "I3", status: "available" },
                        { soGhe: "J1", status: "available" },
                        { soGhe: "J2", status: "available" },
                        { soGhe: "J3", status: "available" },
                        { soGhe: "K1", status: "available" },
                        { soGhe: "K2", status: "available" }
                    ]
                },
                {
                    type: "VIP",
                    giaVe: 200000,
                    tongSo: 5,
                    daDat: 1,
                    ghe: [
                        { soGhe: "L1", status: "available" },
                        { soGhe: "L2", status: "available" },
                        { soGhe: "L3", status: "booked" },
                        { soGhe: "L4", status: "available" },
                        { soGhe: "L5", status: "available" }
                    ]
                }
            ];

            const loaiGheData45 = [
                {
                    type: "Thuong",
                    giaVe: 100000,
                    tongSo: 40,
                    daDat: 3,
                    ghe: [
                        { soGhe: "A1", status: "available" },
                        { soGhe: "A2", status: "available" },
                        { soGhe: "A3", status: "booked" },
                        { soGhe: "A4", status: "available" },
                        { soGhe: "B1", status: "available" },
                        { soGhe: "B2", status: "available" },
                        { soGhe: "B3", status: "available" },
                        { soGhe: "B4", status: "available" },
                        { soGhe: "C1", status: "booked" },
                        { soGhe: "C2", status: "available" },
                        { soGhe: "C3", status: "available" },
                        { soGhe: "C4", status: "available" },
                        { soGhe: "D1", status: "available" },
                        { soGhe: "D2", status: "available" },
                        { soGhe: "D3", status: "available" },
                        { soGhe: "D4", status: "available" },
                        { soGhe: "E1", status: "available" },
                        { soGhe: "E2", status: "available" },
                        { soGhe: "E3", status: "available" },
                        { soGhe: "E4", status: "available" },
                        { soGhe: "F1", status: "booked" },
                        { soGhe: "F2", status: "available" },
                        { soGhe: "F3", status: "available" },
                        { soGhe: "F4", status: "available" },
                        { soGhe: "G1", status: "available" },
                        { soGhe: "G2", status: "available" },
                        { soGhe: "G3", status: "available" },
                        { soGhe: "G4", status: "available" },
                        { soGhe: "H1", status: "available" },
                        { soGhe: "H2", status: "available" },
                        { soGhe: "H3", status: "available" },
                        { soGhe: "H4", status: "available" },
                        { soGhe: "I1", status: "available" },
                        { soGhe: "I2", status: "available" },
                        { soGhe: "I3", status: "available" },
                        { soGhe: "I4", status: "available" },
                        { soGhe: "J1", status: "available" },
                        { soGhe: "J2", status: "available" },
                        { soGhe: "J3", status: "available" },
                        { soGhe: "J4", status: "available" }
                    ]
                },
                {
                    type: "VIP",
                    giaVe: 200000,
                    tongSo: 5,
                    daDat: 1,
                    ghe: [
                        { soGhe: "K1", status: "available" },
                        { soGhe: "K2", status: "booked" },
                        { soGhe: "K3", status: "available" },
                        { soGhe: "K4", status: "available" },
                        { soGhe: "K5", status: "available" }
                    ]
                }
            ];

            function flattenLoaiGheData(loaiGheArray) {
                const result = [];
                loaiGheArray.forEach(loaiGhe => {
                    loaiGhe.ghe.forEach(ghe => {
                        result.push({
                            type: loaiGhe.type.toLowerCase(), 
                            soGhe: ghe.soGhe,
                            price: loaiGhe.giaVe,
                            status: ghe.status
                        });
                    });
                });
                return result;
            }

            function BusLayout(data) {
                let layout = [];
                let row = [];
                let index = 0;
                const typebus = data.length;

                row.push({ type: 'steering-wheel' });

                switch (typebus) {
                    case 15:
                        row.push({ type: 'none' });
                        row.push(data[index++]);
                        row.push(data[index++]);
                        layout.push(row);
                        
                        while (index < data.length) {
                            row = [];
                            if (data.length - index > 4) {
                                for (let i = 0; i < 4; i++) {
                                    if (i == 3) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else {
                                while (index < data.length) {
                                    row.push(data[index++]);
                                }
                            }
                            layout.push(row);
                        }
                        break;
                    case 16:
                        row.push({ type: 'none' });
                        row.push(data[index++]);
                        row.push(data[index++]);
                        layout.push(row);
                        
                        while (index < data.length) {
                            row = [];
                            if (index === 2) {
                                for (let i = 0; i < 4; i++) {
                                    row.push(data[index++]);
                                }
                            } else if (data.length - index > 4) {
                                for (let i = 0; i < 4; i++) {
                                    if (i == 3) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else {
                                while (index < data.length) {
                                    row.push(data[index++]);
                                }
                            }
                            layout.push(row);
                        }
                        break;
                    case 29:
                        row.push({ type: 'none' });
                        row.push({ type: 'none' });
                        row.push(data[index++]);
                        layout.push(row);
                        while (index < data.length) {
                            row = [];
                            if (index === 1) {
                                for (let i = 0; i < 4; i++) {
                                    if (i == 3) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else if (data.length - index > 4) {
                                for (let i = 0; i < 4; i++) {
                                    if (i == 2) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else {
                                while (index < data.length) {
                                    row.push(data[index++]);
                                }
                            }
                            layout.push(row);
                        }
                        break;
                    case 35:
                        row.push({ type: 'none' });
                        row.push({ type: 'none' });
                        row.push(data[index++]);
                        layout.push(row);
                        while (index < data.length) {
                            row = [];
                            if (index === 1) {
                                for (let i = 0; i < 4; i++) {
                                    row.push(data[index++]);
                                }
                            } else if (index === 5) {
                                for (let i = 0; i < 4; i++) {
                                    if (i >= 2) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else if (data.length - index > 4) {
                                for (let i = 0; i < 4; i++) {
                                    if (i == 2) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else {
                                while (index < data.length) {
                                    row.push(data[index++]);
                                }
                            }
                            layout.push(row);
                        }
                        break;
                    case 45:
                        row.push({ type: 'none' });
                        row.push({ type: 'none' });
                        row.push({ type: 'none' });
                        row.push({ type: 'none' });
                        layout.push(row);
                        while (index < data.length) {
                            row = [];
                            if (data.length - index > 5) {
                                for (let i = 0; i < 5; i++) {
                                    if (i == 2) {
                                        row.push({ type: 'none' });
                                    } else {
                                        row.push(data[index++]);
                                    }
                                }
                            } else {
                                while (index < data.length) {
                                    row.push(data[index++]);
                                }
                            }
                            layout.push(row);
                        }
                        break;
                    default:
                        console.warn('Loại xe không được hỗ trợ:', typebus);
                        break;
                }
                return layout;
            }

            let urlParams = new URLSearchParams(window.location.search);
            let type = urlParams.get('type') || '15';

            function getDataByType(type) {
                switch (type) {
                    case '15':
                        return flattenLoaiGheData(loaiGheData15);
                    case '16':
                        return flattenLoaiGheData(loaiGheData16);
                    case '29':
                        return flattenLoaiGheData(loaiGheData29);   
                    case '35':
                        return flattenLoaiGheData(loaiGheData35);
                    case '45':
                        return flattenLoaiGheData(loaiGheData45);
                    default:
                        console.warn('Loại xe không được hỗ trợ:', type);
                        return flattenLoaiGheData(loaiGheData15);
                }
            }

            let data = getDataByType(type);
            let busLayout = BusLayout(data);

            function renderBusLayout(busLayout) {
                const busContainer = document.querySelector('.content__bus');
                busContainer.innerHTML = busLayout.map(row => {
                    return `
                    <div class="content__bus-row">
                        ${row.map(chair => {
                            switch (chair.type) {
                                case 'steering-wheel':
                                    return renderChairSteeringWheel();
                                case 'thuong':
                                    return renderChairNormal(chair.soGhe, chair.price, chair.status);
                                case 'vip':
                                    return renderChairVip(chair.soGhe, chair.price, chair.status);
                                case 'none':
                                    return renderChairNone();
                            }
                        }).join('')}
                    </div>`;
                }).join('');
                
                attachEventListeners();
            }

            function attachEventListeners() {
                const priceNormal = document.querySelector('.note__text-price--normal');
                const priceVip = document.querySelector('.note__text-price--vip');
                const priceTotal = document.querySelector('.payment__total-value');
                const chairs = document.querySelectorAll('.bus__row-item .chair');
                const btn = document.querySelector('.content__payment-btn');

                const firstNormal = data.find(c => c.type === 'thuong');
                const firstVip = data.find(c => c.type === 'vip');
                if (priceNormal && firstNormal) priceNormal.textContent = firstNormal.price.toLocaleString('vi-VN') + ' VND';
                if (priceVip && firstVip) priceVip.textContent = firstVip.price.toLocaleString('vi-VN') + ' VND';

                chairs.forEach(chair => {
                    chair.addEventListener('click', () => {
                        if (!chair.classList.contains('chair--normal') && !chair.classList.contains('chair--vip')) return;

                        chair.classList.toggle('chair--choosing');

                        const totalPrice = [...chairs].reduce((acc, curr) => {
                            const price = curr.classList.contains('chair--choosing') ? Number(curr.dataset.price || 0) : 0;
                            return acc + price;
                        }, 0);
                        priceTotal.textContent = totalPrice.toLocaleString('vi-VN') + ' VND';
                    });
                });
            
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);

                newBtn.addEventListener('click', () => {
                    const choosingSeats = [...document.querySelectorAll('.bus__row-item .chair--choosing')];
                    if (choosingSeats.length === 0) {
                        new bootstrap.Modal(document.getElementById('warningModal')).show();
                        return;
                    }
                    document.getElementById('modal-seats').textContent = choosingSeats.map(c => c.dataset.key).join(', ');                        
                    document.getElementById('modal-total').textContent = choosingSeats.reduce((acc, c) => acc + Number(c.dataset.price || 0), 0).toLocaleString('vi-VN') + ' VND';
                    new bootstrap.Modal(document.getElementById('bookingModal')).show();
                });

                // Nút xác nhận
                const confirmBtn = document.getElementById('confirmBooking');
                const newConfirmBtn = confirmBtn.cloneNode(true);
                confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
                newConfirmBtn.addEventListener('click', () => {
                    const choosingSeats = [...document.querySelectorAll('.bus__row-item .chair--choosing')]
                        .map(c => c.dataset.key);

                    if (choosingSeats.length > 0) {
                        // Cập nhật status trong data
                        data.forEach(chair => {
                            if (choosingSeats.includes(chair.soGhe)) {
                                chair.status = 'booked';
                            }
                        });
                        alert("Đặt vé thành công ✅");
                        // Cập nhật lại busLayout với data mới
                        busLayout = BusLayout(data);
                        renderBusLayout(busLayout);
                        document.querySelector('.payment__total-value').textContent = '0 VND';
                        bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
                    }
                });
            }
            renderBusLayout(busLayout);       
        } else {
            console.error('Section 1 not found');
        }
    }
    
    renderSection1();
    // End Render Section 1
});

