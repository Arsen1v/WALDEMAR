// ========== WALDEMAR MESSENGER - Supabase Edition ==========
// Онлайн мессенджер с реальным сервером (Supabase)

// ========== SUPABASE CONFIG ==========
// ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ на свои из Supabase Dashboard!
const SUPABASE_URL = 'https://iovbirqmgpjzjcnjbqav.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3_csJ3ON3rzeBnkvwHPk_w_FHPTUowU';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========== EMOJI DATA ==========
const emojis = {
    smileys: ['😀','😃','😄','😁','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕'],
    hearts: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🈳','🈂','🛂','🛃','🛄','🛅','🛗','🚹','🚺','🚼','⚧','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','⏏️','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↪️','↩️','⤴️','⤵️','🔀','🔁','🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','🔜','✔️','☑️','🔘','🔴','🟠','🟡','🟢','🔵','🟣','⚫','⚪','🟤','🔺','🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾','◽','◼️','◻️','🟥','🟧','🟨','🟩','🟦','🟪','⬛','⬜','🟫','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','💬','💭','🗯','♠️','♣️','♥️','♦️','🃏','🎴','🀄','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧'],
    hands: ['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀','👁','👅','👄','💋','🩸'],
    animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐻‍❄️','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦟','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🐓','🦃','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦦','🦥','🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🐚','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄','🌬','💨','💧','💦','☔','☂️','🌊','🌫'],
    food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🍍','🥝','🥥','🥑','🍆','🥔','🥕','🌽','🌶','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🥤','🧋','🧃','🧉','🧊','🥢','🍽','🍴','🥄','🔪','🏺']
};

// ========== STATE ==========
let currentUser = null;
let currentChat = null;
let allUsers = [];
let myContacts = [];
let messagesSubscription = null;
let contextMenuOpen = null;
let confirmCallback = null;
let chatMenuDropdown = null;
let editingName = false;

// ========== DOM ELEMENTS ==========
const authScreen = document.getElementById('auth-screen');
const app = document.getElementById('app');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const contactsList = document.getElementById('contacts-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');
const closeSearchBtn = document.getElementById('close-search');
const contactsSection = document.getElementById('contacts-section');
const messagesList = document.getElementById('messages-list');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const emojiBtn = document.getElementById('emoji-btn');
const emojiPicker = document.getElementById('emoji-picker');
const emojiGrid = document.getElementById('emoji-grid');
const emojiCats = document.querySelectorAll('.emoji-cat');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettingsBtn = document.getElementById('close-settings');
const logoutBtn = document.getElementById('logout-btn');
const chatHeader = document.getElementById('chat-header');
const messagesContainer = document.getElementById('messages-container');
const inputArea = document.getElementById('input-area');
const emptyState = document.getElementById('empty-state');
const toastContainer = document.getElementById('toast-container');
const confirmModal = document.getElementById('confirm-modal');
const confirmTitle = document.getElementById('confirm-title');
const confirmText = document.getElementById('confirm-text');
const confirmCancel = document.getElementById('confirm-cancel');
const confirmOk = document.getElementById('confirm-ok');
const clearChatBtn = document.getElementById('clear-chat-btn');
const deleteChatBtn = document.getElementById('delete-chat-btn');
const chatMenuBtn = document.getElementById('chat-menu-btn');
const editNameBtn = document.getElementById('edit-name-btn');

// ========== INIT ==========
function init() {
    if (SUPABASE_URL === 'https://YOUR_PROJECT_ID.supabase.co') {
        showToast('Ошибка: Не настроен Supabase! См. инструкцию в README.txt', 'error');
        return;
    }

    setupEventListeners();
    renderEmojiGrid('smileys');

    const savedSession = localStorage.getItem('waldemar_session');
    if (savedSession) {
        currentUser = JSON.parse(savedSession);
        showApp();
    }
}

