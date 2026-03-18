// ── Build "Send it" buttons dynamically so Cloudflare never sees the addresses ──

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-send-key]').forEach(function (el) {
    const key = el.dataset.sendKey;
    const rep = reps[key];
    if (rep && rep.mailto) {
      el.href = 'mailto:' + rep.mailto;
    } else {
      el.style.display = 'none';
    }
  });
});

// ── Modal controller ─────────────────────────────────────────────

function openModal(type, key) {
  const rep = reps[key];
  if (!rep) return;

  const isEmail = type === 'email';
  const content = isEmail ? rep.email : rep.call;
  if (!content) return;

  document.getElementById('modal-label').textContent =
    isEmail ? 'Email template — ' + rep.name : 'Call script — ' + rep.name;

  document.getElementById('modal-title').textContent =
    isEmail ? 'Craft your message' : 'What to say · ' + rep.phone;

  document.getElementById('modal-hint').textContent = isEmail
    ? 'Edit any part of this before sending. A message in your own words is more effective.'
    : 'Read it as-is or use it as a starting point. The whole call takes under a minute.';

  document.getElementById('modal-body').textContent = content;

  const phoneLink = document.getElementById('modal-phone-link');
  if (!isEmail && rep.phone) {
    const num = rep.phone.replace(/\D/g, '');
    phoneLink.innerHTML =
      '<a href="tel:+1' + num + '" style="font-size:0.875rem;font-weight:bold;color:#1d4e8f;">Call ' + rep.phone + '</a>';
  } else {
    phoneLink.innerHTML = '';
  }

  document.getElementById('modal-footer').textContent = !isEmail
    ? 'Not sure who to call? Try the Capitol switchboard: (202) 224-3121 — ask to be connected.'
    : '';

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function copyModal() {
  const text = document.getElementById('modal-body').textContent;
  navigator.clipboard.writeText(text).then(function () {
    const c = document.getElementById('copy-confirm');
    c.style.opacity = '1';
    setTimeout(function () { c.style.opacity = '0'; }, 2000);
  });
}

document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});