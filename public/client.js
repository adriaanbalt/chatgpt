const form = document.getElementById('form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  loader.classList.remove('hidden');
  
  const prompt = document.getElementById('prompt').value;
  const url = `/completion`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  };
  fetch(url,options)
  .then((res) => res.text())
  .then((text) => {
      // reveal the loader
      loader.classList.add('hidden');
      const res = JSON.parse(text);
      
      // clone the template element
      const element = template.content.cloneNode(true);
      // select the element in the template where the data should be inserted
      element.innerHTML = `
        <div class="listItem">
          <h3 id="prompt">Prompt: ${prompt}</h3>
          <p id="text">Response: ${res.text}</p>
          <p id="text">Image representation:</p>
          <img class="image" src="${res.image}"></img>
        </div>
      `;
      // insert the cloned element into the list
      list.insertAdjacentHTML('afterbegin', element.innerHTML);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const loadEl = document.querySelector('#load');
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.firestore().doc('/foo/bar').get().then(() => { });
  // firebase.functions().httpsCallable('yourFunction')().then(() => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // firebase.analytics(); // call to activate
  // firebase.analytics().logEvent('tutorial_completed');
  // firebase.performance(); // call to activate
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = [
      'functions',
    ].filter(feature => typeof app[feature] === 'function');
    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
  }
});