// ========== AUTH ==========
function showApp() {
    authScreen.classList.add('hidden');
    app.classList.remove('hidden');
    updateCurrentUserUI();
    startSupabaseListeners();
}

function showAuth() {
    authScreen.classList.remove('hidden');
    app.classList.add('hidden');
    currentUser = null;
    currentChat = null;
    localStorage.removeItem('waldemar_session');
    stopSupabaseListeners();
    showEmptyState();
}

function showEmptyState() {
    emptyState.classList.remove('hidden');
    chatHeader.classList.add('hidden');
    messagesContainer.classList.add('hidden');
    inputArea.classList.add('hidden');
    currentChat = null;
}

function showChatUI() {
    emptyState.classList.add('hidden');
    chatHeader.classList.remove('hidden');
    messagesContainer.classList.remove('hidden');
    inputArea.classList.remove('hidden');
}

function updateCurrentUserUI() {
    if (!currentUser) return;
    document.getElementById('current-user-name').textContent = currentUser.name;
    document.getElementById('current-user-avatar').textContent = currentUser.avatar || currentUser.name[0].toUpperCase();
    document.getElementById('settings-name').textContent = currentUser.name;
    document.getElementById('settings-username').textContent = '@' + currentUser.username;
}

// ========== SUPABASE LISTENERS ==========
let usersChannel = null;
let contactsChannel = null;

async function startSupabaseListeners() {
    if (!currentUser) return;

    // Load all users
    await loadAllUsers();

    // Load my contacts
    await loadMyContacts();

    // Subscribe to users changes
    usersChannel = supabase
        .channel('users_changes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, () => {
            loadAllUsers();
        })
        .subscribe();

    // Subscribe to contacts changes
    contactsChannel = supabase
        .channel('contacts_changes_' + currentUser.id)
        .on('postgres_changes', { 
            event: '*', 
            schema: 'public', 
            table: 'contacts',
            filter: 'user_id=eq.' + currentUser.id
        }, () => {
            loadMyContacts();
        })
        .subscribe();

    // Update online status
    updateOnlineStatus();
}

function stopSupabaseListeners() {
    if (usersChannel) {
        supabase.removeChannel(usersChannel);
        usersChannel = null;
    }
    if (contactsChannel) {
        supabase.removeChannel(contactsChannel);
        contactsChannel = null;
    }
    if (messagesSubscription) {
        supabase.removeChannel(messagesSubscription);
        messagesSubscription = null;
    }
}

async function loadAllUsers() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
        console.error('Error loading users:', error);
        return;
    }
    allUsers = data || [];
    renderContacts();
    if (currentChat) {
        updateChatHeader(currentChat);
    }
}

async function loadMyContacts() {
    const { data, error } = await supabase
        .from('contacts')
        .select('*, users!contacts_contact_id_fkey(*)')
        .eq('user_id', currentUser.id);

    if (error) {
        console.error('Error loading contacts:', error);
        return;
    }

    myContacts = data || [];
    renderContacts();
}

async function updateOnlineStatus() {
    if (!currentUser) return;
    await supabase.from('users').update({ 
        status: 'online', 
        last_seen: new Date().toISOString() 
    }).eq('id', currentUser.id);
}

// ========== AUTH TABS ==========
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        loginForm.classList.toggle('active', tab.dataset.tab === 'login');
        registerForm.classList.toggle('active', tab.dataset.tab === 'register');
    });
});

