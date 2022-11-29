const onglets = document.querySelectorAll('.onglets');

const contenu = document.querySelectorAll('.contenu');
 
let index = 0;

onglets.forEach(onglet  => {

    onglets.addEventListener('click', () => {

        if(onglets.classList.contains('active')){
            return;
        } else {
            onglets.classList.add('active');

        index = onglets.getAttribute('data-anim');
        console.log(index);

        for(onglets = 0; onglets < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active');
            }
        }
    })
})
