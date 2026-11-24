(() => {
  const form = document.querySelector('form[name="booking"], form[name="repair_booking"]');
  if (!form) return;
  const { phone, start_date: start, end_date: end } = form.elements;
  function normalizePhone() {
    const compact = phone.value.replace(/[\s()\-]/g, '');
    const normalized = /^0\d{9}$/.test(compact) ? '+38' + compact : compact.replace(/^380/, '+380');
    if (/^\+380\d{9}$/.test(normalized)) phone.value = normalized;
  }
  phone.addEventListener('input', normalizePhone);
  phone.addEventListener('blur', normalizePhone);
  form.addEventListener('submit', normalizePhone);
  if (!start || !end) return;
  const days = Number(form.dataset.minDays);
  const today = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Kyiv', year: 'numeric', month: '2-digit', day: '2-digit'
  });
  function updateDates() {
    start.min = today.format(new Date());
    const earliest = new Date((start.value >= start.min ? start.value : start.min) + 'T00:00:00Z');
    earliest.setUTCDate(earliest.getUTCDate() + days);
    end.min = earliest.toISOString().slice(0, 10);
    end.setCustomValidity(end.value && end.value < end.min ? 'Оберіть дату завершення щонайменше через ' + days + (days === 2 ? ' доби' : ' діб') + ' після початку оренди.' : '');
  }
  for (const event of ['input', 'change', 'focusin']) form.addEventListener(event, updateDates);
  updateDates();
})();
