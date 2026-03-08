const i18n = {
    'ja': {
        'nav-home': 'ホーム', 'nav-terms': '利用規約', 'nav-privacy': 'プライバシー',
        'idx-h1': 'あなたのサーバーが冒険の舞台に！',
        'idx-p': 'SGBは、チャットで手軽に遊べる本格放置型RPG Botです。24時間稼働中！最強の冒険者を目指して、今すぐ旅に出よう。',
        'dev': '開発者: r.m031y',
        'sim-title': 'サーバー・シミュレーター',
        'terms-h1': 'SGB 利用規約',
        'terms-body': `第1条（目的）
        // ja の中に追加
'nav-support': 'サポート',
'sup-h1': 'サポート・公式サーバー',
'sup-p': 'SGBを実際に体験したり、開発者に質問ができる公式コミュニティです。',
'sup-btn': '公式サーバーに参加する',
'faq-h1': 'よくある質問',
'faq-q1': 'Q. 利用料金はかかりますか？',
'faq-a1': 'A. すべて無料で遊べます。',
'faq-q2': 'Q. データが消えました。',
'faq-a2': 'A. 開発者の r.m031y までお問い合わせください。',

本規約は、開発者r.m031y（以下「運営」）が提供するDiscord Bot「SGB」（以下「本サービス」）の利用条件を定めるものです。
第2条（同意）
ユーザーは、本サービスをサーバーに追加、またはコマンドを実行した時点で、本規約およびプライバシーポリシーに同意したものとみなされます。
第3条（禁止事項）
1. 本サービスの不具合（バグ）を意図的に利用し、不正にアイテムや経験値を取得する行為。
2. 本サービスのプログラムを解析、改造、逆コンパイルする行為。
3. 他のユーザーに対する誹謗中傷、嫌がらせ、または運営を妨害する一切の行為。
第4条（免責事項）
運営は、本サービスの利用により発生した損害について一切の責任を負いません。データは予告なくリセットされる場合があります。`,
        'priv-h1': 'プライバシーポリシー',
        'priv-body': `当プロジェクトでは、ユーザーのプライバシーを最優先に考えます。
1. 取得する情報：DiscordのユーザーID、サーバーID、およびゲーム内進行データ。
2. 利用目的：ゲームの実行、ランキングの表示、およびプロフィール連動機能。
3. データの保管：Firebase Realtime Databaseにて安全に管理されます。
4. データの削除：ボットをサーバーから削除してもデータは残りますが、申請により完全に削除可能です。`,
        'footer': '© 2026 SGB Project - Powered by r.m031y'
    },
    'en': {
        'nav-home': 'Home', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        'idx-h1': 'Your Server, Your Adventure!',
        'idx-p': 'SGB is a full-fledged idle RPG Bot playable via chat. Available 24/7! Start your journey to become the strongest.',
        'dev': 'Dev: r.m031y',
        'sim-title': 'Server Simulator',
        'terms-h1': 'Terms of Service',
        'terms-body': `Art 1 (Purpose)... Art 2 (Consent)... Art 3 (Prohibitions)... Art 4 (Disclaimer)...`,
        'priv-h1': 'Privacy Policy',
        'priv-body': `1. Collected Data: Discord ID, Server ID... 2. Purpose: Gaming & Rankings...`,
        'footer': '© 2026 SGB Project'
        // en の中に追加
'nav-support': 'Support',
'sup-h1': 'Support & Official Server',
'sup-p': 'The official community where you can try SGB and ask questions.',
'sup-btn': 'Join Official Server',
'faq-h1': 'FAQ',
'faq-q1': 'Q. Is it free to use?',
'faq-a1': 'A. Yes, it is completely free.',
'faq-q2': 'Q. My data is gone.',
'faq-a2': 'A. Please contact the developer, r.m031y.',
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
    if(cmd === 'adv') content = `<h4>⚔️ 冒険の結果</h4><p><strong>はぐれメタル</strong> があらわれた！<br>会心の一撃！10500 EXP獲得！</p><p style="color:#00d2ff">Lv. 9 → Lv. 12 UP!</p>`;
    if(cmd === 'shop') content = `<h4>💰 SGB ショップ</h4><p>1: 鋼のつるぎ (500G)<br>2: 魔法の盾 (1200G)<br><strong>購入する番号を入力してください。</strong></p>`;
    if(cmd === 'rank') content = `<h4>🏆 サーバーランキング</h4><p>1位: r.m031y (Lv.99)<br>2位: Adventurer (Lv.12)<br>3位: QuestMaster (Lv.8)</p>`;
    if(cmd === 'status') content = `<h4>📊 ステータス</h4><p>プレイヤー: <strong>ユーザー名</strong><br>レベル: 12<br>ゴールド: 2540G<br>称号: 初心者卒業</p>`;

    screen.innerHTML = `
        <div class="msg">
            <div class="avatar"></div>
            <div class="msg-content">
                <span class="bot-name">SGB</span><span class="bot-tag">BOT</span>
                <div class="embed">${content}</div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', applyTranslations);
