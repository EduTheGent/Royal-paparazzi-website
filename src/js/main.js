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




// Mobile Menu
const mobileNavContainer = document.getElementById("mobileNavContainer");
const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");
const [first, second, third] =
  document.querySelectorAll("#mobileMenu span");


mobileMenu.addEventListener('click', () => {
    mobileNavContainer.classList.toggle('overflow-hidden')
    mobileNav.classList.toggle('-right-100')
    mobileNav.classList.toggle('right-0.5')

    first.classList.toggle("rotate-45");
    first.classList.toggle("translate-y-4");

    second.classList.toggle("opacity-0");

    third.classList.toggle("-rotate-45");
    third.classList.toggle("-translate-y-4");

})