
const textos = {
	descricao_latij:
		"A LIGA LATIJ é uma iniciativa estudantil voltada para eventos educacionais e culturais. Aqui você encontra oportunidades para aprender com projetos, participar de atividades e construir conexões com outros alunos e professores.",
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
    if (hash === "#latij" || hash === "#chrono" || hash === "#sobre-ciesa") {
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
	const logo = document.querySelector(".latij-project__media");
	const closeBtn = modal.querySelector(".modal__close");
	const overlay = modal.querySelector(".modal__overlay");

	function abrirModal() {
		modal.setAttribute("aria-hidden", "false");
		document.body.style.overflow = "hidden"; // impede scroll da página
	}

	function fecharModal() {
		modal.setAttribute("aria-hidden", "true");
		document.body.style.overflow = ""; // restaura scroll
	}

	logo.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
			fecharModal();
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	aplicarTextos();
	configurarNavegacao();
	configurarModalLATIJ();
});

