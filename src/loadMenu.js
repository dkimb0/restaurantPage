export default function loadMenu(){
    let container = document.createElement('div');
    container.setAttribute('id', 'divMenu')
    document.getElementById('content').appendChild(container);

    let image = document.createElement('img');
    image.src = '../src/burger.png';
    image.style.height = '400px';
    document.getElementById('divMenu').appendChild(image);


}