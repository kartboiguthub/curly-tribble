var SpeechRecognition = window.webkitSpeechRecognition;

var Content;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

recognition.onresult = function(event) {

 console.log(event);
 
var Content = event.results[0][0].transcript;
      
       document.getElementById("textbox").innerHTML = Content;
       console.log(Content)
        if(Content =="take my selfie")
        {
            console.log("take my selfie")
            speak();
        }
    
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});




function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}


