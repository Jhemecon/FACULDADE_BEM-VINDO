/* ========================================
   CIESA - JavaScript Completo Refatorado
   Melhorias: WCAG AA/AAA, Performance, Acessibilidade
   Autor: David Neves (nevext)
   ======================================== */

'use strict';

/* ========================================
   SISTEMA DE UNDO POR MODAL
   ======================================== */

const modalStacks = {};

function setupModalUndo(modalId) {
	if (!modalStacks[modalId]) {
		modalStacks[modalId] = [];
	}
	
	const modal = document.getElementById(modalId);
	if (!modal) return;
	
	const undoBtn = modal.querySelector('.modal__undo');
	if (!undoBtn) return;
	
	undoBtn.addEventListener('click', () => {
		if (modalStacks[modalId].length === 0) return;
		
		const previousState = modalStacks[modalId].pop();
		if (typeof previousState === 'function') {
			previousState();
		}
	});
}

function pushModalState(modalId, stateFunction) {
	if (!modalStacks[modalId]) {
		modalStacks[modalId] = [];
	}
	modalStacks[modalId].push(stateFunction);
}

/* ========================================
   DADOS DO SISTEMA
   ======================================== */

const textos = {
	descricao_latij: "A LIGA LATIJ é uma iniciativa estudantil voltada para eventos educacionais e culturais. Aqui você encontra oportunidades para aprender com projetos, participar de atividades e construir conexões com outros alunos e professores."
};

