let mn = document.querySelector('.sil1')
let nm = document.querySelector('.promo')

let promo = nm.offsetTop

function scrol1(event){
    event.preventDefault()
    window.scroll({
        top:promo,
        behavior:"smooth",
    })
}

mn.addEventListener('click', scrol1)



// 2
let lnk2 = document.querySelector('.sil2')
let cont = document.querySelector('.container2')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
    event.preventDefault()
    cont.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk2.addEventListener('click', scrool_js1)

//////////////////////////



//////////////////////////
let lnk3 = document.querySelector('.sil3')
let sec = document.querySelector('.container3')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk3.addEventListener('click', scrool_js3)



/////////////////////



