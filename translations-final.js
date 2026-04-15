// Translation System for Chinese Heritage Website - Final Version
class TranslationManager {
    constructor() {
        // Define translations first
        this.translations = {
            en: {
                // Page
                'page.title': 'Chinese Heritage - Discover China\'s Architectural Wonders',
                
                // Navigation
                'home': 'Home',
                'about': 'About',
                'explore': 'Explore',
                'marvels': 'Marvels',
                'treasures': 'Treasures',
                'selectCity': 'Select City',
                'language': 'Language',
                
                // Hero Section
                'subtitle': 'Experience Beauty of Chinese Architecture',
                'title': 'Discover Timeless Elegance',
                'titleHighlight': 'of China\'s Historic Buildings',
                'description': 'Explore Rich Cultural Heritage of China\'s Architectural Wonders — from towering pagodas to serene imperial temples.',
                'signup': 'Sign Up Now',
                'login': 'Login',
                'playGame': 'Play Game',
                
                // Stats
                'stats.cities': 'Historic Cities',
                'stats.years': 'Years of History',
                'stats.landmarks': 'Iconic Landmarks',
                
                // About Section
                'about.title': 'Immerse Yourself',
                'about.subtitle': 'China\'s architectural landscape is a tapestry of ancient wisdom and modern innovation',
                'about.discover': 'Discover Artistry',
                'about.discoverDesc': 'Chinese architecture blends harmonious aesthetics with practical functionality — a testament to country\'s rich cultural heritage spanning thousands of years.',
                'about.explore': 'Explore the Cities',
                'about.exploreDesc': 'From the Forbidden City in Beijing to the Terracotta Army in Xi\'an, journey through China\'s most iconic historical destinations.',
                'about.uncover': 'Uncover the Secrets',
                'about.uncoverDesc': 'Delve into the design principles and techniques passed down through generations, uncovering the fascinating histories behind each marvel.',
                
                // Cities Section
                'cities.title': 'Featured Cities',
                'cities.subtitle': 'Explore China\'s most breathtaking historic destinations',
                'cities.forbiddenCity': 'Forbidden City',
                'cities.terracottaArmy': 'Terracotta Army',
                'cities.westLake': 'West Lake',
                'cities.imperialCapital': 'Imperial Capital',
                'cities.ancientCapital': 'Ancient Capital',
                'cities.paradise': 'Paradise on Earth',
                'cities.exploreCity': 'Explore City',
                'cities.classicalGardens': 'Classical Gardens',
                'cities.historicWaterTown': 'Historic Water Town',
                
                // City names
                'city.beijing': 'Beijing',
                'city.xian': 'Xi\'an',
                'city.hangzhou': 'Hangzhou',
                'city.suzhou': 'Suzhou',
                'city.tianjin': 'Tianjin',
                'city.jinan': 'Jinan',
                'city.changchun': 'Changchun',
                'city.luoyang': 'Luoyang',
                'city.chengdu': 'Chengdu',
                'city.chooseCity': 'Choose City',
                
                // Marvels Section
                'marvels.title': 'Architectural Marvels',
                'marvels.subtitle': 'Design styles that shaped China\'s iconic structures',
                'marvels.imperial': 'Imperial Architecture',
                'marvels.pagoda': 'Pagoda Architecture',
                'marvels.mostIconic': 'Most Iconic',
                'marvels.garden': 'Garden Design',
                'marvels.yellowTiles': 'Yellow glazed roof tiles',
                'marvels.symmetrical': 'Perfect symmetrical layout',
                'marvels.dragonMotifs': 'Dragon motifs and gold decoration',
                'marvels.multiTiered': 'Multi-tiered pagodas',
                'marvels.buddhist': 'Buddhist influence',
                'marvels.curvedEaves': 'Curved eaves with upturned corners',
                'marvels.scholarsRock': 'Scholar\'s rocks and lotus ponds',
                'marvels.pavilions': 'Pavilions and zigzag bridges',
                'marvels.harmony': 'Harmony with nature',
                'marvels.classicalGardens': 'Suzhou Classical Gardens',
                'marvels.foundAcrossCities': 'Found across all cities',
                'marvels.yearsOld': 'Over 1500 years old',
                'marvels.rammedEarth': 'Rammed earth and brick construction',
                'marvels.watchtowers': 'Watchtowers every 120 metres',
                'marvels.barbican': 'Barbican gate defence system',
                'marvels.riceMortar': 'Glutinous rice mortar — 650 years strong',
                'marvels.completeWall': 'Most complete wall in the world',
                'marvels.borrowedScenery': 'The art of borrowed scenery 借景',
                'marvels.explore': 'Explore',
                'marvels.discover': 'Discover',
                
                // Testimonials
                'testimonials.title': 'Visitor Stories',
                'testimonials.visitedBeijing': 'Visited Beijing',
                'testimonials.visitedXian': 'Visited Xi\'an',
                'testimonials.visitedSuzhou': 'Visited Suzhou',
                'testimonials.name1': 'James Davidson',
                'testimonials.name2': 'Maria Kovács',
                'testimonials.name3': 'Anna Laurent',
                'testimonials.story1': '"Walking through the Forbidden City felt like stepping back 600 years in time. The sheer scale and detail of the architecture left me speechless."',
                'testimonials.story2': '"The Terracotta Army in Xi\'an is unlike anything I\'ve ever seen. Each warrior has a unique face — it\'s a miracle of ancient craftsmanship."',
                'testimonials.story3': '"Suzhou\'s classical gardens are pure serenity. Every pavilion, every rock, every pond is placed with centuries of artistic intention."',
                
                // CTA Section
                'cta.tagline': 'Uncover the Secrets',
                'cta.title': 'Timeless Treasures Await',
                'cta.description': 'Immerse yourself in the captivating world of Chinese architecture, where each building tells a story of the past and a vision for the future.',
                'cta.beginJourney': 'Begin Your Journey',
                'cta.freeAccess': 'Free access · No registration required',
                
                // Footer
                'footer.desc': 'A curated journey through China\'s architectural heritage — explore iconic structures, meanings, and stories across centuries.',
                'footer.quickLinks': 'Quick Links',
                'footer.exploreCities': 'Explore Cities',
                'footer.contact': 'Contact',
                'footer.privacy': 'Privacy Policy',
                'footer.terms': 'Terms of Service',
                'footer.cookies': 'Cookies',
                'footer.about': 'About Us',
                'footer.rights': ' 2026 Chinese-Heritage. All rights reserved.',
                
                // Language names
                'lang.english': 'English',
                'lang.chinese': '中文',
                'lang.arabic': 'العربية',
                'lang.current': 'English',
                
                // Additional UI elements
                'logout': 'Logout',
                'retryMap': 'Retry Map Loading',
                'mapLoadingFailed': 'Interactive Map',
                'mapFailedDesc': 'Failed to load map',
                'mapFailedNote': 'Please explore the cities below',
                
                // City bios
                'cities.beijing.bio': 'The heart of China\'s dynasties — home to the world\'s largest palace complex and over 600 years of imperial history.',
                'cities.xian.bio': 'The heart of China\'s dynasties — home to the legendary Terracotta Army, thousands of life-sized warriors guarding the eternal rest of Qin Shi Huang.',
                'cities.hangzhou.bio': 'Famous for its beautiful West Lake and ancient temples, this city has inspired countless Chinese poets and artists throughout history.',
                'cities.suzhou.bio': 'Known as the "Venice of the East", this city is famous for its exquisite classical gardens and ancient canals.',
                'cities.tianjin.bio': 'A historic port city where traditional Chinese architecture meets European colonial influence.',
                'cities.jinan.bio': '"The City of Springs", famous for its natural springs and ancient Buddhist temples.',
                'cities.changchun.bio': '"The Spring City of the North", once the capital of Manchukuo, with a unique architectural heritage.',
                'cities.luoyang.bio': 'One of China\'s ancient capitals, home to the famous Longmen Grottoes and thousands of Buddha statues.',
                'cities.chengdu.bio': 'The land of pandas and ancient Shu culture, featuring traditional tea houses and historic streets.',
                
                // Alert messages
                'alerts.userProfile': 'User Profile',
                'alerts.name': 'Name',
                'alerts.email': 'Email',
                'alerts.memberSince': 'Member Since',
                'alerts.loginCount': 'Login Count',
                'alerts.lastLogin': 'Last Login',
                'alerts.never': 'Never',
                'alerts.enjoyMessage': 'Enjoy exploring Chinese Heritage!',
                'alerts.logoutSuccess': 'Logged out successfully',
                'alerts.loginRequired': 'Please login to continue',
                
                // Page
                'page.title': 'Chinese Heritage - Discover China\'s Architectural Wonders',
                
                // Navigation
                'home': 'Home',
                
                // Additional UI elements
                'logout': 'Logout',
                'retryMap': 'Retry Map Loading',
                'mapLoadingFailed': 'Interactive Map',
                'mapFailedDesc': 'Failed to load map',
                'mapFailedNote': 'Please explore the cities below',
                
                // City bios
                'cities.beijing.bio': 'The heart of China\'s dynasties — home to the world\'s largest palace complex and over 600 years of imperial history.',
                'cities.xian.bio': 'The heart of China\'s dynasties — home to the legendary Terracotta Army, thousands of life-sized warriors guarding the eternal rest of Qin Shi Huang.',
                'cities.hangzhou.bio': 'Famous for its beautiful West Lake and ancient temples, this city has inspired countless Chinese poets and artists throughout history.',
                'cities.suzhou.bio': 'Known as the "Venice of the East", this city is famous for its exquisite classical gardens and ancient canals.',
                'cities.tianjin.bio': 'A historic port city where traditional Chinese architecture meets European colonial influence.',
                'cities.jinan.bio': '"The City of Springs", famous for its natural springs and ancient Buddhist temples.',
                'cities.changchun.bio': '"The Spring City of the North", once the capital of Manchukuo, with a unique architectural heritage.',
                'cities.luoyang.bio': 'One of China\'s ancient capitals, home to the famous Longmen Grottoes and thousands of Buddha statues.',
                'cities.chengdu.bio': 'The land of pandas and ancient Shu culture, featuring traditional tea houses and historic streets.',
                
                // Alert messages
                'alerts.userProfile': 'User Profile',
                'alerts.name': 'Name',
                'alerts.email': 'Email',
                'alerts.memberSince': 'Member Since',
                'alerts.loginCount': 'Login Count',
                'alerts.lastLogin': 'Last Login',
                'alerts.never': 'Never',
                'alerts.enjoyMessage': 'Enjoy exploring Chinese Heritage!',
                'alerts.logoutSuccess': 'Logged out successfully',
                'alerts.loginRequired': 'Please login to continue',
                
                // Page
                'page.title': 'Chinese Heritage - Discover China\'s Architectural Wonders',
                
                // Navigation
                'home': 'Home',
                   // Alert messages
                'alerts.userProfile': 'User Profile',
                'alerts.name': 'Name',
                'alerts.email': 'Email',
                'alerts.memberSince': 'Member Since',
                'alerts.loginCount': 'Login Count',
                'alerts.lastLogin': 'Last Login',
                'alerts.never': 'Never',
                'alerts.enjoyMessage': 'Enjoy exploring Chinese Heritage!',
                'alerts.logoutSuccess': 'Successfully logged out',
                'alerts.loginRequired': 'Please login to continue',
                // City-specific content
                'beijing.architecture.title': 'Architecture of Forbidden City',
                'beijing.architecture.desc': 'See the picture and read about the magnificent architecture of China\'s imperial palace, discover the majesty of ancient Chinese design and construction techniques.',
                'beijing.stage.bracketSystem': 'Chinese bracket System',
                'beijing.bracket.desc': 'The Dǒugǒng (斗拱) — China\'s Most Ingenious Invention in Architecture. If there is one thing that makes Chinese imperial architecture unique in the entire world, it is the dǒugǒng. This interlocking bracket system',
                'beijing.statues.title': 'Discover Architectural Marvels',
                'beijing.statues.desc': 'See the picture and explore the intricate details and symbolic elements that make Chinese architecture truly remarkable, from roof statues to decorative patterns.',
                
                'xian.wall.title': 'Architecture of Xi-An City wall',
                'xian.wall.desc': 'See the picture and read about the magnificent architecture of China\'s imperial palace, discover the majesty of ancient Chinese design and construction techniques.',
                'xian.bracket.title': 'Chinese bracket System',
                'xian.bracket.desc': 'The Dǒugǒng (斗拱) — China\'s Most Ingenious Invention in Architecture. If there is one thing that makes Chinese imperial architecture unique in the entire world, it is the dǒugǒng. This interlocking bracket system',
            
               // Buttons
                'btn.readMore': 'Read More',
                'btn.visualInteractive': 'Visual Interactive',
                'btn.exploreStatues': 'Explore Statues',
                
                // Modal content
                'beijing.modal.chapter1': 'Chapter I: Forbidden City',
                'beijing.modal.intro1': 'The Forbidden City stands as the world\'s largest palace complex, spanning 720,000 square meters in the heart of Beijing. For nearly 500 years, this imperial palace served as the ceremonial and political center of Chinese government.',
                'beijing.modal.intro2': 'Constructed between 1406 and 1420 under Emperor Yongle of the Ming Dynasty, the Forbidden City in Beijing is the world\'s largest surviving palace complex. Over one million workers and 100,000 skilled craftsmen built its 980 buildings in just 14 years.',
                'beijing.modal.chapter2': 'Chapter II: How Was It Built?',
                'beijing.modal.intro3': 'Construction followed six key stages:',
                'beijing.modal.intro4': '1. The Foundation (台基 Táijī) — Every major hall sits on a raised white marble terrace, sometimes 8 metres high. Stone column bases were placed precisely on the platform to protect wooden columns from ground moisture.',
                'beijing.modal.intro5': '2. The Timber Frame (木作 Mùzuò) — Massive nanmu and pine logs, floated down rivers from forests over 2,000 km away, were raised as columns up to 12 metres tall. The entire frame uses no nails — only interlocking joinery.',
                'beijing.modal.intro6': '3. The Bracket System (Dgng Dgng) - Clusters of wooden blocks and arms interlock at column tops to spread the enormous weight of the roof outward. They also act as natural shock absorbers during earthquakes.',
                'beijing.modal.intro7': '4. The Roof (W W) - Over one million imperial-yellow glazed tiles cover the main halls. The four-sided sweeping "hip" roof is the highest architectural rank in imperial China. Ceramic guardian figures line every ridge.',
                'beijing.modal.intro8': '5. Painted Decoration (Cihuàzuò) - Mineral pigments in blue, green, and gold were applied to every exposed timber surface. Columns were lacquered vermilion red and key motifs finished in real gold leaf.',
                'beijing.modal.intro9': '6. Bamboo Scaffolding - As shown in Image 1, workers used lashed bamboo poles for scaffolding - lighter and more flexible than wood, yet strong enough to support builders high above the ground.',
                'beijing.modal.chapter3': 'Chapter III: The Colors of the Forbidden City - What Do They Mean?',
                'beijing.modal.intro10': 'Yellow - The Emperor\'s Color ( Huángsè) The sweeping roof tiles are glazed in imperial yellow, the most sacred color in Chinese culture. Yellow represented the earth, the center of the universe, and the Son of Heaven himself. It was strictly forbidden for any ordinary citizen or official to use yellow on their home - doing so was punishable by death. Only the emperor\'s buildings could wear this color, which is why the Forbidden City\'s rooflines glow gold across the entire Beijing skyline.',
                'beijing.modal.intro11': 'Red - Prosperity, Good Fortune, and Protection ( Hóngsè) The towering columns and walls are painted deep vermilion red. In Chinese culture red symbolises happiness, good luck, and the warding off of evil spirits. Red was also practical - the lacquer used to achieve this color acted as a sealant, protecting the timber columns from moisture, rot, and insects for centuries. The combination of red walls and yellow roofs became the defining visual identity of imperial China.',
                'beijing.modal.intro12': 'Green and Blue-Green - Heaven and Nature ( Lsè/Qsè) Look closely at the eaves and the painted bands beneath the roofline (Cihuàzuò). These are decorated in deep blue-green tones made from malachite and azurite - minerals ground into pigment. Blue-green represented wood, growth, spring, and the heavens in the Chinese Five Elements system (Wxíng). It balanced the warm red and yellow, connecting the earthly palace to the natural world above.',
                'beijing.modal.intro13': 'Gold - Divine Authority ( Jnsè) Real gold leaf was applied to dragon motifs, door knobs, and decorative details throughout the palace. Gold amplified the divine status of the emperor, who was believed to be the earthly representative of heaven. Dragons painted and carved in gold were not merely decorative - they were protective symbols, and the five-clawed dragon was reserved exclusively for the emperor\'s use.',
                'beijing.modal.chapter4': 'Chapter I: The Dgng () - China\'s Most Ingenious Invention in Architecture',
                'beijing.modal.intro14': 'If there is one thing that makes Chinese imperial architecture unique in the entire world, it is the dgng. This interlocking bracket system, visible in the diagram above, is found on every major hall of the Forbidden City - and it was engineered without a single nail.',
                'beijing.modal.intro15': 'What Is the Dgng? The word dgng is made of two parts: du () meaning "block" and gng () meaning "bow-shaped arm." Together they describe a cluster of wooden blocks and curved arms that stack and interlock at the top of a column to support the enormous weight of the roof above. Each cluster can contain dozens of individual pieces, all fitting together through pure joinery - no glue, no nails, no metal fasteners of any kind.',
                'beijing.modal.chapter5': 'Chapter II: Technical diagram of the Dgng ()',
                'beijing.modal.intro16': 'F chuán - Flying Rafters: The angled timber pieces at the top left of the diagram. These are the outermost rafters that create the dramatic upward curve at the corners of the roof. They extend beyond the bracket cluster to push the roofline tip upward.',
                'beijing.modal.intro17': 'Zhí chuán - Straight Rafters: Sitting beneath the flying rafters, these are the main structural rafters that run straight along the roof slope, carrying the weight of the tiles down to the bracket system below.',
                'beijing.modal.intro18': 'Tiáo yán fng - Eave-Projecting Beam: A horizontal beam that projects outward from the building, extending the roof\'s overhang. This long overhang protected the red-painted timber walls and columns below from rain.',
                'beijing.modal.intro19': 'Wài zhuái fng - Outer Tie Beam: The outer horizontal beam that connects bracket clusters along the length of the building, distributing the load evenly across all the columns.',
                'beijing.modal.intro20': 'Gài du b - Cover Board: A flat board that sits on top of the bracket cluster, providing a stable surface for the beams above to rest on.',
                'beijing.modal.intro21': 'Zhèng x fn - Central Tie Beam: The central horizontal member running directly above the column line, forming the structural spine of the bracket layer.',
                'beijing.modal.intro22': 'L zhuái fng - Inner Tie Beam: The inner counterpart to the outer tie beam, running along the interior side of the bracket cluster to balance the forces pulling from both sides.',
                'beijing.modal.intro23': 'Shng - Small Bearing Block: The small square blocks that sit between the curved arms, raising and supporting each layer as the cluster grows upward and outward. The name literally means "to rise."',
                'beijing.modal.intro24': 'Áng - Diagonal Cantilever Arm: One of the most important structural members. The áng is a long diagonal timber that acts as a lever - one end projects outward under the eaves to carry the roof load, while the other end is pinned down inside the building.',
                'beijing.modal.intro25': 'Qiào - Upward-Curved Arm: A short curved arm that projects at 90 degrees to the main beam direction, building the bracket cluster outward in two directions simultaneously.',
                'beijing.modal.intro26': 'Du - Main Block: The square or rectangular blocks that sit at every joint in the cluster, receiving the arms from below and supporting the arms above. They are the fundamental unit of the whole system. The bottom-most block, sitting directly on the column capital, is called the zuò du ( du) or "seat block."',
                'beijing.modal.intro27': 'É fng - Architrave Beam: The large horizontal beam that runs between columns at the top of the wall, just below where the bracket cluster begins. It is the main beam connecting all the columns together.',
                'beijing.modal.intro28': 'Gng - Bow Arm: The curved, bow-shaped horizontal arms that extend outward from the column in all four directions. They give the system its spring-like quality - under heavy loads, they flex slightly, distributing stress rather than concentrating it.',
'beijing.modal.intro29': 'Symbolizing the Emperor. Since Qin Shi Huang was called "Ancestral Dragon," many ancient emperors considered the dragon to be the image of the ruler and called themselves "Sons of Heaven." Correspondingly, the image of the dragon became a symbol of the emperor. The reason the dragon has this meaning is closely related to the supernatural powers of dragons in ancient legends and myths, such as "ascending to heaven and diving into the abyss, summoning wind and rain."',
'beijing.modal.intro30': 'The Suanni is a fierce mythical beast symbolizing the warding off of disasters. It resembles a lion, but differs in appearance: a lion has curly fur, while the Suanni has disheveled hair. The Han Dynasty dictionary Erya states: "The Suanni resembles a cat, and eats tigers and leopards." This means the Suanni resembles a cat (a type of light-furred tiger), is extremely fierce, and can devour tigers and leopards.',
'beijing.modal.intro31': 'The lion, symbolizing the warding off of disasters and evil spirits, is considered the king of beasts. Its noble and dignified image exudes a regal air, while also being majestic and auspicious, making it a treasure revered as a guardian of the nation. The ancient Indian Buddhist classic, the Mahaprajnaparamita Sutra, states that the lion is an incarnation of the Buddha and can drive away evil. Therefore, for the ancient ruling class and aristocracy, the lion\'s majestic image became a symbol of warding off disasters and evil spirits.',
'beijing.modal.intro32': 'The celestial horse is a mythical creature in the sky, symbolizing the warding off of disasters and evil spirits. A key difference between the celestial horse and the seahorse is that the celestial horse has wings, while the seahorse does not. The Book of Han records: "When Taiyi descended, the celestial horse was covered in red sweat, its foam flowing like ochre." Ancient people believed the celestial horse could travel a thousand miles a day and was a fearless, aerial mythical beast.',
'beijing.modal.intro33': 'The Yayu is a mythical sea creature symbolizing fire prevention and disaster relief. It is characterized by its dragon-like head, fish tail, clawed forefeet, and ridged back. In ancient Chinese mythology, the Yayu is a divine beast that summons clouds and rain to extinguish fires and prevent disasters; it can spout water to extinguish and prevent fires. Since wood is the core material of ancient Chinese architecture and is easily flammable, the Yayu motif on rooftops serves as a totem representing fire prevention in ancient buildings.',
'beijing.modal.intro34': 'The seahorse is a mythical sea creature symbolizing the warding off of disasters and evil spirits. The Qing Dynasty scholar Peng Yuanrui, in his commentary on the History of the Five Dynasties, wrote that "the bones of the seahorse cannot be destroyed by water or fire," indicating that the seahorse not only moves swiftly in water but is also unafraid of water and fire. Ancient people believed that the seahorse could navigate the turbulent and unpredictable sea, dared to resist ferocious sea beasts, was a loyal assistant to its master, possessed a spirit of self-sacrifice, and was a brave guardian beast.',
                
                'xian.modal.chapter4': 'Chapter I: Chw (Chw) - The Dragon That Guards the Roof',
                'xian.modal.intro12': 'The large dragon-like creatures you see gripping the two ends of every major roof ridge in Chinese imperial architecture are called chw (Chw) - one of the most important and visually dramatic elements in all of Chinese architectural tradition. On the Forbidden City\'s Hall of Supreme Harmony alone, the two chw at either end of the main ridge stand over 3.4 metres tall and weigh more than 4 tonnes each - making them the largest roof ornaments ever created in Chinese history.',
                'xian.modal.intro13': 'The name chw combines two characters: chw (ch) - a type of fierce bird of prey, historically identified as a kite or owl - and w (w) - meaning "lips" or "mouth." Together the name describes the creature\'s most defining characteristic: its open, devouring mouth biting down on the roof ridge. In later dynasties the creature evolved to look far more like a dragon than a bird, and was sometimes also called lóng w (lóng w) - "dragon mouth" - or simply zhèng w (zhèng w) - "correct mouth ornament."',
                'xian.modal.chapter5': 'Chapter III: The Legend Behind It',
                'beijing.stage.timberFrame': 'Timber Frame',
                'beijing.stage.bracketSystem': 'Bracket System',
                
// Modal content
'beijing.modal.chapter1': 'Chapter I: Forbidden City',
'beijing.modal.intro1': 'The Forbidden City stands as the world\'s largest palace complex, spanning 720,000 square meters in the heart of Beijing. For nearly 500 years, this imperial palace served as the ceremonial and political center of Chinese government.',
'beijing.modal.intro2': 'Constructed between 1406 and 1420 under Emperor Yongle of the Ming Dynasty, the Forbidden City in Beijing is the world\'s largest surviving palace complex. Over one million workers and 100,000 skilled craftsmen built its 980 buildings in just 14 years.',
'beijing.modal.chapter2': 'Chapter II: How Was It Built?',
'xian.modal.intro5': '  Zhì - Set the thickness Each layer of loose earth must be controlled to exactly 120-150 mm thick before compaction. The formwork panels have measuring marks carved into their inner faces so craftsmen can check the depth without any additional tools. This precision ensures every layer compacts to the same density throughout the entire wall.',
'xian.modal.intro6': '  Tà - Tread Before ramming begins, workers walk across the loose earth layer, treading it flat with their feet. This pre-compaction step prevents the loose soil from rising up unevenly when the heavy ramming tools strike it - ensuring the compaction force drives downward rather than pushing soil sideways.',
'xian.modal.intro7': '  Hng - Ram Workers use heavy wooden or stone ramming tools to strike the earth layer continuously and evenly. The ramming must be rhythmic and consistent - striking too hard in one spot and too lightly in another creates invisible weak layers inside the wall that can fail centuries later.',
'xian.modal.intro8': '  B - Supplement Special attention is given to the edges and corners of the formwork, and to any junction between the new layer and existing structural columns. These transition zones receive additional ramming to ensure no gaps or weak spots remain at the most vulnerable points of the structure.',
'xian.modal.chapter3': ' Chapter III: The Gate Tower - Chénglóu (Chénglóu)',
'xian.modal.intro9': 'The gate tower is the most architecturally complex part of the entire wall system. Unlike the wall itself - which is essentially a massive earthwork - the gate tower is a full timber-frame building constructed in the finest tradition of Chinese imperial architecture, combining every technique seen in the Forbidden City into a single compact structure.',
'xian.modal.intro10': 'Three-tiered roof system The gate tower has three separate roof levels, each with its own set of sweeping eaves and glazed tile capping. This triple-roof form - called s chóng yán - was reserved for buildings of the highest military and civic importance. Each roof level has its own bracket system (d gng) supporting the eave overhang, creating the layered, rhythmic silhouette that defines the Xi\'an skyline.',
'xian.modal.intro11': 'Technical annotation system The lines and labels overlaid on the image in Image 4 represent a modern architectural survey - the process by which architects today measure and record every dimension of a historic building to create a preservation record. This kind of technical documentation, called cèhuì in Chinese - measured drawing - is how ancient buildings are studied, repaired, and passed on to future generations.',
                
// Visual Interactive content
'beijing.visual.title': 'How the Forbidden City Was Built',
'beijing.stage.subtitle': 'Click each stage to explore the construction process',
'beijing.stage.foundation': 'Foundation',
'beijing.stage.timberFrame': 'Timber Frame',
'beijing.stage.bracketSystem': 'Bracket System',
'beijing.stage.roof': 'Roof',
'beijing.stage.decoration': 'Decoration',
'beijing.stage.finalAssembly': 'Final Assembly',
                
'xian.modal.chapter1': 'Chapter I: The Architectural Blueprint—Reading the Wall',
'xian.modal.intro1': 'Image 1 shows an original Qing Dynasty engineering drawing (清工部工程做法则例) — a cross-section and elevation diagram of the city wall gate tower. This type of drawing, called a 立面图 (lìmiàn tú) — elevation drawing — and 剖面图 (pōumiàn tú) — cross-section drawing — was the working document used by imperial architects and craftsmen to build and maintain the wall across centuries.',
'xian.modal.chapter2': 'Chapter II: The Rammed Earth Core - Hngt (Hngt)',
'xian.modal.intro2': 'Image 2 shows the step-by-step process of building the wall\'s core using the ancient technique of Hngt (hngt) - rammed earth construction. This is the secret behind the wall\'s extraordinary durability and the technique that has kept it standing for over 650 years.',
'xian.modal.intro3': '  Tián - Fill Loose earth mixed with lime and organic binders is poured into wooden formwork panels. The craftsman pushes the mixture firmly toward the inner face of the formwork so that stones and coarse material bounce inward, away from the surface, creating a smooth outer face when the formwork is removed.',
'xian.modal.intro4': '  Píng - Level Using hands or small tools, the newly added mixture is smoothed flat. This step is critical - only a perfectly level layer can be compacted evenly. An uneven layer creates weak points where the wall can crack under pressure over time.',
'xian.modal.intro5': '  Zhì - Set the thickness Each layer of loose earth must be controlled to exactly 120-150 mm thick before compaction. The formwork panels have measuring marks carved into their inner faces so craftsmen can check the depth without any additional tools. This precision ensures every layer compacts to the same density throughout the entire wall.',
'xian.modal.intro6': '  Tà - Tread Before ramming begins, workers walk across the loose earth layer, treading it flat with their feet. This pre-compaction step prevents the loose soil from rising up unevenly when the heavy ramming tools strike it - ensuring the compaction force drives downward rather than pushing soil sideways.',
'xian.modal.intro7': '  Hng - Ram Workers use heavy wooden or stone ramming tools to strike the earth layer continuously and evenly. The ramming must be rhythmic and consistent - striking too hard in one spot and too lightly in another creates invisible weak layers inside the wall that can fail centuries later.',
'xian.modal.intro8': '  B - Supplement Special attention is given to the edges and corners of the formwork, and to any junction between the new layer and existing structural columns. These transition zones receive additional ramming to ensure no gaps or weak spots remain at the most vulnerable points of the structure.',
'xian.modal.chapter3': ' Chapter III: The Gate Tower - Chénglóu (Chénglóu)',
'xian.modal.intro9': 'The gate tower is the most architecturally complex part of the entire wall system. Unlike the wall itself - which is essentially a massive earthwork - the gate tower is a full timber-frame building constructed in the finest tradition of Chinese imperial architecture, combining every technique seen in the Forbidden City into a single compact structure.',
'xian.modal.intro10': 'Three-tiered roof system The gate tower has three separate roof levels, each with its own set of sweeping eaves and glazed tile capping. This triple-roof form - called s chóng yán - was reserved for buildings of the highest military and civic importance. Each roof level has its own bracket system (d gng) supporting the eave overhang, creating the layered, rhythmic silhouette that defines the Xi\'an skyline.',
'xian.modal.intro11': 'Technical annotation system The lines and labels overlaid on the image in Image 4 represent a modern architectural survey - the process by which architects today measure and record every dimension of a historic building to create a preservation record. This kind of technical documentation, called cèhuì in Chinese - measured drawing - is how ancient buildings are studied, repaired, and passed on to future generations.',
  
                'Suzhou.bridge.title1':'Architecture of Suzhou Garden',
                'Suzhou.bridge.desc1':'See the picture and discover the elegant architecture of Suzhou gardens, where walls, courtyards, moon gates, water, and wooden structures are carefully arranged to create harmony between nature and design.',
                'Suzhou.bridge.title2':'Suzhou Zigzag Bridge',
                'Suzhou.bridge.desc2':'Explore how the traditional zigzag bridge was designed and built in Suzhou gardens. Learn how its shape, wooden structure, stone supports, and placement over water combine beauty, balance, and function in classical Chinese architecture.',
                'Suzhou.bridge.title3':'Suzhou Garden Windows',
                'Suzhou.bridge.desc3':'Discover the unique windows of Suzhou gardens, known for their intricate shapes and artistic designs. These windows are not just for light—they frame nature like paintings, creating changing views of gardens, water, and architecture from every angle.',
// Page
'page.title': 'Chinese Heritage - Discover China\'s Architectural Wonders',
                    
// Additional UI elements
'logout': 'Logout',
'retryMap': 'Retry Loading Map',
'mapLoadingFailed': 'Interactive Map',
'mapFailedDesc': 'Map loading failed',
'mapFailedNote': 'Please explore the city landmarks below',
                'mapLoadingFailed': 'Interactive Map',
                'mapFailedDesc': 'Map loading failed',
                'mapFailedNote': 'Please explore the city landmarks below',
           
            },
            
            zh: {
                // Page
                'page.title': '中国遗产 - 探索中国建筑奇迹',
                
                // Navigation
                'home': '首页',
                'about': '关于',
                'explore': '探索',
                'marvels': '奇观',
                'treasures': '宝藏',
                'selectCity': '选择城市',
                'language': '语言',
                
                // Hero Section
                'subtitle': '体验中国建筑之美',
                'title': '发现永恒优雅',
                'titleHighlight': '中国历史建筑',
                'description': '探索中国建筑奇迹的丰富文化遗产——从高耸的宝塔到宁静的皇家寺庙。',
                'signup': '立即注册',
                'login': '登录',
                'playGame': '玩游戏',
                
                // Stats
                'stats.cities': '历史名城',
                'stats.years': '年历史',
                'stats.landmarks': '标志性建筑',
                
                // About Section
                'about.title': '沉浸其中',
                'about.subtitle': '中国建筑景观是古老智慧与现代创新的织锦',
                'about.discover': '发现艺术',
                'about.discoverDesc': '中国建筑将和谐美学与实用功能融为一体——是中国丰富文化遗产跨越千年的见证。',
                'about.explore': '探索城市',
                'about.exploreDesc': '从北京的紫禁城到西安的兵马俑，穿越中国最具标志性的历史目的地。',
                'about.uncover': '揭开秘密',
                'about.uncoverDesc': '深入了解代代相传的设计原则和技术，揭开每个奇迹背后的迷人历史。',
                
                // Cities Section
                'cities.title': '特色城市',
                'cities.subtitle': '探索中国最令人惊叹的历史目的地',
                'cities.forbiddenCity': '紫禁城',
                'cities.terracottaArmy': '兵马俑',
                'cities.westLake': '西湖',
                'cities.imperialCapital': '中国首都',
                'cities.ancientCapital': '古都',
                'cities.paradise': '人间天堂',
                'cities.exploreCity': '探索城市',
                'cities.classicalGardens': '苏州古典园林',
                'cities.historicWaterTown': '历史水乡',
                // City bios
                'cities.beijing.bio': '中国王朝的心脏 - 拥有世界上最大的宫殿建筑群和超过600年的帝国历史。',
                'cities.xian.bio': '中国王朝的心脏 - 拥有传说中的兵马俑，数千名真人大小的战士守护着秦始皇的永恒安息。',
                'cities.suzhou.bio': '苏州以其古典园林、优雅的桥梁和艺术窗户而闻名。被称为"东方威尼斯"，它将水、建筑和自然融合成宁静的生活景观。',
                // City names
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
                
                // Marvels Section
                'marvels.title': '建筑奇观',
                'marvels.subtitle': '塑造中国标志性建筑的设计风格',
                'marvels.imperial': '皇家建筑',
                'marvels.pagoda': '宝塔建筑',
                'marvels.mostIconic': '最具标志性',
                'marvels.garden': '园林设计',
                'marvels.yellowTiles': '皇家黄色琉璃瓦',
                'marvels.symmetrical': '完美对称布局',
                'marvels.dragonMotifs': '龙纹和金饰',
                'marvels.multiTiered': '多层宝塔',
                'marvels.buddhist': '佛教影响',
                'marvels.curvedEaves': '弯曲屋檐与翘角',
                'marvels.scholarsRock': '文人石与荷花池',
                'marvels.pavilions': '亭台与曲桥',
                'marvels.harmony': '与自然和谐',
                'marvels.classicalGardens': '苏州古典园林',
                'marvels.foundAcrossCities': '遍布所有城市',
                'marvels.yearsOld': '超过1500年历史',
                'marvels.rammedEarth': '夯土与砖石结构',
                'marvels.watchtowers': '每120米一座瞭望塔',
                'marvels.barbican': '瓮城防御系统',
                'marvels.riceMortar': '糯米灰浆 — 650年坚固如初',
                'marvels.completeWall': '世界上最完整的城墙',
                'marvels.borrowedScenery': '借景艺术 借景',
                'marvels.explore': '探索',
                'marvels.discover': '发现',
                
                // Testimonials
                'testimonials.title': '游客故事',
                'testimonials.visitedBeijing': '访问北京',
                'testimonials.visitedXian': '访问西安',
                'testimonials.visitedSuzhou': '访问苏州',
                'testimonials.name1': '詹姆斯·戴维森',
                'testimonials.name2': '玛丽亚·科瓦奇',
                'testimonials.name3': '安娜·洛朗',
                'testimonials.story1': '"走在紫禁城里感觉像是回到了600年前。建筑的宏伟和细节让我惊叹不已。"',
                'testimonials.story2': '"西安的兵马俑前所未见。每个战士都有独特的面孔——这是古代工艺的奇迹。"',
                'testimonials.story3': '"苏州古典园林是纯粹的宁静。每个亭台、每块石头、每个池塘都凝聚着几个世纪的艺术意图。"',
                
                // CTA Section
                'cta.tagline': '揭开秘密',
                'cta.title': '永恒宝藏等待您',
                'cta.description': '沉浸在中国建筑的迷人世界中，每座建筑都讲述着过去的故事和对未来的愿景。',
                'cta.beginJourney': '开始您的旅程',
                'cta.freeAccess': '免费访问 · 无需注册',
                
                // Footer
                'footer.desc': '精心策划的中国建筑遗产之旅——探索几个世纪以来的标志性建筑、意义和故事。',
                'footer.quickLinks': '快速链接',
                'footer.exploreCities': '探索城市',
                'footer.contact': '联系我们',
                'footer.privacy': '隐私政策',
                'footer.terms': '服务条款',
                'footer.cookies': 'Cookie',
                'footer.about': '关于我们',
                'footer.rights': '© 2026 Chinese-Heritage. 版权所有。',
                
                // Language names
                'lang.english': 'English',
                'lang.chinese': '中文',
                'lang.arabic': 'العربية',
                'lang.current': '中文',
                
                // Buttons
                'btn.readMore': '阅读更多',
                'btn.visualInteractive': '视觉互动',
                'btn.exploreStatues': '探索雕像',
                
                // Visual Interactive content
                'beijing.visual.title': '紫禁城是如何建造的',
                'beijing.stage.subtitle': '点击每个阶段探索建造过程',
                'beijing.stage.foundation': '地基',
                'beijing.stage.timberFrame': '木结构',
                'beijing.stage.bracketSystem': '斗拱系统',
                'beijing.bracket.desc': '斗拱（斗拱）是中国建筑中最精巧的发明之一。如果说有什么让中国皇家建筑在世界上独一无二，那就是斗拱。这种层层咬合的结构体系.',
                'beijing.stage.roof': '屋顶',
                'beijing.stage.decoration': '装饰',
                'beijing.stage.finalAssembly': '最终组装',

                'xian.wall.title': '西安城墙建筑',
                'xian.wall.desc': '看图片并阅读中国皇宫的宏伟建筑，发现中国古代设计和建造技术的雄伟。',
                'xian.bracket.title': '中国斗拱系统',
                'xian.bracket.desc': '斗拱（斗拱）——中国建筑最巧妙的发明。如果说有什么让中国皇家建筑在全世界独一无二，那就是斗拱。这种层层咬合的托架系统',
                
                // Modal content
                'beijing.modal.chapter1': '第一章：紫禁城',
                'beijing.modal.intro1': '紫禁城是世界上最大的宫殿建筑群，占地72万平方米，位于北京中心。近500年来，这座皇宫一直是中国政府的礼仪和政治中心。',
                'beijing.modal.intro2': '1406年至1420年在明朝永乐皇帝下建造，北京紫禁城是世界上现存最大的宫殿建筑群。超过100万工人和10万熟练工匠在短短14年内建造了其980座建筑。',
                'beijing.modal.chapter2': '第二章：它是如何建造的？',
                'beijing.modal.intro3': '建造遵循六个关键阶段：',
                'beijing.modal.intro4': '1. 地基（台基 Táijī）——每个主要大厅都坐落在抬高的白色大理石平台上，有时高达8米。石柱基被精确地放置在平台上，以保护木柱免受地面潮湿。',
                'beijing.modal.intro5': '2. 木结构（木作 Mùzuò）——巨大的楠木和松木，从2000公里外的森林沿河流漂流而来，被竖立为高达12米的柱子。整个框架不使用钉子——只有榫卯结构。',
                'beijing.modal.intro6': '3. 斗拱系统（斗拱 Dǒugǒng）——木块和臂的簇在柱顶相互锁定，将屋顶的巨大重量向外分散。它们还在地震期间充当天然减震器。',
                'beijing.modal.intro7': '4. 屋顶结构（瓦作 Wǎzuò）——主要宫殿覆盖着超过一百万块皇家黄色琉璃瓦。四面坡的“庑殿顶”是中国古代建筑中等级最高的屋顶形式。每一条屋脊上都排列着陶制的守护神兽。',
                'beijing.modal.intro8': '5. 彩绘装饰（彩画作 Cǎihuàzuò）——蓝色、绿色和金色的矿物颜料被用于所有外露的木结构表面。柱子被涂上朱红色漆，重要的图案则以真金箔装饰完成。',
                'beijing.modal.intro9': '6. 竹脚手架——如图1所示，工人使用捆绑的竹竿搭建脚手架——相比木材更轻、更灵活，但仍然足够坚固，可以支撑高空作业的建筑工人。',
                'beijing.modal.chapter3': '第三章：紫禁城的颜色——它们意味着什么？',
                'beijing.modal.intro10': '黄色——皇帝的颜色（黄色 Huángsè）屋顶铺设着帝王黄色的琉璃瓦，这是中国文化中最神圣的颜色。黄色象征大地、宇宙的中心，以及天子本人。普通百姓或官员若在住宅上使用黄色是被严格禁止的——这样做甚至可能被处以死罪。只有皇帝的建筑才可以使用这种颜色，这也是为什么紫禁城的屋顶在整个北京天际线上闪耀着金色光辉。',
                'beijing.modal.intro11': '红色——繁荣、吉祥与保护（红色 Hóngsè）高大的立柱和墙面被涂成深朱红色。在中国文化中，红色象征幸福、好运以及驱邪避恶。红色也很实用——实现这种颜色的漆层同时起到密封作用，数百年来保护木柱免受潮气、腐朽和虫害侵袭。红墙黄瓦的组合成为中国皇家建筑最鲜明的视觉标志。',
                'beijing.modal.intro12': '绿色与青绿色——天空与自然（绿色/青色 Lǜsè/Qīngsè）仔细观察屋檐和屋顶下方的彩画带（彩画作 Cǎihuàzuò）。这些部位以孔雀石和蓝铜矿研磨成的颜料绘成深青绿色。在中国五行体系中，青绿色象征木、生长、春天和天空。它平衡了温暖的红色与黄色，将人间宫殿与上方的自然天地联系起来。',
                'beijing.modal.intro13': '金色——神圣权威（金色 Jīnsè）宫殿各处的龙纹、门钉和装饰细节都施以真金金箔。金色强化了皇帝作为天之代表的神圣地位。用金描绘和雕刻的龙不仅是装饰，它们也是保护性的象征，而五爪龙更是皇帝专用的图案。',
                
                //bracket
                 'beijing.modal.chapter4': '第一章：斗拱（斗拱）——中国建筑中最精妙的发明',
                 'beijing.modal.intro14': '如果说有什么让中国皇家建筑在世界上独一无二，那就是斗拱。这种相互咬合的斗拱结构，在上方的示意图中可以看到，存在于紫禁城的每一座重要殿宇之上——而且它的建造完全不使用一根钉子。',
                 'beijing.modal.intro15': '什么是斗拱？“斗拱”一词由两部分组成：“斗”指方形木块，“拱”指弓形的构件。它们组合在一起，形成一组层层叠加、相互咬合的木结构，位于柱顶，用来支撑上方沉重的屋顶。每一组斗拱由数十个部件构成，通过榫卯结构紧密连接——无需胶水、钉子或任何金属固定件。',
                 'beijing.modal.chapter5': '第二章：斗拱结构技术示意图',
                 'beijing.modal.intro16': '飞椽（Fēi chuán）——飞檐椽：位于图中左上角的倾斜木构件，是最外侧的椽子，形成屋檐向上翘起的优美曲线，并延伸至斗拱之外，使屋角更加上扬。',
                 'beijing.modal.intro17': '直椽（Zhí chuán）——直椽：位于飞椽之下，是主要的结构椽子，沿屋顶坡面直线排列，将瓦片的重量传递到下方的斗拱结构。',
                 'beijing.modal.intro18': '挑檐枋（Tiāo yán fāng）——出檐梁：从建筑中向外延伸的水平梁，用于扩大屋檐的覆盖范围。这种长出檐可以保护下方的红色木柱和墙体免受雨水侵蚀。', 
                 'beijing.modal.intro19': '外拽枋（Wài zhuāi fāng）——外侧拉梁：连接整排斗拱的外侧水平梁，将荷载均匀分配到所有柱子上。',
                 'beijing.modal.intro20': '盖斗板（Gài dǒu bǎn）——盖板：位于斗拱顶部的平板，为上方梁架提供稳定的支撑面。', 
                 'beijing.modal.intro21': '正心枋（Zhèng xīn fāng）——中枢拉梁：位于柱列正上方的水平构件，是斗拱结构层的核心承重骨架。',
                 'beijing.modal.intro22': '里拽枋（Lǐ zhuāi fāng）——内侧拉梁：与外拽枋对应，位于斗拱内侧，平衡来自两侧的受力。',
                 'beijing.modal.intro23': '升（Shēng）——承托小木块：位于拱臂之间的小方块，用于抬高并支撑每一层结构，使斗拱逐层向上、向外发展，其名称意为“升起”。',
                 'beijing.modal.intro24': '昂（Áng）——斜挑梁：最重要的结构构件之一。昂是一根倾斜的长木构件，起杠杆作用——一端伸出檐下承载屋顶重量，另一端固定在建筑内部。',
                 'beijing.modal.intro25': '翘（Qiào）——翘起构件：短小的弯曲构件，以90度方向伸出，使斗拱在两个方向上同时扩展。',
                 'beijing.modal.intro26': '斗（Dǒu）——主承块：位于各个节点的方形或矩形木块，承接下方构件并支撑上方构件，是整个结构的基本单位。最底层直接位于柱头上的称为“坐斗”。',
                 'beijing.modal.intro27': '额枋（É fāng）——额梁：连接柱子顶部的横梁，位于斗拱下方，是连接所有柱子的主要结构梁。',
                 'beijing.modal.intro28': '拱（Gǒng）——弓形构件：向四周延伸的弯曲木臂，使结构具有弹性——在承受重压时能够微微弯曲，从而分散应力而不是集中应力。',


                'xian.modal.chapter1': '第一章：建筑蓝图——解读城墙',
                'xian.modal.intro1': '图片1显示了清朝原始工程图纸（清工部工程做法则例）——城墙门楼的横截面和立面图。这种图纸称为立面图（lìmiàn tú）——立面图和剖面图（pōumiàn tú）——横截面图，是帝国建筑师和工匠几个世纪以来建造和维护城墙的工作文件。',
                'xian.modal.chapter2': '第二章：夯土核心——夯土 (Hāngtǔ)',
                'xian.modal.intro2': '图片2显示了使用古代夯土技术建造城墙核心的逐步过程。这是城墙非凡耐久性的秘密，也是使其屹立650多年不倒的技术。',
                'xian.modal.intro3': '① 填 (Tián) — 填充 将与石灰和有机粘合剂混合的松散土壤倒入木模板中。工匠将混合物牢固地推向模板的内表面，使石头和粗材料向内弹开，远离表面，从而在移除模板时形成光滑的外表面。',
                'xian.modal.intro4': '② 平 (Píng) — 平整 用手或小工具将新添加的混合物抹平。这一步骤至关重要——只有完全平整的层才能均匀压实。不平整的层会产生薄弱点，墙壁在压力下会随时间开裂。',
                'xian.modal.intro5': '③ 置 (Zhì) — 设置厚度 每层松散土壤在压实前必须控制在120-150毫米的精确厚度。模板面板在其内表面刻有测量标记，工匠无需任何额外工具即可检查深度。这种精度确保每一层在整个墙壁中压实到相同的密度。',
                'xian.modal.intro6': '④ 踏 (Tà) — 踩实 在开始夯打之前，工人在松散土层上行走，用脚将其踩实。这个预压实步骤防止松散土壤在重型夯打工具撞击时向上不均匀隆起——确保压实力向下驱动而不是将土壤推向侧面。',
                'xian.modal.intro7': '⑤ 夯 (Hāng) — 夯打 工人使用重型木质或石质夯打工具连续均匀地撞击土层。夯打必须有节奏且一致——在一个地方打得太重而在另一个地方打得太轻会在墙壁内部产生看不见的薄弱层，可能在几个世纪后失效。',
                'xian.modal.intro8': '⑥ 补 (Bǔ) — 补强 对模板的边缘和角落给予特殊关注，以及新层与现有结构柱之间的任何连接处。这些过渡区域接受额外夯打，确保在最脆弱的结构点没有间隙或薄弱点残留。',
                'xian.modal.chapter3': '第三章：城楼——城楼 (Chénglóu)',
                'xian.modal.intro9': '城楼是整个城墙系统中最复杂的建筑部分。与城墙本身——本质上是一个巨大的土方工程——不同，城楼是一个完整的木结构建筑，以中国皇家建筑最精良的传统建造，将紫禁城中看到的每一种技术组合成一个紧凑的结构。',
                'xian.modal.intro10': '三层屋顶系统 城楼有三个独立的屋顶层，每层都有自己的一套飞檐和琉璃瓦盖。这种三重屋顶形式——称为三重檐 (sān chóng yán)——是为最高军事和市政重要性的建筑保留的。每个屋顶层都有自己的斗拱系统 (斗拱 dǒugǒng) 支撑屋檐悬挑，创造出定义西安天际线的分层、有节奏的轮廓。',
                'xian.modal.intro11': '技术注释系统 图片4中叠加的线条和标签代表现代建筑测量——建筑师今天测量和记录历史建筑每个尺寸以创建保存记录的过程。这种技术文档，在中文中称为测绘 (cèhuì)——测量图——是研究、修复和传承古代建筑给后代的方式。',
                'xian.modal.chapter4': '第一章：鸱吻（Chīwěn）——守护屋顶的神兽',
                'xian.modal.intro12': '在中国古代皇家建筑中，你可以看到屋脊两端各有一个巨大的龙形神兽，这就是鸱吻（Chīwěn）——它是中国建筑传统中最重要、最具有视觉冲击力的装饰元素之一。仅在紫禁城太和殿上，主脊两端的鸱吻高度就超过3.4米，每个重量超过4吨——成为中国历史上最大的屋顶装饰构件。',
                'xian.modal.chapter5': '第二章：名字的含义是什么？',
                'xian.modal.intro13': '“鸱吻”这个名称由两个汉字组成：“鸱”（chī）是一种凶猛的猛禽，在历史上通常被认为是鸢或猫头鹰；“吻”（wěn）意为“嘴”或“唇”。这个名称描述了它最显著的特征：张开的巨口咬住屋脊。在后来的朝代中，这种形象逐渐演变得更像龙，有时也被称为“龙吻”（lóng wěn），或“正吻”（zhèng wěn）。',
                'xian.modal.chapter6': '第三章：背后的传说',
                'xian.modal.intro14': '根据中国古代传说，鸱吻是龙王的第二个儿子，是一种生活在海中的神兽，拥有呼风唤雨、控制火焰的能力。由于火灾是木结构宫殿建筑最大的威胁，因此人们将这种能控制水的神兽安置在屋顶最高处，以保护建筑免受火灾侵害——它的“水性”象征着可以压制任何可能威胁建筑的火焰。',
                'Suzhou.bridge.title1':'苏州园林建筑',
                'Suzhou.bridge.desc1':'查看图片，探索苏州园林优雅的建筑风格。在这里，墙体、庭院、月洞门、水景和木结构被精心布局，营造出自然与设计之间的和谐。',
                'Suzhou.bridge.title2':'苏州九曲桥',
                'Suzhou.bridge.desc2':'探索苏州园林中传统九曲桥的设计与建造方式。了解其曲折的形状、木质结构、石质支撑以及在水上的布局，如何将美感、平衡与功能融为一体，体现中国古典建筑的魅力',
                'Suzhou.bridge.title3':'苏州园林窗户',
                'Suzhou.bridge.desc3':'探索苏州园林独特的窗户，以其精美的形状和艺术设计而闻名。这些窗户不仅用于采光，还如同画框一般，将自然景色定格成画，从不同角度呈现园林、水景与建筑的变化之美。',
            },
            
            ar: {
                // Navigation (simple keys to match HTML)
                'home': 'الرئيسية',
                'about': 'من نحن',
                'explore': 'استكشف',
                'marvels': 'العجائب',
                'treasures': 'الكنوز',
                'selectCity': 'اختر المدينة',
                'language': 'اللغة',
                
                // Hero Section
                'subtitle': 'استمتع بجمال العمارة الصينية',
                'title': 'اكتشف الأناقة الخالدة',
                'titleHighlight': 'لمباني الصين التاريخية',
                'description': 'استكشف التراث الثقافي الغني للصين من خلال عجائبها المعمارية المذهلة—من الأبراج الشاهقة إلى المعابد الإمبراطورية الهادئة.',
                'signup': 'سجل الآن',
                'login': 'تسجيل الدخول',
                'playGame': 'العب اللعبة',
                
                // Stats
                'stats.cities': 'المدن التاريخية',
                'stats.years': 'سنوات من التاريخ',
                'stats.landmarks': 'معالم أيقونية',
                
                // About Section
                'about.title': 'انغمس فيها',
                'about.subtitle': 'المشهد المعماري للصين هو نسيج من الحكمة القديمة والابتكار الحديثة',
                'about.discover': 'اكتشف الفن',
                'about.discoverDesc': 'العمارة الصينية تدمج الجماليات المتناغمة مع الوظائف العملية—شهادة على التراث الثقافي الغني للصين الذي يمتد لآلاف السنين.',
                'about.explore': 'استكشف المدن',
                'about.exploreDesc': 'من المدينة المحرمة في بكين إلى جيش الطين في شيان، انطلق في رحلة عبر أشهر الوجهات التاريخية في الصين.',
                'about.uncover': 'اكتشف الأسرار',
                'about.uncoverDesc': 'تعمق في مبادئ التصميم والتقنيات المنقولة عبر الأجيال، واكتشف التواريخ الرائعة وراء كل عجيبة.',
                
                // Cities Section
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
                'cities.historicWaterTown': 'بلدة تاريخية مائية',
                // City names
                'city.beijing': 'بكين',
                'city.xian': 'شيان',
                'city.hangzhou': 'هانغتشو',
                'city.suzhou': 'سوتشو',
                'city.tianjin': 'تيانجين',
                'city.jinan': 'جينان',
                'city.changchun': 'تشانغتشون',
                'city.luoyang': 'لويانغ',
                'city.chengdu': 'تشنغدو',
                
                // Marvels Section
                'marvels.title': 'العجائب المعمارية',
                'marvels.subtitle': 'الأساليب التصميم التي شكلت المباني الأيقونية في الصين',
                'marvels.imperial': 'الأسلوب الإمبراطوري',
                'marvels.pagoda': 'عمارة الباغودا',
                'marvels.mostIconic': 'الأكثر أيقونية',
                'marvels.garden': 'تصميم الحدائق',
                'marvels.yellowTiles': 'بلاط السقف الأصفر المزجج',
                'marvels.symmetrical': 'التخطيطات المتناظرة',
                'marvels.dragonMotifs': 'زخارف التنين والفينيكس',
                'marvels.multiTiered': 'الأبراج متعددة الطبقات',
                'marvels.buddhist': 'التأثير البوذي',
                'marvels.curvedEaves': 'حواف السقف المنحنية',
                'marvels.scholarsRock': 'ميزات صخور العلماء',
                'marvels.pavilions': 'الأجنحة والجسور',
                'marvels.harmony': 'الانسجام مع الطبيعة',
                'marvels.classicalGardens': 'حدائق سوتشو الكلاسيكية',
                'marvels.foundAcrossCities': 'توجد عبر جميع المدن',
                'marvels.yearsOld': 'أكثر من 1500 عام',
                'marvels.rammedEarth': 'التراب المضغوط والبناء بالطوب',
                'marvels.watchtowers': 'أبراج المراقبة كل 120 متر',
                'marvels.barbican': 'نظام دفاع بوابة البرج',
                'marvels.riceMortar': 'ملاط الأرز اللزج — قوي منذ 650 عام',
                'marvels.completeWall': 'أكمل جدار في العالم',
                'marvels.borrowedScenery': 'فن استعارة المناظر الطبيعية',
                'marvels.explore': 'استكشف',
                'marvels.discover': 'اكتشف',
                
                // Testimonials
                'testimonials.title': 'قصص الزوار',
                'testimonials.visitedBeijing': 'زار بكين',
                'testimonials.visitedXian': 'زار شيان',
                'testimonials.visitedSuzhou': 'زار سوتشو',
                'testimonials.name1': 'جيمس ديفيدسون',
                'testimonials.name2': 'ماريا كوفاتش',
                'testimonials.name3': 'آنا لوران',
                'testimonials.story1': '"المشي في المدينة المحرمة شعر وكأنني عدت 600 عاماً في الزمن. المقياس الهائل وتفاصيل العمارة تركتني عاجزاً عن الكلام."',
                'testimonials.story2': '"جيش الطين في شيان ليس مثله شيء رأيته من قبل. كل محارب له وجه فريد—إنه معجزة من الحرفية القديمة."',
                'testimonials.story3': '"حدائق سوتشو الكلاسيكية هي صفاء نقي. كل جناح، كل صخرة، كل بركة وضعت بقرون من النية الفنية."',
                
                // CTA Section
                'cta.tagline': 'اكتشف الأسرار',
                'cta.title': 'الكنوز الخالدة في انتظارك',
                'cta.description': 'انغمس في العالم الساحر للعمارة الصينية، حيث كل مبنى يحكي قصة الماضي ورؤية للمستقبل.',
                'cta.beginJourney': 'ابدأ رحلتك',
                'cta.freeAccess': 'وصول مجاني · لا حاجة للتسجيل',
                
                // Footer
                'footer.desc': 'رحلة منسقة عبر التراث المعماري الصيني — استكشف الهياكل الأيقونية والمعاني والقصص عبر القرون.',
                'footer.quickLinks': 'روابط سريعة',
                'footer.exploreCities': 'استكشف المدن',
                'footer.contact': 'اتصل',
                'footer.privacy': 'الخصوصية',
                'footer.terms': 'الشروط',
                'footer.cookies': 'الكوكيز',
                'footer.about': 'من نحن',
                'footer.rights': '© 2026 Chinese-Heritage. جميع الحقوق محفوظة.',
                
                // Language names
                'lang.english': 'English',
                'lang.chinese': '中文',
                'lang.arabic': 'العربية',
                'lang.current': 'العربية',
                
                
                // Buttons
                'btn.readMore': 'قراءة المزيد',
                'btn.visualInteractive': 'تفاعل بصري',
                'btn.exploreStatues': 'استكشف التماثيل',
                
                // Visual Interactive content
                'beijing.visual.title': 'كيف تم بناء المدينة المحرمة',
                'beijing.stage.subtitle': 'انقر على كل مرحلة لاستكشاف عملية البناء',
                'beijing.stage.foundation': 'الأساس',
                'beijing.stage.timberFrame': 'الهيكل الخشبي',
                'beijing.stage.bracketSystem': 'نظام الدوجونغ',
                'beijing.bracket.desc': 'يُعدّ الدوقونغ من أذكى الابتكارات في العمارة الصينية. وإذا كان هناك عنصر يجعل العمارة الإمبراطورية الصينية فريدة في العالم، فهو هذا النظام المتشابك',
                'beijing.stage.roof': 'السقف',
                'beijing.stage.decoration': 'الزخارف',
                'beijing.stage.finalAssembly': 'التجميع النهائي',

                'xian.wall.title': 'هندسة سور مدينة شيان',
                'xian.wall.desc': 'شاهد الصورة واقرأ عن الهندسة المعمارية المذهلة للقصور الصينية، واكتشف عظمة تقنيات التصميم والبناء الصينية القديمة.',
                'xian.bracket.title': 'نظام الدوجونغ الصيني',
                'xian.bracket.desc': 'الدوجونغ (斗拱) - أروع اختراع في الهندسة المعمارية الصينية. إذا كان هناك شيء يجعل الهندسة المعمارية الإمبراطورية الصينية فريدة في العالم بأسره، فهو الدوجونغ. هذا النظام المتشابك من الأقواس',
                
                // Modal content
                'beijing.modal.chapter1': 'الفصل الأول: المدينة المحرمة',
                'beijing.modal.intro1': 'المدينة المحرمة هي أكبر مجمع قصور في العالم، تمتد على 720000 متر مربع في قلب بكين. لما يقرب من 500 عام، خدم هذا القصر الإمبراطوري كمركز احتفالي وسياسي للحكومة الصينية.',
                'beijing.modal.intro2': 'تم بناؤها بين عامي 1406 و1420 في عهد الإمبراطور يونغ من أسرة مينغ، والمدينة المحرمة في بكين هي أكبر مجمع قصور موجود في العالم. أكثر من مليون عامل و100000 حرفي ماهر بنوا 980 مبنى في 14 عامًا فقط.',
                'beijing.modal.chapter2': 'الفصل الثاني: كيف تم بناؤها؟',
                'beijing.modal.intro3': 'اتبع البناء ست مراحل رئيسية:',
                'beijing.modal.intro4': '1. الأساس (台基 Táijī) — كل قاعة رئيسية تجلس على شرفة مرتفعة من الرخام الأبيض، أحيانًا يصل ارتفاعها إلى 8 أمتار. تم وضع قواعد الأعمدة الحجرية بدقة على المنصة لحماية الأعمدة الخشبية من رطوبة الأرض.',
                'beijing.modal.intro5': '2. الهيكل الخشبي (木作 Mùzuò) — جذوع ضخمة من خشب النانمو والصنوبر، تم جلبها عبر الأنهار من الغابات على بعد يزيد عن 2000 كم، وتم رفعها كأعمدة يصل ارتفاعها إلى 12 مترًا. الهيكل بأكمله لا يستخدم مسامير — فقط التشابك الخشبي.',
                'beijing.modal.intro6': '3. نظام الدوجونغ (斗拱 Dǒugǒng) — مجموعات من الكتل الخشبية والذراعات تتشابك عند قمم الأعمدة لنشر الوزن الهائل للسقف للخارج. كما تعمل أيضًا كامتصاصات صدمات طبيعية أثناء الزلازل.',
                'beijing.modal.chapter3': 'الفصل الثالث: ألوان المدينة المحرمة — ماذا تعني؟',
                'beijing.modal.intro7': 'الأصفر — لون الإمبراطور (黄色 Huángsè)',
                'beijing.modal.intro8': 'الأحمر — الازدهار والحظ السعيد والحماية (红色 Hóngsè)',
                
                'xian.modal.chapter1': 'الفصل الأول: المخطط المعماري—قراءة الجدار',
                'xian.modal.intro1': 'الصورة 1 تظهر رسمًا هندسيًا أصليًا من أسرة تشينغ (清工部工程做法则例) — مخطط مقطع وارتفاع لبرج بوابة المدينة. هذا النوع من الرسوم، يسمى立面图 (lìmiàn tú) — رسم ارتفاع و 剖面图 (pōumiàn tú) — رسم مقطع، كان المستند العمل الذي استخدمه المهندسون المعماريون والحرفيون الإمبراطوريون لبناء الجدار والحفاظ عليه عبر القرون.',
                'xian.modal.chapter2': 'الفصل الثاني: قلب التربة المضغوطة — 夯土 (Hāngtǔ)',
                'xian.modal.intro2': 'صورة 2 تظهر العملية خطوة بخطوة لبناء قلب الجدار باستخدام التقنية القديمة 夯土 (hāngtǔ) — بناء التربة المضغوطة. هذا هو السر وراء المتانة الاستثنائية للجدار والتقنية التي أبقته واقفاً لأكثر من 650 عامًا.',
                'xian.modal.intro3': '① 填 (Tián) — ملء يتم سكب التربة الرخوة الممزوجة بالجير والمواد اللاصقة العضوية في ألواح قوالب خشبية. يدفع الحرفي المزيج بقوة نحو الوجه الداخلي للقالب بحيث ترتد الحجارة والمواد الخشنة للداخل، بعيدًا عن السطح، مما يخلق وجهًا خارجيًا أملس عند إزالة القالب.',
                'xian.modal.intro4': '② 平 (Píng) — تسوية باستخدام الأيدي أو الأدوات الصغيرة، يتم تسوية المزيج المضاف حديثًا بشكل مستوٍ. هذه الخطوة حاسمة — فقط الطبقة المستوية تمامًا يمكن ضغطها بالتساوي. الطبقة غير المستوية تنشئ نقاطًا ضعيفة حيث يمكن للجدار أن يتشقق تحت الضغط مع مرور الوقت.',
                'xian.modal.intro5': '③ 置 (Zhì) — تعيين السماكة يجب التحكم في كل طبقة من التربة الرخوة لتكون بالضبط 120-150 ملم سميكة قبل الضغط. ألواب القوالب بها علامات قياس منحوتة على وجوهها الداخلية بحيث يمكن للحرفيين التحقق من العمق بدون أي أدوات إضافية. هذا الدقة يضمن أن كل طبقة تضغط إلى نفس الكثافة في جميع أنحاء الجدار بالكامل.',
                'xian.modal.intro6': '④ 踏 (Tà) — دوس قبل بدء الضغط، يمشي العمال عبر طبقة التربة الرخوة، دوسها بالأقدام. هذه خطوة الضغط المسبق تمنع التربة الرخوة من الارتفاع بشكل غير متساوٍ عند ضرب أدوات الضغط الثقيلة — مما يضمن أن قوة الضغط تدفع للأسفل بدلاً من دفع التربة للجانبين.',
                'xian.modal.intro7': '⑤ 夯 (Hāng) — ضغط يستخدم العمال أدوات ضغط خشبية أو حجرية ثقيلة لضرب طبقة التربة بشكل مستمر ومتساوٍ. يجب أن يكون الضغط إيقاعيًا ومتسقًا — الضرب بقوة شديدة في مكان واحد وبضغط خفيف في مكان آخر ينشئ طبقات ضعيفة غير مرئية داخل الجدار يمكن أن تفشل بعد قرون.',
                'xian.modal.intro8': '⑥ 补 (Bǔ) — تعزيز يتم إعطاء اهتمام خاص لحواف وزوايا القالب، وأي تقاطع بين الطبقة الجديدة والأعمدة الهيكلية الموجودة. هذه المناطق الانتقالية تتلقى ضغطًا إضافيًا لضمان عدم بقاء أي فجوات أو نقاط ضعيفة في أكثر نقاط الهيكل ضعفًا.',
                'xian.modal.chapter3': 'الفصل الثالث: برج البوابة — 城楼 (Chénglóu)',
                'xian.modal.intro9': 'برج البوابة هو الجزء الأكثر تعقيدًا من الناحية المعمارية في نظام الجدار بأكمله. على عكس الجدار نفسه — الذي هو في الأساس عمل ترابي ضخم — برج البوابة هو مبنى هيكلي خشبي كامل بُني بأفضل تقليد للهندسة المعمارية الإمبراطورية الصينية، يجمع كل تقنية رأيناها في المدينة المحرمة في هيكل واحد مدمج.',
                'xian.modal.intro10': 'نظام السقف ثلاثي الطبقات برج البوابة لديه ثلاثة مستويات سقف منفصلة، كل منها لديه مجموعة خاصة به من المآبين المتموجة وتغطية بلازلي. هذا الشكل السقف ثلاثي — يسمى 三重檐 (sān chóng yán) — كان محجوزًا للمباني ذات الأهمية العسكرية والمدنية العليا. كل مستوى سقف لديه نظام الدوجونغ الخاص به (斗拱 dǒugǒng) يدعم امتداد المأب، مما يخلق الصورة الظلية المتدرجة والمتماوجة التي تحدد أفق شيان.',
                'xian.modal.intro11': 'نظام التعليق التقني الخطوط والعلامات المتراكبة على الصورة في الصورة 4 تمثل مسحًا معماريًا حديثًا — العملية التي يقيس بها المهندسون المعماريون اليوم ويسجلون كل بعد لمبنى تاريخي لإنشاء سجل حفظ. هذا النوع من التوثيق التقني، يسمى 测绘 (cèhuì) بالصينية — الرسم المقاس — هو كيف تتم دراسة المباني القديمة وإصلاحها وتمريرها إلى الأجيال القادمة.',
                
                // City bios
                'cities.beijing.bio': 'قلب الصين السلالية - موطن أكبر مجمع قصور في العالم وأكثر من 600 عام من التاريخ الإمبراطوري.',
                'cities.xian.bio': 'قلب الصين السلالية - موطن جيش الطين الأسطوري، حيث آلاف المحاربين بحجمهم الطبيعي يحرسون الراحة الأبدية للإمبراطور كين.',
                'cities.suzhou.bio': 'سوتشو مشهورة بحدائقها الكلاسيكية الكلاسيكية وجسورها الأنيقة ونوافذها الفنية. تُعرف بـ"فينيسيا الشرق"، حيث تخلط الماء والعمارة والطبيعة في مناظر طبيعية هادئة.',
                
            }
        };
        
        // Now initialize current language
        this.currentLanguage = this.loadLanguage();
    }

