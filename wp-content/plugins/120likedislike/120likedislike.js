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

jQuery(document).ready(function(){
    jQuery(".like120").bind("click", function(e) {
        e.preventDefault();
        var a_id = jQuery(this).data('id');
        if(checkCookie(a_id)){
          jQuery.ajax({
            type:'POST',
            data:{action:'like120_action',id:a_id},
            url: "/wp-admin/admin-ajax.php",
            success: function(value) {
              jQuery("span#likedislike_" + a_id).html(value);
            }
          });          
        }
        return false;
    });
    jQuery(".dislike120").bind("click", function(e) {
        e.preventDefault();
        var a_id = jQuery(this).data('id');
        if(checkCookie(a_id)){
          jQuery.ajax({
            type:'POST',
            data:{action:'dislike120_action',id:a_id},
            url: "/wp-admin/admin-ajax.php",
            success: function(value) {
              jQuery("span#likedislike_" + a_id).html(value);
            }
          });          
        }
        return false;
    });
});

function checkCookie(check_val)
{
  var ret = true;

  var re = new RegExp("likedisliked=([^;]+)");
  var value = re.exec(document.cookie);
  if(value != null){
    unescape(value[1]).split(",").map(function(item){
      if(item==check_val){
        ret = false;
      }
    })
  }

  if(ret){
    if(value){
      document.cookie = "likedisliked="+value[1]+","+check_val;
    }else{
      document.cookie = "likedisliked="+check_val;
    }
  }

  return ret;
}

}
/*
     FILE ARCHIVED ON 19:05:38 Apr 14, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:25:32 Nov 16, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.023
  exclusion.robots: 0.475
  LoadShardBlock: 106.807 (3)
  captures_list: 186.517
  RedisCDXSource: 33.961
  load_resource: 426.584
  CDXLines.iter: 37.941 (3)
  exclusion.robots.policy: 0.45
  PetaboxLoader3.datanode: 131.499 (4)
  PetaboxLoader3.resolve: 119.65
*/