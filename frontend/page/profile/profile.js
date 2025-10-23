document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

document.querySelector('.settings__form').addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thông tin đã được lưu!');
});

// document.getElementById('avatar-upload').addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//             document.querySelector('.profile__avatar img').src = event.target.result;
//             showNotification('Ảnh đại diện đã được cập nhật!');
//         };
//         reader.readAsDataURL(file);
//     }
// });

document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', () => {
        showNotification('Đang hiển thị chi tiết vé...');
    });
});


function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('active');
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}


// document.querySelector('.info__link').addEventListener('click', () => {
//     const dropdown = document.querySelector('.info__downdrop');
//     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
// });

document.querySelector('.history__btn .btn-view-more').addEventListener('click', () => {
    location.href = '../history/index.html';
});