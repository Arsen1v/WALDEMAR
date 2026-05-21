// ========== WALDEMAR MESSENGER - Supabase Edition ==========
// Онлайн мессенджер с реальным сервером (Supabase)

// ========== SUPABASE CONFIG ==========
// WALDEMAR Supabase Configuration
const SUPABASE_URL = 'https://iovbirqmgpjzjcnjbqav.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3_csJ3ON3rzeBnkvwHPk_w_FHPTUowU';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== EMOJI DATA ==========
const emojis = {
    smileys: ['😀','😃','😄','😁','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕'],
    hearts: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟'],
    hands: ['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀','👁','👅','👄','💋','🩸'],
    animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦟','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🐓','🦃','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦦','🦥','🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🐚','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄','🌬','💨','💧','💦','☔','☂️','🌊','🌫'],
    food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🍍','🥝','🥥','🥑','🍆','🥔','🥕','🌽','🌶','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🥤','🧋','🧃','🧉','🧊','🥢','🍽','🍴','🥄','🔪','🏺']
};

/* ===================== STATE ===================== */
let currentUser = null;
let currentChatId = null;
let currentChatUser = null;
let contacts = [];
let messages = [];
let realtimeChannels = [];
let replyToMessageId = null;
let editingMessageId = null;
let selectedGift = null;
let voiceRecorder = null;
let voiceChunks = [];
let voiceStartTime = 0;
let darkTheme = true;

/* ===================== UTILS ===================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
const randId = () => Math.random().toString(36).slice(2, 10);
const formatTime = (d) => {
  const date = new Date(d);
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
};
const formatDate = (d) => {
  const date = new Date(d);
  const today = new Date();
  if (date.toDateString() === today.toDateString()) return 'Сегодня';
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
};
const initials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

function showToast(text, type = 'inf') {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { ok: 'fa-check-circle', err: 'fa-exclamation-circle', inf: 'fa-info-circle', warn: 'fa-exclamation-triangle' };
  toast.innerHTML = `<i class="fas ${icons[type] || icons.inf}"></i><span>${text}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(25px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleVisibility(el, show) {
  if (typeof el === 'string') el = $(el);
  if (!el) return;
  if (show) el.classList.remove('hidden');
  else el.classList.add('hidden');
}

/* ===================== AUTH ===================== */
async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    await loadUserProfile(session.user.id);
    showApp();
  } else {
    showAuth();
  }

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      await loadUserProfile(session.user.id);
      showApp();
    } else if (event === 'SIGNED_OUT') {
      currentUser = null;
      showAuth();
    }
  });
}

async function loadUserProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) {
    console.error('Profile load error:', error);
    return;
  }
  currentUser = { ...data, id: userId };
  updateProfileUI();
}

function updateProfileUI() {
  if (!currentUser) return;
  $('#current-user-name').textContent = currentUser.display_name || currentUser.username;
  $('#current-user-avatar').textContent = initials(currentUser.display_name || currentUser.username);
  $('#settings-profile-name').textContent = currentUser.display_name || currentUser.username;
  $('#settings-profile-username').textContent = '@' + currentUser.username;
  $('#settings-avatar').textContent = initials(currentUser.display_name || currentUser.username);
}

function showAuth() {
  toggleVisibility('#auth-screen', true);
  toggleVisibility('#app', false);
}

function showApp() {
  toggleVisibility('#auth-screen', false);
  toggleVisibility('#app', true);
  loadContacts();
  subscribeToMessages();
}

/* ===================== AUTH FORMS ===================== */
$('.auth-tabs').addEventListener('click', (e) => {
  if (!e.target.classList.contains('auth-tab')) return;
  $$('.auth-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  $$('.auth-form').forEach(f => f.classList.remove('active'));
  $('#' + e.target.dataset.tab + '-form').classList.add('active');
});

$('#login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = $('#login-username').value.trim().replace('@', '');
  const password = $('#login-password').value;

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('username', username)
    .single();

  if (profileError || !profile) {
    showToast('Пользователь не найден', 'err');
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: profile.email,
    password: password
  });

  if (error) {
    showToast(error.message, 'err');
  } else {
    showToast('Добро пожаловать!', 'ok');
  }
});

