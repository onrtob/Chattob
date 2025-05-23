// مثال بسيط لاختبار التفاعل
document.getElementById('msgForm')?.addEventListener('submit', e => {
  const input = document.getElementById('msgInput');
  if (!input.value.trim()) {
    e.preventDefault();
    alert('الرجاء كتابة رسالة قبل الإرسال');
  }
});
