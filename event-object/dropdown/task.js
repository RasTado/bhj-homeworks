const drops = document.querySelectorAll('.dropdown')
const links = document.querySelectorAll('.dropdown__link')
const curdrop = document.querySelector('.dropdown__list')
const dropdownValue = document.querySelector('.dropdown__value')

drops.forEach((drop) => {
    drop.addEventListener('click', () => {      
        curdrop.classList.toggle('dropdown__list_active')
    })
})

links.forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault()
        const currentLink = event.currentTarget;
        dropdownValue.textContent = currentLink.textContent
    })
})