// ========== REGISTER ==========
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    let username = document.getElementById('reg-username').value.replace('@', '').trim().toLowerCase();
    const password = document.getElementById('reg-password').value;

    if (username.length < 3) {
        showToast('Username минимум 3 символа', 'error');
        return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        showToast('Только буквы, цифры и _', 'error');
        return;
    }

    if (password.length < 4) {
        showToast('Пароль минимум 4 символа', 'error');
        return;
    }

    try {
        // Check if username exists
        const { data: existing } = await supabase.from('users').select('id').eq('username', username).single();
        if (existing) {
            showToast('Этот username занят', 'error');
            return;
        }
    } catch {
        // No user found - good
    }

    const newUser = {
        name: name,
        username: username,
        avatar: name[0].toUpperCase(),
        status: 'online',
        last_seen: new Date().toISOString(),
        password: password
    };

    const { data, error } = await supabase.from('users').insert(newUser).select().single();

    if (error) {
        showToast('Ошибка регистрации: ' + error.message, 'error');
        return;
    }

    currentUser = data;
    localStorage.setItem('waldemar_session', JSON.stringify(currentUser));
    showApp();
    showToast('Аккаунт создан!', 'success');
});

// ========== LOGIN ==========
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.replace('@', '').trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

    if (error || !data) {
        showToast('Неверный username или пароль', 'error');
        return;
    }

    currentUser = data;
    localStorage.setItem('waldemar_session', JSON.stringify(currentUser));
    showApp();
    showToast('Добро пожаловать, ' + data.name + '!', 'success');
});

// ========== SEARCH ==========
function searchUsers(query) {
    const q = query.replace('@', '').trim().toLowerCase();
    if (!q) return [];

    return allUsers.filter(u => {
        if (u.id === currentUser?.id) return false;
        return u.username.toLowerCase().includes(q) || u.name.toLowerCase().includes(q);
    });
}

function performSearch() {
    const query = searchInput.value;
    const results = searchUsers(query);

    searchResultsList.innerHTML = '';

    if (results.length === 0) {
        searchResultsList.innerHTML = '<div class="no-results">Пользователи не найдены</div>';
    } else {
        results.forEach(user => {
            const isContact = myContacts.find(c => c.contact_id === user.id);
            const div = document.createElement('div');
            div.className = 'contact-item';
            div.innerHTML = `
                <div class="user-avatar ${user.status === 'offline' ? 'offline' : ''}">${user.avatar}</div>
                <div class="contact-info">
                    <div class="contact-name">${user.name} <span class="contact-username">@${user.username}</span></div>
                    <div class="contact-preview">${formatLastSeen(user.last_seen) || 'в сети'}</div>
                </div>
                ${isContact 
                    ? `<button class="contact-add-btn" onclick="openChat('${user.id}')">Написать</button>`
                    : `<button class="contact-add-btn" onclick="addContact('${user.id}')">Добавить</button>`
                }
            `;
            searchResultsList.appendChild(div);
        });
    }

    searchResults.classList.remove('hidden');
    contactsSection.classList.add('hidden');
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') performSearch(); });
searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
        searchResults.classList.add('hidden');
        contactsSection.classList.remove('hidden');
    }
});
closeSearchBtn.addEventListener('click', () => {
    searchResults.classList.add('hidden');
    contactsSection.classList.remove('hidden');
    searchInput.value = '';
});

// ========== CONTACTS ==========
async function addContact(userId) {
    if (!currentUser || myContacts.find(c => c.contact_id === userId)) return;

    const chatId = [currentUser.id, userId].sort().join('_');

    // Add to my contacts
    const { error: error1 } = await supabase.from('contacts').insert({
        user_id: currentUser.id,
        contact_id: userId,
        chat_id: chatId
    });

    if (error1) {
        showToast('Ошибка: ' + error1.message, 'error');
        return;
    }

    // Add to their contacts
    await supabase.from('contacts').insert({
        user_id: userId,
        contact_id: currentUser.id,
        chat_id: chatId
    });

    showToast('Контакт добавлен!', 'success');
    openChat(userId);
}

async function removeContact(userId) {
    if (!currentUser) return;

    await supabase.from('contacts').delete()
        .eq('user_id', currentUser.id)
        .eq('contact_id', userId);

    if (currentChat === userId) {
        showEmptyState();
    }

    showToast('Чат удален', 'info');
    closeContextMenu();
    await loadMyContacts();
}

