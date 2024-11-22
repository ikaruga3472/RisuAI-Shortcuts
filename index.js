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
  // 마지막 채팅 편집 (Alt+Shift+Q)
  if (event.key === 'Q' && event.shiftKey && event.altKey) {
    iconclick('pencil');
  }
  // 마지막 채팅 번역 (Alt+Shift+W)
  else if (event.key === 'W' && event.shiftKey && event.altKey) {
      iconclick('languages');
  }
  // 마지막 채팅 리롤 (Alt+Shift+R)
  else if (event.key === 'R' && event.shiftKey && event.altKey) {
      iconclick('refresh-ccw');
  }
  // 마지막 채팅 삭제 (Alt+Shift+Z)
  else if (event.key === 'Z' && event.shiftKey && event.altKey) {
      iconclick('trash');
  }
  // 마지막 채팅 복사 (Alt+Shift+C)
  else if (event.key === 'C' && event.shiftKey && event.altKey) {
      var message = document.querySelector('.text.chat-width.chattext.prose.minw-0.prose-invert');
      if (message) {
          navigator.clipboard.writeText(message.textContent);
      }
  }
  // 모든 채팅 복사 (Alt+Shift+A)
  else if (event.key === 'A' && event.shiftKey && event.altKey) {
      var result = "";
      var messages = document.querySelectorAll('.text.chat-width.chattext.prose.minw-0.prose-invert');
      if (messages.length > 0) {
          for (let i = messages.length; i-- ; i > -1) {
              result += messages[i].textContent + '\n';
          }
          navigator.clipboard.writeText(result);
      }
  }
      // 스와이프 리롤 사용 시 왼쪽 화살표 (Alt+Shift+<)
  else if (event.key === '<' && event.shiftKey && event.altKey) {
    iconclick('arrow-left');
  }
      // 스와이프 리롤 사용 시 오른쪽 화살표 (Alt+Shift+>)
  else if (event.key === '>' && event.shiftKey && event.altKey) {
    iconclick('arrow-right');
  }
});