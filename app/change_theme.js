var theme_value= 1;
document.getElementById('change').addEventListener('click', ()=>{
    theme_value++;
    if(theme_value == 2){
        document.getElementById('change-bg').classList.remove('bg_1')
        document.getElementById('change-bg').classList.toggle('bg_2');
    }
    else if(theme_value == 3){
        document.getElementById('change-bg').classList.remove('bg_1');
        document.getElementById('change-bg').classList.remove('bg_2');
        document.getElementById('change-bg').classList.toggle('bg_3');
    }
    else{
        theme_value = 1;
        document.getElementById('change-bg').classList.remove('bg_3')
        document.getElementById('change-bg').classList.toggle('bg_1');
    }
    
    
})

