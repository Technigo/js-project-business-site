 const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    if(hamMenu && offScreenMenu){
      hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active'); 
      offScreenMenu.classList.toggle('active');
    });
  };

  