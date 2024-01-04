let bar = document.getElementById('bar')
let bar_blur = document.getElementById('bar_blur')



const showbar = () =>{
    bar.style.right = '0px';
    bar.style.transition = 'right 0.8s'; 
    
    bar_blur.style.display = 'block';
}
const hidebar = () =>{
    bar.style.right = '-1000px';
    bar_blur.style.display = 'none';
}

bar.addEventListener('click', (event)=>{
    event.stopPropagation()
})
