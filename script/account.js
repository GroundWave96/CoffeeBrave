const menuItems = document.querySelectorAll('.menu-item');
        const accountTitle = document.getElementById('account-title');
        const forms = document.querySelectorAll('.input-area');

        menuItems.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                const section = item.dataset.section;

                // Atualiza o título
                accountTitle.textContent = item.textContent;

                // Esconde todos os formulários e mostra o selecionado
                forms.forEach(form => form.classList.add('hidden'));
                document.getElementById(section).classList.remove('hidden');
            });
        });