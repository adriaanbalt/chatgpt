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
          <p>Response: ${res.text}</p>
          <div class="images">
            <img class="image" src="${res.images[0]}"></img>
            <img class="image" src="${res.images[1]}"></img>
            <img class="image" src="${res.images[2]}"></img>
            <img class="image" src="${res.images[3]}"></img>
          </div>
        </div>
      `;
      // insert the cloned element into the list
      list.insertAdjacentHTML('afterbegin', element.innerHTML);
    });
});
