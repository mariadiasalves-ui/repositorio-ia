// ==========================================================================
// ARRAYS DE OBJETOS PARA RENDERIZAÇÃO E MANUTENÇÃO DINÂMICA
// ==========================================================================

const solucoesData = [
    {
        title: "Manejo Inteligente e de Precisão",
        description: "Plataforma avançada que mapeia áreas de fertilidade mecânica e otimiza a aplicação de insumos de forma precisa, reduzindo custos desnecessários.",
        img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Gestão Sustentável da Água",
        description: "Sensores de umidade de solo interconectados via IoT determinam o volume exato necessário para a irrigação, eliminando o estresse hídrico e o desperdício.",
        img: "https://images.unsplash.com/photo-1463123081488-729f641ef61e?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Rastreabilidade e Certificação Global",
        description: "Documentação automática de todas as ações ecológicas e produtivas realizadas na lavoura, facilitando a auditoria e as exportações comerciais premium.",
        img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600"
    }
];

const faqData = [
    {
        question: "Como as soluções garantem a alta produtividade?",
        answer: "Através da análise preditiva de dados e sensores de solo, conseguimos aplicar inteligência agronômica de precisão. Isso reduz a perda operacional e eleva de forma expressiva o rendimento de sacas coletadas por hectare."
    },
    {
        question: "É muito complexo integrar a tecnologia à minha rotina atual?",
        answer: "De forma alguma. Nosso sistema foi desenvolvido com foco total em experiência do usuário para o produtor rural. A interface é amigável e instalada diretamente em tablets ou smartphones integrados ao maquinário."
    },
    {
        question: "De que maneira a sustentabilidade reduz meus custos práticos?",
        answer: "A sustentabilidade corporativa moderna foca na eficiência de uso. Reduzindo o excesso de defensivos, diesel e água, você preserva o ecossistema do solo ao mesmo tempo em que reduz os custos fixos da safra."
    }
];

// ==========================================================================
// LÓGICA DE INICIALIZAÇÃO E MONTAGEM DE COMPONENTES
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initCarousel();
    initAccordion();
    initAccessibility();
});

// Lógica do Carrossel Dinâmico
let currentSlide = 0;

function initCarousel() {
    const track = document.getElementById("carousel-track");
    if (!track) return;

    solucoesData.forEach(item => {
        const slide = document.createElement("div");
        slide.className = "carousel-item";
        slide.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="carousel-image">
            <div class="carousel-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        track.appendChild(slide);
    });

    const btnNext = document.getElementById("carousel-next");
    const btnPrev = document.getElementById("carousel-prev");

    btnNext.addEventListener("click", () => moveCarousel(1));
    btnPrev.addEventListener("click", () => moveCarousel(-1));
}

function moveCarousel(direction) {
    const track = document.getElementById("carousel-track");
    const totalSlides = solucoesData.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Lógica do Acordeão do FAQ
function initAccordion() {
    const container = document.getElementById("faq-accordion");
    if (!container) return;

    faqData.forEach(item => {
        const accItem = document.createElement("div");
        accItem.className = "accordion-item";

        const button = document.createElement("button");
        button.className = "accordion-header";
        button.innerHTML = `<span>${item.question}</span><span>➕</span>`;
        
        const content = document.createElement("div");
        content.className = "accordion-content";
        content.innerHTML = `<p>${item.answer}</p>`;

        accItem.appendChild(button);
        accItem.appendChild(content);
        container.appendChild(accItem);

        button.addEventListener("click", () => {
            const isActive = accItem.classList.contains("active");
            document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));
            if (!isActive) {
                accItem.classList.add("active");
            }
        });
    });
}

// Lógica de Acessibilidade (Tamanho de Fonte e Contraste)
function initAccessibility() {
    let currentFontSize = 16;
    const bodyElement = document.body;

    const btnIncrease = document.getElementById("btn-increase-font");
    const btnDecrease = document.getElementById("btn-decrease-font");
    const btnContrast = document.getElementById("btn-toggle-contrast");

    btnIncrease.addEventListener("click", () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    btnDecrease.addEventListener("click", () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    btnContrast.addEventListener("click", () => {
        bodyElement.classList.toggle("high-contrast");
    });
}