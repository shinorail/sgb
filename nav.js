/**
 * SGB PROJECT 共通ナビゲーション管理スクリプト
 */
const Navigation = {
    links: [
        { name: 'Home', url: 'index.html' },
        { name: 'About', url: 'index.html#about' },
        { name: 'Bestiary', url: 'index.html#monster' },
        { name: 'Guide', url: 'commands.html' },
        // 秘密のページへのリンクを追加
        { name: 'Secret', url: 'secret.html', isSecret: true }
    ],
    discordUrl: 'https://discord.gg/cV9ECW5KG2',

    render: function() {
        const container = document.getElementById('nav-container');
        if (!container) return;

        const navHTML = `
        <nav class="fixed top-0 left-0 w-full z-50 glass px-4 md:px-8 py-4 flex justify-between items-center border-b border-white/10" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(20px);">
            <div class="flex items-center gap-3">
                <a href="index.html" class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                        <i class="fas fa-sword text-white"></i>
                    </div>
                    <span class="text-xl font-black tracking-tighter text-white">SGB <span class="text-sky-400">PROJECT</span></span>
                </a>
            </div>

            <!-- PC用メニュー -->
            <div class="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white">
                ${this.links.map(link => `
                    <a href="${link.url}" class="transition ${link.isSecret ? 'text-sky-400 hover:text-sky-300 flex items-center gap-2' : 'hover:text-sky-400'}">
                        ${link.isSecret ? '<i class="fas fa-lock text-[10px]"></i>' : ''}${link.name}
                    </a>
                `).join('')}
                <a href="${this.discordUrl}" target="_blank" class="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition shadow-lg shadow-indigo-500/30">Join Discord</a>
            </div>

            <!-- モバイル用トグルボタン -->
            <button id="menu-btn" class="lg:hidden text-white">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </nav>

        <!-- モバイル用オーバーレイメニュー -->
        <div id="mobile-menu" class="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden transition-transform duration-300 translate-x-full">
            <button id="close-btn" class="absolute top-6 right-6 text-white text-3xl">
                <i class="fas fa-times"></i>
            </button>
            ${this.links.map(link => `
                <a href="${link.url}" class="text-2xl font-black uppercase transition ${link.isSecret ? 'text-sky-400' : 'text-white hover:text-sky-400'}">
                    ${link.isSecret ? '<i class="fas fa-lock mr-3 text-lg"></i>' : ''}${link.name}
                </a>
            `).join('')}
            <a href="${this.discordUrl}" target="_blank" class="text-2xl font-black text-indigo-400 uppercase">Discord</a>
        </div>
        `;

        container.innerHTML = navHTML;
        this.initEvents();
    },

    initEvents: function() {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;

        menuBtn?.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });
        closeBtn?.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
        });
    }
};

// ページの読み込み完了時にナビゲーションを描画
document.addEventListener('DOMContentLoaded', () => {
    Navigation.render();
});
