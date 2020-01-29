
$(function() {
    
    let $call = $('.call-me'),
        $modal = $('.b-popup'),
        $closer = $('.close-button'),
        $text = $('#input__text'),
        $tel = $('#input__tel'),
        $menu = $('.up-bar__left li a'),
        $menuLeft = $('.up-bar__left'),
        $menuButton = $('.up-bar__button'),
        $body = $('html, body'),
        $clickButton = $('.click-me'),
        $footer = $('.footer__left li a'),
        $click = $('.click-me'),
        $modalButton = $('.up-bar__button'),
        $burger =  $('.button-burger'),
        $littleModal = $('.a-popup'),
        $a = $('.a-popup'),
        $modalForm = $('.input-form-tel'),
        $swiperContainer = $('.swiper-container'),
        $props = $('.props span'),
        $buttonPrev = $('.swiper-button-prev'),
        $buttonNext = $('.swiper-button-next');            
    
    $modalForm.inputmask({"mask": "+7(999) 999-9999"});

    $('form').each(function() {
        $(this).validate({
            focusinvalid: false,
            rules: {

                Телефон: {
                    required: true,
                    minlength: 10,
                },
                Имя: {
                    required: true,
                    minlength: 2,
                },   
            },  
            messages: {
                Имя: {
                    required: 'Введите Имя',
                    minlength: 'Введите полное Имя',
                },  
                Телефон: {
                    required: 'Введите телефон',
                    minlength: 'Введите полный номер телефона',
                },  
            },
            submitHandler(form) {
                let th = $(form)

                $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: th.serialize(),
                }).done(() => {

                    console.log('Отправлено')

                th.trigger('reset');
                });

                return false;
                }             
        });
    });

    var mySwiper = new Swiper ($swiperContainer, {
        loop: true,
        slidesPerView:3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
        0: {
            slidesPerView: 1,
            },
        
        720: {
            slidesPerView: 2,
        },
        1201: {
            slidesPerView: 3,
        },
        }

    });


    $modalButton.data('counter', 0).click(function(event) {
        event.preventDefault();
            let counter = $(this).data('counter'); 

            $(this).data('counter', counter + 1);        
            
            let b = $(this).data('counter');

            if(b%2 !== 0) {

                $body.toggleClass('not_scroll');
                $menuLeft.toggleClass('up-bar__left_display');
                $menuLeft.toggleClass('fon-open');
                $menuLeft.toggleClass('fon-open__li');
                $menuButton.toggleClass('up-bar__button__ul__off');

            } else {
                
                $menuLeft.toggleClass('up-bar__left_display');
                $menuButton.toggleClass('up-bar__button__ul__off');
                $body.toggleClass('not_scroll');
                $menuLeft.toggleClass('fon-open');
                $menuLeft.toggleClass('fon-open__li');
            };      
        });  
        
    function newRequest() {
        let name = $text.val(),
            phone = $tel.val();
    
        if(name.length >2 && phone.length >2) {
            

            $modal.addClass('b-popup_display');
            $littleModal.removeClass('a-popup_display');
            
            name = $text.val('');
            phone = $tel.val('');

        }  else {

            $burger.on('click', function(event) {
                event.preventDefault()
            });
            $text.addClass('error');
            $tel.addClass('error');  
        }; 
    };

     
    $burger.on('click', newRequest);
    
   
    $call.on('click', function(event) {
        event.preventDefault();
        $modal.removeClass('b-popup_display');
        $modal.addClass('b-popup_not_display');
    });

    $closer.on('click', function() {
        $modal.addClass('b-popup_display');
    })

    $menu.on('click', function(event) {
        event.preventDefault();

        $menuLeft.toggleClass('up-bar__left_display');
        $menuButton.toggleClass('up-bar__button__ul__off');    
        $body.removeClass('not_scroll');
        $menuLeft.removeClass('fon-open');
        $menuLeft.removeClass('fon-open__li');

        let href = $(this).attr('href');

        let offset = $(href).offset().top;
        

        $body.animate ({
            scrollTop: offset,
        }, 500);
    });

    $clickButton.on('click', function(event){
        event.preventDefault();

        let dataHref = $(this).attr('data-href');

        let offset = $(dataHref).offset().top;

        $body.animate ({
            scrollTop: offset,
        }, 500);

    })

    $footer.on('click', function(event) {
        event.preventDefault();
        

        let href = $(this).attr('href');

        let offset = $(href).offset().top;
        

        $body.animate ({
            scrollTop: offset,
        }, 500);
    });


    $a.on('click', function() {
        $littleModal.addClass('a-popup_display');
        $body.removeClass('not_scroll');
    });

    
    $call.on('mouseover', function(){
        $(this).addClass('mouse-over')
    });

    $click.on('mouseover', function(){
        $(this).addClass('mouse-over')
    });

    $props.on('mouseover', function(){
        $(this).addClass('mouse-over')
    });

    $buttonPrev.on('mouseover', function(){
        $(this).addClass('inher-size')
    });
    
    $buttonNext.on('mouseover', function(){
        $(this).addClass('inher-size')
    });  
    
     
})  


   

