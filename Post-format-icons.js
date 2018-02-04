$(document).ready(function() {
  $(".post-outer").each(function() {
    var t = $(this),
      i = t.find(".post-url").attr("data-url");
    $.get(i, function(i) {
      $(i).find('.post-body iframe[src*="youtube.com"]').length && t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="youtube-icon" class="fa fa-youtube-play"></i></div>'
        ),
        $(i).find('.post-body iframe[src*="google.com/maps"]').length && t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="map-icon" class="fa fa-map-marker"></i></div>'
        ),
        $(i).find('.post-body iframe[src*="player.vimeo.com"]').length && t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="vi" class="fa fa-vimeo-square"></i><div>'
        ),
        $(i).find('.post-body iframe[src*="w.soundcloud.com"]').length && t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="su" class="fa fa-soundcloud"></i></div>'
        ),
        $(i).find(".post-body .twitter-tweet").length && (t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="tw" class="fa fa-twitter"></i></div>'
        ), t.find(".post-type-twitter").html($(i).find(
          ".post-body .twitter-tweet"))),
        $(i).find(".post-body .instagram-media").length && (t.find(
          ".post-thumb").after(
          '<div class="post-format"><i id="ins" class="fa fa-instagram"></i></div>'
        ), t.find(".post-type-instagram").html($(i).find(
          ".post-body .instagram-media")))
    }, "html")
  })
})