async function clearChatMessages(userId) {
    if (!currentUser) return;

    const contact = myContacts.find(c => c.contact_id === userId);
    if (!contact) return;

    await supabase.from('messages').delete().eq('chat_id', contact.chat_id);

    if (currentChat === userId) {
        renderMessages([]);
    }

    showToast('История очищена', 'info');
    closeContextMenu();
}

function renderContacts() {
    contactsList.innerHTML = '';
    document.getElementById('contacts-count').textContent = myContacts.length;

    if (myContacts.length === 0) {
        contactsList.innerHTML = '<div class="no-results">Нет чатов. Найдите друзей через поиск!</div>';
        return;
    }

    myContacts.forEach(contact => {
        const user = contact.users;
        if (!user) return;

        const div = document.createElement('div');
        div.className = `contact-item ${currentChat === user.id ? 'active' : ''}`;
        div.dataset.userId = user.id;

        div.innerHTML = `
            <div class="user-avatar ${user.status === 'offline' ? 'offline' : ''}">${user.avatar}</div>
            <div class="contact-info">
                <div class="contact-name">${user.name}</div>
                <div class="contact-preview">Нажмите, чтобы открыть чат</div>
            </div>
            <div class="contact-meta">
                <span class="contact-time"></span>
            </div>
            <button class="btn-icon contact-menu-btn" onclick="event.stopPropagation(); toggleContactMenu('${user.id}', this)">
                <i class="fas fa-ellipsis-h"></i>
            </button>
        `;

        div.addEventListener('click', () => openChat(user.id));
        contactsList.appendChild(div);
    });
}

// ========== CONTEXT MENU ==========
function toggleContactMenu(userId, btn) {
    if (contextMenuOpen) {
        const existing = document.querySelector('.context-menu');
        if (existing) existing.remove();
        if (contextMenuOpen === userId) {
            contextMenuOpen = null;
            return;
        }
    }

    contextMenuOpen = userId;

    const menu = document.createElement('div');
    menu.className = 'context-menu';
    menu.innerHTML = `
        <div class="context-menu-item" onclick="openChat('${userId}'); closeContextMenu();">
            <i class="fas fa-comment"></i> Открыть чат
        </div>
        <div class="context-menu-item" onclick="clearChatMessages('${userId}')">
            <i class="fas fa-eraser"></i> Очистить историю
        </div>
        <div class="context-menu-item danger" onclick="showConfirmDeleteChat('${userId}')">
            <i class="fas fa-trash"></i> Удалить чат
        </div>
    `;

    btn.parentElement.appendChild(menu);
}

function closeContextMenu() {
    const menu = document.querySelector('.context-menu');
    if (menu) menu.remove();
    contextMenuOpen = null;
}

// ========== CONFIRM MODAL ==========
function showConfirm(title, text, onConfirm) {
    confirmTitle.textContent = title;
    confirmText.textContent = text;
    confirmCallback = onConfirm;
    confirmModal.classList.remove('hidden');
}

function showConfirmDeleteChat(userId) {
    const user = allUsers.find(u => u.id === userId);
    showConfirm(
        'Удалить чат?',
        `Чат с ${user?.name || 'пользователем'} будет удален из списка.`,
        () => removeContact(userId)
    );
    closeContextMenu();
}

function showConfirmClearChat() {
    if (!currentChat) return;
    const user = allUsers.find(u => u.id === currentChat);
    showConfirm(
        'Очистить историю?',
        `Все сообщения с ${user?.name || 'пользователем'} будут удалены.`,
        () => clearChatMessages(currentChat)
    );
}

confirmCancel.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
    confirmCallback = null;
});

confirmOk.addEventListener('click', () => {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    confirmModal.classList.add('hidden');
});

confirmModal.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
        confirmModal.classList.add('hidden');
        confirmCallback = null;
    }
});

