function calculate() {
            let totalWatts = 0;
            const checkboxes = document.querySelectorAll('.device-checkbox:checked');
            checkboxes.forEach(cb => { totalWatts += parseInt(cb.value); });

            let hours = 0;
            const radios = document.getElementsByName('hours');
            for (let r of radios) { if (r.checked) hours = parseInt(r.value); }

            let neededKwh = (totalWatts * hours) / 1000;
            neededKwh = neededKwh / 0.85;

            const resultEl = document.getElementById('result-kwh');
            const modelEl = document.getElementById('result-model');
            const descEl = document.getElementById('result-desc');

            animateValue(resultEl, parseFloat(resultEl.innerText), neededKwh, 500);

            if (totalWatts === 0) {
                modelEl.innerText = "Оберіть прилади...";
                descEl.innerText = "Щоб ми могли підібрати станцію";
                modelEl.className = "text-xl font-bold text-white";
                return;
            }

            if (neededKwh <= 1.0) {
                modelEl.innerText = "EcoFlow Delta 2";
                descEl.innerText = "Компактна, легка, ідеальна для ноутбука та світла.";
                modelEl.className = "text-2xl font-bold text-green-400";
            } else if (neededKwh <= 2.2) {
                modelEl.innerText = "Oukitel P2001 Plus";
                descEl.innerText = "Наш хіт! Потужна (2 кВт), тягне котел та холодильник.";
                modelEl.className = "text-2xl font-bold text-yellow-400";
            } else if (neededKwh <= 3.8) {
                modelEl.innerText = "FOSSiBOT F3600";
                descEl.innerText = "Монстр автономності. Вистачить на все і надовго.";
                modelEl.className = "text-2xl font-bold text-purple-400";
            } else {
                modelEl.innerText = "Індивідуальне рішення";
                descEl.innerText = "Вам потрібен комплект станцій або генератор. Зв'яжіться з нами!";
                modelEl.className = "text-2xl font-bold text-red-400";
            }
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = (progress * (end - start) + start).toFixed(1);
                if (progress < 1) { window.requestAnimationFrame(step); }
            };
            window.requestAnimationFrame(step);
        }
        calculate();
