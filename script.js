const translations = {
    'ja': {
        'nav-home': 'ホーム',
        'nav-link': 'Discord連携',
        'main-title': 'SGB システム公式サイト',
        'main-desc': 'Discordプロフィールにステータスを表示できる、次世代のRPG Bot。',
        'btn-invite': 'Botを招待する',
        'btn-docs': '使い方ガイド',
        'feature-title': '主な機能',
        'feature-1': '⚔️ 本格RPG体験',
        'feature-2': '🔗 Discordプロフィール連動',
        'footer-text': '© 2026 SGB Project - 高校生活への第一歩'
    },
    'en': {
        'nav-home': 'Home',
        'nav-link': 'Discord Link',
        'main-title': 'SGB System Official',
        'main-desc': 'Next-gen RPG Bot that displays your stats on your Discord profile.',
        'btn-invite': 'Invite Bot',
        'btn-docs': 'User Guide',
        'feature-title': 'Features',
        'feature-1': '⚔️ Authentic RPG Experience',
        'feature-2': '🔗 Discord Role Connection',
        'footer-text': '© 2026 SGB Project - From Nagano'
    }
};

function switchLang(lang) {
    localStorage.setItem('sgb_lang', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // 言語に合わせてHTMLのlang属性も変更
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('sgb_lang') || 'ja';
    applyTranslations(savedLang);
});
