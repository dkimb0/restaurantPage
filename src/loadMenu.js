export default function loadMenu(){
    let image = document.createElement('img');
    image.src = '../src/burger.png';
    image.style.height = '400px';
    document.getElementById('content').appendChild(image);
}