$('#register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = $('#reg-name').value.trim();
  const username = $('#reg-username').value.trim().replace('@', '');
  const password = $('#reg-password').value;

  if (username.length < 3) {
    showToast('Никнейм минимум 3 символа', 'warn');
    return;
  }
  if (password.length < 4) {
    showToast('Пароль минимум 4 символа', 'warn');
    return;
  }

  const { data: existing } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

  if (existing) {
    showToast('Этот никнейм уже занят', 'err');
    return;
  }

  const email = `${username}@waldemar.local`;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
        username: username
      }
    }
  });

  if (error) {
    showToast(error.message, 'err');
    return;
  }

  if (data.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        username,
        display_name: name,
        email,
        status: 'online',
        last_seen: new Date().toISOString(),
        searchable: true,
        accept_gifts: true
      });

    if (profileError) {
      showToast('Ошибка создания профиля', 'err');
      console.error(profileError);
      return;
    }

    showToast('Аккаунт создан! Вход выполнен.', 'ok');
  }
});

/* ===================== CONTACTS & CHATS ===================== */
async function loadContacts() {
  if (!currentUser) return;

  const { data: chats, error } = await supabase
    .from('chats')
    .select(`
      id,
      user1_id,
      user2_id,
      updated_at,
      profiles!chats_user2_id_fkey(id, username, display_name, status, last_seen),
      profiles!chats_user1_id_fkey(id, username, display_name, status, last_seen)
    `)
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Chats load error:', error);
    return;
  }

  contacts = [];
  const list = $('#contacts-list');
  list.innerHTML = '';

  for (const chat of chats || []) {
    const otherId = chat.user1_id === currentUser.id ? chat.user2_id : chat.user1_id;
    const otherProfile = chat.user1_id === currentUser.id 
      ? chat.profiles?.[1] || chat.profiles 
      : chat.profiles?.[0] || chat.profiles;

    if (!otherProfile) continue;

    const { data: lastMsg } = await supabase
      .from('messages')
      .select('content, created_at, sender_id')
      .eq('chat_id', chat.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    const { count: unreadCount } = await supabase
      .from('messages')
      .select('*', { count: 'exact', head: true })
      .eq('chat_id', chat.id)
      .eq('receiver_id', currentUser.id)
      .eq('read', false);

    const contact = {
      chat_id: chat.id,
      user_id: otherId,
      username: otherProfile.username,
      display_name: otherProfile.display_name,
      status: otherProfile.status,
      last_seen: otherProfile.last_seen,
      last_message: lastMsg?.content || '',
      last_message_time: lastMsg?.created_at,
      unread: unreadCount || 0
    };

    contacts.push(contact);
    list.appendChild(renderContactRow(contact));
  }

  $('#contacts-count').textContent = contacts.length;
}

function renderContactRow(contact) {
  const row = document.createElement('div');
  row.className = 'chat-row';
  row.dataset.chatId = contact.chat_id;
  row.dataset.userId = contact.user_id;
  
  const isOnline = contact.status === 'online';
  const time = contact.last_message_time ? formatTime(contact.last_message_time) : '';
  
  row.innerHTML = `
    <div class="profile-avatar ${isOnline ? '' : 'offline'}">${initials(contact.display_name)}</div>
    <div class="chat-row-info">
      <div class="chat-title">${contact.display_name}</div>
      <div class="chat-subtitle ${contact.unread > 0 ? 'unread' : ''}">
        ${contact.last_message || 'Нет сообщений'}
      </div>
    </div>
    <div class="chat-row-meta">
      <div class="chat-time">${time}</div>
      ${contact.unread > 0 ? `<div class="unread-pill">${contact.unread}</div>` : ''}
    </div>
  `;

  row.addEventListener('click', () => openChat(contact));
  return row;
}

