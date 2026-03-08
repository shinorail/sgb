const i18n = {
    'ja': {
        // ナビ
        'nav-home': 'ホーム', 'nav-link': 'レンケイ', 'nav-terms': 'キヤク', 'nav-privacy': 'プライバシー',
        // トップページ
        'hero-title': 'SGB システム 公式',
        'hero-desc': 'ディスコードの プロフィールに ステータスを ひょうじさせる。あなたの ぼうけんが、いま はじまる。',
        // 404
        'error-title': '404 エラー', 'error-desc': 'その ページは みつかりませんでした。コマンドを まちがえたようです。',
        // フッター
        'footer': '© 2026 SGB プロジェクト - しなのから せかいへ'
    },
    'en': {
        // Nav
        'nav-home': 'Home', 'nav-link': 'Link', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        // Index
        'hero-title': 'SGB System Official',
        'hero-desc': 'Sync your stats to your Discord profile. Your adventure begins now.',
        // 404
        'error-title': '404 Error', 'error-desc': 'Page not found. Seems like a wrong command.',
        // Footer
        'footer': '© 2026 SGB Project - From Shinano'
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
    // ボタンの見た目を調整（オプション）
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', applyTranslations);