const infosUteis = {
	biblioteca: {
		titulo: "📚 Biblioteca",
		descricao: "A biblioteca do CIESA, localizada no último andar, oferece um acervo completo de livros físicos, periódicos, teses e recursos digitais para todos os alunos. Com áreas de estudo confortáveis, é o espaço ideal para pesquisa e aprendizado. Contamos com acesso a bases de dados especializadas e plataformas de e-learning para potencializar seus estudos."
	},
	laboratorio: {
		titulo: "💻 Laboratórios",
		descricao: "Nossos laboratórios estão equipados com computadores de última geração e softwares especializados para cada área de conhecimento. Os ambientes são projetados para prática profissional, permitindo que você desenvolva projetos reais e ganhe experiência prática essencial. Com suporte técnico disponível, você tem tudo para colocar em prática seus conhecimentos teóricos.",
		video: "Media/Videos/SALVATORE_INAUGURACAO_VIDEO_1.mp4"
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
								<span class="timeline-item__period">Primeira Parte</span>
								<span class="timeline-item__badge">NPC 1</span>
							</div>
							<div class="timeline-item__content">
								<p class="timeline-item__points">0 a 10 pontos</p>
								<p class="timeline-item__desc">Primeira avaliação do semestre</p>
							</div>
						</div>

						<div class="timeline-divider">
							<div class="timeline-divider__line"></div>
							<span class="timeline-divider__text">Férias/Descanso</span>
							<div class="timeline-divider__line"></div>
						</div>

						<div class="timeline-item timeline-item--npc2">
							<div class="timeline-item__header">
								<span class="timeline-item__period">Segunda Parte</span>
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
					<h3>Conquista Destaque: Instituto de Pesquisa Eldorado</h3>
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
						<img src="Media/SVG/JANAINA_SOUZA_4K.svg" alt="Foto da coordenadora Janaina Souza" class="coordenadora-photo__img">
					</div>
					<div class="coordenadora-info">
						<h3>Janaina Souza</h3>
						<p class="coordenadora-role">Coordenadora do CIESA</p>
						<p class="coordenadora-description">
							Com 22 anos de experiência como professora universitária e formação como Mestre em Inteligência Artificial, 
							Janaina Souza é Analista de Sistemas e atua nas áreas de Programação, Lógica, Banco de Dados, 
							Desenvolvimento de Jogos, Matemática, Ciência de Dados e Design.
						</p>
						<div class="coordenadora-highlights">
							<div class="highlight-item">
								<span class="highlight-icon">🎓</span>
								<span>Mestre em Inteligência Artificial</span>
							</div>
							<div class="highlight-item">
								<span class="highlight-icon">👩‍🏫</span>
								<span>22 anos como professora universitária</span>
							</div>
							<div class="highlight-item">
								<span class="highlight-icon">💼</span>
								<span>Analista de Sistemas</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
		imagem: "Media/SVG/JANAINA_SOUZA_4K.svg"
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
			descricao: "Projetos desenvolvidos pelos alunos em parceria com a comunidade. Oportunidades de aplicar conhecimento prático e contribuir com a sociedade. Participação voluntária com reconhecimento acadêmico.",
			imagens: ["Media/SVG/EXTENSÃO_1.svg", "Media/SVG/EXTENSÃO_2.svg"]
		},
		{
			titulo: "Projetos Integradores",
			data: "Final de cada período",
			descricao: "Projetos que integram conhecimentos de múltiplas disciplinas. Os alunos trabalham em equipes para resolver problemas reais e inovadores, simulando experiências do mercado profissional."
		},
		{
			titulo: "Halloween - Festa da LATIJ",
			data: "31 de Outubro",
			descricao: "Evento tradicional organizado pela LATIJ (Liga Acadêmica de Tecnologia, Inovação e Jogo). Uma festa temática com atividades, competições e prêmios para a comunidade CIESA.",
			imagem: "Media/SVG/HALOWWEN_CIESA (1).svg"
		},
		{
			titulo: "Aulas no Sábado - Conteúdos Extras",
			data: "Aos sábados - Agendado",
			descricao: "Aulas complementares aos sábados para aprofundamento em conteúdos específicos. Oportunidade de explorar tópicos avançados e tirar dúvidas em um formato mais descontraído."
		},
		{
			titulo: "Competição de Design - Mascote CIESA",
			data: "Em breve",
			descricao: "Competição criativa onde alunos irão projetar o melhor mascote para o CIESA. Premiação para os três melhores designs: 1º lugar, 2º lugar e 3º lugar. Uma oportunidade de demonstrar criatividade e representar a instituição de forma inovadora."
		}
	],
	parceria: [
		{
			titulo: "Bemol BDXP Pocket Edition",
			data: "Realizado",
			descricao: "Evento da Bemol que apresentou tendências em tecnologia e cybersegurança. Incluiu palestra sobre segurança digital, coffee break e troca de dados com profissionais da área.",
			imagens: ["Media/SVG/BDXP_IMAGEM_1.svg", "Media/SVG/BDXP_IMAGEM_2.svg"]
		},
		{
			titulo: "INDT - Instituto Nokia de Tecnologia",
			data: "Realizado",
			descricao: "CIESA foi convidado para participar de evento do INDT com foco em cybersegurança avançada. Além de palestras aprofundadas, contou com testes práticos em aparelhos e demonstrações de segurança em sistemas reais.",
			video: "Media/Videos/INDT_VIDEO_1.mp4",
			imagens: ["Media/SVG/INDT_IMAGEM_1.svg", "Media/SVG/INDT_IMAGEM_2.svg", "Media/SVG/INDT_IMAGEM_3.svg", "Media/SVG/INDT_IMAGEM_4.svg"]
		},
		{
			titulo: "Expo Projetos - Plaza Shopping",
			data: "Anualmente",
			descricao: "Grande evento onde todas as faculdades de Manaus apresentam e entregam seus projetos acadêmicos e de extensão. Oportunidade de showcasing profissional e networking com toda a comunidade acadêmica local.",
			imagens: ["Media/SVG/ENTREGA_PLAZA.svg"]
		},
		{
			titulo: "Inauguração dos Laboratórios - Paulo Salvatore",
			data: "Realizado",
			descricao: "Evento de inauguração dos modernos laboratórios do CIESA com a presença do renomado Paulo Salvatore, especialista em desenvolvimento de sistemas, jogos e Inteligência Artificial (IA). Palestra inspiradora e tour técnico pelas novas instalações.",
			video: "Media/Videos/SALVATORE_INAUGURACAO_VIDEO_1.mp4",
			imagens: ["Media/SVG/SALVATORE_IMAGEM_1.svg"]
		},
		{
			titulo: "Visita na Receita Federal",
			data: "Realizado",
			descricao: "Visita técnica realizada à Receita Federal onde os alunos do CIESA conheceram o funcionamento dos sistemas de fiscalização e segurança. Uma oportunidade prática de aprender sobre compliance, auditoria e tecnologia aplicada ao setor público. Experiência valiosa para profissionais em desenvolvimento.",
			imagens: ["Media/SVG/RECEITA_FEDERAL_1.svg", "Media/SVG/RECEITA_FEDERAL_IMAGEM_2.svg", "Media/SVG/RECEITA_FEDERAL_IMAGEM_3.svg"]
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

const iaGithubData = {
	ia: [
		{
			titulo: "O que é Inteligência Artificial",
			descricao: "IA é a capacidade de máquinas executarem tarefas que normalmente exigem inteligência humana, como aprendizado, reconhecimento de padrões e tomada de decisão."
		},
		{
			titulo: "Cuidados no Dia a Dia",
			descricao: "Cuidado com dados pessoais compartilhados com IA, proteja informações sensíveis, questione a privacidade de plataformas de IA e tenha responsabilidade ao usar IA para tomadas de decisão importantes."
		},
		{
			titulo: "Uso Prático de IA",
			descricao: "IA está em assistentes virtuais, recomendações de vídeos, análise de dados, tradução automática, reconhecimento facial e muito mais. Ferramentas como ChatGPT, Copilot e DALL-E são exemplos práticos de IA generativa."
		},
		{
			titulo: "Curiosidades Rápidas",
			descricao: "Deep learning é inspirado no cérebro humano. Máquinas já conseguem gerar imagens, textos e código. IA não substitui humanos, mas potencializa habilidades. A ética em IA é crucial para o futuro."
		}
	],
	github: [
		{
			titulo: "O que é GitHub",
			descricao: "GitHub é a maior plataforma de hospedagem de código do mundo. Utiliza Git, um sistema de controle de versão que permite rastrear alterações, colaborar em projetos e manter histórico completo do desenvolvimento."
		},
		{
			titulo: "Importância para Tecnologia",
			descricao: "GitHub é essencial para qualquer profissional de tecnologia. Permite versionamento de código, colaboração em equipe, integração contínua, portfolio profissional e portabilidade entre projetos."
		},
		{
			titulo: "Competências Desenvolvidas",
			descricao: "Dominar Git e GitHub desenvolve habilidades em controle de versão, resolução de conflitos de merge, colaboração em equipe remota, documentação de projetos e workflows profissionais de desenvolvimento."
		},
		{
			titulo: "Carreira e Oportunidades",
			descricao: "Um bom perfil no GitHub com projetos relevantes é cartão de visita para recrutadores. Contribuições em projetos open source aumentam visibilidade profissional e criam oportunidades no mercado de trabalho."
		}
	]
};

const sobreSiteData = {
	desenvolvimento: {
		titulo: "Planejamento & Design",
		intro: "Descobra como o site foi cuidadosamente planejado e desenhado para melhor servir a comunidade CIESA",
		items: [
			{
				titulo: "📋 Objetivo do Site",
				descricao: "Oferecer maior clareza e tranquilidade para os novos alunos, criando um espaço informativo que apresente tudo que o CIESA pode proporcionar de forma acessível e bem organizada."
			},
			{
				titulo: "👥 Público-Alvo",
				descricao: "Desenvolvido especificamente para estudantes ingressantes que estão descobrindo o CIESA. O site funciona como um guia essencial nas primeiras semanas de adaptação à instituição."
			},
			{
				titulo: "🔄 Finalidade e Escopo",
				descricao: "Planejado para ser um evento anual com novos participantes, contando com uma rotação de apresentadores. O conteúdo é periódico e dinâmico, permitindo atualizações constantes com novas informações e oportunidades."
			},
			{
				titulo: "📚 Conteúdo Estratégico",
				descricao: "Informações completas sobre tudo que o CIESA pode proporcionar: laboratórios, biblioteca, projetos de extensão, eventos, áreas de atuação, coordenadores e muito mais. Tudo organizado em modais interativos para fácil navegação."
			},
			{
				titulo: "🗺️ Navegação Simples e Intuitiva",
				descricao: "Pensada de forma simples e estática para facilitar a explicação ao usuário. Sem elementos complexos que possam confundir, mantendo o foco na clareza e acessibilidade da informação."
			},
			{
				titulo: "🎨 Paleta de Cores Institucional",
				descricao: "Cores inspiradas na identidade visual do CIESA, buscando ao mesmo tempo originalidade. Cada tonalidade foi escolhida para transmitir confiança, inovação e profissionalismo."
			},
			{
				titulo: "✨ Layout e Identidade Visual",
				descricao: "Desenvolvidos para transmitir identidade própria e coerência visual. Tipografia clara, espaçamento harmonioso e elementos visuais consistentes criam uma experiência unificada em todas as páginas."
			},
			{
				titulo: "♿ Acessibilidade como Prioridade",
				descricao: "Considerada como aspecto essencial para garantir inclusão e boa experiência de uso. Suporte a teclado, leitores de tela, contraste adequado e semântica HTML correta garantem que todos possam aproveitar plenamente o site."
			}
		]
	},
	inspiracoes: {
		titulo: "Inspirações e Referências",
		intro: "Uma jornada de exploração, iteração e construção de uma identidade visual própria",
		items: [
			{
				titulo: "🔄 Processo Iterativo de Desenvolvimento",
				descricao: "O desenvolvimento precisou ser reiniciado algumas vezes até que o criador conseguisse visualizar uma proposta que realmente fizesse sentido. Cada iteração trouxe insights valiosos sobre o que funcionava e o que poderia ser melhorado, refinando gradualmente a visão do projeto."
			},
			{
				titulo: "💡 Liquid Pink - Referência Principal",
				descricao: "Uma das principais referências foi o site <a href='https://www.liquid-pink.com/' target='_blank' rel='noopener noreferrer'>Liquid Pink</a>, que apresentou ideias interessantes e serviu como base para reflexão. Este projeto foi fundamental para compreender estruturas de navegação, padrões de design e abordagens criativas que influenciaram decisões estéticas e funcionais."
			},
			{
				titulo: "🎯 Buscando Inspiração como Ponto de Partida",
				descricao: "É importante destacar que buscar inspiração em outros projetos é um excelente passo inicial quando ainda não há um norte definido. Esta prática permitiu entender tendências, melhores práticas e soluções criativas já testadas no mercado."
			},
			{
				titulo: "🛠️ Construindo Identidade Própria",
				descricao: "A partir dessas referências, foi possível construir uma estrutura própria e original ao longo do desenvolvimento. Não se trata apenas de copiar, mas de absorver conceitos, adaptá-los ao contexto do CIESA e desenvolver uma solução que reflete a essência única desta instituição."
			},
			{
				titulo: "✨ Do Conceito à Realidade",
				descricao: "O caminho de inspiração e referências transformou-se em decisões de design concretas: escolha de cores institucionais, tipografia profissional, estrutura de navegação intuitiva e uma identidade visual que fala para a comunidade CIESA de forma autêntica e relevante."
			}
		]
	},
	tecnologias: {
		titulo: "Tecnologias Utilizadas",
		intro: "Um stack fundamentado em HTML, CSS e JavaScript, com suporte estratégico de IA",
		items: [
			{
				titulo: "🏗️ HTML - Fundação Estrutural",
				descricao: "Serviu como base de toda a construção do site. Semântica HTML5 com elementos semânticos (section, nav, article, main) garantem uma estrutura clara do documento e melhor acessibilidade. ARIA labels e roles implementados para inclusão completa, permitindo que todos os usuários, independente de suas capacidades, naveguem e compreendam o conteúdo com facilidade."
			},
			{
				titulo: "🎨 CSS - Identidade Visual",
				descricao: "Responsável pela estilização e definição da identidade visual. Flexbox e CSS Grid para layouts responsivos, CSS custom properties para consistência de temas, animações suaves e media queries para perfeita adaptação em diferentes dispositivos."
			},
			{
				titulo: "⚡ JavaScript - Interatividade e Dinamismo",
				descricao: "Utilizado para adicionar interatividade e dinamismo. JavaScript vanilla (sem frameworks) para máxima performance e controle total. Manipulação do DOM, event listeners sofisticados, gerenciamento de estado elegante e modais interativos totalmente funcionais."
			},
			{
				titulo: "💻 Desenvolvimento Manual e Estruturado",
				descricao: "O código foi escrito manualmente até que a estrutura principal estivesse bem definida. Este processo garantiu compreensão profunda de cada componente e qualidade de código superior. Uma base sólida para futuras expansões."
			},
			{
				titulo: "🤖 Inteligência Artificial como Apoio Estratégico",
				descricao: "A partir da estrutura definida, para tarefas simples e repetitivas, foi utilizada a Inteligência Artificial integrada ao VSCode. Esta ferramenta acelerou significativamente a execução, mantendo total controle criativo e qualidade do projeto."
			},
			{
				titulo: "⏱️ Impacto do Uso de IA na Produtividade",
				descricao: "A diferença entre usar e não usar IA é significativa: o tempo de execução das tarefas reduz consideravelmente. Contudo, o desenvolvimento de cada funcionalidade começava com compreensão manual antes de qualquer automação."
			},
			{
				titulo: "⚠️ Recomendação: Use IA com Sabedoria",
				descricao: "Nunca dependa totalmente da IA. Ela deve ser usada como apoio inteligente, mas não como única solução. Um exemplo real: quando os servidores da IA ficaram indisponíveis, várias atividades precisaram ser finalizadas manualmente até normalização. Sempre tenha um plano B."
			},
			{
				titulo: "🎯 Lição Aprendida - Independência Técnica",
				descricao: "Essa experiência reforcou uma lição valiosa: um desenvolvedor deve ser capaz de trabalhar com ou sem ferramentas de IA. A combinação de habilidades manuais sólidas com suporte de IA cria a melhor abordagem possível para desenvolvimento sustentável."
			}
		]
	},
	equipe: {
		titulo: "A Equipe por Trás do Projeto",
		intro: "Um projeto colaborativo onde cada pessoa contribuiu com suas habilidades e perspectivas únicas",
		items: [
			{
				titulo: "🔧 David Neves (nevext) - Desenvolvimento",
				descricao: "Responsável pela criação completa do site, implementação em HTML, CSS e JavaScript, além de portar o projeto para o GitHub. Trabalhou em todas as camadas do desenvolvimento, desde o planejamento inicial até a finalização e publicação do código."
			},
			{
				titulo: "👨‍💼 Jhemerson Conde - Liga LATIJ",
				descricao: "Realizou testes de usabilidade utilizando ferramentas de avaliação de design e experiência do usuário. Seus insights garantiram que a interface fosse intuitiva, acessível e atendesse às reais necessidades dos usuários finais."
			},
			{
				titulo: "💡 Julio - Liga LATIJ",
				descricao: "Aplicou feedbacks construtivos e contribuiu com ideias criativas para aprimorar o projeto. Participou ativamente na validação de funcionalidades e na identificação de oportunidades de melhoria."
			},
			{
				titulo: "⚡ Luan Nery - Liga Chronokaio",
				descricao: "Participou do desenvolvimento inicial, sugerindo ideias de aplicação e indicando o uso de React como alternativa tecnológica. Suas perspectivas técnicas enriqueceram as discussões sobre arquitetura e tecnologia do projeto."
			},
			{
				titulo: "👨‍🏫 Professor John - Orientação e Feedback",
				descricao: "Contribuiu com feedbacks valiosos durante todo o processo de desenvolvimento. Suas observações ajudaram a refinar decisões de design e funcionalidades, garantindo alinhamento com as melhores práticas educacionais."
			},
			{
				titulo: "📊 Professor Francisco - Análise Crítica",
				descricao: "Realizou análises críticas profundas, oferecendo uma visão aprofundada sobre o projeto. Suas contribuições técnicas e estratégicas foram fundamentais para validar a qualidade e viabilidade da solução implementada."
			}
		]
	}
};

/* ========================================
   FUNÇÕES AUXILIARES
   ======================================== */

function throttle(func, delay) {
	let ticking = false;
	return function(...args) {
		if (!ticking) {
			func.apply(this, args);
			ticking = true;
			setTimeout(() => ticking = false, delay);
		}
	};
}

function trapFocus(element) {
	const focusableElements = element.querySelectorAll(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
	);
	
	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	function handleTabKey(e) {
		if (e.key !== 'Tab') return;

		if (e.shiftKey && document.activeElement === firstElement) {
			e.preventDefault();
			lastElement.focus();
		} else if (!e.shiftKey && document.activeElement === lastElement) {
			e.preventDefault();
			firstElement.focus();
		}
	}

	element.addEventListener('keydown', handleTabKey);
	
	if (firstElement) {
		setTimeout(() => firstElement.focus(), 100);
	}

	return () => element.removeEventListener('keydown', handleTabKey);
}

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

/* ========================================
   NAVEGAÇÃO
   ======================================== */

function configurarNavegacao() {
	const links = document.querySelectorAll('.nav__link');
	let ticking = false;

	function atualizarNavAtivo() {
		const secoes = document.querySelectorAll('section[id]');
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '76');

		let secaoAtiva = null;
		let maxVisibility = 0;

		for (const secao of secoes) {
			const rect = secao.getBoundingClientRect();
			const secaoTop = rect.top + scrollY;
			const secaoBottom = rect.bottom + scrollY;

			const visibleTop = Math.max(secaoTop, scrollY + headerHeight);
			const visibleBottom = Math.min(secaoBottom, scrollY + windowHeight);
			const visibleHeight = Math.max(0, visibleBottom - visibleTop);
			const visibilityRatio = visibleHeight / rect.height;

			if (visibilityRatio > maxVisibility && visibilityRatio > 0.3) {
				maxVisibility = visibilityRatio;
				secaoAtiva = secao;
			}
		}

		links.forEach(link => {
			link.classList.remove('nav__link--active');
			link.removeAttribute('aria-current');
		});

		if (secaoAtiva) {
			const linkAtivo = document.querySelector(`.nav__link[href="#${secaoAtiva.id}"]`);
			if (linkAtivo) {
				linkAtivo.classList.add('nav__link--active');
				linkAtivo.setAttribute('aria-current', 'page');
			}
		}
	}

	document.querySelector('.nav')?.addEventListener('click', (event) => {
		const link = event.target.closest('.nav__link');
		if (!link) return;

		const href = link.getAttribute('href') || '';
		if (!href.startsWith('#')) return;

		const alvo = document.querySelector(href);
		if (!alvo) return;

		event.preventDefault();
		alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
		history.pushState(null, '', href);

		if (window.matchMedia('(max-width: 920px)').matches) {
			document.body.classList.remove('nav-open');
			document.body.style.overflow = '';
			const toggle = document.getElementById('nav-toggle');
			toggle?.setAttribute('aria-expanded', 'false');
		}
	});

	const atualizarNavAtivoThrottled = throttle(atualizarNavAtivo, 100);
	window.addEventListener('scroll', atualizarNavAtivoThrottled, { passive: true });
	window.addEventListener('resize', atualizarNavAtivo, { passive: true });

	atualizarNavAtivo();
}

/* ========================================
   MENU MOBILE
   ======================================== */

function configurarMenuMobile() {
	const toggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('primary-nav');
	const scrim = document.getElementById('nav-scrim');
	
	if (!toggle || !nav || !scrim) return;

	const mql = window.matchMedia('(max-width: 920px)');
	let aberto = false;

	function aplicarEstado(novoEstado) {
		aberto = novoEstado;
		document.body.classList.toggle('nav-open', aberto);
		toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
		toggle.setAttribute('aria-label', aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
		
		if (mql.matches) {
			document.body.style.overflow = aberto ? 'hidden' : '';
		}

		if (aberto && mql.matches) {
			const primeiroLink = nav.querySelector('.nav__link');
			if (primeiroLink) {
				setTimeout(() => primeiroLink.focus(), 100);
			}
		}
	}

	function fechar() {
		aplicarEstado(false);
	}

	function alternar() {
		if (!mql.matches) return;
		aplicarEstado(!aberto);
	}

	toggle.addEventListener('click', (e) => {
		e.stopPropagation();
		alternar();
	});

	scrim.addEventListener('click', fechar);

	document.addEventListener('click', (event) => {
		if (!aberto || !mql.matches) return;
		const target = event.target;
		if (target.closest('#primary-nav') || 
		    target.closest('.brand') || 
		    target.closest('#nav-toggle')) return;
		fechar();
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && aberto && mql.matches) {
			fechar();
			toggle.focus();
		}
	});

	nav.addEventListener('keydown', (event) => {
		if (!aberto || !mql.matches || event.key !== 'Tab') return;

		const focusableElements = nav.querySelectorAll('.nav__link');
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		if (event.shiftKey && document.activeElement === firstElement) {
			event.preventDefault();
			lastElement.focus();
		} else if (!event.shiftKey && document.activeElement === lastElement) {
			event.preventDefault();
			firstElement.focus();
		}
	});

	function syncMedia() {
		if (!mql.matches) {
			fechar();
		}
	}

	if (typeof mql.addEventListener === 'function') {
		mql.addEventListener('change', syncMedia);
	} else {
		mql.addListener(syncMedia);
	}

	syncMedia();
}

/* ========================================
   EFEITO DE CARACTERES COLORIDOS
   ======================================== */

function configurarEfeitoCaracteres() {
	const aboutText = document.getElementById('about-description');
	if (!aboutText) return;

	const texto = aboutText.textContent;
	const caracteres = texto.split('');

	const fragment = document.createDocumentFragment();
	
	caracteres.forEach((char, index) => {
		const span = document.createElement('span');
		span.className = 'char';
		span.textContent = char;
		span.style.setProperty('--hue', (index * 15) % 360);
		fragment.appendChild(span);
	});

	aboutText.innerHTML = '';
	aboutText.appendChild(fragment);
}

/* ========================================
   LAZY LOADING
   ======================================== */

function setupLazyLoading() {
	if (!('IntersectionObserver' in window)) {
		document.querySelectorAll('img[data-src], video[data-src]').forEach(element => {
			if (element.dataset.src) {
				element.src = element.dataset.src;
				element.removeAttribute('data-src');
			}
		});
		return;
	}

	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const element = entry.target;
				
				if (element.tagName === 'IMG' && element.dataset.src) {
					element.src = element.dataset.src;
					element.removeAttribute('data-src');
				} else if (element.tagName === 'VIDEO' && element.dataset.src) {
					element.src = element.dataset.src;
					element.removeAttribute('data-src');
					element.load();
				}
				
				observer.unobserve(element);
			}
		});
	}, {
		rootMargin: '50px'
	});

	document.querySelectorAll('img[data-src], video[data-src]').forEach(element => {
		imageObserver.observe(element);
	});
}

