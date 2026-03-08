const i18n = {
    'ja': {
        'nav-home': 'ホーム', 'nav-link': '連携設定', 'nav-terms': '利用規約', 'nav-privacy': 'プライバシー',
        'index-h1': 'SGB システム 公式サイト',
        'index-p': 'Discordプロフィールにゲームステータスを同期する、公式の連携システムです。',
        'terms-h1': '利用規約',
        'terms-p': '本システムを利用するにあたり、以下の規約に同意したものとみなします。',
        'footer': '© 2026 SGB Project'
    },
    'en': {
        'nav-home': 'Home', 'nav-link': 'Linked Role', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        'index-h1': 'SGB System Official',
        'index-p': 'An official system for syncing game stats to your Discord profile.',
        'terms-h1': 'Terms of Service',
        'terms-p': 'By using this system, you agree to the following terms and conditions.',
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
}

document.addEventListener('DOMContentLoaded', applyTranslations);
