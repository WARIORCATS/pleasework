//elements

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const speakBtn = document.querySelector("#speak")
//speech

const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition()

 recognition.onstart = function () {
    console.log("vr active");
 };

// sr result
recognition.onresult = function (event) {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    console.log(`my words : ${transcript}`);
    if(transcript.includes("hello Hangbot")){
        readOut("hello Sigma Lord");
    }
    if(transcript.includes("open youtube")) {
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/")
    }
    if(transcript.includes("open google")) {
        readOut("Opening google now");
        window.open("https://www.google.com/");
    }
    if(transcript.includes("open prodigy")) {
        readOut("Opening Prodigy now");
        window.open("https://sso.prodigygame.com/premises");
    }
    if(transcript.includes("open mega packets")) {
        readOut("Opening Packets");
        window.open("https://letsgoexam.com/");
    }
    if (transcript.startsWith("search for")) {
        const query = transcript.replace("search for", "").trim();
        readOut("Here's the result");
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
};

// sr stop
 recognition.onend = function(){
    console.log("vr deactive");
 };

recognition.continuous = true;


startBtn.addEventListener("click", () => {
    recognition.start()
});



stopBtn.addEventListener("click", () => {
    recognition.stop()
});


//friday speech
function readOut(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech)
    console.log("speaking out");
}

//example

speakBtn.addEventListener("click", () => {
    readOut("Hello my name is Hang bot, or you can call me AI");
});


