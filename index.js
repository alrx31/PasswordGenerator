let inp = document.querySelector('#text')
function Gen(){
    let characters = `zxcvbnm,.asdfghjkl;'qwertyuiop[]1234567890-=!@#$%^&*()_+\`~|ячсмитьбю.фывапролджэйцукенгшщзхъ!"№;%:?*()_+ЯЧСМИТЬБЮФЫВАПРОЛДЖЖЖЖЭЙЦУКЕНГШЩЗХЪЁёZXCVBNMASDFGHJKLQWERTYUIOP`
    let res = ''
    for(let i = 0; i<=16; i++){
        res+= characters[Math.floor(168*Math.random(0,1))]
    }
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