/* ========================================
   MODAL MANAGER CLASS
   ======================================== */

class ModalManager {
	constructor(modalId) {
		this.modal = document.getElementById(modalId);
		this.overlay = this.modal?.querySelector('.modal__overlay');
		this.closeBtn = this.modal?.querySelector('.modal__close');
		this.removeTrapFocus = null;
		this.previouslyFocused = null;
		
		if (this.modal) {
			this.init();
		}
	}

	init() {
		this.overlay?.addEventListener('click', () => this.fechar());
		this.closeBtn?.addEventListener('click', () => this.fechar());
		
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && this.modal.classList.contains('modal--open')) {
				this.fechar();
			}
		});
	}

	abrir() {
		if (!this.modal) return;
		
		this.previouslyFocused = document.activeElement;
		
		this.modal.classList.add('modal--open');
		this.modal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
		
		this.removeTrapFocus = trapFocus(this.modal);
	}

	fechar() {
		if (!this.modal) return;
		
		this.modal.classList.remove('modal--open');
		this.modal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
		
		if (this.removeTrapFocus) {
			this.removeTrapFocus();
			this.removeTrapFocus = null;
		}
		
		if (this.previouslyFocused) {
			this.previouslyFocused.focus();
		}
	}
}

/* ========================================
   FUNÇÕES DE PREENCHIMENTO DE MÍDIAS
   ======================================== */

