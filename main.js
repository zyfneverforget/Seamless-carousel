let n 
初始化()
setInterval(function(){
    makeLeave(getImages(n))
    .one('transitionend',(a)=>{
        makeEnter($(a.currentTarget))
    })
    makeCurrent(getImages(n+1))
    n++
}
    ,1500)

function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n=3
        }
    }
    return n
}

function getImages(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function makeCurrent($nodes) {
    return $nodes.removeClass('leave enter').addClass('current')
}

function makeLeave($nodes) {
    return $nodes.removeClass('current').addClass('leave')
}

function makeEnter($nodes) {
    return $nodes.removeClass('leave').addClass('enter')
}

function 初始化(){
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}