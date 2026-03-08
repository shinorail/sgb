// 言語データの一元管理（ここを増やすだけで全ページ対応！）
const translations = {
    'ja': {
        'nav-home': 'ホーム',
        'nav-link': '連携設定',
        'welcome-title': 'SGB 公式システム',
        'welcome-desc': 'Discordプロフィールと連動する次世代RPG。',
        'btn-start': '冒険を始める',
        'footer-copy': '© 2026 SGB Project - 長野から世界へ'
    },
    'en': {
        'nav-home': 'Home',
        'nav-link': 'Linked Role',
        'welcome-title': 'SGB Official System',
        'welcome-desc': 'The next-gen RPG synced with your Discord profile.',
        'btn-start': 'Start Adventure',
        'footer-copy': '© 2026 SGB Project - From Nagano to the World'
    }
};

function switchLang(lang) {
    localStorage.setItem('sgb_lang', lang);
    updatePageText(lang);
}

function updatePageText(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // ボタンの見た目を変えるなどの処理
    document.documentElement.lang = lang;
}

// ページ読み込み時に自動適用
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('sgb_lang') || 'ja';
    updatePageText(savedLang);
});
