
const textos = {
	descricao_latij:
		"A LIGA LATIJ é uma iniciativa estudantil voltada para eventos educacionais e culturais. Aqui você encontra oportunidades para aprender com projetos, participar de atividades e construir conexões com outros alunos e professores.",
};

const infosUteis = {
	biblioteca: {
		titulo: "📚 Biblioteca",
		descricao: "A biblioteca do CIESA, localizada no último andar, oferece um acervo completo de livros físicos, periódicos, teses e recursos digitais para todos os alunos. Com áreas de estudo confortáveis, é o espaço ideal para pesquisa e aprendizado. Contamos com acesso a bases de dados especializadas e plataformas de e-learning para potencializar seus estudos."
	},
	laboratorio: {
		titulo: "💻 Laboratórios",
		descricao: "Nossos laboratórios estão equipados com computadores de última geração e softwares especializados para cada área de conhecimento. Os ambientes são projetados para prática profissional, permitindo que você desenvolva projetos reais e ganhe experiência prática essencial. Com suporte técnico disponível, você tem tudo para colocar em prática seus conhecimentos teóricos."
	},
	orientacao: {
		titulo: "🎓 Orientação",
		descricao: "Contamos com uma equipe dedicada de orientadores acadêmicos e profissionais prontos para ajudar você a navegar sua jornada no CIESA. Oferecemos suporte com dúvidas acadêmicas, orientação de carreira, ajuda com projetos e mentoria profissional. Nosso objetivo é seu sucesso acadêmico e profissional desde o primeiro período."
	},
	atividades: {
		titulo: "🏃 Atividades",
		descricao: "Participar é essencial para uma formação completa! O CIESA oferece uma variedade de atividades extracurriculares: esportos, grupos culturais, competições, eventos de networking e muito mais. Essas atividades desenvolvem suas habilidades pessoais, expandem seu círculo profissional e tornam sua experiência acadêmica memorável."
	},
	notas: {
		titulo: "📊 Notas",
		descricao: "A média para aprovação no CIESA é 8, então é preciso estudar regularmente, mas não é difícil alcançar com dedicação e acompanhamento das aulas."
	},
	email: {
		titulo: "📧 Email Institucional",
		descricao: "O CIESA oferece email institucional @ciesa.edu.br com diversos benefícios, como armazenamento ilimitado, integração com ferramentas acadêmicas e suporte técnico dedicado para comunicações oficiais e acesso a recursos exclusivos."
	},
	artigos: {
		titulo: "📰 Artigos",
		descricao: "Os artigos científicos são fundamentais para o avanço do conhecimento acadêmico, permitindo a disseminação de pesquisas inovadoras, validação de hipóteses e contribuição para o debate intelectual em diversas áreas do saber."
	},
	camisa: {
		titulo: "👕 Loja CIESA",
		descricao: "Tenha a opção de comprar camisas personalizadas do seu curso no CIESA, com o nome do curso estampado, para representar sua instituição com orgulho e estilo em eventos acadêmicos e atividades extracurriculares."
	},
	conquistas: {
		titulo: "🏆 Conquistas dos Alunos",
		descricao: "Os alunos do CIESA já conquistaram prêmios em competições nacionais, estágios em empresas de ponta, publicações em revistas científicas e reconhecimento internacional por projetos inovadores, tudo graças ao suporte e oportunidades oferecidas pela instituição."
	}
};

