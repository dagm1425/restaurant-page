import menu from './menu.js';
import home from './home.js';

home();
// IEFE?

function loader() {
    const cont = document.getElementById('content');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            if(e.target.id === 'home') {
                cont.firstElementChild.remove();
                home();
            }
            else if(e.target.id === 'menu') {
                cont.firstElementChild.remove();
                menu();
            }
            else if(e.target.id === 'contact') {
                cont.firstElementChild.remove();
                contact();
            }
        })
    });
}

loader(); 