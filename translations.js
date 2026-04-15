// Translation System for Chinese Heritage Website - FIXED VERSION
class TranslationManager {
    constructor() {
        this.currentLanguage = this.loadLanguage();
        this._listenersAttached = false;
        this.translations = {
            en: {
                'page.title': "Chinese Heritage - Discover China's Architectural Wonders",
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.explore': 'Explore',
                'nav.marvels': 'Marvels',
                'nav.treasures': 'Treasures',
                'nav.selectCity': 'Select City',
                'nav.language': 'Language',
                'hero.subtitle': 'Experience the Beauty of Chinese Architecture',
                'hero.title': 'Discover the Timeless Elegance',
                'hero.titleHighlight': "of China's Historic Buildings",
                'hero.description': "Explore the Rich Cultural Heritage of China's Architectural Wonders — from towering pagodas to serene imperial temples.",
                'hero.signup': 'Sign Up Now',
                'hero.login': 'Login',
                'hero.playGame': 'Play Game',
                'stats.cities': 'Historic Cities',
                'stats.years': 'Years of History',
                'stats.landmarks': 'Iconic Landmarks',
                'about.title': 'Immerse Yourself',
                'about.subtitle': "China's architectural landscape is a tapestry of ancient wisdom and modern innovation",
                'about.discover': 'Discover the Artistry',
                'about.discoverDesc': "Chinese architecture blends harmonious aesthetics with practical functionality — a testament to the country's rich cultural heritage spanning thousands of years.",
                'about.explore': 'Explore the Cities',
                'about.exploreDesc': "From the Forbidden City in Beijing to the Terracotta Army in Xi'an, journey through China's most iconic historical destinations.",
                'about.uncover': 'Uncover the Secrets',
                'about.uncoverDesc': 'Delve into the design principles and techniques passed down through generations, uncovering the fascinating histories behind each marvel.',
                'cities.title': 'Featured Cities',
                'cities.subtitle': "Explore China's most breathtaking historic destinations",
                'cities.forbiddenCity': 'Forbidden City',
                'cities.terracottaArmy': 'Terracotta Army',
                'cities.westLake': 'West Lake',
                'cities.imperialCapital': 'Imperial Capital',
                'cities.ancientCapital': 'Ancient Capital',
                'cities.paradise': 'Paradise on Earth',
                'cities.exploreCity': 'Explore City',
                'cities.classicalGardens': 'Classical Gardens',
                'cities.beijing.bio': "The heart of dynastic China — home to the world's largest palace complex and over 600 years of imperial history.",
                'cities.xian.bio': "One of the oldest cities in China and home to the legendary Terracotta Army — 8,000 life-sized warriors guarding Emperor Qin.",
                'cities.hangzhou.bio': "West Lake remains a UNESCO-listed masterpiece of landscape design and one of China's most beloved destinations.",
                'marvels.title': 'Architectural Marvels',
                'marvels.subtitle': "Design styles that shaped China's iconic structures",
                'marvels.imperial': 'Imperial Style',
                'marvels.pagoda': 'Pagoda Architecture',
                'marvels.mostIconic': 'Most Iconic',
                'marvels.garden': 'Garden Design',
                'marvels.yellowTiles': 'Yellow glazed roof tiles',
                'marvels.symmetrical': 'Symmetrical layouts',
                'marvels.dragonMotifs': 'Dragon & phoenix motifs',
                'marvels.forbiddenCity': 'Forbidden City, Beijing',
                'marvels.multiTiered': 'Multi-tiered towers',
                'marvels.buddhist': 'Buddhist influence',
                'marvels.curvedEaves': 'Curved eave rooflines',
                'marvels.foundAcrossCities': 'Found across all cities',
                'marvels.yearsOld': 'Over 1,500 years old',
                'marvels.scholarsRock': "Scholar's rock features",
                'marvels.pavilions': 'Pavilions & bridges',
                'marvels.harmony': 'Harmony with nature',
                'marvels.classicalGardens': 'Suzhou Classical Gardens',
                'marvels.explore': 'Explore',
                'marvels.discover': 'Discover',
                'testimonials.title': 'Visitor Stories',
                'testimonials.story1': '"Walking through the Forbidden City felt like stepping back 600 years in time. The sheer scale and detail of the architecture left me speechless."',
                'testimonials.name1': 'James Davidson',
                'testimonials.visitedBeijing': 'Visited Beijing',
                'testimonials.story2': '"The Terracotta Army in Xi\'an is unlike anything I\'ve ever seen. Each warrior has a unique face — it\'s a miracle of ancient craftsmanship."',
                'testimonials.name2': 'Maria Kovács',
                'testimonials.visitedXian': "Visited Xi'an",
                'testimonials.story3': '"Suzhou\'s classical gardens are pure serenity. Every pavilion, every rock, every pond is placed with centuries of artistic intention."',
                'testimonials.name3': 'Anna Laurent',
                'testimonials.visitedSuzhou': 'Visited Suzhou',
                'cta.tagline': 'Uncover the Secrets',
                'cta.title': 'Timeless Treasures Await',
                'cta.description': 'Immerse yourself in the captivating world of Chinese architecture, where each building tells a story of the past and a vision for the future.',
                'cta.beginJourney': 'Begin Your Journey',
                'cta.freeAccess': 'Free access · No registration required',
                'footer.desc': "A curated journey through China's architectural heritage — explore iconic structures, meanings, and stories across centuries.",
                'footer.quickLinks': 'Quick Links',
                'footer.exploreCities': 'Explore Cities',
                'footer.contact': 'Contact',
                'footer.privacy': 'Privacy',
                'footer.terms': 'Terms',
                'footer.cookies': 'Cookies',
                'footer.rights': '© 2026 Chinese-Heritage. All rights reserved.',
                'city.beijing': 'Beijing',
                'city.xian': "Xi'an",
                'city.hangzhou': 'Hangzhou',
                'city.suzhou': 'Suzhou',
                'city.tianjin': 'Tianjin',
                'city.jinan': 'Jinan',
                'city.changchun': 'Changchun',
                'city.luoyang': 'Luoyang',
                'city.chengdu': 'Chengdu',
                'city.chooseCity': 'Choose a City',
                'lang.en': 'English',
                'lang.zh': '中文 (Chinese)',
                'lang.ar': 'العربية (Arabic)',
                'lang.current': 'English'
            },
            zh: {
                'page.title': '中国遗产 - 探索中国建筑奇迹',
                'nav.home': '首页',
                'nav.about': '关于',
                'nav.explore': '探索',
                'nav.marvels': '奇迹',
                'nav.treasures': '宝藏',
                'nav.selectCity': '选择城市',
                'nav.language': '语言',
                'hero.subtitle': '体验中国建筑之美',
                'hero.title': '发现永恒的优雅',
                'hero.titleHighlight': '中国历史建筑',
                'hero.description': '探索中国丰富的建筑文化遗产——从高耸的宝塔到宁静的皇家寺庙。',
                'hero.signup': '立即注册',
                'hero.login': '登录',
                'hero.playGame': '玩游戏',
                'stats.cities': '历史名城',
                'stats.years': '年历史',
                'stats.landmarks': '标志性建筑',
                'about.title': '沉浸其中',
                'about.subtitle': '中国的建筑景观是古老智慧和现代创新的织锦',
                'about.discover': '发现艺术',
                'about.discoverDesc': '中国建筑融合了和谐美学与实用功能——这是这个国家丰富文化遗产跨越数千年的见证。',
                'about.explore': '探索城市',
                'about.exploreDesc': '从北京紫禁城到西安兵马俑，穿越中国最具标志性的历史目的地。',
                'about.uncover': '揭开秘密',
                'about.uncoverDesc': '深入研究代代相传的设计原则和技巧，揭开每个奇迹背后的迷人历史。',
                'cities.title': '特色城市',
                'cities.subtitle': '探索中国最令人叹为观止的历史目的地',
                'cities.forbiddenCity': '紫禁城',
                'cities.terracottaArmy': '兵马俑',
                'cities.westLake': '西湖',
                'cities.imperialCapital': '中国首都',
                'cities.ancientCapital': '古都',
                'cities.paradise': '人间天堂',
                'cities.exploreCity': '探索城市',
                'cities.classicalGardens': '苏州古典园林',
                'cities.beijing.bio': '中国王朝的中心——拥有世界上最大的宫殿建筑群和600多年的帝国历史。',
                'cities.xian.bio': '中国最古老的城市之一，传奇兵马俑的故乡——8000个真人大小的战士守护着秦始皇。',
                'cities.hangzhou.bio': '西湖是联合国教科文组织列入遗产名录的景观设计杰作，也是中国最受喜爱的目的地之一。',
                'marvels.title': '建筑奇迹',
                'marvels.subtitle': '塑造中国标志性建筑的设计风格',
                'marvels.imperial': '皇家风格',
                'marvels.pagoda': '宝塔建筑',
                'marvels.mostIconic': '最具标志性',
                'marvels.garden': '园林设计',
                'marvels.yellowTiles': '黄色琉璃瓦',
                'marvels.symmetrical': '对称布局',
                'marvels.dragonMotifs': '龙凤图案',
                'marvels.forbiddenCity': '北京紫禁城',
                'marvels.multiTiered': '多层塔',
                'marvels.buddhist': '佛教影响',
                'marvels.curvedEaves': '弯曲屋檐',
                'marvels.foundAcrossCities': '遍布全城',
                'marvels.yearsOld': '超过1500年历史',
                'marvels.scholarsRock': '文人石',
                'marvels.pavilions': '亭台桥梁',
                'marvels.harmony': '与自然和谐',
                'marvels.classicalGardens': '苏州古典园林',
                'marvels.explore': '探索',
                'marvels.discover': '发现',
                'testimonials.title': '游客故事',
                'testimonials.story1': '"走在紫禁城里，感觉就像回到了600年前。建筑的规模和细节让我惊叹不已。"',
                'testimonials.name1': '詹姆斯·戴维森',
                'testimonials.visitedBeijing': '访问北京',
                'testimonials.story2': '"西安的兵马俑是我从未见过的景象。每个战士都有独特的面孔——这是古代工艺的奇迹。"',
                'testimonials.name2': '玛丽亚·科瓦奇',
                'testimonials.visitedXian': '访问西安',
                'testimonials.story3': '"苏州的古典园林是纯粹的宁静。每个亭子、每块石头、每个池塘都蕴含着几个世纪的艺术意图。"',
                'testimonials.name3': '安娜·洛朗',
                'testimonials.visitedSuzhou': '访问苏州',
                'cta.tagline': '揭开秘密',
                'cta.title': '永恒的宝藏等待',
                'cta.description': '沉浸在迷人的中国建筑世界中，每座建筑都讲述着过去的故事和未来的愿景。',
                'cta.beginJourney': '开始旅程',
                'cta.freeAccess': '免费访问 · 无需注册',
                'footer.desc': '通过我们精心策划的历史地标和文化宝藏，探索中国丰富的建筑遗产。',
                'footer.quickLinks': '快速链接',
                'footer.exploreCities': '探索城市',
                'footer.contact': '联系我们',
                'footer.privacy': '隐私',
                'footer.terms': '条款',
                'footer.cookies': 'Cookie',
                'footer.rights': '© 2026 中国遗产。版权所有。',
                'city.beijing': '北京',
                'city.xian': '西安',
                'city.hangzhou': '杭州',
                'city.suzhou': '苏州',
                'city.tianjin': '天津',
                'city.jinan': '济南',
                'city.changchun': '长春',
                'city.luoyang': '洛阳',
                'city.chengdu': '成都',
                'city.chooseCity': '选择城市',
                'lang.en': 'English',
                'lang.zh': '中文 (Chinese)',
                'lang.ar': 'العربية (Arabic)',
                'lang.current': '中文'
            },
            ar: {
                'page.title': 'التراث الصيني - اكتشف عجائب العمارة الصينية',
                'nav.home': 'الرئيسية',
                'nav.about': 'من نحن',
                'nav.explore': 'استكشف',
                'nav.marvels': 'العجائب',
                'nav.treasures': 'الكنوز',
                'nav.selectCity': 'اختر المدينة',
                'nav.language': 'اللغة',
                'hero.subtitle': 'استمتع بجمال العمارة الصينية',
                'hero.title': 'اكتشف الأناقة الخالدة',
                'hero.titleHighlight': 'لمباني الصين التاريخية',
                'hero.description': 'استكشف التراث الثقافي الغني للصين من خلال عجائبها المعمارية—من الأبراج الشاهقة إلى المعابد الإمبراطورية الهادئة.',
                'hero.signup': 'سجل الآن',
                'hero.login': 'تسجيل الدخول',
                'hero.playGame': 'العب اللعبة',
                'stats.cities': 'المدن التاريخية',
                'stats.years': 'سنوات من التاريخ',
                'stats.landmarks': 'معالم أيقونية',
                'about.title': 'انغمس فيها',
                'about.subtitle': 'المشهد المعماري للصين هو نسيج من الحكمة القديمة والابتكار الحديث',
                'about.discover': 'اكتشف الفن',
                'about.discoverDesc': 'العمارة الصينية تدمج الجماليات المتناغمة مع الوظائف العملية—شهادة على التراث الثقافي الغني للصين الذي يمتد لآلاف السنين.',
                'about.explore': 'استكشف المدن',
                'about.exploreDesc': 'من المدينة المحرمة في بكين إلى جيش الطين في شيان، انطلق في رحلة عبر أشهر الوجهات التاريخية في الصين.',
                'about.uncover': 'اكتشف الأسرار',
                'about.uncoverDesc': 'تعمق في مبادئ التصميم والتقنيات المنقولة عبر الأجيال، واكتشف التواريخ الرائعة وراء كل عجيبة.',
                'cities.title': 'المدن المميزة',
                'cities.subtitle': 'استكشف أروع الوجهات التاريخية في الصين',
                'cities.forbiddenCity': 'المدينة المحرمة',
                'cities.terracottaArmy': 'جيش الطين',
                'cities.westLake': 'البحيرة الغربية',
                'cities.imperialCapital': 'العاصمة الإمبراطورية',
                'cities.ancientCapital': 'العاصمة القديمة',
                'cities.paradise': 'الجنة على الأرض',
                'cities.exploreCity': 'استكشف المدينة',
                'cities.classicalGardens': 'حدائق سوتشو الكلاسيكية',
                'cities.beijing.bio': 'قلب الصين الأسري — موطن أكبر مجمع قصور في العالم وأكثر من 600 عام من التاريخ الإمبراطوري.',
                'cities.xian.bio': 'إحدى أقدم مدن الصين وموطن جيش الطين الأسطوري — 8000 محارب بحجم الإنسان يحرسون الإمبراطور تشين.',
                'cities.hangzhou.bio': 'البحيرة الغربية تبقى تحفة فنية معمارية مدرجة في اليونسكو وإحدى أحب الوجهات في الصين.',
                'marvels.title': 'العجائب المعمارية',
                'marvels.subtitle': 'الأساليب التصميمية التي شكلت المباني الأيقونية في الصين',
                'marvels.imperial': 'الأسلوب الإمبراطوري',
                'marvels.pagoda': 'عمارة الباغودا',
                'marvels.mostIconic': 'الأكثر أيقونية',
                'marvels.garden': 'تصميم الحدائق',
                'marvels.yellowTiles': 'بلاط السقف الأصفر المزجج',
                'marvels.symmetrical': 'التخطيطات المتناظرة',
                'marvels.dragonMotifs': 'زخارف التنين والفينيكس',
                'marvels.forbiddenCity': 'المدينة المحرمة، بكين',
                'marvels.multiTiered': 'الأبراج متعددة الطبقات',
                'marvels.buddhist': 'التأثير البوذي',
                'marvels.curvedEaves': 'حواف السقف المنحنية',
                'marvels.foundAcrossCities': 'توجد في جميع المدن',
                'marvels.yearsOld': 'أكثر من 1500 عام',
                'marvels.scholarsRock': 'ميزات صخور العلماء',
                'marvels.pavilions': 'الأجنحة والجسور',
                'marvels.harmony': 'الانسجام مع الطبيعة',
                'marvels.classicalGardens': 'حدائق سوتشو الكلاسيكية',
                'marvels.explore': 'استكشف',
                'marvels.discover': 'اكتشف',
                'testimonials.title': 'قصص الزوار',
                'testimonials.story1': '"المشي في المدينة المحرمة شعر وكأنني عدت 600 عاماً في الزمن. المقياس الهائل وتفاصيل العمارة تركتني عاجزاً عن الكلام."',
                'testimonials.name1': 'جيمس ديفيدسون',
                'testimonials.visitedBeijing': 'زار بكين',
                'testimonials.story2': '"جيش الطين في شيان ليس مثله شيء رأيته من قبل. كل محارب له وجه فريد—إنه معجزة من الحرفية القديمة."',
                'testimonials.name2': 'ماريا كوفاتش',
                'testimonials.visitedXian': 'زار شيان',
                'testimonials.story3': '"حدائق سوتشو الكلاسيكية هي صفاء نقي. كل جناح، كل صخرة، كل بركة وضعت بقرون من النية الفنية."',
                'testimonials.name3': 'آنا لوران',
                'testimonials.visitedSuzhou': 'زار سوتشو',
                'cta.tagline': 'اكتشف الأسرار',
                'cta.title': 'الكنوز الخالدة في انتظارك',
                'cta.description': 'انغمس في العالم الساحر للعمارة الصينية، حيث كل مبنى يحكي قصة الماضي ورؤية للمستقبل.',
                'cta.beginJourney': 'ابدأ رحلتك',
                'cta.freeAccess': 'وصول مجاني · لا حاجة للتسجيل',
                'footer.desc': 'رحلة منسقة عبر التراث المعماري الصيني — استكشف المباني الأيقونية ومعانيها وقصصها عبر القرون.',
                'footer.quickLinks': 'روابط سريعة',
                'footer.exploreCities': 'استكشف المدن',
                'footer.contact': 'اتصل بنا',
                'footer.privacy': 'الخصوصية',
                'footer.terms': 'الشروط',
                'footer.cookies': 'الكوكيز',
                'footer.rights': '© 2026 التراث الصيني. جميع الحقوق محفوظة.',
                'city.beijing': 'بكين',
                'city.xian': 'شيان',
                'city.hangzhou': 'هانغتشو',
                'city.suzhou': 'سوتشو',
                'city.tianjin': 'تيانجين',
                'city.jinan': 'جينان',
                'city.changchun': 'تشانغتشون',
                'city.luoyang': 'لوويانغ',
                'city.chengdu': 'تشنغدو',
                'city.chooseCity': 'اختر مدينة',
                'lang.en': 'English',
                'lang.zh': '中文 (Chinese)',
                'lang.ar': 'العربية (Arabic)',
                'lang.current': 'العربية'
            }
        };
    }