function preencherMidiasModais() {
	const latijObjetivos = document.querySelector("#latij-modal [data-image='objetivos']");
	const latijFeitos = document.querySelector("#latij-modal [data-image='feitos']");
	
	if (latijObjetivos && latijObjetivos.children.length === 0) {
		const video = document.createElement('video');
		video.src = 'Media/Videos/LATIJ_OBJETIVOS.mp4';
		video.loop = true;
		video.autoplay = true;
		video.muted = true;
		video.playsInline = true;
		video.setAttribute('playsinline', '');
		video.setAttribute('webkit-playsinline', '');
		video.removeAttribute('controls');
		video.style.width = '100%';
		video.style.height = 'auto';
		video.style.maxHeight = '150px';
		video.style.objectFit = 'cover';
		video.style.borderRadius = 'var(--radius-md)';
		video.style.display = 'block';
		latijObjetivos.appendChild(video);
		video.play().catch(() => {});
	}
	
	if (latijFeitos && latijFeitos.children.length === 0) {
		const img = document.createElement('img');
		img.src = 'Media/SVG/HALOWWEN_CIESA (1).svg';
		img.style.width = '100%';
		img.style.height = 'auto';
		img.style.maxHeight = '1500px';
		img.style.objectFit = 'contain';
		img.style.borderRadius = 'var(--radius-md)';
		img.style.display = 'block';
		img.alt = 'Halloween CIESA';
		latijFeitos.appendChild(img);
	}
}

