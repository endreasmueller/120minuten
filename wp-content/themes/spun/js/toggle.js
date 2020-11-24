var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery( document ).ready( function( $ ) {

	// Submenu highlighting
	$("ul.sub-menu").closest("li").addClass('parent');
	$(".main-navigation ul.children").closest("li").addClass('parent');

	var $comments = $( '#content' );

	// Toggle comments on
	$( '.comments-link' ).unbind( 'click' ).click( function(e) {
		e.preventDefault();
		$('html,body').animate( { scrollTop: $("#comments-toggle").offset().top },'slow' );
		$comments.find( '#comments' ).slideToggle( 'ease' );
		$(this).toggleClass( 'toggled-on' );

	} );

	var $sidebar = $( '#main' );

	// Toggle sidebar on
	$( '.sidebar-link' ).unbind( 'click' ).click( function(e) {
		e.preventDefault();
		$( 'html,body' ).animate( { scrollTop: $( "#secondary" ).offset().top },'slow' );
		$sidebar.find( '#secondary' ).slideToggle( 'ease' );
		$(this).toggleClass( 'toggled-on' );
		if ( $(this).hasClass( 'toggled-on' ) )
			$(this).text( '-' );
		else
			$(this).text( '+' );
	} );

	//Toggle the the main navigation menu for small screens.
	var $masthead = $( '#masthead' ),
	    timeout = false;

	$.fn.smallMenu = function() {
		$masthead.find( '.site-navigation' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
		$masthead.find( '.site-navigation h1' ).removeClass( 'screen-reader-text' ).addClass( 'menu-toggle' );

		$( '.menu-toggle' ).unbind( 'click' ).click( function() {
			$masthead.find( '.menu' ).slideToggle( 'ease' );
			$( this ).toggleClass( 'toggled-on' );
		} );
	};

	// Check viewport width on first load.
	if ( $( window ).width() < 800 )
		$.fn.smallMenu();

	// Check viewport width when user resizes the browser window.
	$( window ).resize( function() {
		var browserWidth = $( window ).width();

		if ( false !== timeout )
			clearTimeout( timeout );

		timeout = setTimeout( function() {
			if ( browserWidth < 800 ) {
				$.fn.smallMenu();
			} else {
				$masthead.find( '.site-navigation' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
				$masthead.find( '.site-navigation h1' ).removeClass( 'menu-toggle' ).addClass( 'screen-reader-text' );
				$masthead.find( '.menu' ).removeAttr( 'style' );
			}
		}, 200 );
	} );
} );

}
/*
     FILE ARCHIVED ON 08:01:58 Oct 22, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:08 Nov 16, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.464
  captures_list: 451.479
  RedisCDXSource: 27.086
  PetaboxLoader3.resolve: 463.732 (2)
  exclusion.robots: 0.48
  PetaboxLoader3.datanode: 607.109 (5)
  esindex: 0.016
  LoadShardBlock: 394.987 (3)
  load_resource: 803.867 (2)
  CDXLines.iter: 22.259 (3)
*/