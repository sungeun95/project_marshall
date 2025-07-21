const swiper = new Swiper('.slide',{
    //옵션:값,
    autoplay:{delay:7000},
    loop:true,
    direction:'horizontal', //아래에서 위로 올라오게 horizontal, vertical
    pagination: {
        el: ".swiper-pagination",
    },
})

/* const aAll = document.querySelectorAll('a');
for(let i of aAll){
    i.addEventListener('click',function(e){
        e.preventDefault();
    })
} */