// Prompt to select media stream, pass to video element, then play
async function selectMediaStream(vidElement) {
   try{
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      vidElement.srcObject = mediaStream;
      vidElement.onloadedmetadata = () => {
         vidElement.play();
      }
   } catch(err) {
      // Catch error
      console.log('Error occured:', err);
   }
}


function main() {
   const videoElement = document.getElementById('video');
   const button = document.getElementById('btn');

   // button listen for click to enable picture in picture mode
   button.addEventListener('click', async () => {
      // Disable button
      button.disabled = true;
      // Start pic in pic mode
      await videoElement.requestPictureInPicture();
      // Reset button
      button.disabled = false;
   })

   // On Load
   selectMediaStream(videoElement);
   return 0;
}

main();