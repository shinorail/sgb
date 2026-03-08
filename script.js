const i18n = {
    'ja': {
        'nav-home': 'ホーム', 'nav-terms': '利用規約', 'nav-privacy': 'プライバシーポリシー',
        'idx-h1': 'あなたのサーバーが冒険の舞台に！',
        'idx-p': 'SGBは、チャットで手軽に遊べる本格放置型RPG Botです。',
        // 規約（超ロング版の抜粋 - 実際はもっと長い文章が入ります）
        'terms-h1': '利用規約 (Terms of Service)',
        'terms-full': '第1条（適用）本規約は、r.m031y（以下「開発者」）が提供する「SGB」の利用条件を定めるものです。ユーザーは本ボットをサーバーに追加した時点で本規約の全条項に同意したものとみなします。第2条（禁止事項）ユーザーは、以下の行為を行ってはなりません。(1)プログラムの解析、改ざん、逆コンパイル。(2)不具合の意図的な利用。(3)他ユーザーへの誹謗中傷。(4)運営を妨害する行為。第3条（サービスの停止）開発者は予告なくサービスを停止、変更できるものとします...',
        // プライバシー
        'privacy-h1': 'プライバシーポリシー',
        'privacy-full': '当プロジェクトは、ユーザーのプライバシー保護を重視します。取得するデータはDiscordのユーザーID、サーバーID、およびゲーム内ステータスに限られます。これらのデータはゲーム体験の向上とランキング、プロフィール連動のみに使用し、第三者への販売や提供は一切行いません。データ削除を希望する場合は、公式サーバーより申請を行ってください...',
        'sim-title': 'コマンドシミュレーター',
        'sim-btn': '実行結果を確認',
        'footer': '© 2026 SGB Project - Developer: r.m031y'
    },
    'en': {
        'nav-home': 'Home', 'nav-terms': 'Terms', 'nav-privacy': 'Privacy',
        'idx-h1': 'Your Server is the Stage!',
        'idx-p': 'SGB is a full-fledged idle RPG Bot.',
        'terms-h1': 'Terms of Service',
        'terms-full': 'Article 1 (Application) These terms set the conditions for SGB... Article 2 (Prohibitions) Users must not modify programs or harass others...',
        'privacy-h1': 'Privacy Policy',
        'privacy-full': 'We value your privacy. Data collected is limited to Discord IDs for gaming purposes only...',
        'sim-title': 'Command Simulator',
        'sim-btn': 'Run Command',
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

// シミュレーター機能
function runSim() {
    const output = document.getElementById('sim-output');
    output.style.display = 'block';
    output.innerHTML = `
        <div class="discord-msg">
            <span class="bot-tag">BOT</span> <strong>SGB</strong> <span class="time">今日 17:00</span><br>
            <div class="embed">
                <h4 style="color:#5865F2;margin:0;">⚔️ 冒険の結果</h4>
                <p><strong>はぐれメタル</strong> があらわれた！<br>
                会心の一撃！ 10500の経験値を獲得！</p>
                <p style="font-size:0.8rem;color:#8b949e;">Lv. 9 → <span style="color:#00d2ff;">Lv. 12 UP!</span></p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', applyTranslations);
