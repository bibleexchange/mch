SC.initialize({client_id:"335a3d6afc3b602db57397c826b8c0f6",redirect_uri:"http://moments.church/callback"}),$(document).ready(function(){var t;SC.stream("/tracks/184170870",function(n){t=document.getElementById("play-pause-btn"),$("#play-pause-btn").click(function(t){t.preventDefault(),n.play()})}),$("a.connect").click(function(t){t.preventDefault(),SC.connect(function(){SC.get("/me",function(t){$("#username").html(t.username)})})}),SC.stream("/tracks/70355723",{autoPlay:!0},function(t){window.sound=t}),$("#comment_form").submit(function(t){t.preventDefault(),SC.connect(function(){SC.post("/tracks/184170870/comments",{comment:{body:$("#comment_body").val(),timestamp:window.sound.position}},function(t){$("#status").val("Your comment was posted!"),$("#comment_body").val("")})})})});