// ========== CHAT ==========
async function openChat(userId) {
    currentChat = userId;
    const user = allUsers.find(u => u.id === userId);
    if (!user) return;

    showChatUI();
    updateChatHeader(userId);

    const contact = myContacts.find(c => c.contact_id === userId);
    if (!contact) return;

    // Load existing messages
    const { data: messages } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', contact.chat_id)
        .order('created_at', { ascending: true });

    renderMessages(messages || []);

    // Subscribe to new messages
    if (messagesSubscription) {
        supabase.removeChannel(messagesSubscription);
    }

    messagesSubscription = supabase
        .channel('messages_' + contact.chat_id)
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'messages',
            filter: 'chat_id=eq.' + contact.chat_id
        }, (payload) => {
            const msg = payload.new;
            appendMessage(msg);
            scrollToBottom();
        })
        .subscribe();

    searchResults.classList.add('hidden');
    contactsSection.classList.remove('hidden');
    searchInput.value = '';
    closeContextMenu();
    renderContacts();
}

function updateChatHeader(userId) {
    const user = allUsers.find(u => u.id === userId);
    if (!user) return;

    document.getElementById('chat-name').textContent = user.name;
    document.getElementById('chat-avatar').textContent = user.avatar;
    document.getElementById('chat-status').textContent = formatLastSeen(user.last_seen) || 'в сети';
    document.getElementById('chat-status').className = `user-status ${user.status === 'offline' ? 'offline' : ''}`;
}

function renderMessages(msgs) {
    messagesList.innerHTML = '';

    if (!msgs || msgs.length === 0) {
        messagesList.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px;">Нет сообщений. Напишите первым!</div>';
        return;
    }

    msgs.forEach(msg => appendMessage(msg));
    scrollToBottom();
}

function appendMessage(msg) {
    const isSent = msg.sender_id === currentUser.id;
    const div = document.createElement('div');
    div.className = `message ${isSent ? 'sent' : 'received'}`;

    const time = new Date(msg.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

    div.innerHTML = `
        ${escapeHtml(msg.text)}
        <div class="message-time">
            ${time}
            ${isSent ? `<span class="message-status">✓</span>` : ''}
        </div>
    `;
    messagesList.appendChild(div);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ========== SEND MESSAGE ==========
async function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentChat || !currentUser) return;

    const contact = myContacts.find(c => c.contact_id === currentChat);
    if (!contact) return;

    const msg = {
        chat_id: contact.chat_id,
        sender_id: currentUser.id,
        text: text
    };

    const { error } = await supabase.from('messages').insert(msg);

    if (error) {
        showToast('Ошибка отправки: ' + error.message, 'error');
        return;
    }

    messageInput.value = '';
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// ========== EMOJI PICKER ==========
emojiBtn.addEventListener('click', () => {
    emojiPicker.classList.toggle('hidden');
});

emojiCats.forEach(cat => {
    cat.addEventListener('click', () => {
        emojiCats.forEach(c => c.classList.remove('active'));
        cat.classList.add('active');
        renderEmojiGrid(cat.dataset.cat);
    });
});

function renderEmojiGrid(category) {
    emojiGrid.innerHTML = '';
    const list = emojis[category] || [];
    list.forEach(emoji => {
        const span = document.createElement('span');
        span.className = 'emoji-item';
        span.textContent = emoji;
        span.addEventListener('click', () => {
            messageInput.value += emoji;
            messageInput.focus();
        });
        emojiGrid.appendChild(span);
    });
}

document.addEventListener('click', (e) => {
    if (!emojiPicker.contains(e.target) && e.target !== emojiBtn && !emojiBtn.contains(e.target)) {
        emojiPicker.classList.add('hidden');
    }
    if (!e.target.closest('.contact-menu-btn') && !e.target.closest('.context-menu')) {
        closeContextMenu();
    }
    if (chatMenuDropdown && !e.target.closest('.chat-menu-dropdown') && e.target !== chatMenuBtn) {
        chatMenuDropdown.remove();
        chatMenuDropdown = null;
    }
});

// ========== CHAT ACTIONS ==========
clearChatBtn.addEventListener('click', showConfirmClearChat);

deleteChatBtn.addEventListener('click', () => {
    if (currentChat) {
        showConfirmDeleteChat(currentChat);
    }
});

chatMenuBtn.addEventListener('click', () => {
    if (chatMenuDropdown) {
        chatMenuDropdown.remove();
        chatMenuDropdown = null;
        return;
    }

    chatMenuDropdown = document.createElement('div');
    chatMenuDropdown.className = 'chat-menu-dropdown';
    chatMenuDropdown.innerHTML = `
        <div class="context-menu-item" onclick="showConfirmClearChat(); document.querySelector('.chat-menu-dropdown')?.remove(); chatMenuDropdown=null;">
            <i class="fas fa-eraser"></i> Очистить историю
        </div>
        <div class="context-menu-item danger" onclick="if(currentChat){showConfirmDeleteChat(currentChat);} document.querySelector('.chat-menu-dropdown')?.remove(); chatMenuDropdown=null;">
            <i class="fas fa-trash"></i> Удалить чат
        </div>
    `;

    chatHeader.appendChild(chatMenuDropdown);
});

// ========== SETTINGS ==========
settingsBtn.addEventListener('click', () => {
    updateCurrentUserUI();
    settingsModal.classList.remove('hidden');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.add('hidden');
    }
});

