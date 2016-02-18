SC.initialize({
    client_id: '335a3d6afc3b602db57397c826b8c0f6',
    redirect_uri: 'http://moments.church/callback'
});

$(document).ready(function() {
  var playbtn;
  SC.stream('/tracks/184170870', function(sound) {
        playbtn = document.getElementById("play-pause-btn");
        playbtn.addEventListener("click", playPause);
        function playPause(){
        	if (sound.pause){
	        	sound.play();
	        	playbtn.style.background = "url (../img/pause.png)";
        	} else {
	        	sound.play();
	        	playbtn.style.background = "url (../img/play.png)";
        	}
        });
        
  	});
  	
  	

  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function() {
      SC.get('/me', function(me) {
        $('#username').html(me.username);
      });
    });
  });

  SC.stream('/tracks/70355723', {
        autoPlay: true
    }, function(sound) {
        window.sound = sound;
    });
    
    $('#comment_form').submit(function(e) {
        e.preventDefault();
        SC.connect(function() {
            SC.post('/tracks/184170870/comments', {
                comment: {
                    body: $('#comment_body').val(),
                    timestamp: window.sound.position
                }
            }, function(comment) {
                $('#status').val('Your comment was posted!');
                $('#comment_body').val('');
            });
        });
    });
});