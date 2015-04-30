        var PUBNUB_demo = PUBNUB.init({
          publish_key: 'pub-c-b7109848-ffa9-4ea3-b976-c2d9fb3609f7',
          subscribe_key: 'sub-c-e7f4114e-810c-11e4-915f-02ee2ddab7fe'
        });
        
        PUBNUB_demo.subscribe({
          channel: 'a',
          message: function(m){
            publishValue(m);    
          },
          connect : publish
        }); 
        
        function publish(n) {
          var num = JSON.stringify(n);
          PUBNUB_demo.publish({
            channel: 'b',
            message: {"text":n}
          });
        }

        function publishValue(m){
          if(m.text.toLowerCase() == '"nobu"'){
			window.location.replace("hotel1.html");
          }
		  if(m.text.toLowerCase() == '"anjappar"'){
			window.location.replace("hotel2.html");
			}
			if(m.text.toLowerCase() == '"nando"'){
			window.location.replace("hotel3.html");
			}
        }
		