const time = document.getElementById('time');
const date = document.getElementById('date');
const timeFormat = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
const dateFormat = new Intl.DateTimeFormat('zh-TW', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById('zone').textContent = timezone.replaceAll('_', ' ').replaceAll('/', ' / ');
function updateClock() {
  const now = new Date();
  const parts = timeFormat.formatToParts(now);
  time.textContent = parts.filter(part => ['hour', 'minute', 'second'].includes(part.type)).map(part => part.value).join(' : ');
  time.dateTime = now.toISOString();
  date.textContent = dateFormat.format(now);
  document.getElementById('year').textContent = now.getFullYear();
}
updateClock();
setInterval(updateClock, 1000);
document.addEventListener('visibilitychange', updateClock);
