const faqs = document.querySelectorAll(".faq-inside");

        faqs.forEach(faq => {
            faq.addEventListener("click", () => {
                faqs.forEach(f => {
                    if (f !== faq) {
                        f.classList.remove("active");
                    }
                });
                faq.classList.toggle("active");
            });
        });

        const buttons = document.querySelectorAll(".faq-btn");
        const faqCategories = document.querySelectorAll(".faq-category");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                // Esconde todas as categorias
                faqCategories.forEach(category => {
                    category.style.display = "none";
                });

                // Exibe a categoria correspondente ao botão clicado
                const categoryId = button.getAttribute("content-id");
                const category = document.getElementById(categoryId);
                if (category) {
                    category.style.display = "block";
                }

                // Atualiza o título da categoria
                const faqTitle = document.querySelector(".faq-area-title");
                faqTitle.textContent = button.textContent.trim();

            });
        });

        // Exibir a seção de Produto por padrão quando a página é carregada
        window.addEventListener("load", () => {
            const productButton = document.querySelector('button[content-id="product"]');
            if (productButton) {
                productButton.click(); // Simula o clique no botão de Produto
            }
        });