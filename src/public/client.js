const form = document.getElementById('form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

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
      responseDiv.textContent = text;
    });
});
