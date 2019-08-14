
'use strict';

;(function($, window, document, undefined) {
    
    $(window)
        .resize(function() {
            $(".menu_mobile").hide();
            $('#nav', '#mainNav').find('ul').hide();

            topNav(); 
        })
        .load(function() {
            $("head script[src='*/iwd/all/jquery-1.10.2.min.js']").remove();

            //left value for category description - absolute
            var 
                $categoryTitle = $(".category-title"),
                leftValue = $categoryTitle.outerWidth(),
                cartTableHeight = $(".totals").outerHeight();
                
            $categoryTitle.next(".category-description").css("left", leftValue + 10 + 'px');
            // height for cart table
            $(".cart").find("#shopping-cart-table").css("min-height", cartTableHeight + "px");
        });

    $(document).ready(function() {

        $('.fancybox-img').fancybox();
        
        $('#layerslider').layerSlider({
            pauseOnHover: false,
            responsive: true,
            skinsPath: '../skin/frontend/modulesgarden/crystal/js/layerslider/skins/'
        });

        /* Hover product */
        $(".products-grid .item").hover(function(){
            $(this).find('.hover').stop().fadeIn(200,function(){});
        }, function(){
            $(this).find('.hover').stop().fadeOut(200,function(){});
        });
        
        var $toolbar = $('.toolbar');
        
        $toolbar.first().children('.pager').hide();
        $toolbar.last().children('.sorter').hide();

        $("a.icon-user").parent("li").addClass("fa fa-user fa-lg");
        $("a.icon-wishlist").parent("li").addClass("fa fa-heart fa-lg");
        $("a.top-link-cart").parent("li").addClass("fa fa-shopping-cart fa-lg");
        $("a.top-link-checkout").parent("li").addClass("fa fa-edit fa-lg");
        $("a.icon-login").parent("li").addClass("fa fa-sign-in fa-lg");
        $("a.icon-logout").parent("li").addClass("fa fa-sign-in fa-lg");
        $('.header ul.links li a[title=Blog]').parent("li").addClass("fa fa-book fa-lg");
        
        var owlFeatures = $('.owl-carousel-features');
        owlFeatures.owlCarousel({
            loop:false,
            margin:28,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1000:{
                    items:4
                },
                1200:{
                    items:3
                }
            }
        });

        // Go to the next item
        $('.prev1').click(function() {
            owlFeatures.trigger('prev.owl.carousel');
        });

        $('.next1').click(function() {
            owlFeatures.trigger('next.owl.carousel');
        });

        var owlBestsellers = $('.owl-carousel-bestsellers');
        owlBestsellers.owlCarousel({
            loop:false,
            nav:false,
            responsive:{
                1200:{
                    items:1
                }
            }       
        });

        // Go to the next item
        $('.prev2').click(function() {
            owlBestsellers.trigger('prev.owl.carousel');
        });

        $('.next2').click(function() {
            owlBestsellers.trigger('next.owl.carousel');
        });

        var owlBrands = $('.owl-carousel-brands');
        owlBrands.owlCarousel({
            rtl:true,
            loop:true,
            margin:12,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                330:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });

        // Go to the next item
        $('.prev-brands').click(function() {
            owlBrands.trigger('prev.owl.carousel');
        });

        $('.next-brands').click(function() {
            owlBrands.trigger('next.owl.carousel');
        });

       var owlMedia = $('.owl-carousel-media');
        owlMedia.owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });

        // Go to the next item
        $('.media-prev').click(function() {
            owlMedia.trigger('prev.owl.carousel');
        });

        $('.media-next').click(function() {
            owlMedia.trigger('next.owl.carousel');
        });
        
        // tag reviews
        $('body.review-product-list').find('.tabNav').remove();

       var $menuMobile = $('.menu_mobile');
        
        // Menu toggle - RWD
        $("#menu_mobile_click").css('cursor', 'pointer').click(function() {
            $menuMobile.slideToggle("slow");
        });
        
        $menuMobile.find('#nav li.parent').on('click', '.level-top', function(e) {
            $(this).siblings('ul').slideToggle('slow');
            e.preventDefault();
        });

        // Img in catalog from CMS
        $('.page-title')
            .next('a')
            .css({
                'display': 'block',
                'padding-top': '17px',
                'padding-bottom': '17px',
                'text-align': 'center'
            })
            .addClass('clear');

         var
            $boxCollateral = $('.box-collateral'),
            $boxUpSell = $('.box-up-sell'),
            $tabNav = $('ul.tabNav');

        // Product view tabs - add class
        $tabNav.find('li:first-child').addClass('tab_active');

        $tabNav.on('click', 'li', function(){
            var 
                $this = $(this),
                currentTab = $this.data('tab');
            
            $tabNav.find('li').removeClass('tab_active');
            $this.addClass('tab_active');
            
            $boxCollateral.each(function() {
                var $item = $(this);
                
                if( $item.data('tab') === currentTab ) {
                    $boxCollateral.hide();
                    $item.show();
                    $boxUpSell.show();
                }
            });
        });
        
        //whislist rwd 
            var $wishlistTtable = $('#wishlist-table');

            $wishlistTtable.find('td:nth-child(1)').addClass('width-26prer');
            $wishlistTtable.find('td:nth-child(2)').addClass('width-74prer');
            $wishlistTtable.find('td:nth-child(3)').addClass('width-85prer');
            
        topNav();
        
    });

    // Menu functions
    function topNav(){
        var
            $nav = topNavCalculations(),
            $children = $nav.children('li.parent');

        $children.find('ul').hide();

        $nav
            .on('mouseenter', 'li.parent', function(){ 
                var $this = $(this);

                $this.siblings('li.parent').find('ul').hide();
                $this.children('ul').toggle();
            })
            .on('mouseleave', 'li.parent', function() {
                $(this).children('ul').hide();
            })
            .on('mouseenter mouseleave', ' > li > ul li', function() {
                $(this).children('ul').toggle(); 
            });
    }

    function topNavCalculations(){
        var
            $nav = $('#nav', '#mainNav'),
            topNavWidth = $nav.width(),
            topNavHeight = $nav.outerHeight() - 4;

        $nav.find('li').find('ul')
            .width(topNavWidth)
            .css({
                'top': topNavHeight + 'px',
                'box-sizing': 'border-box',
                'left': 0
            });

        return $nav;
    }

})(jQuery, window, document);