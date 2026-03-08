const i18n = {
    'ja': {
        // ナビ
        'nav-home': 'ホーム', 'nav-link': 'レンケイ', 'nav-terms': 'キヤク', 'nav-privacy': 'プライバシー',
        // 紹介ページ (SGBの真の姿)
        'idx-h1': 'あなたのサーバーが冒険の舞台に！',
        'idx-p': 'SGBは、チャットで手軽に遊べる本格放置型RPG Botです。',
        'idx-f1-t': '⚔️ /adventure', 'idx-f1-d': '多彩なモンスターとバトル！レアな「はぐれメタル」を倒して一気にレベルアップ。',
        'idx-f2-t': '💰 /shop', 'idx-f2-d': '手に入れたゴールドで装備を整えよう。セレクトメニューで買い物もスムーズ！',
        'idx-f3-t': '🏆 /ranking', 'idx-f3-d': 'サーバー内のライバルとレベルを競い合え！最強の冒険者を目指そう。',
        'idx-f4-t': '📊 /status', 'idx-f4-d': '自分の成長をいつでも確認。Discordプロフィールにデータが連動します。',
        'dev-info': '開発者: r.m031y',
        'footer': '© 2026 SGB Project'
    },
    'en': {
        // Nav
        'nav-home': 'Home', 'nav-link': 'Link', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        // Content
        'idx-h1': 'Your Server Becomes an Adventure!',
        'idx-p': 'SGB is a full-fledged idle RPG Bot playable via chat.',
        'idx-f1-t': '⚔️ /adventure', 'idx-f1-d': 'Battle various monsters! Defeat the rare "Liquid Metal Slime" to level up fast.',
        'idx-f2-t': '💰 /shop', 'idx-f2-d': 'Equip yourself with gold. Shopping is smooth with select menus!',
        'idx-f3-t': '🏆 /ranking', 'idx-f3-d': 'Compete with rivals in your server and reach the top!',
        'idx-f4-t': '📊 /status', 'idx-f4-d': 'Check your growth anytime. Data syncs with your Discord profile.',
        'dev-info': 'Developer: r.m031y',
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