function preencherMidiasChrono() {
	const chronoObjetivos = document.querySelector("#chrono-modal [data-image='chrono-objetivos']");
	const chronoFeitos = document.querySelector("#chrono-modal [data-image='chrono-feitos']");
	
	if (chronoObjetivos && chronoObjetivos.children.length === 0) {
		const img = document.createElement('img');
		img.src = 'Media/PNG/CHRONO_QUEMSOMOS.jpeg';
		img.style.width = '100%';
		img.style.height = 'auto';
		img.style.maxHeight = '1500px';
		img.style.objectFit = 'contain';
		img.style.borderRadius = 'var(--radius-md)';
		img.style.display = 'block';
		img.alt = 'Objetivos CHRONO';
		chronoObjetivos.appendChild(img);
	}
	
	if (chronoFeitos && chronoFeitos.children.length === 0) {
		const img = document.createElement('img');
		img.src = 'Media/PNG/CHRONO_OBJETIVOS.jpeg';
		img.style.width = '100%';
		img.style.height = 'auto';
		img.style.maxHeight = '1500px';
		img.style.objectFit = 'contain';
		img.style.borderRadius = 'var(--radius-md)';
		img.style.display = 'block';
		img.alt = 'Feitos CHRONO';
		chronoFeitos.appendChild(img);
	}
}