const eventosData = {
	ciesa: [
		{
			titulo: "Workshop de Tecnologia",
			data: "15 de Janeiro - 14h",
			descricao: "Palestra sobre as tendências de desenvolvimento web em 2025. Ministrado por especialistas da indústria."
		},
		{
			titulo: "Fórum de Carreiras",
			data: "22 de Janeiro - 10h",
			descricao: "Conheça profissionais de diversas áreas e descubra oportunidades de estágio e emprego."
		},
		{
			titulo: "Hackathon CIESA 2025",
			data: "28 de Janeiro a 30 de Janeiro",
			descricao: "Evento de 48 horas para desenvolvimento de projetos inovadores. Prêmios para os melhores trabalhos."
		}
	],
	parceria: [
		{
			titulo: "Tech Summit Brasil",
			data: "10 de Fevereiro - 09h",
			descricao: "Grande conferência de tecnologia com empresas líderes do mercado. Ingresso facilitado para alunos CIESA."
		},
		{
			titulo: "Design Conference 2025",
			data: "17 de Fevereiro - 14h",
			descricao: "Evento de design e UX em parceria com agências reconhecidas. Inscrições abertas para nossa comunidade."
		}
	],
	indicados: [
		{
			titulo: "Python Bootcamp Online",
			data: "Inscrições abertas",
			descricao: "Programa intensivo de Python para iniciantes e intermediários. Certificado reconhecido no mercado."
		},
		{
			titulo: "Certificação em AWS",
			data: "Próxima turma em Fevereiro",
			descricao: "Prepare-se para certificação AWS. Diversos cursos e laboratórios práticos disponíveis."
		},
		{
			titulo: "Webinar: Soft Skills para Profissionais",
			data: "19 de Janeiro - 19h",
			descricao: "Desenvolva habilidades essenciais como comunicação, liderança e trabalho em equipe."
		}
	]
};


function aplicarTextos() {
	const elementos = document.querySelectorAll("[data-text]");
	for (const elemento of elementos) {
		const chave = elemento.getAttribute("data-text");
		if (!chave) continue;
		const valor = textos[chave];
		if (typeof valor === "string") {
			elemento.textContent = valor;
		}
	}
}

function configurarNavegacao() {
	const links = document.querySelectorAll(".nav__link");

	function aplicarOverlayPorHash(hash) {
    if (hash === "#quem-somos" || hash === "#sobre-ciesa" || hash === "#informacoes-uteis" || hash === "#eventos" || hash === "#ia-github" || hash === "#criacao-site") {
			document.body.classList.add("bg-dimmed");
			return;
		}

		if (hash === "#inicio" || hash === "" || hash === "#") {
			document.body.classList.remove("bg-dimmed");
		}
	}

	for (const link of links) {
		link.addEventListener("click", (event) => {
			const href = link.getAttribute("href") || "";
			if (!href.startsWith("#")) return;

			const alvo = document.querySelector(href);
			if (!alvo) return;

			event.preventDefault();
			aplicarOverlayPorHash(href);
			alvo.scrollIntoView({ behavior: "smooth", block: "start" });
			history.pushState(null, "", href);
		});
	}

	aplicarOverlayPorHash(window.location.hash);
	window.addEventListener("hashchange", () => aplicarOverlayPorHash(window.location.hash));
}

