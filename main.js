var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
   recognition.start();
}

recognition.onresult = function(event)
{

  console.log(event);
var Content = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = Content;
  console.log(Content);
    if(Content == "selfie")
    {
    console.log("taking selfie -----");
    speak();
    }
}

function take_snapshot()
{
     console.log(img_id);

     Webcam.snap(function(data_uri)
         if (img_id == selfie){
          document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
         }
         if (img_id == selfie){
          document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+ data_uri +'"/>';
         }
         if (img_id == selfie){
          document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
         }
        });