    // Load language from localStorage
    loadLanguage() {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && this.translations[saved]) {
            return saved;
        }
        // Detect browser language
        const browserLang = navigator.language.split('-')[0];
        return this.translations[browserLang] ? browserLang : 'en';
    }

    // Save language to localStorage
    saveLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
    }

    // Get translation for a key
    t(key) {
        try {
            const langPack = this.translations[this.currentLanguage] || {};
            const englishPack = this.translations.en || {};

            const keyVariants = [key];

            // Handle common key schema differences used across pages.
            if (key.startsWith('nav.')) keyVariants.push(key.replace(/^nav\./, ''));
            if (key === 'lang.en') keyVariants.push('lang.english');
            if (key === 'lang.zh') keyVariants.push('lang.chinese');
            if (key === 'lang.ar') keyVariants.push('lang.arabic');

            for (const variant of keyVariants) {
                if (langPack[variant]) return langPack[variant];
            }

            // Fallback to English if current language is missing a key.
            for (const variant of keyVariants) {
                if (englishPack[variant]) return englishPack[variant];
            }

            return key;
        } catch (error) {
            console.warn(`Translation key "${key}" not found for language "${this.currentLanguage}"`);
            return key;
        }
    }

    // Initialize language on page load
    initializeLanguage() {
        this.updatePageLanguage();
        this.setupLanguageSelector();
    }

    // Update all translatable elements on page
    updatePageLanguage() {
        try {
            // Update elements with data-translate attribute
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                const translated = this.t(key);
                // Do not replace visible text with unresolved translation keys.
                if (translated !== key) {
                    element.textContent = translated;
                }
            });

            // Update elements with data-translate-placeholder attribute
            const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
            placeholderElements.forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                const translated = this.t(key);
                if (translated !== key) {
                    element.placeholder = translated;
                }
            });

            // Update page title
            const titleElement = document.querySelector('title[data-translate]');
            if (titleElement) {
                const key = titleElement.getAttribute('data-translate');
                document.title = this.t(key);
            }

            // Update page direction for RTL languages
            document.documentElement.dir = this.getLanguageDirection();
            document.documentElement.lang = this.currentLanguage;

            // Update language selector display
            this.updateLanguageSelector();
        } catch (error) {
            console.error('Error updating page language:', error);
        }
    }

    // Get language direction (LTR or RTL)
    getLanguageDirection() {
        return this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    // Setup language selector
    setupLanguageSelector() {
        const languageBtn = document.querySelector('.language-btn');
        const languageDropdown = document.querySelector('.language-dropdown');
        
        if (languageBtn && languageDropdown) {
            // Update current language display
            const currentLangText = this.t(`lang.${this.currentLanguage}`);
            const langSpan = languageBtn.querySelector('span');
            if (langSpan) {
                langSpan.textContent = currentLangText;
            }

            // Update dropdown options
            const options = languageDropdown.querySelectorAll('.language-option');
            options.forEach(option => {
                const lang = option.getAttribute('data-lang');
                const langText = this.t(`lang.${lang}`);
                const textSpan = option.querySelector('span:last-child');
                if (textSpan) {
                    textSpan.textContent = langText;
                }
            });

            // Add click handlers
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = option.getAttribute('data-lang');
                    this.changeLanguage(lang);
                });
            });
        }
    }

    // Change language
    changeLanguage(lang) {
        if (lang !== this.currentLanguage) {
            this.saveLanguage(lang);
            this.updatePageLanguage();
            
            // Show change notification
            const notification = document.createElement('div');
            notification.className = 'language-change-notification';
            notification.textContent = `Language changed to ${this.t(`lang.${lang}`)}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #BB1E1E, #8B0000);
                color: #FFD700;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                font-family: "Poppins", sans-serif;
                font-weight: 500;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
    }

    // Update language selector display
    updateLanguageSelector() {
        const languageBtn = document.querySelector('.language-btn span');
        if (languageBtn) {
            languageBtn.textContent = this.t(`lang.${this.currentLanguage}`);
        }
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'zh', name: '中文', flag: '🇨🇳' },
            { code: 'ar', name: 'العربية', flag: '🇸🇦' }
        ];
    }
}

// Initialize translation manager
window.translationManager = new TranslationManager();

// Debug information
console.log('Translation Manager initialized:', window.translationManager);
console.log('Current language:', window.translationManager.getCurrentLanguage());
console.log('Available translations:', Object.keys(window.translationManager.translations));

// Test translation on page load
window.addEventListener('load', function() {
    console.log('Page loaded, testing translations...');
    
    // Test a few translations
    console.log('Home (en):', window.translationManager.t('home'));
    console.log('Home (zh):', window.translationManager.t('home'));
    console.log('Home (ar):', window.translationManager.t('home'));
    
    // Initialize language on page
    window.translationManager.initializeLanguage();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationManager;
}
