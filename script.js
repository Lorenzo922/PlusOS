function openApp(app) {
  const win = document.createElement('div');
  win.className = 'window';
  win.innerHTML = `
    <div><strong>${app.toUpperCase()}</strong> <button onclick="this.parentElement.parentElement.remove()">X</button></div>
    <iframe src="apps/${app}.html" width="100%" height="90%" style="border:none;"></iframe>
  `;
  document.body.appendChild(win);
}

// Relógio
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();
