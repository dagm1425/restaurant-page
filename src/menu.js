import './styles.css';

export default function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-div');

    const foodHeader = document.createElement('h2');
    foodHeader.classList.add('menu-heading');
    foodHeader.innerText = 'Noodles';
    menu.appendChild(foodHeader);

    const foodGrid = document.createElement('div');
    foodGrid.classList.add('grid-container');

    const food1 = document.createElement('div');
    food1.classList.add('grid-item')

    const food1Img = document.createElement('div');
    food1Img.classList.add('grid-img1');
    food1.appendChild(food1Img);

    const foodHeading1 = document.createElement('div');
    foodHeading1.classList.add('grid-title');
    const heading1 = document.createElement('h3');
    heading1.innerText = 'Beef noodles'
    foodHeading1.appendChild(heading1);
    const price1 = document.createElement('p');
    price1.innerText = '$ 7.50';
    foodHeading1.appendChild(price1);
    food1.appendChild(foodHeading1);

    foodGrid.appendChild(food1);

    const food2 = document.createElement('div');
    food2.classList.add('grid-item')

    const food2Img = document.createElement('div');
    food2Img.classList.add('grid-img2');
    food2.appendChild(food2Img);

    const foodHeading2 = document.createElement('div');
    foodHeading2.classList.add('grid-title');
    const heading2 = document.createElement('h3');
    heading2.innerText = 'Veggie noodles'
    foodHeading2.appendChild(heading2);
    const price2 = document.createElement('p')
    price2.innerText = '$ 6.50';
    foodHeading2.appendChild(price2);
    food2.appendChild(foodHeading2);

    foodGrid.appendChild(food2);

    const food3 = document.createElement('div');
    food3.classList.add('grid-item')

    const food3Img = document.createElement('div');
    food3Img.classList.add('grid-img3');
    food3.appendChild(food3Img);

    const foodHeading3 = document.createElement('div');
    foodHeading3.classList.add('grid-title');
    const heading3 = document.createElement('h3');
    heading3.innerText = 'Shrimp noodles'
    foodHeading3.appendChild(heading3);
    const price3 = document.createElement('p')
    price3.innerText = '$ 8.50';
    foodHeading3.appendChild(price3);
    food3.appendChild(foodHeading3);

    foodGrid.appendChild(food3);
    menu.appendChild(foodGrid);

    // drinks

    const bevHeader = document.createElement('h2');
    bevHeader.classList.add('menu-heading');
    bevHeader.innerText = 'Drinks';
    menu.appendChild(bevHeader);

    const bevGrid = document.createElement('div');
    bevGrid.classList.add('grid-container');

    const bev1 = document.createElement('div');
    bev1.classList.add('grid-item')

    const bev1Img = document.createElement('div');
    bev1Img.classList.add('grid-bevImg1');
    bev1.appendChild(bev1Img);

    const bevHeading1 = document.createElement('div');
    bevHeading1.classList.add('grid-title');
    const headingBev1 = document.createElement('h3');
    headingBev1.innerText = 'Water'
    bevHeading1.appendChild(headingBev1);
    const bevPrice1 = document.createElement('p');
    bevPrice1.innerText = '$ 1.20';
    bevHeading1.appendChild(bevPrice1);
    bev1.appendChild(bevHeading1);

    bevGrid.appendChild(bev1);

    const bev2 = document.createElement('div');
    bev2.classList.add('grid-item')

    const bev2Img = document.createElement('div');
    bev2Img.classList.add('grid-bevImg2');
    bev2.appendChild(bev2Img);

    const bevHeading2 = document.createElement('div');
    bevHeading2.classList.add('grid-title');
    const headingBev2 = document.createElement('h3');
    headingBev2.innerText = 'Kombucha'
    bevHeading2.appendChild(headingBev2);
    const bevPrice2 = document.createElement('p')
    bevPrice2.innerText = '$ 2.20';
    bevHeading2.appendChild(bevPrice2);
    bev2.appendChild(bevHeading2);

    bevGrid.appendChild(bev2);

    const bev3 = document.createElement('div');
    bev3.classList.add('grid-item')

    const bev3Img = document.createElement('div');
    bev3Img.classList.add('grid-bevImg3');
    bev3.appendChild(bev3Img);

    const bevHeading3 = document.createElement('div');
    bevHeading3.classList.add('grid-title');
    const headingBev3 = document.createElement('h3');
    headingBev3.innerText = 'Green Tea'
    bevHeading3.appendChild(headingBev3);
    const bevPrice3 = document.createElement('p')
    bevPrice3.innerText = '$ 1.85';
    bevHeading3.appendChild(bevPrice3);
    bev3.appendChild(bevHeading3);

    bevGrid.appendChild(bev3);
    menu.appendChild(bevGrid);
    
    document.getElementById('content').appendChild(menu);
}