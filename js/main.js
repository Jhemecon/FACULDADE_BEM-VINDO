document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado.');

  const latijLogo = document.querySelector('.LATIJ_logo');
  const chronoLogo = document.querySelector('.Chrono_logo');
  const descricaoLatij = document.querySelector('.descricao_latij');
  const imagemLatij = document.querySelector('.imagem_colaboradores');
  const descricaoChrono = document.querySelector('.descricao_chrono');
  const imagemChrono = document.querySelector('.exemplo_chrono_imagem');

  // Helpers seguros para evitar erros se um elemento não existir
  function safeAdd(el, cls) { if (el && el.classList) el.classList.add(cls); }
  function safeRemove(el, cls) { if (el && el.classList) el.classList.remove(cls); }

  function trocarParaLatij() {
    safeAdd(latijLogo, 'ativa');
    safeRemove(latijLogo, 'inativa');
    safeAdd(chronoLogo, 'inativa');
    safeRemove(chronoLogo, 'ativa');

    safeAdd(descricaoLatij, 'conteudo_ativo');
    safeRemove(descricaoLatij, 'conteudo_inativo');
    safeAdd(imagemLatij, 'conteudo_ativo');
    safeRemove(imagemLatij, 'conteudo_inativo');

    safeAdd(descricaoChrono, 'conteudo_inativo');
    safeRemove(descricaoChrono, 'conteudo_ativo');
    safeAdd(imagemChrono, 'conteudo_inativo');
    safeRemove(imagemChrono, 'conteudo_ativo');
  }

  function trocarParaChrono() {
    safeAdd(chronoLogo, 'ativa');
    safeRemove(chronoLogo, 'inativa');
    safeAdd(latijLogo, 'inativa');
    safeRemove(latijLogo, 'ativa');

    safeAdd(descricaoChrono, 'conteudo_ativo');
    safeRemove(descricaoChrono, 'conteudo_inativo');
    safeAdd(imagemChrono, 'conteudo_ativo');
    safeRemove(imagemChrono, 'conteudo_inativo');

    safeAdd(descricaoLatij, 'conteudo_inativo');
    safeRemove(descricaoLatij, 'conteudo_ativo');
    safeAdd(imagemLatij, 'conteudo_inativo');
    safeRemove(imagemLatij, 'conteudo_ativo');
  }

  // Eventos de clique (registrar apenas se os elementos existirem)
  if (latijLogo) latijLogo.addEventListener('click', trocarParaLatij);
  if (chronoLogo) chronoLogo.addEventListener('click', trocarParaChrono);

  // Listener para o link "Quem somos" da navegação
  const linkQuemSomos = document.querySelector('nav a[href="#quem-somos"]');
  console.log('Link encontrado:', linkQuemSomos);
  if (linkQuemSomos) {
    linkQuemSomos.addEventListener('click', (e) => {
      console.log('Clique no link Quem somos');
      e.preventDefault();
      trocarParaLatij();
      // Scroll suave para o .superior_topo (onde o conteúdo está visível)
      const topo = document.querySelector('.superior_topo');
      if (topo) {
        window.scrollTo({
          top: topo.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});