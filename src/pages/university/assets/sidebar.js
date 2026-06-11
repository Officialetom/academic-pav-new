const sideBtn = document.getElementById('upload');

sideBtn.addEventListener('click', () =>{
    if(sideBtn.classList.contains('act')){
        sideBtn.classList.remove('act');
        sideBtn.classList.add('in-active');
    }else{
        sideBtn.classList.remove('in-active');
        sideBtn.classList.add('act');
    }
});