    loadLanguage() {
        return localStorage.getItem('chineseHeritageLanguage') || 'en';
    }

    saveLanguage(lang) {
        localStorage.setItem('chineseHeritageLanguage', lang);
        this.currentLanguage = lang;
    }

    // FIXED: flat key lookup
    t(key) {
        const langData = this.translations[this.currentLanguage] || this.translations['en'];
        return langData[key] || this.translations['en'][key] || key;
    }

    updatePageLanguage() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const val = this.t(key);
            if (val && val !== key) el.textContent = val;
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            const val = this.t(key);
            if (val && val !== key) el.placeholder = val;
        });

        const titleEl = document.querySelector('title[data-translate]');
        if (titleEl) document.title = this.t(titleEl.getAttribute('data-translate'));

        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLanguage;

        console.log('Language updated to:', this.currentLanguage);
    }

    // FIXED: attach listeners only once
    setupLanguageSelector() {
        if (this._listenersAttached) return;
        this._listenersAttached = true;

        document.querySelectorAll('.language-option[data-lang]').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeLanguage(option.getAttribute('data-lang'));
            });
        });
    }

    changeLanguage(lang) {
        if (!this.translations[lang]) return;
        this.saveLanguage(lang);
        this.updatePageLanguage();

        const existing = document.querySelector('.lang-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'lang-toast';
        toast.textContent = this.t('lang.current');
        toast.style.cssText = `
            position:fixed; top:80px; right:20px;
            background:linear-gradient(135deg,#BB1E1E,#8B0000);
            color:#FFD700; padding:12px 20px; border-radius:8px;
            box-shadow:0 4px 12px rgba(0,0,0,0.4); z-index:10000;
            font-family:"Poppins",sans-serif; font-weight:600;
            font-size:14px;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    }

    initializeLanguage() {
        this.updatePageLanguage();
        this.setupLanguageSelector();
    }

    getCurrentLanguage() { return this.currentLanguage; }
}

window.translationManager = new TranslationManager();

document.addEventListener('DOMContentLoaded', function () {
    window.translationManager.initializeLanguage();
});