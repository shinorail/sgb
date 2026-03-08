const translations = {
    'ja': {
        'nav-home': 'ホーム',
        'nav-link': '連携設定',
        'hero-title': 'SGB システム公式サイト',
        'hero-desc': 'Discordプロフィールにステータスを表示。あなたの冒険が、プロフィールを彩る。',
        'btn-invite': 'Botを招待する',
        'btn-guide': 'マニュアル',
        'feature-title': 'システムの特長',
        'feature-rpg': '⚔️ 本格RPG',
        'feature-sync': '🔗 リアルタイム連動',
        'feature-web': '🌐 Webダッシュボード',
        'footer-copy': '© 2026 SGB Project - 信濃から世界へ'
    },
    'en': {
        'nav-home': 'Home',
        'nav-link': 'Linked Role',
        'hero-title': 'SGB Official System',
        'hero-desc': 'Sync your stats to your Discord profile. Your adventure, displayed to the world.',
        'btn-invite': 'Invite Bot',
        'btn-guide': 'Guide',
        'feature-title': 'Key Features',
        'feature-rpg': '⚔️ Authentic RPG',
        'feature-sync': '🔗 Live Syncing',
        'feature-web': '🌐 Web Dashboard',
        'footer-copy': '© 2026 SGB Project - From Shinano'
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
    // ボタンのアクティブ状態を視覚的に変える場合などに使用
    document.documentElement.lang = lang;
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('sgb_lang') || 'ja';
    applyTranslations(savedLang);
});
