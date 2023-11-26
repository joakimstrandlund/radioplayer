const parentElement = document.getElementById('channels');

const start = async () => {
  // hämtar responsen från url via fetch
  const response = await fetch('http://api.sr.se/api/v2/channels?format=json&size=100');
  // Här ändrar vi datan till json
  const data = await response.json();
  // kolla så att det funkar
  console.log('response', response);
  console.log('data', data);

  // gör en for loop för att hämta ut alla arrayer separat med forEach. För att arrays är ett objekt därav måste man skriva data.channels(hämtar array).forEach. Viktigt att du lägger till .channels för där ligger array
  data.channels.forEach((radioPlayer) => {
    console.log(radioPlayer);

    //skapa en div
    const audioPicture = document.createElement('div');
    // Lägger till class på vår div
    audioPicture.classList.add('picture');
    // Hämtar bilder från array/fetch länken
    audioPicture.innerHTML = `<img src="${radioPlayer.image}"/> <div class="radioText"> <h2>${radioPlayer.name}</h2>  <audio controls>
        <source src="${radioPlayer.liveaudio.url}" type="audio/mpeg" />
        </audio> </div>  `;
    // Hämtar färg från fetchen och tillämpar baksgrunden färgen från radio spelare
    audioPicture.style.backgroundColor = `#${radioPlayer.color}`;
    // lägger in div i parentChild
    parentElement.appendChild(audioPicture);
  });
};

// anropa funktionen
start();
