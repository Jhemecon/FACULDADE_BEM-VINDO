const textos = {
  descricao_latij:
    "A LIGA LATIJ é uma iniciativa estudantil voltada para eventos educacionais e culturais. Aqui você encontra oportunidades para aprender com projetos, participar de atividades e construir conexões com outros alunos e professores.",
};

const modalData = {
  latij: {
    title: "LIGA LATIJ - Detalhes",
    caracteristicas: "Buscamos pessoas criativas, dedicadas e apaixonadas por inovação. Valorizamos a colaboração, a curiosidade e o compromisso com o aprendizado contínuo.",
    metas: "Nossas metas incluem promover pelo menos 5 eventos por semestre, aumentar a participação em 30% e desenvolver projetos impactantes na comunidade acadêmica.",
    projetos: "Atualmente trabalhamos em projetos de tecnologia educacional, eventos culturais e parcerias com empresas locais para estágios e oportunidades.",
    membros: "Temos uma equipe diversificada de 20 membros, incluindo estudantes de diferentes cursos, coordenadores e mentores experientes.",
  },
  chrono: {
    title: "Projeto Chrono - Detalhes",
    caracteristicas: "Procuramos indivíduos organizados, focados em produtividade e com interesse em gestão de tempo e eficiência pessoal.",
    metas: "Objetivamos implementar ferramentas de produtividade em 50% dos projetos estudantis e reduzir prazos de entrega em 20%.",
    projetos: "Desenvolvemos aplicações para gerenciamento de tarefas, workshops sobre produtividade e integrações com ferramentas acadêmicas.",
    membros: "Contamos com 15 membros especializados em desenvolvimento de software, design e gestão de projetos.",
  },
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

function configurarModal() {
  const modal = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalButtons = document.querySelectorAll(".modal-btn");
  const closeBtn = document.querySelector(".modal-close");

  let currentOrg = null;

  function abrirModal(org) {
    currentOrg = org;
    modalTitle.textContent = modalData[org].title;
    modalDetails.innerHTML = "<p>Selecione uma seção acima para ver os detalhes.</p>";
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentOrg = null;
  }

  // Abrir modal ao clicar na logo LATIJ
  document.querySelector(".latij-project__media").addEventListener("click", () => abrirModal("latij"));

  // Abrir modal ao clicar na logo Chrono
  document.querySelector(".split__media--chrono").addEventListener("click", () => abrirModal("chrono"));

  // Fechar modal
  closeBtn.addEventListener("click", fecharModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  // Trocar conteúdo ao clicar nos botões
  for (const btn of modalButtons) {
    btn.addEventListener("click", () => {
      if (!currentOrg) return;
      const section = btn.getAttribute("data-section");
      modalDetails.innerHTML = `<h3>${btn.textContent}</h3><p>${modalData[currentOrg][section]}</p>`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTextos();
  configurarNavegacao();
  configurarModal();
});
