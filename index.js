$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})

var typed = new Typed(".typing",{
    strings: ["Front-End developer"," an E&TC student","Passionate Artist","Android Devlopment Enthusiat"],
    typeSpeed:80,
    backSpeed:110,
    loop:true
});