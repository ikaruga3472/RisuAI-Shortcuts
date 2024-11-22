console.log('Custom Shortcuts Activated.');

function iconclick(icon) {
  var pencilIcons = document.querySelectorAll('.lucide-'+icon);
  if (pencilIcons == []) return false;
  let result = Array.from(pencilIcons).filter((i) => i.parentElement.classList.contains('hover\:text-blue-500'))
  if (result.length === 0) return false;
  result[0].parentElement.click();
  return true;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'E' && event.shiftKey && event.altKey) {
    iconclick('pencil');
  }
  else if (event.key === 'S' && event.shiftKey && event.altKey) {
    iconclick('languages');
  }
  else if (event.key === 'R' && event.shiftKey && event.altKey) {
    iconclick('refresh-ccw');
  }
  else if (event.key === 'Z' && event.shiftKey && event.altKey) {
    iconclick('trash');
  }
  else if (event.key === 'C' && event.shiftKey && event.altKey) {
    var message = document.querySelector('.text.chat-width.chattext.prose.minw-0.prose-invert');
    if (message) {
      navigator.clipboard.writeText(message.textContent);
    }
  }
  else if (event.key === 'A' && event.shiftKey && event.altKey) {
    var result = "";
    var messages = document.querySelectorAll('.text.chat-width.chattext.prose.minw-0.prose-invert');
    if (messages != []) {
      for (let i = messages.length; i-- ; i > -1) {
          result += messages[i].textContent + '\n';
      }
      navigator.clipboard.writeText(result);
    }
  }
});