/* ===================== SEARCH USERS ===================== */
$('#search-btn').addEventListener('click', performSearch);
$('#search-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});

async function performSearch() {
  const query = $('#search-input').value.trim().replace('@', '');
  if (!query || query.length < 2) {
    showToast('Введите минимум 2 символа', 'warn');
    return;
  }

  toggleVisibility('#search-results', true);
  toggleVisibility('#chats-section', false);
  
  const resultsList = $('#search-results-list');
  resultsList.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">Поиск...</div>';

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, display_name, status, searchable')
    .or(`username.ilike.%${query}%,display_name.ilike.%${query}%`)
    .neq('id', currentUser.id)
    .eq('searchable', true)
    .limit(20);

  if (error) {
    showToast('Ошибка поиска', 'err');
    return;
  }

  resultsList.innerHTML = '';
  if (!data || data.length === 0) {
    resultsList.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">Ничего не найдено</div>';
    return;
  }

  for (const user of data) {
    const row = document.createElement('div');
    row.className = 'chat-row';
    row.innerHTML = `
      <div class="profile-avatar ${user.status === 'online' ? '' : 'offline'}">${initials(user.display_name)}</div>
      <div class="chat-row-info">
        <div class="chat-title">${user.display_name}</div>
        <div class="chat-subtitle">@${user.username}</div>
      </div>
      <button class="add-chat-btn">Написать</button>
    `;
    
    row.querySelector('.add-chat-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startChat(user);
    });
    
    resultsList.appendChild(row);
  }
}

$('#close-search').addEventListener('click', () => {
  toggleVisibility('#search-results', false);
  toggleVisibility('#chats-section', true);
  $('#search-input').value = '';
});

async function startChat(userProfile) {
  const { data: existing } = await supabase
    .from('chats')
    .select('id')
    .or(`and(user1_id.eq.${currentUser.id},user2_id.eq.${userProfile.id}),and(user1_id.eq.${userProfile.id},user2_id.eq.${currentUser.id})`)
    .single();

  if (existing) {
    const contact = contacts.find(c => c.chat_id === existing.id);
    if (contact) {
      openChat(contact);
    } else {
      await loadContacts();
      const newContact = contacts.find(c => c.chat_id === existing.id);
      if (newContact) openChat(newContact);
    }
    return;
  }

  const { data: newChat, error } = await supabase
    .from('chats')
    .insert({
      user1_id: currentUser.id,
      user2_id: userProfile.id
    })
    .select()
    .single();

  if (error) {
    showToast('Ошибка создания чата', 'err');
    return;
  }

  await loadContacts();
  const contact = contacts.find(c => c.chat_id === newChat.id);
  if (contact) openChat(contact);
  
  toggleVisibility('#search-results', false);
  toggleVisibility('#chats-section', true);
}

/* ===================== CHAT OPENING ===================== */
async function openChat(contact) {
  currentChatId = contact.chat_id;
  currentChatUser = contact;

  $$('.chat-row').forEach(r => r.classList.remove('active'));
  const row = $(`.chat-row[data-chat-id="${contact.chat_id}"]`);
  if (row) row.classList.add('active');

  toggleVisibility('#empty-state', false);
  toggleVisibility('#chat-header', true);
  toggleVisibility('#messages-wrap', true);
  toggleVisibility('#composer', true);

  $('#chat-name').textContent = contact.display_name;
  $('#chat-avatar').textContent = initials(contact.display_name);
  const isOnline = contact.status === 'online';
  $('#chat-status').textContent = isOnline ? 'в сети' : `был(а) ${formatTime(contact.last_seen)}`;
  $('#chat-status').className = 'header-status ' + (isOnline ? '' : 'offline');
  $('#chat-avatar').className = 'header-avatar ' + (isOnline ? '' : 'offline');

  $('#gift-username').textContent = contact.display_name;
  $('#gift-avatar').textContent = initials(contact.display_name);

  await loadMessages(contact.chat_id);
  
  await supabase
    .from('messages')
    .update({ read: true })
    .eq('chat_id', contact.chat_id)
    .eq('receiver_id', currentUser.id)
    .eq('read', false);

  if (row) {
    const badge = row.querySelector('.unread-pill');
    if (badge) badge.remove();
    const subtitle = row.querySelector('.chat-subtitle');
    if (subtitle) subtitle.classList.remove('unread');
  }
}

