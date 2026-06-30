function playVideo(card){
    const video = card.querySelector('video');
    if(card.classList.contains('is-playing')){
      if(video.paused){ video.play(); } else { video.pause(); }
      return;
    }
    card.classList.add('is-playing');
    video.controls = true;
    video.play();
  }
 
  function openLightbox(src){
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.classList.add('is-open');
  }
  function closeLightbox(){
    document.getElementById('lightbox').classList.remove('is-open');
  }
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
 
  function toggleMenu(){
    document.getElementById('burger').classList.toggle('is-open');
    document.getElementById('mobile-menu').classList.toggle('is-open');
  }