// Script principal para o website Control Doc

$(document).ready(function() {
  // Menu mobile (hamburger)
  $('#hamburger').on('click', function() {
    $('#menu').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars fa-times');
  });

  // Fechar menu ao clicar fora
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.header-nav').length) {
      $('#menu').removeClass('active');
      $('#hamburger').find('i').removeClass('fa-times').addClass('fa-bars');
    }
  });

  // Destacar item atual no menu lateral
  const currentPage = window.location.pathname.split('/').pop();
  $('.side-nav a').each(function() {
    const href = $(this).attr('href');
    if (href === currentPage) {
      $(this).addClass('active');
    }
  });

  // Smooth scroll para âncoras
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 800);
    }
  });

  // Animação de fade-in para seções ao scroll
  $(window).on('scroll', function() {
    $('.market-section, .business-section, .timeline-section, .department-section, .risk-section, .metrics-section, .strategy-section, .topic-section').each(function() {
      const sectionTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      
      if (sectionTop < windowBottom - 100) {
        $(this).css('opacity', '1');
      }
    });
  }).scroll();

  // Inicializar com opacidade 0 para elementos que serão animados
  $('.market-section, .business-section, .timeline-section, .department-section, .risk-section, .metrics-section, .strategy-section, .topic-section').css({
    'opacity': '0',
    'transition': 'opacity 0.8s ease-in-out'
  });

  // Botão voltar ao topo
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // Adicionar botão voltar ao topo se não existir
  if ($('#back-to-top').length === 0) {
    $('body').append('<a id="back-to-top" href="#" class="back-to-top"><i class="fas fa-arrow-up"></i></a>');
    
    $('#back-to-top').css({
      'position': 'fixed',
      'bottom': '20px',
      'right': '20px',
      'display': 'none',
      'width': '40px',
      'height': '40px',
      'background-color': 'var(--primary-color)',
      'color': 'white',
      'border-radius': '50%',
      'text-align': 'center',
      'line-height': '40px',
      'z-index': '99',
      'transition': 'background-color 0.3s',
      'box-shadow': '0 2px 5px rgba(0,0,0,0.3)'
    });

    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
    });

    $('#back-to-top').on('mouseenter', function() {
      $(this).css('background-color', 'var(--secondary-color)');
    }).on('mouseleave', function() {
      $(this).css('background-color', 'var(--primary-color)');
    });
  }

  // Adicionar classe active ao clicar em itens do menu
  $('.menu a').on('click', function() {
    $('.menu a').removeClass('active');
    $(this).addClass('active');
  });

  // Tooltip para elementos com a classe .tooltip
  $('.tooltip').each(function() {
    $(this).append('<span class="tooltip-text">' + $(this).attr('data-tooltip') + '</span>');
  });

  // Estilizar tooltips
  $('.tooltip').css({
    'position': 'relative',
    'display': 'inline-block',
    'cursor': 'help'
  });

  $('.tooltip-text').css({
    'visibility': 'hidden',
    'width': '200px',
    'background-color': '#555',
    'color': '#fff',
    'text-align': 'center',
    'border-radius': '6px',
    'padding': '5px',
    'position': 'absolute',
    'z-index': '1',
    'bottom': '125%',
    'left': '50%',
    'margin-left': '-100px',
    'opacity': '0',
    'transition': 'opacity 0.3s'
  });

  $('.tooltip').on('mouseenter', function() {
    $(this).find('.tooltip-text').css({
      'visibility': 'visible',
      'opacity': '1'
    });
  }).on('mouseleave', function() {
    $(this).find('.tooltip-text').css({
      'visibility': 'hidden',
      'opacity': '0'
    });
  });

  // Adicionar efeito de hover em cards
  $('.feature-card, .section-card').on('mouseenter', function() {
    $(this).css('transform', 'translateY(-5px)');
  }).on('mouseleave', function() {
    $(this).css('transform', 'translateY(0)');
  });

  // Inicializar animações ao carregar a página
  setTimeout(function() {
    $('.market-section, .business-section, .timeline-section, .department-section, .risk-section, .metrics-section, .strategy-section, .topic-section').css('opacity', '1');
  }, 300);
});
