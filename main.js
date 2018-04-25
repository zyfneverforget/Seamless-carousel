let $buttons=$('.buttonsWrapper>button')
let $images = $('#slide>img')
let $first = $images.eq(0).clone(true)
let $last = $images.eq($images.length-1).clone(true)
$('#slide').append($first)
$('#slide').prepend($last)
let current = 0
$('#slide').css({transform:'translateX(-500px)'})
bindEvent()
$(next).on('click',function(){
    getSlide(current+1)
})
$(previous).on('click',function(){
    getSlide(current-1)
})
function bindEvent() {
   $('.buttonsWrapper').on('click','button',function(a){
        let $button = $(a.currentTarget)
        let index = $button.index()
        getSlide(index)
   })  
}
    
function getSlide(index){
    if (index>$buttons.length-1){
        index=0
    } else if(index<0){
        index=$buttons.length-1
    }
    if(current===$buttons.length-1 && index===0){
        $('#slide').css({transform:`translateX(${-($buttons.length+1)*500}px)`})
        .one('transitionend',function(){
            $('#slide').hide().offset()
            $('#slide').css({transform:'translateX(-500px)'}).show()
        })
    } else if(current===0 && index===$buttons.length-1) {
        $('#slide').css({transform:`translateX(0px)`})
        .one('transitionend',function(){
            $('#slide').hide().offset()
            $('#slide').css({transform:`translateX(${-($buttons.length)*500}px)`}).show()
        })
    } else {
        $('#slide').css({transform:`translateX(${-(index+1)*500}px)`})
    }
    current=index //记录current 当前位置
}

  