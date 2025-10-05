document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-details');
    const modalEl = document.getElementById('detailModal');

    buttons.forEach(btn => {
        btn.setAttribute('data-bs-toggle', 'modal');
        btn.setAttribute('data-bs-target', '#detailModal');

        btn.addEventListener('click', (e) => {
            const tr = e.target.closest('tr');
            if (!tr) return;

            const cells = tr.querySelectorAll('td');
            const ticketId = cells[0]?.textContent?.trim() || '';
            const route = cells[1]?.textContent?.trim() || '';
            const date = cells[2]?.textContent?.trim() || '';

            const idEl = modalEl.querySelector('#ticket-id');
            const nameEl = modalEl.querySelector('#ticket-name');
            const dateEl = modalEl.querySelector('#ticket-date');
            const timeEl = modalEl.querySelector('#ticket-time');
            const routeEl = modalEl.querySelector('#ticket-route');
            const priceEl = modalEl.querySelector('#ticket-price');

            if (idEl) idEl.textContent = ticketId;
            if (nameEl) nameEl.textContent = 'Nguyễn Văn Minh';
            if (dateEl) dateEl.textContent = date;
            if (timeEl) timeEl.textContent = '12:00PM';
            if (routeEl) routeEl.textContent = route;
            if (priceEl) priceEl.textContent = '100.000vnđ';
        });
    });
});