async function loadMessages(chatId) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Messages load error:', error);
    return;
  }

  messages = data || [];
  renderMessages();
}

function renderMessages() {
  const list = $('#messages-list');
  list.innerHTML = '';

  let lastDate = null;

  for (const msg of messages) {
    const msgDate = new Date(msg.created_at).toDateString();
    if (msgDate !== lastDate) {
      const badge = document.createElement('div');
      badge.className = 'date-badge';
      badge.textContent = formatDate(msg.created_at);
      list.appendChild(badge);
      lastDate = msgDate;
    }

    list.appendChild(renderMessageBubble(msg));
  }

  scrollToBottom();
}

function renderMessageBubble(msg) {
  const isOut = msg.sender_id === currentUser.id;
  const bubble = document.createElement('div');
  bubble.className = `msg-bubble ${isOut ? 'out' : 'in'}`;
  bubble.dataset.id = msg.id;

  let content = '';
  
  if (msg.reply_to) {
    const replyMsg = messages.find(m => m.id === msg.reply_to);
    if (replyMsg) {
      const replyAuthor = replyMsg.sender_id === currentUser.id ? 'Вы' : currentChatUser.display_name;
      content += `
        <div class="msg-reply" onclick="scrollToMessage('${msg.reply_to}')">
          <div class="msg-reply-author">${replyAuthor}</div>
          <div class="msg-reply-text">${escapeHtml(replyMsg.content)}</div>
        </div>
      `;
    }
  }

  if (msg.type === 'gift') {
    const giftData = JSON.parse(msg.content || '{}');
    content += `
      <div class="gift-big">${giftData.icon || 'PODAROK'}</div>
      <div class="gift-label">${giftData.title || 'Подарок'}</div>
      <div class="gift-from">от ${giftData.from || 'друга'}</div>
    `;
  } else if (msg.type === 'file') {
    const fileData = JSON.parse(msg.content || '{}');
    content += renderFileAttachment(fileData);
  } else if (msg.type === 'voice') {
    const voiceData = JSON.parse(msg.content || '{}');
    content += renderVoiceAttachment(voiceData);
  } else {
    content += escapeHtml(msg.content);
  }

  const edited = msg.edited ? '<span style="opacity:0.6;font-size:10px;margin-left:4px">(изменено)</span>' : '';

  bubble.innerHTML = `
    <div class="msg-body ${isOut ? 'out' : 'in'} ${msg.type === 'gift' ? 'gift' : ''}">
      ${content}
      ${edited}
      <div class="msg-footer">
        <span>${formatTime(msg.created_at)}</span>
        ${isOut ? `<span class="msg-check ${msg.read ? 'read' : ''}"><i class="fas fa-${msg.read ? 'check-double' : 'check'}"></i></span>` : ''}
      </div>
    </div>
    <div class="msg-hover-actions">
      <button class="msg-hover-btn" onclick="setReply('${msg.id}')" title="Ответить"><i class="fas fa-reply"></i></button>
      ${isOut ? `<button class="msg-hover-btn" onclick="editMessage('${msg.id}')" title="Изменить"><i class="fas fa-pen"></i></button>` : ''}
      <button class="msg-hover-btn" onclick="showReactionPicker('${msg.id}', event)" title="Реакция"><i class="far fa-smile"></i></button>
    </div>
  `;

  if (msg.reactions && Object.keys(msg.reactions).length > 0) {
    const reactionsDiv = document.createElement('div');
    reactionsDiv.className = 'msg-reactions';
    for (const [emoji, users] of Object.entries(msg.reactions)) {
      const mine = users.includes(currentUser.id);
      reactionsDiv.innerHTML += `
        <span class="reaction-chip ${mine ? 'mine' : ''}" onclick="toggleReaction('${msg.id}', '${emoji}')">
          <span class="r-emoji">${emoji}</span>
          <span class="r-count">${users.length}</span>
        </span>
      `;
    }
    bubble.appendChild(reactionsDiv);
  }

  bubble.addEventListener('contextmenu', (e) => showMessageMenu(e, msg));

  return bubble;
}