function configurarModalLATIJ() {
	const modal = document.getElementById("latij-modal");
	const logo = document.querySelector(".liga-card--latij");
	if (!modal || !logo) return;
	const closeBtn = modal.querySelector(".modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden"; // impede scroll da página
		verificarVideoCard();
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = ""; // restaura scroll
	}

	logo.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalChrono() {
	const modal = document.getElementById("chrono-modal");
	const logo = document.querySelector(".liga-card--chrono");
	if (!modal || !logo) return;
	const closeBtn = modal.querySelector(".modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden"; // impede scroll da página
		verificarVideoCard();
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = ""; // restaura scroll
	}

	logo.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

// Rastrear cliques nas ligas para mostrar vídeo
let ligasClicadas = {
	latij: false,
	chrono: false
};

function verificarVideoCard() {
	if (ligasClicadas.latij && ligasClicadas.chrono) {
		const videoCard = document.getElementById("liga-video-card");
		if (videoCard && videoCard.classList.contains("video-card--hidden")) {
			videoCard.classList.remove("video-card--hidden");
			videoCard.classList.add("video-card--visible");
		}
	}
}

// Rastrear cliques nas ligas
document.addEventListener("DOMContentLoaded", () => {
	const ligaLatij = document.querySelector(".liga-card--latij");
	const ligaChrono = document.querySelector(".liga-card--chrono");

	if (ligaLatij) {
		ligaLatij.addEventListener("click", () => {
			ligasClicadas.latij = true;
			verificarVideoCard();
		});
	}

	if (ligaChrono) {
		ligaChrono.addEventListener("click", () => {
			ligasClicadas.chrono = true;
			verificarVideoCard();
		});
	}
});

document.addEventListener("DOMContentLoaded", () => {
	aplicarTextos();
	configurarNavegacao();
	configurarModalLATIJ();
	configurarModalChrono();
	configurarEfeitoCaracteres();
	configurarModalCIESA();
	configurarModalInfos();
	configurarModalEventos();
	configurarModalAreas();
	configurarModalEquipe();
});

function configurarEfeitoCaracteres() {
	const aboutText = document.getElementById("about-description");
	if (!aboutText) return;

	const texto = aboutText.textContent;
	const caracteres = texto.split("");

	aboutText.innerHTML = "";
	caracteres.forEach((char) => {
		const span = document.createElement("span");
		span.className = "char";
		span.textContent = char;
		aboutText.appendChild(span);
	});
}

function configurarModalCIESA() {
	const modal = document.getElementById("ciesa-modal");
	const imageTrigger = document.getElementById("ciesa-image-trigger");
	const modalImage = document.getElementById("ciesa-modal-image");
	if (!modal || !imageTrigger || !modalImage) return;
	const closeBtn = modal.querySelector(".ciesa-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	// Array com as imagens (adicione mais URLs conforme necessário)
	const imagens = [
		"Media/SVG/CIESA_PREDIO.svg"
		// Adicione mais imagens aqui: "Media/SVG/CIESA_2.svg", "Media/SVG/CIESA_3.svg", etc
	];

	let currentImageIndex = 0;
	let autoChangeInterval = null;

	function trocarImagem(novoIndice) {
		// Valida se o índice é válido
		if (novoIndice < 0 || novoIndice >= imagens.length) {
			return;
		}

		// Adiciona efeito de fade out
		modalImage.classList.add("fade-out");

		setTimeout(() => {
			currentImageIndex = novoIndice;
			modalImage.src = imagens[currentImageIndex];
			modalImage.classList.remove("fade-out");
			reiniciarAutoChange();
		}, 300);
	}

	function proximaImagem() {
		const proximo = (currentImageIndex + 1) % imagens.length;
		trocarImagem(proximo);
	}

	function iniciarAutoChange() {
		autoChangeInterval = setInterval(() => {
			proximaImagem();
		}, 10000); // 10 segundos
	}

	function reiniciarAutoChange() {
		clearInterval(autoChangeInterval);
		iniciarAutoChange();
	}

	function abrirModal() {
		modal.classList.add("ciesa-modal--open");
		document.body.style.overflow = "hidden";
		iniciarAutoChange();
	}

	function fecharModal() {
		modal.classList.remove("ciesa-modal--open");
		document.body.style.overflow = "";
		clearInterval(autoChangeInterval);
	}

	imageTrigger.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("ciesa-modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalEventos() {
	const modal = document.getElementById("eventos-modal");
	const trigger = document.getElementById("eventos-trigger");
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".eventos-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	const tabs = modal.querySelectorAll(".eventos-tab");
	const panels = modal.querySelectorAll(".eventos-panel");
	if (!closeBtn || !overlay) return;

	function renderizarEventos() {
		const ciesaList = modal.querySelector("#eventos-ciesa-list");
		const parceriaList = modal.querySelector("#eventos-parceria-list");
		const indicadosList = modal.querySelector("#eventos-indicados-list");
		if (!ciesaList || !parceriaList || !indicadosList) return;

		function renderEventos(container, tipo) {
			container.innerHTML = "";
			const eventos = eventosData[tipo];

			if (eventos.length === 0) {
				container.innerHTML = '<div class="evento-item evento-item--empty">Em breve, mais eventos!</div>';
				return;
			}

			eventos.forEach((evento) => {
				const div = document.createElement("div");
				div.className = "evento-item";
				div.innerHTML = `
					<div class="evento-item__date">${evento.data}</div>
					<h3 class="evento-item__title">${evento.titulo}</h3>
					<p class="evento-item__description">${evento.descricao}</p>
				`;
				container.appendChild(div);
			});
		}

		renderEventos(ciesaList, "ciesa");
		renderEventos(parceriaList, "parceria");
		renderEventos(indicadosList, "indicados");
	}

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden";
		renderizarEventos();
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = "";
	}

	function trocarAba(novaAba) {
		// Remover ativo de todas as abas e painéis
		tabs.forEach((tab) => tab.classList.remove("eventos-tab--active"));
		panels.forEach((panel) => panel.classList.remove("eventos-panel--active"));

		// Ativar a nova aba e painel
		const abaBotao = modal.querySelector(`[data-tab="${novaAba}"]`);
		const painelDiv = modal.querySelector(`[data-panel="${novaAba}"]`);

		if (abaBotao) abaBotao.classList.add("eventos-tab--active");
		if (painelDiv) painelDiv.classList.add("eventos-panel--active");
	}

	trigger.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const novaAba = tab.getAttribute("data-tab");
			trocarAba(novaAba);
		});
	});

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalInfos() {
	const modal = document.getElementById("info-modal");
	const infoItems = document.querySelectorAll(".info-item");
	if (!modal || infoItems.length === 0) return;
	const closeBtn = modal.querySelector(".info-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	const modalTitle = modal.querySelector(".info-modal__title");
	const modalDescription = modal.querySelector(".info-modal__description");
	if (!closeBtn || !overlay || !modalTitle || !modalDescription) return;

	function abrirModal(info) {
		const dados = infosUteis[info];
		if (!dados) return;

		modalTitle.textContent = dados.titulo;
		modalDescription.textContent = dados.descricao;
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden";
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = "";
	}

	infoItems.forEach((item) => {
		item.addEventListener("click", () => {
			const info = item.getAttribute("data-info");
			abrirModal(info);
		});

		item.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				const info = item.getAttribute("data-info");
				abrirModal(info);
			}
		});
	});

	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalAreas() {
	const modal = document.getElementById("areas-modal");
	const trigger = document.getElementById("areas-trigger");
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".areas-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden";
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = "";
	}

	trigger.addEventListener("click", abrirModal);
	trigger.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			abrirModal();
		}
	});

	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalEquipe() {
	const equipeLink = document.querySelector(".equipe-link");
	const equipeModal = document.getElementById("equipe-modal");
	if (!equipeLink || !equipeModal) return;

	const closeBtn = equipeModal.querySelector(".modal__close");
	const overlay = equipeModal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	function abrirEquipeModal(event) {
		if (event) event.preventDefault();
		equipeModal.classList.add("modal--open");
		equipeModal.setAttribute("aria-hidden", "false");
		document.body.style.overflow = "hidden";
	}

	function fecharEquipeModal() {
		equipeModal.classList.remove("modal--open");
		equipeModal.setAttribute("aria-hidden", "true");
		document.body.style.overflow = "";
	}

	equipeLink.addEventListener("click", abrirEquipeModal);
	equipeLink.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			abrirEquipeModal();
		}
	});

	closeBtn.addEventListener("click", fecharEquipeModal);
	overlay.addEventListener("click", fecharEquipeModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && equipeModal.classList.contains("modal--open")) {
			fecharEquipeModal();
		}
	});
}
