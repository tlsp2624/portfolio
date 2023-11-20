// smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// @header 스크롤 내릴때
let lastScroll = 0;

$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr > lastScroll) {   
      $('.header').addClass('hide');
  } else {
      $('.header').removeClass('hide');
} 
lastScroll = curr;
})

// @gnb 링크 이동
$('.gnb .gnb-list a').click(function(e){
  e.preventDefault();
  offset=$(this).data('offset');

  gsap.to(window, { duration: .3, scrollTo: offset });

  $('.header .gnb').removeClass('on')
})

// @gnb 영역
$('.header .menu-box').click(function(e){
  e.preventDefault();
  $('.header .gnb').toggleClass('on')
})

// @visual 마우스 주위 이미지
$(document).mousemove(function(e){

  xVal = e.clientX-(window.innerWidth/2);
  yVal = e.clientY-(window.innerHeight/2);

  $('.sc-visual .thumb-box .image').each(function(i,el){
    num=$(this).data('num');
    gsap.to(el,{
      x:(xVal/100)*num,
      y:(yVal/100)*num
    })
  })
})

// @work1 영역
$('.sc-work .work-group1 .link-page').each(function(i,el){
  workTl = gsap.timeline({ 
    scrollTrigger:{ 
            trigger:el,
            start:"0% 90%",
            end:"60% 0",
            scrub:0,
          },
  })  
  workTl.from(el,{ scale:0.8,},'a')
  workTl.to($(this).find('img'),{ scale:1.2, },'a')
})


// @work2 영역
work2Tl = gsap.timeline({ 
  scrollTrigger:{ 
          trigger:'.sc-work .work-group2',
          start:"0% 90%",
          end:"60% 0",
          toggleActions:"play pause pause reset",
        },
})
work2Tl
.from($('.sc-work .work-group2 li'),{
  yPercent:50,
  opacity: 0,
  stagger:0.3,
})