function renderFileAttachment(file) {
  const icons = { photo: 'fa-image green', doc: 'fa-file blue', audio: 'fa-music orange' };
  return `
    <div class="msg-file">
      <div class="msg-file-icon ${file.type || 'doc'}"><i class="fas ${icons[file.type] || icons.doc}"></i></div>
      <div class="msg-file-meta">
        <div class="msg-file-name">${escapeHtml(file.name || 'Файл')}</div>
        <div class="msg-file-size">${file.size || ''}</div>
      </div>
    </div>
  `;
}

function renderVoiceAttachment(voice) {
  return `
    <div class="msg-file">
      <div class="msg-file-icon voice"><i class="fas fa-microphone"></i></div>
      <div class="msg-file-meta">
        <div class="msg-file-name">Голосовое сообщение</div>
        <div class="msg-file-size">${voice.duration || '0:00'}</div>
      </div>
      <button class="icon-btn" style="width:32px;height:32px;background:var(--primary);color:white;border-radius:50%">
        <i class="fas fa-play" style="font-size:12px"></i>
      </button>
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function scrollToBottom() {
  const scroll = $('#messages-scroll');
  if (scroll) scroll.scrollTop = scroll.scrollHeight;
}

function scrollToMessage(id) {
  const msg = $(`.msg-bubble[data-id="${id}"]`);
  if (msg) {
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    msg.style.animation = 'none';
    msg.offsetHeight;
    msg.style.animation = 'msgPop 0.5s ease';
  }
}

/* ===================== SEND MESSAGE ===================== */
$('#message-input').addEventListener('input', (e) => {
  const hasText = e.target.value.trim().length > 0;
  toggleVisibility('#send-btn', hasText);
  toggleVisibility('#voice-btn', !hasText);
});

$('#message-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

$('#send-btn').addEventListener('click', sendMessage);

async function sendMessage() {
  const input = $('#message-input');
  const text = input.value.trim();
  if (!text || !currentChatId) return;

  const content = editingMessageId ? text : text;
  const type = 'text';

  if (editingMessageId) {
    const { error } = await supabase
      .from('messages')
      .update({ content, edited: true })
      .eq('id', editingMessageId);

    if (error) {
      showToast('Ошибка редактирования', 'err');
      return;
    }
    
    editingMessageId = null;
    $('#reply-bar').classList.add('hidden');
  } else {
    const messageData = {
      chat_id: currentChatId,
      sender_id: currentUser.id,
      receiver_id: currentChatUser.user_id,
      content,
      type,
      reply_to: replyToMessageId || null,
      read: false,
      edited: false,
      reactions: {}
    };

    const { error } = await supabase.from('messages').insert(messageData);
    if (error) {
      showToast('Ошибка отправки', 'err');
      return;
    }
  }

  input.value = '';
  replyToMessageId = null;
  toggleVisibility('#send-btn', false);
  toggleVisibility('#voice-btn', true);
  toggleVisibility('#reply-bar', false);
  
  await supabase.from('chats').update({ updated_at: new Date().toISOString() }).eq('id', currentChatId);
}

function setReply(msgId) {
  const msg = messages.find(m => m.id === msgId);
  if (!msg) return;
  
  replyToMessageId = msgId;
  const author = msg.sender_id === currentUser.id ? 'Вы' : currentChatUser.display_name;
  
  $('#reply-name').textContent = author;
  $('#reply-text').textContent = msg.content.substring(0, 60);
  toggleVisibility('#reply-bar', true);
  $('#message-input').focus();
}

$('#cancel-reply').addEventListener('click', () => {
  replyToMessageId = null;
  editingMessageId = null;
  toggleVisibility('#reply-bar', false);
  $('#message-input').value = '';
});

function editMessage(msgId) {
  const msg = messages.find(m => m.id === msgId);
  if (!msg || msg.sender_id !== currentUser.id) return;
  
  editingMessageId = msgId;
  $('#message-input').value = msg.content;
  $('#message-input').focus();
  
  $('#reply-name').textContent = 'Редактирование';
  $('#reply-text').textContent = msg.content.substring(0, 60);
  toggleVisibility('#reply-bar', true);
}

/* ===================== REALTIME ===================== */
function subscribeToMessages() {
  realtimeChannels.forEach(ch => supabase.removeChannel(ch));
  realtimeChannels = [];

  const channel = supabase
    .channel('messages')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'messages' },
      (payload) => handleRealtimeMessage(payload)
    )
    .subscribe();

  realtimeChannels.push(channel);

  const profileChannel = supabase
    .channel('profiles')
    .on('postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'profiles' },
      (payload) => handleProfileUpdate(payload)
    )
    .subscribe();

  realtimeChannels.push(profileChannel);
}

function handleRealtimeMessage(payload) {
  const { eventType, new: newRecord, old: oldRecord } = payload;

  if (eventType === 'INSERT') {
    if (newRecord.chat_id === currentChatId) {
      messages.push(newRecord);
      const list = $('#messages-list');
      list.appendChild(renderMessageBubble(newRecord));
      scrollToBottom();
      
      if (newRecord.receiver_id === currentUser.id) {
        supabase.from('messages').update({ read: true }).eq('id', newRecord.id);
      }
    }
    
    updateContactPreview(newRecord);
  } else if (eventType === 'UPDATE') {
    const idx = messages.findIndex(m => m.id === newRecord.id);
    if (idx !== -1) {
      messages[idx] = newRecord;
      if (currentChatId === newRecord.chat_id) {
        renderMessages();
      }
    }
  } else if (eventType === 'DELETE') {
    messages = messages.filter(m => m.id !== oldRecord.id);
    if (currentChatId === oldRecord.chat_id) {
      renderMessages();
    }
  }
}

function handleProfileUpdate(payload) {
  const profile = payload.new;
  const contact = contacts.find(c => c.user_id === profile.id);
  if (contact) {
    contact.status = profile.status;
    contact.last_seen = profile.last_seen;
    loadContacts();
  }
}

function updateContactPreview(msg) {
  const contact = contacts.find(c => c.chat_id === msg.chat_id);
  if (!contact) {
    loadContacts();
    return;
  }
  
  contact.last_message = msg.type === 'text' ? msg.content : '[вложение]';
  contact.last_message_time = msg.created_at;
  
  if (msg.receiver_id === currentUser.id && msg.chat_id !== currentChatId) {
    contact.unread = (contact.unread || 0) + 1;
  }
  
  loadContacts();
}

/* ===================== MESSAGE MENU ===================== */
function showMessageMenu(e, msg) {
  e.preventDefault();
  const menu = $('#msg-menu');
  menu.style.left = e.clientX + 'px';
  menu.style.top = e.clientY + 'px';
  toggleVisibility(menu, true);

  const handler = (ev) => {
    if (!ev.target.closest('.ctx-item')) return;
    const action = ev.target.closest('.ctx-item').dataset.action;
    
    switch(action) {
      case 'reply': setReply(msg.id); break;
      case 'edit': if (msg.sender_id === currentUser.id) editMessage(msg.id); break;
      case 'copy': navigator.clipboard.writeText(msg.content); showToast('Скопировано', 'ok'); break;
      case 'forward': showToast('Пересылка в разработке', 'inf'); break;
      case 'pin': showToast('Закрепление в разработке', 'inf'); break;
      case 'react': showReactionPicker(msg.id, e); break;
      case 'delete': 
        if (msg.sender_id === currentUser.id) deleteMessage(msg.id);
        break;
    }
    toggleVisibility(menu, false);
    document.removeEventListener('click', handler);
  };

  setTimeout(() => document.addEventListener('click', handler), 10);
}

async function deleteMessage(msgId) {
  const { error } = await supabase.from('messages').delete().eq('id', msgId);
  if (error) showToast('Ошибка удаления', 'err');
  else showToast('Сообщение удалено', 'ok');
}

/* ===================== REACTIONS ===================== */
function showReactionPicker(msgId, e) {
  const picker = $('#reaction-picker');
  picker.style.left = (e.clientX - 100) + 'px';
  picker.style.top = (e.clientY - 50) + 'px';
  toggleVisibility(picker, true);
  
  picker.dataset.msgId = msgId;
  
  const handler = (ev) => {
    if (ev.target.classList.contains('react-btn')) {
      toggleReaction(msgId, ev.target.dataset.emoji);
      toggleVisibility(picker, false);
    } else if (!ev.target.closest('#reaction-picker')) {
      toggleVisibility(picker, false);
      document.removeEventListener('click', handler);
    }
  };
  
  setTimeout(() => document.addEventListener('click', handler), 10);
}

async function toggleReaction(msgId, emoji) {
  const msg = messages.find(m => m.id === msgId);
  if (!msg) return;

  const reactions = { ...msg.reactions } || {};
  if (!reactions[emoji]) reactions[emoji] = [];
  
  const idx = reactions[emoji].indexOf(currentUser.id);
  if (idx > -1) {
    reactions[emoji].splice(idx, 1);
    if (reactions[emoji].length === 0) delete reactions[emoji];
  } else {
    reactions[emoji].push(currentUser.id);
  }

  const { error } = await supabase
    .from('messages')
    .update({ reactions })
    .eq('id', msgId);

  if (error) showToast('Ошибка реакции', 'err');
}

/* ===================== ATTACHMENTS ===================== */
$('#attach-btn').addEventListener('click', () => {
  const menu = $('#attach-menu');
  toggleVisibility(menu, !menu.classList.contains('hidden'));
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#attach-btn') && !e.target.closest('#attach-menu')) {
    toggleVisibility('#attach-menu', false);
  }
});

$$('.attach-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const type = opt.dataset.type;
    showToast(`${type} в разработке`, 'inf');
    toggleVisibility('#attach-menu', false);
  });
});

/* ===================== VOICE ===================== */
$('#voice-btn').addEventListener('click', startVoiceRecording);

function startVoiceRecording() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast('Голосовые не поддерживаются', 'warn');
    return;
  }

  toggleVisibility('#voice-recorder', true);
  toggleVisibility('#composer', false);
  
  voiceStartTime = Date.now();
  const timer = $('#voice-recorder .voice-time');
  
  const interval = setInterval(() => {
    const diff = Math.floor((Date.now() - voiceStartTime) / 1000);
    const m = Math.floor(diff / 60).toString().padStart(2, '0');
    const s = (diff % 60).toString().padStart(2, '0');
    timer.textContent = `${m}:${s}`;
  }, 1000);

  $('#voice-recorder').dataset.interval = interval;
}

$('#voice-stop').addEventListener('click', async () => {
  clearInterval(parseInt($('#voice-recorder').dataset.interval));
  
  const duration = Math.floor((Date.now() - voiceStartTime) / 1000);
  const durationStr = `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`;
  
  const voiceData = {
    duration: durationStr,
    url: 'voice-placeholder'
  };

  const messageData = {
    chat_id: currentChatId,
    sender_id: currentUser.id,
    receiver_id: currentChatUser.user_id,
    content: JSON.stringify(voiceData),
    type: 'voice',
    read: false,
    edited: false,
    reactions: {}
  };

  await supabase.from('messages').insert(messageData);
  
  toggleVisibility('#voice-recorder', false);
  toggleVisibility('#composer', true);
  showToast('Голосовое отправлено', 'ok');
});

$('#voice-cancel').addEventListener('click', () => {
  clearInterval(parseInt($('#voice-recorder').dataset.interval));
  toggleVisibility('#voice-recorder', false);
  toggleVisibility('#composer', true);
});

/* ===================== GIFTS ===================== */
$('#gift-btn').addEventListener('click', () => {
  if (!currentChatUser) return;
  toggleVisibility('#gift-modal', true);
  selectedGift = null;
  $$('.gift-cell').forEach(c => c.classList.remove('picked'));
});

$('#close-gift').addEventListener('click', () => {
  toggleVisibility('#gift-modal', false);
});

$$('.gift-cell').forEach(cell => {
  cell.addEventListener('click', () => {
    $$('.gift-cell').forEach(c => c.classList.remove('picked'));
    cell.classList.add('picked');
    selectedGift = cell.dataset.gift;
  });
});

$('#send-gift-btn').addEventListener('click', async () => {
  if (!selectedGift) {
    showToast('Выберите подарок', 'warn');
    return;
  }

  const giftMap = {
    rose: { icon: 'ROZA', title: 'Роза', sub: 'Романтика' },
    heart: { icon: 'SERDCE', title: 'Сердце', sub: 'Любовь' },
    star: { icon: 'ZVEZDA', title: 'Звезда', sub: 'Восхищение' },
    crown: { icon: 'KORONA', title: 'Корона', sub: 'Король' },
    trophy: { icon: 'KUBOK', title: 'Кубок', sub: 'Победа' },
    fire: { icon: 'OGON', title: 'Огонь', sub: 'Жарко' },
    diamond: { icon: 'ALMAZ', title: 'Алмаз', sub: 'Роскошь' },
    rocket: { icon: 'RAKETA', title: 'Ракета', sub: 'Вперед' }
  };

  const gift = giftMap[selectedGift];
  const giftData = {
    icon: gift.icon,
    title: gift.title,
    from: currentUser.display_name || currentUser.username
  };

  const messageData = {
    chat_id: currentChatId,
    sender_id: currentUser.id,
    receiver_id: currentChatUser.user_id,
    content: JSON.stringify(giftData),
    type: 'gift',
    read: false,
    edited: false,
    reactions: {}
  };

  const { error } = await supabase.from('messages').insert(messageData);
  if (error) {
    showToast('Ошибка отправки подарка', 'err');
    return;
  }

  toggleVisibility('#gift-modal', false);
  showToast('Подарок отправлен!', 'ok');
});

/* ===================== SETTINGS ===================== */
$('#settings-btn').addEventListener('click', () => {
  toggleVisibility('#settings-modal', true);
});

$('#close-settings').addEventListener('click', () => {
  toggleVisibility('#settings-modal', false);
});

$('#dark-theme').addEventListener('change', (e) => {
  darkTheme = e.target.checked;
  document.body.style.setProperty('--bg', darkTheme ? '#0a0a1a' : '#f0f0f5');
  document.body.style.setProperty('--bg-elevated', darkTheme ? '#12122a' : '#ffffff');
  document.body.style.setProperty('--bg-card', darkTheme ? '#1a1a3e' : '#ffffff');
  document.body.style.setProperty('--text', darkTheme ? '#f0f0ff' : '#1a1a2e');
  document.body.style.setProperty('--text-secondary', darkTheme ? '#a0a0c0' : '#6b7280');
});

$('#privacy-online').addEventListener('change', async (e) => {
  await supabase.from('profiles').update({ status: e.target.checked ? 'online' : 'offline' }).eq('id', currentUser.id);
});

$('#logout-btn').addEventListener('click', async () => {
  await supabase.auth.signOut();
  showToast('Вы вышли из аккаунта', 'inf');
});

$('#delete-account-btn').addEventListener('click', () => {
  toggleVisibility('#confirm-modal', true);
  $('#confirm-title').textContent = 'Удалить аккаунт?';
  $('#confirm-text').textContent = 'Это действие нельзя отменить. Все данные будут удалены.';
});

$('#confirm-cancel').addEventListener('click', () => {
  toggleVisibility('#confirm-modal', false);
});

$('#confirm-ok').addEventListener('click', async () => {
  toggleVisibility('#confirm-modal', false);
  showToast('Удаление в разработке', 'inf');
});

/* ===================== CHAT MENU ===================== */
$('#chat-menu-btn').addEventListener('click', (e) => {
  const menu = $('#msg-menu');
  menu.style.left = (e.clientX - 150) + 'px';
  menu.style.top = e.clientY + 'px';
  toggleVisibility(menu, true);
  
  const handler = (ev) => {
    if (!ev.target.closest('.ctx-item')) {
      toggleVisibility(menu, false);
      document.removeEventListener('click', handler);
    }
  };
  setTimeout(() => document.addEventListener('click', handler), 10);
});

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  
  // Close panels on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.emoji-panel') && !e.target.closest('.emoji-toggle')) {
      toggleVisibility('#emoji-picker', false);
    }
  });
});
