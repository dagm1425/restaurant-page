
export default function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-div');

    const constactHeader1 = document.createElement('h3');
    constactHeader1.innerText = 'Our working hours';
    constactHeader1.classList.add('contact-header');
    contact.appendChild(constactHeader1);
    
    const hours = document.createElement('p');
    hours.innerText = 'Mondays to Saturdays, from 11AM to 9PM';
    contact.appendChild(hours);

    const constactHeader2 = document.createElement('h3');
    constactHeader2.innerText = 'Our location';
    constactHeader2.classList.add('contact-header');
    contact.appendChild(constactHeader2);
    
    const add = document.createElement('p');
    add.innerText = 'Lorem Ipsum St., illum Ave 557';
    contact.appendChild(add);

    const constactHeader3 = document.createElement('h3');
    constactHeader3.innerText = 'Our number';
    constactHeader3.classList.add('contact-header');
    contact.appendChild(constactHeader3);
    
    const num = document.createElement('p');
    num.innerText = '+1 555 777 885 1';
    contact.appendChild(num);

    document.getElementById('content').appendChild(contact);

}