function inserirMidiaNoModal(container, tipo, src) {
	if (!container || !tipo || !src) return null;
	
	const wrapper = document.createElement('div');
	wrapper.style.display = 'flex';
	wrapper.style.gap = '24px';
	wrapper.style.alignItems = 'flex-start';
	wrapper.style.marginTop = '20px';
	wrapper.style.flexWrap = 'wrap';
	
	const midiaContainer = document.createElement('div');
	midiaContainer.style.flex = '1';
	midiaContainer.style.minWidth = '250px';
	midiaContainer.style.maxWidth = '400px';
	
	if (tipo === 'video') {
		const video = document.createElement('video');
		video.src = src;
		video.loop = true;
		video.autoplay = true;
		video.muted = true;
		video.playsInline = true;
		video.setAttribute('playsinline', '');
		video.setAttribute('webkit-playsinline', '');
		video.removeAttribute('controls');
		video.style.width = '100%';
		video.style.height = 'auto';
		video.style.borderRadius = 'var(--radius-md)';
		video.style.display = 'block';
		video.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
		video.play().catch(() => {});
		midiaContainer.appendChild(video);
	} else if (tipo === 'imagem') {
		const img = document.createElement('img');
		img.src = src;
		img.style.width = '100%';
		img.style.height = 'auto';
		img.style.borderRadius = 'var(--radius-md)';
		img.style.display = 'block';
		img.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
		img.alt = 'Mídia profissional';
		midiaContainer.appendChild(img);
	}
	
	wrapper.appendChild(midiaContainer);
	return wrapper;
}

/* ========================================
   RASTREAMENTO DE CLIQUES NAS LIGAS
   ======================================== */

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

/* ========================================
   CONFIGURAÇÕES DE MODAIS
   ======================================== */

function configurarModalLATIJ() {
	const modal = document.getElementById("latij-modal");
	const logo = document.querySelector(".liga-card--latij");
	if (!modal || !logo) return;
	
	const modalManager = new ModalManager("latij-modal");
	
	logo.addEventListener("click", () => {
		ligasClicadas.latij = true;
		verificarVideoCard();
		preencherMidiasModais();
		modalManager.abrir();
	});
	
	logo.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			ligasClicadas.latij = true;
			verificarVideoCard();
			preencherMidiasModais();
			modalManager.abrir();
		}
	});
}

function configurarModalChrono() {
	const modal = document.getElementById("chrono-modal");
	const logo = document.querySelector(".liga-card--chrono");
	if (!modal || !logo) return;
	
	const modalManager = new ModalManager("chrono-modal");
	
	logo.addEventListener("click", () => {
		ligasClicadas.chrono = true;
		verificarVideoCard();
		preencherMidiasChrono();
		modalManager.abrir();
	});
	
	logo.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			ligasClicadas.chrono = true;
			verificarVideoCard();
			preencherMidiasChrono();
			modalManager.abrir();
		}
	});
}

function configurarModalCIESA() {
	const modal = document.getElementById("ciesa-modal");
	const imageTrigger = document.getElementById("ciesa-image-trigger");
	const modalImage = document.getElementById("ciesa-modal-image");
	if (!modal || !imageTrigger || !modalImage) return;
	
	const modalManager = new ModalManager("ciesa-modal");
	
	const imagens = ["Media/SVG/CIESA_PREDIO.svg"];
	let currentImageIndex = 0;
	let autoChangeInterval = null;

	function trocarImagem(novoIndice) {
		if (novoIndice < 0 || novoIndice >= imagens.length) return;
		
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
		}, 10000);
	}

	function reiniciarAutoChange() {
		clearInterval(autoChangeInterval);
		iniciarAutoChange();
	}

	imageTrigger.addEventListener("click", () => {
		modalManager.abrir();
		iniciarAutoChange();
	});
	
	imageTrigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			modalManager.abrir();
			iniciarAutoChange();
		}
	});

	const originalFechar = modalManager.fechar.bind(modalManager);
	modalManager.fechar = function() {
		clearInterval(autoChangeInterval);
		originalFechar();
	};
}

function configurarModalInformacoesUteis() {
	const modal = document.getElementById("informacoes-uteis-modal");
	const trigger = document.getElementById("informacoes-uteis-trigger");
	if (!modal || !trigger) return;
	
	const modalManager = new ModalManager("informacoes-uteis-modal");
	
	const infoItems = modal.querySelectorAll(".info-item");
	const infoModal = document.getElementById("info-modal");
	const infoModalTitle = infoModal?.querySelector(".info-modal__title");
	const infoModalDescription = infoModal?.querySelector(".info-modal__description");

	function abrirModal() {
		modalManager.abrir();
		pushModalState("informacoes-uteis-modal", () => {
			modalManager.fechar();
		});
	}

	trigger.addEventListener("click", abrirModal);
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			abrirModal();
		}
	});

	infoItems.forEach((item) => {
		item.addEventListener("click", () => {
			const info = item.getAttribute("data-info");
			const dados = infosUteis[info];
			if (dados) {
				pushModalState("info-modal", () => {
					const infoModalManager = new ModalManager("info-modal");
					infoModalManager.fechar();
					modalManager.abrir();
				});
				
				if (infoModal && infoModalTitle && infoModalDescription) {
					infoModalTitle.textContent = dados.titulo;
					
					infoModalDescription.innerHTML = '';
					if (info === "notas" || info === "email" || info === "artigos" || 
					    info === "camisa" || info === "conquistas" || info === "coordenadora") {
						infoModalDescription.innerHTML = dados.descricao;
					} else {
						infoModalDescription.textContent = dados.descricao;
					}
					
					if (dados.video) {
						const videoWrapper = inserirMidiaNoModal(infoModalDescription, 'video', dados.video);
						if (videoWrapper) {
							infoModalDescription.appendChild(videoWrapper);
						}
					}
					
					if (dados.imagem) {
						const imagemWrapper = inserirMidiaNoModal(infoModalDescription, 'imagem', dados.imagem);
						if (imagemWrapper) {
							infoModalDescription.appendChild(imagemWrapper);
						}
					}
					
					const infoModalManager = new ModalManager("info-modal");
					infoModalManager.abrir();
				}
				modalManager.fechar();
			}
		});
	});
}