logoutBtn.addEventListener('click', () => {
    showConfirm(
        'Выйти из аккаунта?',
        'Вы сможете войти снова используя свой username и пароль.',
        () => {
            if (currentUser) {
                supabase.from('users').update({ status: 'offline' }).eq('id', currentUser.id);
            }
            showAuth();
            settingsModal.classList.add('hidden');
            showToast('Вы вышли из аккаунта', 'info');
        }
    );
});

// Edit name
editNameBtn.addEventListener('click', () => {
    if (editingName || !currentUser) return;
    editingName = true;

    const nameSpan = document.getElementById('settings-name');
    const currentName = nameSpan.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.maxLength = 30;

    const parent = nameSpan.parentElement;
    nameSpan.style.display = 'none';
    parent.insertBefore(input, editNameBtn);
    input.focus();
    input.select();

    async function saveName() {
        const newName = input.value.trim();
        if (newName && newName !== currentName && currentUser) {
            const { error } = await supabase.from('users').update({
                name: newName,
                avatar: newName[0].toUpperCase()
            }).eq('id', currentUser.id);

            if (error) {
                showToast('Ошибка: ' + error.message, 'error');
            } else {
                currentUser.name = newName;
                currentUser.avatar = newName[0].toUpperCase();
                localStorage.setItem('waldemar_session', JSON.stringify(currentUser));
                updateCurrentUserUI();
                renderContacts();
                showToast('Имя обновлено!', 'success');
            }
        }
        input.remove();
        nameSpan.style.display = '';
        editingName = false;
    }

    input.addEventListener('blur', saveName);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.blur();
        if (e.key === 'Escape') {
            input.value = currentName;
            input.blur();
        }
    });
});

// ========== UTILS ==========
function formatLastSeen(lastSeen) {
    if (!lastSeen) return 'в сети';

    try {
        const date = new Date(lastSeen);
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);

        if (diff < 60) return 'только что';
        if (diff < 3600) return `${Math.floor(diff / 60)} мин назад`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} ч назад`;
        if (diff < 604800) return `${Math.floor(diff / 86400)} дн назад`;
        return date.toLocaleDateString('ru-RU');
    } catch {
        return lastSeen;
    }
}

// ========== TOAST ==========
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    toast.innerHTML = `<span>${icons[type]}</span> ${escapeHtml(message)}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    document.getElementById('attach-btn').addEventListener('click', () => {
        showToast('Прикрепление файлов (в разработке)', 'info');
    });
}

// ========== START ==========
init();
