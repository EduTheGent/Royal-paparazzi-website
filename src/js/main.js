const contactFab = document.querySelectorAll('.contactFab');
const modal = document.querySelector(`#contactPanel`);
const closeModal = document.querySelector('#closeContactPanel');

const bookTab = document.querySelector('#bookingTab');

const bookPanel = document.querySelector('#bookingPanel')

const contactTab = document.querySelector('#contactTab');

const contactPanel = document.querySelector('#contactOptions')

contactFab.forEach((event) => event.addEventListener('click', () => {
    modal.showModal();
    event.setAttribute("aria-expanded", "true");
}));

closeModal.addEventListener('click', () => {
    modal.close();
    contactFab.forEach((event) => event.setAttribute("aria-expanded", "false"));
});

bookTab.addEventListener('click', () => {
    bookPanel.removeAttribute('hidden');
    contactPanel.setAttribute('hidden', '')

    bookTab.classList.add('activeBtn')
    bookTab.classList.remove('hoverBtn')

    contactTab.classList.remove('activeBtn')

    bookTab.setAttribute("aria-selected", "true");
    contactTab.setAttribute("aria-selected", "false");
})
contactTab.addEventListener('click', () => {
    contactPanel.removeAttribute('hidden')
    bookPanel.setAttribute('hidden', '');

    contactTab.classList.add('activeBtn')
    contactTab.classList.remove('hoverBtn')

    bookTab.classList.add('hoverBtn')
    bookTab.classList.remove('activeBtn')

    bookTab.setAttribute("aria-selected", "false");
    contactTab.setAttribute("aria-selected", "true");
})


modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.close()
    }
})

contactPanel.addEventListener("close", () => {
    contactFab.forEach((event) => event.setAttribute("aria-expanded", "false"));
});
