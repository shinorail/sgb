const i18n = {
    'ja': {
        'nav-home': 'ホーム', 'nav-support': 'サポート', 'nav-terms': '利用規約', 'nav-privacy': 'プライバシー',
        'idx-h1': 'あなたのサーバーが冒険の舞台に！',
        'idx-p': 'SGBは、チャットで手軽に遊べる本格放置型RPG Botです。24時間稼働中！最強の冒険者を目指して、今すぐ旅に出よう。',
        'dev': '開発者: r.m031y',
        'sim-title': 'サーバー・シミュレーター',
        'sup-h1': 'サポート・公式サーバー',
        'sup-p': 'SGBを実際に体験したり、開発者に質問ができる公式コミュニティです。',
        'sup-btn': '公式サーバーに参加する',
        'faq-h1': 'よくある質問',
        'faq-q1': 'Q. 利用料金はかかりますか？', 'faq-a1': 'A. すべて無料で遊べます。',
        'faq-q2': 'Q. データが消えました。', 'faq-a2': 'A. 開発者の r.m031y までお問い合わせください。',
        'form-h1': 'お問い合わせフォーム',
        'form-btn': 'Discordへ送信する',
        'form-ok': '送信完了！Discordを確認してください。',
        'form-ng': 'エラーが発生しました。',
        'terms-h1': 'SGB 利用規約',
        'terms-body': `第1条（目的）本規約は、開発者r.m031yが提供するBot「SGB」の利用条件を定めるものです。第2条（同意）ユーザーは、本サービスを利用した時点で規約に同意したものとみなされます。第3条（禁止事項）不正利用、改造、嫌がらせ行為を禁止します。第4条（免責）運営は利用により発生した損害に責任を負いません。`,
        'priv-h1': 'プライバシーポリシー',
        'priv-body': `1.取得情報：Discord ID、サーバーID。2.利用目的：ゲーム進行とランキング表示。3.管理：データは安全に管理し、第三者提供は行いません。`,
        'footer': '© 2026 SGB Project - Powered by r.m031y'
    },
    'en': {
        'nav-home': 'Home', 'nav-support': 'Support', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        'idx-h1': 'Your Server, Your Adventure!',
        'idx-p': 'SGB is a full-fledged idle RPG Bot. Available 24/7! Join the journey.',
        'dev': 'Dev: r.m031y',
        'sim-title': 'Server Simulator',
        'sup-h1': 'Support & Official Server',
        'sup-p': 'Join our community to try SGB and ask questions.',
        'sup-btn': 'Join Server',
        'faq-h1': 'FAQ',
        'faq-q1': 'Q. Is it free?', 'faq-a1': 'A. Yes, it is free.',
        'faq-q2': 'Q. Lost data?', 'faq-a2': 'A. Contact r.m031y.',
        'form-h1': 'Contact Form',
        'form-btn': 'Send to Discord',
        'form-ok': 'Sent successfully!',
        'form-ng': 'Error occurred.',
        'terms-h1': 'Terms of Service',
        'terms-body': `Terms of service content goes here...`,
        'priv-h1': 'Privacy Policy',
        'priv-body': `Privacy policy content goes here...`,
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

function runSim(cmd) {
    const screen = document.getElementById('sim-screen');
    let content = "";
    if(cmd === 'adv') content = `<h4>⚔️ 冒険の結果</h4><p><strong>はぐれメタル</strong> があらわれた！<br>会心の一撃！10500 EXP獲得！</p>`;
    if(cmd === 'shop') content = `<h4>💰 ショップ</h4><p>1: 鋼のつるぎ (500G)<br>2: 魔法の盾 (1200G)</p>`;
    if(cmd === 'rank') content = `<h4>🏆 ランキング</h4><p>1位: r.m031y (Lv.99)</p>`;
    if(cmd === 'status') content = `<h4>📊 ステータス</h4><p>レベル: 12<br>ゴールド: 2540G</p>`;

    screen.innerHTML = `
        <div class="msg"><div class="avatar"></div><div class="msg-content">
        <span class="bot-name">SGB</span><span class="bot-tag">BOT</span>
        <div class="embed">${content}</div></div></div>`;
}

// フォーム送信処理 (Webhook)
document.addEventListener('submit', async (e) => {
    if (e.target.id !== 'contact-form') return;
    e.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const msg = document.getElementById('form-msg').value;
    const status = document.getElementById('form-status');
    const lang = localStorage.getItem('sgb_lang') || 'ja';

    const WEBHOOK_URL = "https://discord.com/api/webhooks/1480126236004057231/DDOCp_ltWv6X17umFGNjX18TbT8h8DAQWNhweE2-W0CUOWs6PsYrfKOc6xZOvublipiV";

    const payload = {
        embeds: [{
            title: "🌐 Webサイトからのお問い合わせ",
            color: 5814783,
            fields: [
                { name: "名前", value: name, inline: true },
                { name: "メッセージ", value: msg }
            ],
            footer: { text: "SGB Support System" }
        }]
    };

    try {
        const res = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            status.textContent = i18n[lang]['form-ok'];
            status.className = 'success';
            e.target.reset();
        } else { throw new Error(); }
    } catch {
        status.textContent = i18n[lang]['form-ng'];
        status.className = 'error';
    }
});

document.addEventListener('DOMContentLoaded', applyTranslations);
