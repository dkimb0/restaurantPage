import homeImage from '../src/mcridemug.jpg';

export default function loadHome(){
    let container = document.createElement('div');
    container.setAttribute('id', 'divHome')
    document.getElementById('content').appendChild(container);

    let image = document.createElement('img');
    image.src = homeImage;
    image.style.height = '400px';
    document.getElementById('divHome').appendChild(image);

    let header = document.createElement('h1');
    header.textContent = 'McDonaal';
    document.getElementById('divHome').appendChild(header);

    let para = document.createElement('p');
    para.textContent = 'Resturant is wundeful  please come';
    document.getElementById('divHome').appendChild(para);

}