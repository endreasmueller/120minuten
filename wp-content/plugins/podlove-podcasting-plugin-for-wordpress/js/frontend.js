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

jQuery(function($) {

	$(".episode_downloads").each(function() {
		var $select = $("select", this),
		    $that = this;

		$("button.podlove-download-secondary", this).on("click", function(e) {
			e.preventDefault();
			prompt("Feel free to copy and paste this URL", $("option", $select).filter(":selected").data("raw-url"));
			return false;
		});
	});
	
});

}
/*
     FILE ARCHIVED ON 02:07:04 Jun 08, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:59:14 Nov 16, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 296.104
  exclusion.robots: 0.213
  exclusion.robots.policy: 0.203
  RedisCDXSource: 2.66
  esindex: 0.01
  LoadShardBlock: 266.397 (3)
  PetaboxLoader3.datanode: 181.909 (4)
  CDXLines.iter: 23.421 (3)
  load_resource: 117.95
  PetaboxLoader3.resolve: 45.514
*/