function configurarModalInfos() {
	const modal = document.getElementById("info-modal");
	if (!modal) return;
	
	new ModalManager("info-modal");
}

function configurarModalOQueTeremosHoje() {
	const modal = document.getElementById("o-que-teremos-hoje-modal");
	const trigger = document.getElementById("o-que-teremos-hoje-trigger");
	if (!modal || !trigger) return;
	
	const modalManager = new ModalManager("o-que-teremos-hoje-modal");
	
	trigger.addEventListener("click", () => modalManager.abrir());
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			modalManager.abrir();
		}
	});
}

function configurarModalEventos() {
	const modal = document.getElementById("eventos-modal");
	const trigger = document.getElementById("eventos-trigger");
	const detalhesModal = document.getElementById("eventos-detalhes-modal");
	const detalhesTitle = document.getElementById("eventos-detalhes-title");
	const detalhesSubtitle = document.getElementById("eventos-detalhes-subtitle");
	const detalhesList = document.getElementById("eventos-detalhes-lista");
	
	if (!modal || !trigger) return;
	
	const modalManager = new ModalManager("eventos-modal");
	const detalhesModalManager = new ModalManager("eventos-detalhes-modal");
	
	const eventosItems = modal.querySelectorAll(".eventos-item");
	
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
		modalManager.abrir();
		pushModalState("eventos-modal", () => {
			modalManager.fechar();
		});
	}

	function abrirDetalhesEventos(tipo) {
		if (!tipo || !(tipo in eventosData)) return;

		const meta = detalhesMeta[tipo] || { titulo: "Eventos", subtitulo: "" };
		detalhesTitle.textContent = meta.titulo;
		detalhesSubtitle.textContent = meta.subtitulo;

		pushModalState("eventos-detalhes-modal", () => {
			detalhesModalManager.fechar();
			modalManager.abrir();
		});

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
				
				if (evento.video) {
					const videoWrapper = document.createElement('div');
					videoWrapper.style.marginTop = '24px';
					videoWrapper.style.marginBottom = '24px';
					
					const video = document.createElement('video');
					video.src = evento.video;
					video.style.width = '100%';
					video.style.height = 'auto';
					video.style.borderRadius = 'var(--radius-md)';
					video.style.display = 'block';
					video.style.backgroundColor = '#000';
					video.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
					video.loop = true;
					video.autoplay = true;
					video.muted = true;
					video.playsInline = true;
					
					videoWrapper.appendChild(video);
					div.appendChild(videoWrapper);
				}
				
				if (evento.imagens && Array.isArray(evento.imagens)) {
					const imagensContainer = document.createElement('div');
					imagensContainer.style.display = 'grid';
					imagensContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
					imagensContainer.style.gap = '20px';
					imagensContainer.style.marginTop = evento.video ? '24px' : '16px';
					
					evento.imagens.forEach((imagemSrc) => {
						const imagemWrapper = document.createElement('div');
						imagemWrapper.style.overflow = 'hidden';
						imagemWrapper.style.borderRadius = 'var(--radius-md)';
						imagemWrapper.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
						imagemWrapper.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
						imagemWrapper.style.cursor = 'pointer';
						
						const img = document.createElement('img');
						img.src = imagemSrc;
						img.style.width = '100%';
						img.style.height = '240px';
						img.style.objectFit = 'cover';
						img.style.display = 'block';
						img.alt = 'Imagem do evento';
						
						imagemWrapper.appendChild(img);
						
						imagemWrapper.addEventListener('mouseenter', () => {
							imagemWrapper.style.transform = 'scale(1.05)';
							imagemWrapper.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
						});
						
						imagemWrapper.addEventListener('mouseleave', () => {
							imagemWrapper.style.transform = 'scale(1)';
							imagemWrapper.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
						});
						
						imagensContainer.appendChild(imagemWrapper);
					});
					
					div.appendChild(imagensContainer);
				} else if (evento.imagem) {
					const imagemWrapper = document.createElement('div');
					imagemWrapper.style.marginTop = '16px';
					imagemWrapper.style.maxWidth = '300px';
					
					const img = document.createElement('img');
					img.src = evento.imagem;
					img.style.width = '100%';
					img.style.height = 'auto';
					img.style.borderRadius = 'var(--radius-md)';
					img.style.display = 'block';
					img.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
					img.alt = 'Imagem do evento';
					
					imagemWrapper.appendChild(img);
					div.appendChild(imagemWrapper);
				}
				
				detalhesList.appendChild(div);
			});
		}

		detalhesModalManager.abrir();
	}

	trigger.addEventListener("click", abrirModal);
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			abrirModal();
		}
	});

	eventosItems.forEach((item) => {
		item.addEventListener("click", () => {
			const tipo = item.getAttribute("data-eventos");
			abrirDetalhesEventos(tipo);
		});
		item.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				const tipo = item.getAttribute("data-eventos");
				abrirDetalhesEventos(tipo);
			}
		});
	});
}

function configurarModalAreas() {
	const modal = document.getElementById("areas-modal");
	const trigger = document.getElementById("areas-trigger");
	if (!modal || !trigger) return;
	
	const modalManager = new ModalManager("areas-modal");
	
	trigger.addEventListener("click", () => modalManager.abrir());
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			modalManager.abrir();
		}
	});
}

