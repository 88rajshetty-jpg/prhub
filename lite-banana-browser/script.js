  // Initialize Icons
        lucide.createIcons();

        const addressInput = document.getElementById('address-input');
        const viewport = document.getElementById('browser-viewport');
        const startPage = document.getElementById('start-page');
        const btnBack = document.getElementById('btn-back');
        const btnForward = document.getElementById('btn-forward');
        const btnReload = document.getElementById('btn-reload');
        const btnHome = document.getElementById('btn-home');

        function loadUrl(url) {
            if (!url) return;
            let targetUrl = url.trim();
            
            // Regex to check if input is a URL
            const isUrl = /^(http|https):\/\/[^ "]+$/.test(targetUrl) || (targetUrl.includes('.') && !targetUrl.includes(' '));

            if (!isUrl) {
                targetUrl = `https://www.google.com/search?q=${encodeURIComponent(targetUrl)}&igu=1`;
            } else if (!targetUrl.startsWith('http')) {
                targetUrl = `https://${targetUrl}`;
            }

            addressInput.value = targetUrl;
            viewport.src = targetUrl;
            
            startPage.style.opacity = '0';
            setTimeout(() => {
                startPage.style.display = 'none';
            }, 400);
        }

        addressInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loadUrl(addressInput.value);
                addressInput.blur();
            }
        });

        btnHome.addEventListener('click', () => {
            viewport.src = "about:blank";
            addressInput.value = "";
            startPage.style.display = 'flex';
            setTimeout(() => { startPage.style.opacity = '1'; }, 10);
        });

        btnReload.addEventListener('click', () => {
            if (viewport.src !== "about:blank") viewport.src = viewport.src;
        });

        // Navigation History Handling
        btnBack.addEventListener('click', () => {
            try { 
                window.history.back(); } catch (e) {}
        });

        btnForward.addEventListener('click', () => {
            try { window.history.forward(); } catch (e) {}
        });

        window.loadUrl = loadUrl;
        addressInput.addEventListener('focus', () => addressInput.select());