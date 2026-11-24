function switchPricing(tabId) {
            // 1. Приховати всі вкладки
            document.querySelectorAll('.pricing-tab').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // 2. Показати обрану
            const selected = document.getElementById('price-' + tabId);
            if(selected) {
                selected.classList.remove('hidden');
                selected.classList.add('block');
            }

            // 3. Оновити стилі кнопок (скинути всі)
            document.querySelectorAll('.price-btn').forEach(btn => {
                btn.className = "price-btn bg-white text-slate-500 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold transition-all cursor-pointer";
            });

            // 4. Активувати натиснуту кнопку
            const activeBtn = document.getElementById('btn-' + tabId);
            if(activeBtn) {
                activeBtn.className = "price-btn bg-slate-900 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg cursor-default";
            }
        }
