let inp = document.querySelector('#text')


function Gen(){
    let lang = document.querySelector('#lang').value
    let caps = document.querySelector('#caps').value
    let specs = document.querySelector('#spec').value
    let num = document.querySelector('#numbers').value
    let len = document.querySelector('#len').value


    let rusD = 'ячсмитьббюфывапролджэйцукенгшщзхъё'
    let rusU = 'ЯЧСМИТЬБЮФЫВАПРОЛДЖЭЙЦУКЕНГШЩЗХЪЁ'
    let enD = 'zxcvbnmasdfghjklqwertyuiop'
    let enU = 'ZXCVBNMASDFGHJKLQWERTYUIOP'
    let nums = '1234567890'
    let spec = `\`|,./;'[]!@#$%^&*()_+№";%:?*!":?><{}~` 
    let characters = ''

    if(lang == 'ru'  && caps == 'capsN'){
        characters+= rusD
    }else if(lang == 'en' && caps == 'capsN'){
        characters+= enD
    }else if(lang == 'ruen' && caps == 'capsN'){
        characters+= rusD + enD
    }
    if(lang == 'ru'  && caps == 'capsY'){
        characters+= rusU
    }else if(lang == 'en' && caps == 'capsY'){
        characters+= enU
    }else if(lang == 'ruen' && caps == 'capsY'){
        characters+= rusU + enU
    }
    if (caps == 'capsAll' && lang == 'ru'){
        characters += rusD + rusU
    }
    if (caps == 'capsAll' && lang == 'en'){
        characters +=enD + enU
    }

    if (caps == 'capsAll' && lang == 'ruen'){
        characters += rusD + rusU + enD + enU
    }

    if(specs == 'specY'){
        characters+= spec
    }
    if(num == 'numY'){
        characters+= nums
    }

    let p = characters.length
    let res = ''
    if(p == 0){
        inp.value = 'нет символов'
        return
    }
    for(let i = 0; i<len; i++){
        res+= characters[Math.floor(p*Math.random(0,1))]
    }

    console.log(characters)
    characters = ''
    console.log(characters)

    inp.value = res


}
function Copy(){
    let res = inp.value;
    inp.select()
    try{
        document.execCommand('copy')

    }
    catch(err){
        alert('Error , please press ctrl/cmd + C to copy')
    }
}