const contactFab = document.querySelector('#contactFab');
const modal = document.querySelector(`#contactPanel`);
const closeModal = document.querySelector('#closeContactPanel');

const bookTab = document.querySelector('#bookingTab');

const bookPanel = document.querySelector('#bookingPanel')

const contactTab = document.querySelector('#contactTab');

const contactPanel = document.querySelector('#contactOptions')

contactFab.addEventListener('click', () => {
    modal.showModal();
    contactFab.setAttribute("aria-expanded", "true");
});

closeModal.addEventListener('click', () => {
    modal.close();
    contactFab.setAttribute("aria-expanded", "false");
});

bookTab.addEventListener('click', () => {
    bookPanel.removeAttribute('hidden');
    contactPanel.setAttribute('hidden', '')

    bookTab.classList.add('activeTab')
    bookTab.classList.remove('hoverTab')

    contactTab.classList.remove('activeTab')
})
contactTab.addEventListener('click', () => {
    contactPanel.removeAttribute('hidden')
    bookPanel.setAttribute('hidden', '');

    contactTab.classList.add('activeTab')
    contactTab.classList.remove('hoverTab')

    bookTab.classList.add('hoverTab')
    bookTab.classList.remove('activeTab')
})