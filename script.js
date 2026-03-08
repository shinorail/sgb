const i18n = {
    'ja': {
        'nav-home': 'ホーム', 'nav-link': '連携設定', 'nav-terms': '規約', 'nav-privacy': '個人情報',
        'idx-h1': 'SGB システム 公式サイト',
        'idx-p': 'Discordプロフィールにゲームのステータスを表示する連携システムです。',
        'terms-h1': '利用規約',
        'terms-p': 'Botの利用にあたり、不正行為や迷惑行為を禁止します。',
        'privacy-h1': 'プライバシーポリシー',
        'privacy-p': '取得したID等のデータは、ゲームの連携表示以外には使用しません。',
        'footer': '© 2026 SGB Project'
    },
    'en': {
        'nav-home': 'Home', 'nav-link': 'Link', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        'idx-h1': 'SGB System Official',
        'idx-p': 'System for syncing game stats to your Discord profile.',
        'terms-h1': 'Terms of Service',
        'terms-p': 'Cheating and nuisance behavior are prohibited.',
        'privacy-h1': 'Privacy Policy',
        'privacy-p': 'User data is used only for game-role synchronization.',
        'footer': '© 2026 SGB Project'
    }
};

function switchLang(lang) {
    localStorage.setItem('sgb_lang', lang);
    applyTranslations();
}

function applyTranslations() {
    const lang = localStorage.getItem('sgb_lang') || 'ja';
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', applyTranslations);
