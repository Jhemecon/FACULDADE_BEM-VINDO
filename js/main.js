
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
	notas: {
		titulo: "📊 Notas",
		descricao: `
			<div class="notas-content">
				<div class="notas-intro">
					<p><strong>Média para aprovação: 8.0</strong></p>
					<p class="notas-subtitle">O sistema de avaliação funciona em dois períodos (similar ao ensino médio)</p>
				</div>

				<div class="notas-section">
					<h3>📋 Como Funciona</h3>
					<div class="notas-timeline">
						<div class="timeline-item timeline-item--npc1">
							<div class="timeline-item__header">
								<span class="timeline-item__period">1º Período</span>
								<span class="timeline-item__badge">NPC 1</span>
							</div>
							<div class="timeline-item__content">
								<p class="timeline-item__points">0 a 10 pontos</p>
								<p class="timeline-item__desc">Primeira avaliação do semestre</p>
							</div>
						</div>

						<div class="timeline-divider">
							<div class="timeline-divider__line"></div>
							<span class="timeline-divider__text">Férias</span>
							<div class="timeline-divider__line"></div>
						</div>

						<div class="timeline-item timeline-item--npc2">
							<div class="timeline-item__header">
								<span class="timeline-item__period">2º Período</span>
								<span class="timeline-item__badge">NPC 2</span>
							</div>
							<div class="timeline-item__content">
								<p class="timeline-item__points">0 a 10 pontos</p>
								<p class="timeline-item__desc">Segunda avaliação do semestre</p>
							</div>
						</div>

						<div class="timeline-total">
							<div class="timeline-total__content">
								<h4 class="timeline-total__title">Total Necessário</h4>
								<p class="timeline-total__points">NPC 1 + NPC 2 ≥ 16 pontos</p>
								<p class="timeline-total__info">Mínimo para aprovação direto</p>
							</div>
						</div>
					</div>
				</div>

				<div class="notas-section">
					<h3>✅ Exemplos de Aprovação</h3>
					<div class="notas-examples">
						<div class="example-item example-aprovado">
							<div class="example-badge">✓ Aprovado</div>
							<p>NPC 1: 8.0 + NPC 2: 9.0 = <strong>17.0 pontos</strong></p>
							<span class="example-label">Média Final: 8.5</span>
						</div>
						<div class="example-item example-aprovado">
							<div class="example-badge">✓ Aprovado</div>
							<p>NPC 1: 6.0 + NPC 2: 10.0 = <strong>16.0 pontos</strong></p>
							<span class="example-label">Média Final: 8.0 (limite mínimo)</span>
						</div>
					</div>
				</div>

				<div class="notas-section">
					<h3>❌ Exemplos de NEF (Recuperação)</h3>
					<div class="notas-examples">
						<div class="example-item example-nef">
							<div class="example-badge">⚠ NEF</div>
							<p>NPC 1: 7.0 + NPC 2: 8.0 = <strong>15.0 pontos</strong></p>
							<span class="example-label">Precisa recuperar 1.0 ponto</span>
						</div>
						<div class="example-item example-nef">
							<div class="example-badge">⚠ NEF</div>
							<p>NPC 1: 5.0 + NPC 2: 6.0 = <strong>11.0 pontos</strong></p>
							<span class="example-label">Precisa recuperar 5.0 pontos</span>
						</div>
					</div>
				</div>

				<div class="notas-info-box">
					<h3>🎓 O que é NEF?</h3>
					<p>NEF é a <strong>Não É Final</strong>, a recuperação do CIESA. Se você não alcançar 16 pontos na soma de NPC 1 + NPC 2, você terá a oportunidade de recuperar os pontos que faltam na NEF. É sua chance de atingir a média necessária para aprovação!</p>
				</div>
			</div>
		`
	},
	email: {
		titulo: "📧 Email Institucional",
		descricao: `
			<div class="email-content">
				<div class="email-intro">
					<h3>O que é o e-mail institucional?</h3>
					<p>O e-mail institucional é uma conta de e-mail fornecida pela instituição de ensino (ex: @ciesa.edu.br), exclusiva para alunos, professores e colaboradores.</p>
					<p><strong>Quando estará disponível?</strong> O e-mail institucional estará disponível em até uma semana após a matrícula do novo aluno, permitindo o acesso rápido a todos os benefícios.</p>
				</div>

				<div class="email-benefits">
					<h3>Benefícios de ter o e-mail institucional</h3>
					<ul>
						<li><strong>Acesso ao Google Workspace for Education</strong> (Gmail, Drive, Docs, Meet, Agenda, etc.) com armazenamento ampliado.</li>
						<li><strong>Microsoft Office 365 Education</strong>: Word, Excel, PowerPoint, OneDrive e Teams gratuitamente.</li>
						<li><strong>Descontos em softwares e serviços</strong>: Adobe, Autodesk, Github Student Pack, Canva Pro, Notion, entre outros.</li>
						<li><strong>Acesso a plataformas acadêmicas</strong>: Bibliotecas digitais, portais de pesquisa, cursos online e eventos exclusivos.</li>
						<li><strong>Comunicação oficial</strong>: Receba avisos, comunicados, boletins e informações importantes diretamente da instituição.</li>
						<li><strong>Participação em grupos e fóruns acadêmicos</strong>.</li>
						<li><strong>Criação de contas em serviços que exigem e-mail educacional</strong>.</li>
					</ul>
				</div>

				<div class="email-comparativo">
					<h3>Comparativo: Com e-mail institucional x Sem e-mail institucional</h3>
					<table class="email-table">
						<thead>
							<tr>
								<th>Com e-mail institucional</th>
								<th>Sem e-mail institucional</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Acesso ao Google Workspace</td>
								<td>Sem acesso a ferramentas Google Pro</td>
							</tr>
							<tr>
								<td>Office 365 gratuito</td>
								<td>Sem Office 365 Education</td>
							</tr>
							<tr>
								<td>Descontos em softwares e serviços</td>
								<td>Sem descontos acadêmicos</td>
							</tr>
							<tr>
								<td>Recebe comunicados oficiais</td>
								<td>Pode perder informações importantes</td>
							</tr>
							<tr>
								<td>Participa de grupos acadêmicos</td>
								<td>Não participa de grupos exclusivos</td>
							</tr>
							<tr>
								<td>Acesso a plataformas e eventos</td>
								<td>Acesso restrito ou negado</td>
							</tr>
							<tr>
								<td>Suporte técnico institucional</td>
								<td>Suporte limitado</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="email-observacao">
					<h3>Observação importante</h3>
					<p>O e-mail institucional é fundamental para aproveitar ao máximo os recursos oferecidos pela instituição e parceiros. Fique atento ao prazo de ativação e utilize sempre seu e-mail institucional para cadastros e comunicações acadêmicas.</p>
				</div>
			</div>
		`
	},
	artigos: {
		titulo: "📰 Artigos Científicos",
		descricao: `
			<div class="artigos-content">
				<div class="artigos-intro">
					<h3>Por que produzir artigos científicos?</h3>
					<p>Os artigos científicos são fundamentais para o avanço do conhecimento acadêmico. Eles permitem a disseminação de pesquisas inovadoras, validação de hipóteses e contribuição para o debate intelectual em diversas áreas do saber.</p>
					<p><strong>Incentivo à produção:</strong> No CIESA, incentivamos fortemente a produção acadêmica. Participar de congressos, publicar em revistas e apresentar trabalhos são atividades que enriquecem seu currículo, desenvolvem habilidades de pesquisa e comunicação, além de serem valorizadas no mercado de trabalho.</p>
				</div>

				<div class="artigos-tipos">
					<h3>Tipos de artigos científicos</h3>
					<div class="artigos-grid">
						<div class="artigo-item">
							<h4>📄 Artigo Original</h4>
							<p>Apresenta resultados de pesquisa original, com metodologia detalhada, análise de dados e conclusões. Publicados em revistas científicas indexadas.</p>
							<small><strong>Aplicação:</strong> Revistas como Nature, Science, IEEE, ACM</small>
						</div>
						<div class="artigo-item">
							<h4>📝 Artigo de Revisão</h4>
							<p>Sintetiza e analisa estudos existentes sobre um tema específico, identificando lacunas e tendências na literatura.</p>
							<small><strong>Aplicação:</strong> Revistas de revisão sistemática, meta-análises</small>
						</div>
						<div class="artigo-item">
							<h4>🔬 Relato de Caso</h4>
							<p>Descreve casos clínicos ou situações práticas únicas, contribuindo para o conhecimento médico ou técnico.</p>
							<small><strong>Aplicação:</strong> Revistas médicas, engenharia, psicologia</small>
						</div>
						<div class="artigo-item">
							<h4>💡 Carta ao Editor</h4>
							<p>Comentários breves sobre artigos publicados, críticas construtivas ou novas perspectivas sobre temas atuais.</p>
							<small><strong>Aplicação:</strong> Seções de correspondência em revistas científicas</small>
						</div>
						<div class="artigo-item">
							<h4>📊 Artigo Metodológico</h4>
							<p>Descreve novas metodologias, técnicas ou ferramentas de pesquisa, com validação e aplicações práticas.</p>
							<small><strong>Aplicação:</strong> Revistas especializadas em métodos de pesquisa</small>
						</div>
						<div class="artigo-item">
							<h4>🎯 Artigo de Opinião</h4>
							<p>Apresenta pontos de vista fundamentados sobre questões controversas ou emergentes na área.</p>
							<small><strong>Aplicação:</strong> Revistas de opinião acadêmica, editoriais</small>
						</div>
					</div>
				</div>

				<div class="artigos-beneficios">
					<h3>Benefícios da produção acadêmica</h3>
					<ul>
						<li><strong>Desenvolvimento profissional:</strong> Melhora habilidades de pesquisa, escrita e apresentação</li>
						<li><strong>Reconhecimento acadêmico:</strong> Pontos no currículo Lattes, citações em outros trabalhos</li>
						<li><strong>Oportunidades de carreira:</strong> Destaque em processos seletivos e promoções</li>
						<li><strong>Rede de contatos:</strong> Conexões com pesquisadores e profissionais da área</li>
						<li><strong>Contribuição social:</strong> Avanço do conhecimento e solução de problemas reais</li>
					</ul>
				</div>

				<div class="artigos-dicas">
					<h3>Dicas para começar</h3>
					<p>Comece identificando um tema de interesse, faça uma revisão bibliográfica, desenvolva sua pesquisa com orientação de professores e submeta para congressos estudantis. O CIESA oferece suporte através de grupos de pesquisa e orientação acadêmica.</p>
				</div>
			</div>
		`
	},
	camisa: {
		titulo: "👕 Loja CIESA",
		descricao: `
			<div class="loja-content">
				<div class="loja-intro">
					<h3>Produtos opcionais para representar sua instituição</h3>
					<p>A Loja CIESA oferece produtos personalizados que permitem aos alunos expressarem seu orgulho institucional. Todos os itens são <strong>completamente opcionais</strong> e não há obrigatoriedade de compra.</p>
					<p>Os produtos são desenvolvidos com qualidade e design exclusivo, representando não apenas seu curso, mas também o espírito inovador e acadêmico do CIESA.</p>
				</div>

				<div class="loja-produtos">
					<h3>Nossos produtos</h3>
					<div class="produtos-grid">
						<div class="produto-item">
							<h4>👕 Camisas Personalizadas</h4>
							<p>Camisas de alta qualidade com o nome do seu curso estampado. Disponíveis em diversas cores e tamanhos, ideais para eventos acadêmicos, congressos e atividades extracurriculares.</p>
							<small><strong>Material:</strong> Algodão Pima, confortável e durável</small>
						</div>
						<div class="produto-item">
							<h4>🧥 Moletons</h4>
							<p>Moletons confortáveis com capuz e bolsos, perfeitos para os dias mais frios. Design moderno com o logo do CIESA e identificação do curso.</p>
							<small><strong>Material:</strong> Poliéster e algodão, com forro interno macio</small>
						</div>
						<div class="produto-item">
							<h4>🎯 Bottons Exclusivos</h4>
							<p>Bottons colecionáveis distribuídos gratuitamente em eventos do CIESA. Cada evento tem seu design único, criando uma coleção especial dos momentos acadêmicos.</p>
							<small><strong>Distribuição:</strong> Gratuitos em eventos oficiais da instituição</small>
						</div>
					</div>
				</div>

				<div class="loja-eventos">
					<h3>Eventos com bottons exclusivos</h3>
					<p>Durante os eventos organizados pelo próprio CIESA, distribuímos bottons gratuitos como lembrança. Cada evento tem seu design único, permitindo que você monte uma coleção especial:</p>
					<ul>
						<li><strong>Semanas acadêmicas:</strong> Bottons temáticos por área de conhecimento</li>
						<li><strong>Congressos estudantis:</strong> Designs comemorativos das edições</li>
						<li><strong>Competições e hackathons:</strong> Bottons para participantes e vencedores</li>
						<li><strong>Cerimônias de formatura:</strong> Bottons especiais para formandos</li>
						<li><strong>Eventos culturais:</strong> Designs criativos representando a diversidade</li>
					</ul>
				</div>

				<div class="loja-beneficios">
					<h3>Por que adquirir nossos produtos?</h3>
					<ul>
						<li><strong>Identificação institucional:</strong> Demonstre orgulho pelo seu curso e instituição</li>
						<li><strong>Conforto e qualidade:</strong> Materiais selecionados para durabilidade</li>
						<li><strong>Memórias acadêmicas:</strong> Bottons como recordação de momentos especiais</li>
						<li><strong>Networking:</strong> Facilita conexões com outros alunos e profissionais</li>
						<li><strong>Apoio à instituição:</strong> Contribui para atividades e projetos estudantis</li>
					</ul>
				</div>

				<div class="loja-info">
					<h3>Informações importantes</h3>
					<p>Os produtos da Loja CIESA são vendidos a preços acessíveis e podem ser adquiridos diretamente na instituição. Os bottons são distribuídos gratuitamente em eventos oficiais - não há necessidade de compra prévia.</p>
				</div>
			</div>
		`
	},
	conquistas: {
		titulo: "🏆 Conquistas dos Alunos",
		descricao: `
			<div class="conquistas-content">
				<div class="conquistas-intro">
					<h3>O sucesso dos nossos alunos</h3>
					<p>Os alunos do CIESA têm alcançado resultados extraordinários graças ao ambiente acadêmico inovador, ao suporte institucional e às conexões estabelecidas durante o curso. Aqui estão algumas das principais conquistas:</p>
				</div>

				<div class="conquistas-destaque">
					<h3>🏅 Conquista Destaque: Instituto de Pesquisa Eldorado</h3>
					<div class="destaque-card">
						<h4>Emprego no Instituto de Pesquisa Eldorado</h4>
						<p><strong>Um aluno do CIESA conseguiu emprego no renomado Instituto de Pesquisa Eldorado</strong>, um dos principais centros de pesquisa tecnológica do país. Esta conquista excepcional destaca a excelência acadêmica e a preparação profissional oferecida pela instituição.</p>
						<small><strong>Por que isso é possível?</strong> A integração do CIESA com o ecossistema de pesquisa e inovação facilita o acesso a oportunidades exclusivas em instituições de ponta.</small>
					</div>
				</div>

				<div class="conquistas-categorias">
					<h3>Outras conquistas notáveis</h3>
					<div class="categorias-grid">
						<div class="categoria-item">
							<h4>💼 Estágios Internos</h4>
							<p>Estágios dentro do próprio CIESA em projetos de pesquisa, desenvolvimento e administração, proporcionando experiência prática valiosa e networking interno.</p>
							<small><strong>Benefício:</strong> Ambiente familiar para desenvolver habilidades e construir relacionamentos profissionais</small>
						</div>
						<div class="categoria-item">
							<h4>🚀 Criação de Startups</h4>
							<p>Alunos têm fundado suas próprias startups, transformando projetos acadêmicos em empreendimentos reais, com suporte do ecossistema de inovação do CIESA.</p>
							<small><strong>Suporte oferecido:</strong> Mentoria, conexões com investidores e espaço para prototipagem</small>
						</div>
						<div class="categoria-item">
							<h4>🌍 Estágios Externos Facilitados</h4>
							<p>Por conta da integração no CIESA, alunos conseguem estágios em empresas parceiras e instituições externas com maior facilidade, destacando-se no mercado de trabalho.</p>
							<small><strong>Vantagem competitiva:</strong> Credibilidade institucional e recomendações qualificadas</small>
						</div>
					</div>
				</div>

				<div class="conquistas-impacto">
					<h3>O impacto do CIESA</h3>
					<p>Essas conquistas demonstram como o CIESA prepara seus alunos não apenas academicamente, mas também para o mercado de trabalho e para a inovação. O suporte institucional, as conexões estabelecidas e o ambiente de excelência criam as condições ideais para o sucesso profissional.</p>
				</div>
			</div>
		`
	},
	coordenadora: {
		titulo: "👩‍🏫 Coordenadora - Janaina Souza",
		descricao: `
			<div class="coordenadora-content">
				<div class="coordenadora-profile">
					<div class="coordenadora-photo">
						<img src="https://via.placeholder.com/200x200/2d3748/ffd700?text=JS" alt="Janaina Souza - Coordenadora do CIESA" class="coordenadora-photo__img">
					</div>
					<div class="coordenadora-info">
						<h3>Janaina Souza</h3>
						<p class="coordenadora-role">Coordenadora do CIESA</p>
						<p class="coordenadora-description">
							Profissional dedicada com vasta experiência em educação e coordenação acadêmica. 
							Especialista em formação técnica e desenvolvimento de competências profissionais, 
							com foco em preparar alunos para os desafios do mercado de trabalho atual.
						</p>
						<div class="coordenadora-highlights">
							<div class="highlight-item">
								<span class="highlight-icon">🎓</span>
								<span>Mestre em Educação</span>
							</div>
							<div class="highlight-item">
								<span class="highlight-icon">💼</span>
								<span>15+ anos de experiência</span>
							</div>
							<div class="highlight-item">
								<span class="highlight-icon">🏆</span>
								<span>Prêmios em inovação educacional</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
	}
};

const eventosData = {
	ciesa: [
		{
			titulo: "Semana Acadêmica - Semana da Tecnologia",
			data: "Anualmente",
			descricao: "Evento onde todas as turmas do CIESA apresentam seus projetos integradores. Uma semana de inovação, networking e celebração do conhecimento construído ao longo do período. Apresentações, palestras e demonstrações práticas."
		},
		{
			titulo: "Projetos de Extensão",
			data: "Contínuos",
			descricao: "Projetos desenvolvidos pelos alunos em parceria com a comunidade. Oportunidades de aplicar conhecimento prático e contribuir com a sociedade. Participação voluntária com reconhecimento acadêmico."
		},
		{
			titulo: "Projetos Integradores",
			data: "Final de cada período",
			descricao: "Projetos que integram conhecimentos de múltiplas disciplinas. Os alunos trabalham em equipes para resolver problemas reais e inovadores, simulando experiências do mercado profissional."
		},
		{
			titulo: "Halloween - Festa da LATIJ",
			data: "31 de Outubro",
			descricao: "Evento tradicional organizado pela LATIJ (Liga Acadêmica de Tecnologia, Inovação e Jogo). Uma festa temática com atividades, competições e prêmios para a comunidade CIESA."
		},
		{
			titulo: "Aulas no Sábado - Conteúdos Extras",
			data: "Aos sábados - Agendado",
			descricao: "Aulas complementares aos sábados para aprofundamento em conteúdos específicos. Oportunidade de explorar tópicos avançados e tirar dúvidas em um formato mais descontraído."
		}
	],
	parceria: [
		{
			titulo: "Bemol BDXP Pocket Edition",
			data: "Realizado",
			descricao: "Evento da Bemol que apresentou tendências em tecnologia e cybersegurança. Incluiu palestra sobre segurança digital, coffee break e troca de dados com profissionais da área."
		},
		{
			titulo: "INDT - Instituto Nokia de Tecnologia",
			data: "Realizado",
			descricao: "CIESA foi convidado para participar de evento do INDT com foco em cybersegurança avançada. Além de palestras aprofundadas, contou com testes práticos em aparelhos e demonstrações de segurança em sistemas reais."
		},
		{
			titulo: "Expo Projetos - Plaza Shopping",
			data: "Anualmente",
			descricao: "Grande evento onde todas as faculdades de Manaus apresentam e entregam seus projetos acadêmicos e de extensão. Oportunidade de showcasing profissional e networking com toda a comunidade acadêmica local."
		}
	],
	indicados: [
		{
			titulo: "Ocean - Plataforma de Eventos",
			data: "Sempre indicado",
			descricao: "Plataforma que reúne diversos eventos tech e de networking. Sempre é indicada pelos coordenadores como oportunidade para os alunos participarem de eventos profissionais de qualidade."
		},
		{
			titulo: "Bootcamp - Programação Intensiva",
			data: "Turmas regulares",
			descricao: "Programa intensivo de desenvolvimento de software. Aprenda as tecnologias mais demandadas no mercado em um formato acelerado com mentoria especializada."
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
	configurarModalInformacoesUteis();
	configurarModalInfos();
	configurarModalEventos();
	configurarModalAreas();
	configurarModalOQueTeremosHoje();
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

function configurarModalInformacoesUteis() {
	const modal = document.getElementById("informacoes-uteis-modal");
	const trigger = document.getElementById("informacoes-uteis-trigger");
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".informacoes-uteis-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	if (!closeBtn || !overlay) return;

	const infoItems = modal.querySelectorAll(".info-item");
	const infoModal = document.getElementById("info-modal");
	const infoModalTitle = infoModal?.querySelector(".info-modal__title");
	const infoModalDescription = infoModal?.querySelector(".info-modal__description");

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden";
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		document.body.style.overflow = "";
	}

	trigger.addEventListener("click", abrirModal);
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Quando clicar em um dos cards de informações dentro do modal
	infoItems.forEach((item) => {
		item.addEventListener("click", () => {
			const info = item.getAttribute("data-info");
			const dados = infosUteis[info];
			if (dados) {
				// Abre o modal individual
				if (infoModal && infoModalTitle && infoModalDescription) {
					infoModalTitle.textContent = dados.titulo;
					if (info === "notas" || info === "email" || info === "artigos" || info === "camisa" || info === "conquistas" || info === "coordenadora") {
						infoModalDescription.innerHTML = dados.descricao;
					} else {
						infoModalDescription.textContent = dados.descricao;
					}
					infoModal.classList.add("modal--open");
					document.body.style.overflow = "hidden";
				}
				// Fecha o modal de galeria
				fecharModal();
			}
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
		if (info === "notas" || info === "email" || info === "artigos" || info === "camisa" || info === "conquistas" || info === "coordenadora") {
			modalDescription.innerHTML = dados.descricao;
		} else {
			modalDescription.textContent = dados.descricao;
		}
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

function configurarModalEventos() {
	const modal = document.getElementById("eventos-modal");
	const trigger = document.getElementById("eventos-trigger");
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".eventos-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	const eventosItems = modal.querySelectorAll(".eventos-item");
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

	// Adicionar eventos aos cards
	eventosItems.forEach((item) => {
		item.addEventListener("click", fecharModal);
		item.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				fecharModal();
			}
		});
	});
}

function configurarModalOQueTeremosHoje() {
	const modal = document.getElementById("o-que-teremos-hoje-modal");
	const trigger = document.getElementById("o-que-teremos-hoje-trigger");
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".o-que-teremos-hoje-modal__close");
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
	closeBtn.addEventListener("click", fecharModal);
	overlay.addEventListener("click", fecharModal);

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && modal.classList.contains("modal--open")) {
			fecharModal();
		}
	});
}

function configurarModalEventos() {
	const modal = document.getElementById("eventos-modal");
	const trigger = document.getElementById("eventos-trigger");
	const detalhesModal = document.getElementById("eventos-detalhes-modal");
	const detalhesCloseBtn = detalhesModal?.querySelector(".eventos-detalhes-modal__close");
	const detalhesOverlay = detalhesModal?.querySelector(".modal__overlay");
	const detalhesTitle = document.getElementById("eventos-detalhes-title");
	const detalhesSubtitle = document.getElementById("eventos-detalhes-subtitle");
	const detalhesList = document.getElementById("eventos-detalhes-lista");
	
	if (!modal || !trigger) return;
	const closeBtn = modal.querySelector(".eventos-modal__close");
	const overlay = modal.querySelector(".modal__overlay");
	const eventosItems = modal.querySelectorAll(".eventos-item");
	if (!closeBtn || !overlay) return;

	const detalhesMeta = {
		ciesa: {
			titulo: "🎓 Eventos do CIESA",
			subtitulo: "Eventos organizados pelo próprio CIESA para seu desenvolvimento acadêmico e profissional."
		},
		parceria: {
			titulo: "🤝 Eventos de Parcerias",
			subtitulo: "Eventos que o CIESA consegue para os alunos através de parcerias com instituições e empresas."
		},
		indicados: {
			titulo: "⭐ Eventos Indicados",
			subtitulo: "Eventos que acontecem em Manaus e são indicados para ganhar mais conhecimento, networking e experiências."
		}
	};

	function abrirModal() {
		modal.classList.add("modal--open");
		document.body.style.overflow = "hidden";
	}

	function fecharModal() {
		modal.classList.remove("modal--open");
		fecharDetalhes();
		document.body.style.overflow = "";
	}

	function fecharDetalhes() {
		if (detalhesModal) {
			detalhesModal.classList.remove("modal--open");
		}
	}

	function abrirDetalhesEventos(tipo) {
		if (!tipo || !(tipo in eventosData)) return;

		const meta = detalhesMeta[tipo] || { titulo: "Eventos", subtitulo: "" };
		detalhesTitle.textContent = meta.titulo;
		detalhesSubtitle.textContent = meta.subtitulo;

		// Renderizar eventos
		detalhesList.innerHTML = "";
		const eventos = eventosData[tipo] || [];

		if (eventos.length === 0) {
			detalhesList.innerHTML = '<div class="evento-detalhe evento-detalhe--empty">Em breve, mais eventos!</div>';
		} else {
			eventos.forEach((evento) => {
				const div = document.createElement("div");
				div.className = "evento-detalhe";
				div.innerHTML = `
					<div class="evento-detalhe__data">${evento.data}</div>
					<h3 class="evento-detalhe__titulo">${evento.titulo}</h3>
					<p class="evento-detalhe__descricao">${evento.descricao}</p>
				`;
				detalhesList.appendChild(div);
			});
		}

		if (detalhesModal) {
			detalhesModal.classList.add("modal--open");
			document.body.style.overflow = "hidden";
		}
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
	
	if (detalhesCloseBtn && detalhesOverlay) {
		detalhesCloseBtn.addEventListener("click", fecharDetalhes);
		detalhesOverlay.addEventListener("click", fecharDetalhes);
	}

	// Adicionar eventos aos cards
	eventosItems.forEach((item) => {
		item.addEventListener("click", () => {
			const tipo = item.getAttribute("data-eventos");
			abrirDetalhesEventos(tipo);
		});
		item.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				const tipo = item.getAttribute("data-eventos");
				abrirDetalhesEventos(tipo);
			}
		});
	});

	// Fechar com ESC
	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		if (detalhesModal && detalhesModal.classList.contains("modal--open")) {
			fecharDetalhes();
			return;
		}
		if (modal.classList.contains("modal--open")) {
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
