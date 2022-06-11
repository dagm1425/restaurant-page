import './styles.css';
import myImage from './image.jpg';

var img = new Image();
img.src = myImage;

export default function home() {
    const sectionElem = document.createElement('section');
    sectionElem.classList.add('hero');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');
    const heading = document.createElement('h1');
    heading.innerHTML = 'Come enjoy our flavourful noodles';
    leftDiv.appendChild(heading);
    const headline = document.createElement('p');
    headline.classList.add('left', 'p');
    headline.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit' 
     + 'Rerum illo illum dolorem labore laudantium accusamus cupiditate ipsa' 
    leftDiv.appendChild(headline);
    sectionElem.appendChild(leftDiv);

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');
    img.classList.add('right', 'img');
    rightDiv.appendChild(img);
    sectionElem.appendChild(rightDiv);

    document.getElementById('content').appendChild(sectionElem);

    // var allElements = document.getElementsByTagName("*");
    // for (var i = 0, len = allElements.length; i < len; i++) {
    //     var element = allElements[i];
    //     element.style.cssText = 'margin: 0; padding: 0; box-sizing: border-box;';
    // }
}