
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
  console.log("register service worker");
}

document.querySelector('#show').addEventListener('click', () => {
  const iconUrl = document.querySelector('select').selectedOptions[0].value;
  let imgElement = document.createElement('img');
  imgElement.src = iconUrl;
  document.querySelector('#container').appendChild(imgElement);
});