function configurarModalIAGithub() {
	const modal = document.getElementById("ia-github-modal");
	const trigger = document.getElementById("ia-github-trigger");
	const detalhesModal = document.getElementById("ia-github-detalhes-modal");
	const detalhesTitle = document.getElementById("ia-github-detalhes-title");
	const detalhesSubtitle = document.getElementById("ia-github-detalhes-subtitle");
	const detalhesList = document.getElementById("ia-github-detalhes-lista");
	
	if (!modal || !trigger) return;
	
	const modalManager = new ModalManager("ia-github-modal");
	const detalhesModalManager = new ModalManager("ia-github-detalhes-modal");
	
	const iaGithubItems = modal.querySelectorAll(".ia-github-item");
	
	const detalhesMeta = {
		ia: {
			titulo: "🤖 Inteligência Artificial",
			subtitulo: "Introdução básica, cuidados no dia a dia e curiosidades sobre IA"
		},
		github: {
			titulo: "🐙 GitHub",
			subtitulo: "A importância do GitHub para profissionais de tecnologia"
		}
	};

	function abrirModal() {
		modalManager.abrir();
		pushModalState("ia-github-modal", () => {
			modalManager.fechar();
		});
	}

	function abrirDetalhes(tipo) {
		if (!tipo || !(tipo in iaGithubData)) return;

		const meta = detalhesMeta[tipo] || { titulo: "", subtitulo: "" };
		detalhesTitle.textContent = meta.titulo;
		detalhesSubtitle.textContent = meta.subtitulo;

		pushModalState("ia-github-detalhes-modal", () => {
			detalhesModalManager.fechar();
			modalManager.abrir();
		});

		detalhesList.innerHTML = "";
		const items = iaGithubData[tipo] || [];

		items.forEach((item) => {
			const div = document.createElement("div");
			div.className = "ia-github-detalhe";
			div.innerHTML = `
				<h3 class="ia-github-detalhe__titulo">${item.titulo}</h3>
				<p class="ia-github-detalhe__descricao">${item.descricao}</p>
			`;
			detalhesList.appendChild(div);
		});

		detalhesModalManager.abrir();
	}

	trigger.addEventListener("click", abrirModal);
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			abrirModal();
		}
	});

	iaGithubItems.forEach((item) => {
		item.addEventListener("click", () => {
			const tipo = item.getAttribute("data-tipo");
			abrirDetalhes(tipo);
		});
		item.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				const tipo = item.getAttribute("data-tipo");
				abrirDetalhes(tipo);
			}
		});
	});
}

function configurarModalSobreSite() {
	const trigger = document.getElementById("criacao-site-trigger");
	const modal = document.getElementById("sobre-site-modal");
	const detalhesModal = document.getElementById("sobre-site-detalhes-modal");
	
	if (!trigger || !modal || !detalhesModal) return;

	const modalManager = new ModalManager("sobre-site-modal");
	const detalhesModalManager = new ModalManager("sobre-site-detalhes-modal");
	
	const items = modal.querySelectorAll(".sobre-site-item");
	const detalhesTitle = detalhesModal.querySelector("#sobre-site-detalhes-title");
	const detalhesIntro = detalhesModal.querySelector("#sobre-site-detalhes-intro");
	const detalhesList = detalhesModal.querySelector("#sobre-site-detalhes-lista");

	function abrirModal() {
		modalManager.abrir();
		pushModalState("sobre-site-modal", () => {
			modalManager.fechar();
		});
	}

	function abrirDetalhes(tipo) {
		if (!tipo || !(tipo in sobreSiteData)) return;

		const data = sobreSiteData[tipo];
		detalhesTitle.textContent = data.titulo;
		detalhesIntro.textContent = data.intro;

		pushModalState("sobre-site-detalhes-modal", () => {
			detalhesModalManager.fechar();
			modalManager.abrir();
		});

		detalhesList.innerHTML = "";
		const itemsList = data.items || [];

		itemsList.forEach((item) => {
			const div = document.createElement("div");
			div.className = "sobre-site-detalhe";
			div.innerHTML = `
				<h3 class="sobre-site-detalhe__titulo">${item.titulo}</h3>
				<p class="sobre-site-detalhe__descricao">${item.descricao}</p>
			`;
			detalhesList.appendChild(div);
		});

		detalhesModalManager.abrir();
	}

	trigger.addEventListener("click", abrirModal);
	trigger.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			abrirModal();
		}
	});

	items.forEach((item) => {
		item.addEventListener("click", () => {
			const tipo = item.getAttribute("data-tipo");
			abrirDetalhes(tipo);
		});

		item.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				const tipo = item.getAttribute("data-tipo");
				abrirDetalhes(tipo);
			}
		});
	});
}

/* ========================================
   INICIALIZAÇÃO PRINCIPAL
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
	const modalIds = [
		'info-modal',
		'o-que-teremos-hoje-modal',
		'informacoes-uteis-modal',
		'eventos-modal',
		'eventos-detalhes-modal',
		'ia-github-modal',
		'ia-github-detalhes-modal',
		'sobre-site-modal',
		'sobre-site-detalhes-modal',
		'areas-modal',
		'ciesa-modal',
		'latij-modal',
		'chrono-modal'
	];
	
	modalIds.forEach(modalId => setupModalUndo(modalId));

	aplicarTextos();
	configurarNavegacao();
	configurarMenuMobile();
	configurarEfeitoCaracteres();
	setupLazyLoading();
	
	configurarModalLATIJ();
	configurarModalChrono();
	configurarModalCIESA();
	configurarModalInformacoesUteis();
	configurarModalInfos();
	configurarModalEventos();
	configurarModalAreas();
	configurarModalOQueTeremosHoje();
	configurarModalIAGithub();
	configurarModalSobreSite();

	const loadAnnouncement = document.createElement('div');
	loadAnnouncement.setAttribute('role', 'status');
	loadAnnouncement.setAttribute('aria-live', 'polite');
	loadAnnouncement.className = 'visually-hidden';
	loadAnnouncement.textContent = 'Página carregada com sucesso';
	document.body.appendChild(loadAnnouncement);
	
	setTimeout(() => loadAnnouncement.remove(), 1000);
});
