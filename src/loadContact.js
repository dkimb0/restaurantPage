export default function loadContact(){
    let container = document.createElement('div');
    container.setAttribute('id', 'divContact')
    document.getElementById('content').appendChild(container);

    let para = document.createElement('p');
    para.textContent = '+5 (555) 555-5555';
    document.getElementById('divContact').appendChild(para);
}