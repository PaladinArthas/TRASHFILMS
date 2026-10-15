const modalBtn = document.querySelector('.btn-roulete')

modalBtn.addEventListener('click', () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'modalWrapper'

    const backdrop = document.createElement('div');
    backdrop.className = 'bg-modal';
    backdrop.addEventListener('click', () => {
      wrapper.remove();
    });

    wrapper.appendChild(backdrop);

    const modalContainer = document.createElement('div')
    modalContainer.className = 'modal'

    wrapper.appendChild(modalContainer);

    document.body.appendChild(wrapper)

    const cross = document.createElement('button');
    cross.setAttribute('type', 'button');
    cross.className = 'modalCross'

    const start = document.createElement('button');
    cross.setAttribute('type', 'button');
    cross.className = 'modallStart'

    const play = document.createElement('button');
    cross.setAttribute('type', 'button');
    cross.className = 'modalPlay'

    modalContainer.appendChild(cross)
    modalContainer.appendChild(start)
    modalContainer.appendChild(play)

});

  const scrollBtn = document.querySelector('.btn_Ludka');
  const targetSection = document.querySelector('.btn-roulete')

scrollBtn.addEventListener('click', () => {
  targetSection.scrollIntoView({
    behavior:'smooth',
    block: 'start'
  });
});