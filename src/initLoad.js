export default function pageLoad(){
    let image = document.createElement('img');
    image.src = '../src/mcridemug.jpg';
    document.getElementById('content').appendChild(image);

    let header = document.createElement('h1');
    header.textContent = 'McDonaal';
    document.getElementById('content').appendChild(header);

    let para = document.createElement('p');
    para.textContent = 'Resturant is wundeful  please come';
    document.getElementById('content').appendChild(para);
}