const btn = document.getElementById("button");
const voice = document.getElementById("voice");

let stream;
let recorder;
let voiceFile;

const downloadFile = () => {
  const a = document.createElement("a");
  a.href = voiceFile;
  a.download = "My Recording.webm";
  document.body.appendChild(a);
  a.click();
  if (a.click) {
    btn.innerText = "Start Recording";
    btn.addEventListener("click", handleStart);
  }
};

const recordingComplete = () => {
  btn.innerText = "Download";
  btn.removeEventListener("click", recordingComplete);
  btn.addEventListener("click", downloadFile);
  btn.disabled = false;

  recorder.stop();
};

const handleStart = () => {
  btn.innerText = "Recording (wait 5 seconds...)";
  btn.removeEventListener("click", handleStart);
  btn.addEventListener("click", recordingComplete);
  btn.disabled = true;

  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    voiceFile = URL.createObjectURL(e.data);
    voice.srcObject = null;
    voice.src = voiceFile;
    voice.classList.add("show");
    voice.play();
  };
  recorder.start();
  setTimeout(recordingComplete, 5000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  voice.srcObject = stream;
};

init();

btn.addEventListener("click", handleStart);
