let showPopUpBtn = document.getElementById('showPopUp');

let wrapper = document.createElement('div');
wrapper.classList.add('wrap');
wrapper.innerHTML = '</div>';
document.body.appendChild(wrapper);

let nestedDiv = document.createElement('div');
nestedDiv.classList.add('nested');
nestedDiv.innerHTML = '</div>';
wrapper.appendChild(nestedDiv);

let closeBtn = document.createElement('button');
closeBtn.classList.add('closeBtn');
closeBtn.innerHTML = 'X</button>';
nestedDiv.appendChild(closeBtn);

showPopUpBtn.addEventListener('click', function () {
    this.style.display = 'none';
    wrapper.style.display = 'flex';
    nestedDiv.style.display = 'block';
}, true);
wrapper.addEventListener('click', function () {
    this.style.display = 'none';
    showPopUpBtn.style.display = 'block';
}, false);
nestedDiv.addEventListener('click', function (event) {
    event.stopPropagation();
}, false)
closeBtn.addEventListener('click', function () {
    wrapper.style.display = 'none';
    showPopUpBtn.style.display = 'block';
}, false);