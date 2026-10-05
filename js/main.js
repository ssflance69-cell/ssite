/**
 * SMART SECURE IT Networking & General Contracting Est.
 * Modern Executive Minimalist Engine:
 * - Dark Mode by default with 1-Click Toggle to Light Mode (Stored in localStorage)
 * - Full English & Arabic (RTL) Bilingual Support
 * - Interactive CCTV Tabs, Equipment Catalog & Manpower Accordion
 * Pure Vanilla JavaScript - Ultra-fast, Zero Dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeEngine();
    initBilingualEngine();
    initCctvTabs();
    initEquipmentManpowerToggle();
    initManpowerAccordion();
    initMobileNav();
    initWhatsAppSwitchEngine();
    initFormHandling();
    initScrollSpy();
    updateCopyrightYear();
});

/* ----------------------------------------------------
 * 1. THEME ENGINE (Dark Mode Default + 1-Click Toggle)
 * ---------------------------------------------------- */
function initThemeEngine() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const optDark = document.getElementById('opt-dark');
    const optLight = document.getElementById('opt-light');

    const dockThemeBtn = document.getElementById('dock-theme-toggle');
    const dockThemeIcon = document.getElementById('dock-theme-icon');
    const dockThemeText = document.getElementById('dock-theme-text');

    // Initialize with dark mode as default (using theme_v2 to bypass any stale cache)
    let savedTheme = localStorage.getItem('theme_v2') || 'dark';
    applyTheme(savedTheme);

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('theme_v2', nextTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    if (dockThemeBtn) {
        dockThemeBtn.addEventListener('click', toggleTheme);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        // Update Navbar Segmented Switch
        if (optDark && optLight) {
            if (theme === 'dark') {
                optDark.classList.add('active');
                optLight.classList.remove('active');
            } else {
                optDark.classList.remove('active');
                optLight.classList.add('active');
            }
        }

        // Update Floating Dock Button
        if (dockThemeIcon && dockThemeText) {
            if (theme === 'dark') {
                dockThemeIcon.textContent = '☀️';
                dockThemeText.textContent = 'Light Mode';
            } else {
                dockThemeIcon.textContent = '🌙';
                dockThemeText.textContent = 'Dark Mode';
            }
        }
    }
}

/* ----------------------------------------------------
 * 2. BILINGUAL DICTIONARY (English & Arabic)
 * ---------------------------------------------------- */
const i18nData = {
    en: {
        topbar_location: "Kingdom of Saudi Arabia | المملكة العربية السعودية",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_equipment: "Equipment & Manpower",
        nav_contact: "Contact",
        nav_get_quote: "Get a Quote",
        hero_badge: "Saudi Arabia General Contracting & IT Networking",
        hero_title_1: "Integrated Solutions.",
        hero_title_2: "Trusted Execution.",
        hero_subtext: "Turnkey excellence in IT, Security and Contracting across the Kingdom of Saudi Arabia.",
        hero_secondary_tagline: "\"From Code to Concrete, We Deliver.\"",
        hero_btn_services: "Our Services",
        hero_btn_whatsapp: "WhatsApp Us",
        hero_split_it: "IT & Telecom",
        hero_split_contracting: "Contracting",
        hero_badge_title: "Kingdom Sovereign Partner",
        hero_badge_sub: "Licensed Saudi Contracting Establishment",
        trust_stat_1: "pieces of equipment",
        trust_stat_2: "Skilled manpower across 40+ trades",
        trust_stat_3: "Serving clients across KSA",
        trust_stat_4: "support & maintenance",
        about_tag: "About Smart Secure IT",
        about_title: "Engineering Trust and Infrastructure Across Saudi Arabia",
        about_p1: "SMART SECURE IT Networking & General Contracting Est. is a premier Saudi establishment specializing in cutting-edge IT systems, security solutions, heavy equipment rental, and multi-disciplinary contracting services.",
        about_p2: "Headquartered in Riyadh with key logistical hubs serving the Eastern Province, Western Region, and mega-projects like NEOM, we provide end-to-end capabilities uniting digital intelligence with physical construction power.",
        vision_title: "Our Vision",
        vision_text: "To stand as the Kingdom's most dependable single-source contractor, advancing Saudi Vision 2030 through uncompromised technological security and robust civil execution.",
        mission_title: "Our Mission",
        mission_text: "Deliver precision-engineered IT infrastructure, defense-grade surveillance, certified heavy machinery, and specialized manpower with zero safety compromises.",
        val_1_title: "Pioneering",
        val_1_desc: "Embracing AI surveillance, smart building automation, and advanced construction tech to stay ahead of industry demands.",
        val_2_title: "Agile",
        val_2_desc: "Swift fleet dispatch and rapid technical deployment across all provinces with 24/7 responsive coordination.",
        val_3_title: "Dependable",
        val_3_desc: "ISO 9001:2015 quality standards, Aramco-compliant equipment certifications, and vetted professional manpower.",
        val_4_title: "Persevering",
        val_4_desc: "Relentless commitment to project milestones, ensuring turnkey completion from initial code to final concrete pour.",
        serv_badge: "Our Core Capabilities",
        serv_title: "Comprehensive Enterprise Services",
        serv_desc: "Delivering specialized turnkey divisions meeting Kingdom industrial, commercial, and defense standards.",
        learn_more: "Learn more",
        serv_1_title: "IT & Security Systems",
        serv_1_desc: "High-definition CCTV, IP dome cameras, AI facial recognition, thermal imaging, and central 24/7 SOC surveillance.",
        serv_2_title: "Access Control & Time Attendance",
        serv_2_desc: "Biometric fingerprint, RFID proximity cards, automated turnstiles, and integrated enterprise HR payroll synchronization.",
        serv_3_title: "Heavy Equipment Rental",
        serv_3_desc: "Fleet of 2,700+ certified cranes, boom trucks, forklifts, telehandlers, generators, and heavy earthmoving machinery.",
        serv_4_title: "Manpower Services",
        serv_4_desc: "Certified engineers, Aramco-vetted HSE officers, certified riggers, welders, and technical workforce across 40+ trades.",
        serv_5_title: "Civil & Mechanical Contracting",
        serv_5_desc: "Complete concrete work, steel structure fabrication, industrial piping, HVAC plant maintenance, and MEP execution.",
        serv_6_title: "Material Trading",
        serv_6_desc: "Direct OEM spare parts, structural steel framing, prefabricated buildings, industrial insulation, and civil raw supplies.",
        serv_7_title: "Scaffolding Supply, Fabrication & Fencing",
        serv_7_desc: "Certified cuplock and ringlock scaffolding systems, custom structural fabrication, and high-security perimeter fencing.",
        serv_8_title: "Utility, Engineering & Environmental",
        serv_8_desc: "Power distribution systems, municipal utility trenching, environmental compliance audits, and site hazard containment.",
        cctv_badge: "Security Engineering",
        cctv_title: "Defense-Grade CCTV & Surveillance Systems",
        cctv_desc: "Certified security architectures compliant with High Commission for Industrial Security (HCIS) standards.",
        tab_1_title: "Analogue / HD",
        tab_2_title: "IP Systems",
        tab_3_title: "AI Surveillance",
        tab_1_heading: "High-Performance Analogue HD Systems",
        tab_1_text: "Cost-effective, rock-solid coaxial surveillance solutions up to 4K resolution. Ideal for retrofitting existing facilities without re-cabling, delivering zero latency video feeds and exceptional low-light clarity.",
        tab_2_heading: "Scalable Enterprise IP Network Cameras",
        tab_2_text: "End-to-end optical fiber and PoE networked cameras with multi-site cloud aggregation, military-grade AES-256 encryption, motorized PTZ, and seamless integration with command SOC centers.",
        tab_3_heading: "Intelligent AI & Deep-Learning Analytics",
        tab_3_text: "Next-generation neural network detection: automatic license plate recognition (ALPR), thermal perimeter intrusion alerts, facial verification, line crossing triggers, and proactive anomaly warnings.",
        cctv_check_1: "Consultation & Design",
        cctv_check_2: "High-Quality Equipment",
        cctv_check_3: "Remote Monitoring",
        cctv_check_4: "Maintenance & Support",
        cctv_check_5: "Customized Solutions for Every Industry",
        fleet_badge: "Mobilization Power",
        fleet_title: "Heavy Equipment Rental & Certified Manpower",
        fleet_desc: "Over 2,700 modern machinery units and certified tradesmen mobilized to any site in Saudi Arabia.",
        eq_tab_label: "Heavy Equipment Fleet (2,700+ Units)",
        mp_tab_label: "Certified Manpower (40+ Trades)",
        eq_1: "Rough Terrain Cranes (30T - 160T)",
        eq_2: "Crawler Cranes (50T - 500T)",
        eq_3: "Truck Cranes (All-Terrain)",
        eq_4: "Boom Trucks (3T - 15T)",
        eq_5: "Forklifts (3T - 16T Diesel & Electric)",
        eq_6: "Aerial Platforms & Scissor Lifts",
        eq_7: "Telehandlers (4T - 7T Reach)",
        eq_8: "Diesel Generators (25 kVA - 1500 kVA)",
        eq_9: "Solar & Diesel Tower Lights",
        eq_10: "Heavy Welding Machines (400A - 600A)",
        mp_cat_1: "1. Procurement & Supply Chain Personnel",
        mp_cat_1_desc: "Material controllers, vendor inspectors, procurement specialists, and warehouse inventory supervisors experienced in Saudi Aramco, SABIC, and Royal Commission compliance.",
        mp_cat_2: "2. Construction & Project Management",
        mp_cat_2_desc: "Civil, electrical, and mechanical project engineers, planning directors, QA/QC certified inspectors, and site construction superintendents for mega infrastructure projects.",
        mp_cat_3: "3. Administrative & Document Control",
        mp_cat_3_desc: "Bilingual English/Arabic document controllers, timekeepers, HR coordinators, logistics dispatchers, and project secretaries for corporate operations.",
        mp_cat_4: "4. Health, Safety & Environment (HSE)",
        mp_cat_4_desc: "NEBOSH & OSHA certified safety managers, Aramco-approved safety officers, environmental compliance auditors, and on-site first-aid coordinators enforcing zero-harm protocols.",
        mp_cat_5: "5. Specialized Technical Workforce",
        mp_cat_5_desc: "Certified 6G welders, structural steel erectors, telecom fiber splicers, low-current CCTV technicians, certified crane operators (TUV / Aramco), and scaffolders.",
        mat_badge: "Industrial Supply",
        mat_title: "Material Trading & Civil Building Products",
        mat_desc: "Wholesale supply of prime construction materials, architectural finishes, and structural components across KSA.",
        mat_1: "Structural Steel Framing & Beams",
        mat_2: "Heavy Industrial Mezzanine Floors",
        mat_3: "Prefabricated Modular Buildings",
        mat_4: "Thermal & Acoustic Rockwool Insulation",
        mat_5: "Commercial Ceramic & Porcelain Tiles",
        mat_6: "UL-Listed Fire-Rated Steel Doors",
        mat_7: "Moisture-Resistant Gypsum Board",
        mat_8: "Industrial Fasteners & Hardware",
        why_badge: "The Smart Secure Edge",
        why_title: "Why Saudi Enterprises Choose Us",
        why_desc: "Built on Gulf-region industrial reliability, certified safety protocols, and unmatched execution speed.",
        why_1_title: "One-Stop Solution",
        why_1_desc: "Eliminate subcontractor friction. We handle cybersecurity, surveillance, heavy machinery logistics, and structural contracting under a single established contract.",
        why_2_title: "Safety & Quality First",
        why_2_desc: "Strict adherence to ISO 9001:2015 standards, HCIS security mandates, and Saudi Aramco safety regulations on every work site.",
        why_3_title: "Flexible & Scalable",
        why_3_desc: "From single-site biometric retrofits to massive refinery shut-downs requiring 500+ workers and heavy crane packages, we scale swiftly to meet deadlines.",
        why_4_title: "Competitive Pricing",
        why_4_desc: "Direct manufacturer OEM sourcing, an owned equipment fleet, and streamlined project management ensure optimum return on investment for project owners.",
        cta_title: "Need a reliable partner for your next project?",
        cta_desc: "Partner with SMART SECURE IT for immediate equipment mobilization, surveillance installations, or turnkey contracting tenders.",
        cta_btn_quote: "Request a Quote",
        cta_btn_whatsapp: "Chat on WhatsApp",
        contact_badge: "Let's Connect",
        contact_title: "Request an Engineering Quotation",
        contact_desc: "Our technical dispatch desk will respond within 24 hours with project analysis and pricing.",
        form_label_name: "Full Name *",
        form_label_phone: "Phone / WhatsApp Number *",
        form_label_email: "Corporate Email *",
        form_label_service: "Service Required *",
        form_opt_select: "Select a Division...",
        form_opt_1: "IT & CCTV Security Surveillance",
        form_opt_2: "Access Control & Time Attendance",
        form_opt_3: "Heavy Equipment Rental",
        form_opt_4: "Manpower Supply & Technical Trades",
        form_opt_5: "Civil & Mechanical Contracting",
        form_opt_6: "Material Trading & Civil Products",
        form_opt_7: "Scaffolding Supply & Fencing",
        form_opt_8: "Utility & Environmental Services",
        form_label_message: "Project Scope / Requirements *",
        form_btn_submit: "Submit Consultation Request",
        card_info_title: "Establishment Information",
        info_phone_lbl: "Direct Hotline & WhatsApp",
        info_email_lbl: "Corporate Email",
        info_web_lbl: "Official Portal",
        info_loc_lbl: "Headquarters & Hubs",
        info_loc_val: "Riyadh HQ • Dammam & Jubail Hub • Western Region",
        map_title: "Kingdom of Saudi Arabia Operations Hubs",
        map_sub: "Riyadh • Al-Khobar / Jubail • Jeddah • NEOM / Tabuk",
        footer_about: "SMART SECURE IT Networking & General Contracting Est. is an authorized Saudi establishment delivering defense-grade IT & security architectures, certified equipment fleet rental, and turnkey multi-disciplinary contracting across the Kingdom.",
        footer_links_title: "Quick Navigation",
        footer_serv_title: "Key Divisions",
        footer_contact_title: "Kingdom Dispatch",
        footer_rights: "All Rights Reserved. Kingdom of Saudi Arabia.",
        wa_tooltip: "Chat with us",
        form_channel_label: "Submit Via:",
        channel_wa: "Direct WhatsApp",
        channel_email: "Corporate Email",
        form_btn_submit_wa: "Send Request via WhatsApp",
        form_btn_submit_email: "Submit via Corporate Email",
        wa_status: "Online • Instant Reply",
        wa_greeting: "Hello! 👋 Welcome to Smart Secure IT. How can our technical desk assist your project today?",
        wa_quick_label: "Quick Inquiry Options:",
        wa_chip_1: "📹 CCTV & Security",
        wa_chip_2: "🚜 Equipment Rental",
        wa_chip_3: "👷 Manpower Supply",
        wa_chip_4: "🏗️ Civil Contracting",
        wa_placeholder: "Type a message or select above...",
        wa_send: "Send"
    },
    ar: {
        topbar_location: "المملكة العربية السعودية | Kingdom of Saudi Arabia",
        nav_home: "الرئيسية",
        nav_about: "عن المؤسسة",
        nav_services: "خدماتنا",
        nav_equipment: "المعدات والكوادر",
        nav_contact: "اتصل بنا",
        nav_get_quote: "طلب تسعيرة",
        hero_badge: "مؤسسة سعودية للمقاولات العامة وشبكات تقنية المعلومات",
        hero_title_1: "حلول متكاملة.",
        hero_title_2: "تنفيذ موثوق.",
        hero_subtext: "التميز المتكامل في تقنية المعلومات، الأنظمة الأمنية والمقاولات العامة في جميع أنحاء المملكة العربية السعودية.",
        hero_secondary_tagline: "\"من البرمجة إلى الخرسانة، نلتزم بالإنجاز.\"",
        hero_btn_services: "استكشف خدماتنا",
        hero_btn_whatsapp: "تواصل عبر واتساب",
        hero_split_it: "تقنية المعلومات",
        hero_split_contracting: "المقاولات",
        hero_badge_title: "شريك موثوق في المملكة",
        hero_badge_sub: "مؤسسة مقاولات سعودية مرخصة ومعتمدة",
        trust_stat_1: "معدة وآلية ثقيلة مرخصة",
        trust_stat_2: "كوادر فنية متخصصة في أكثر من 40 مهنة",
        trust_stat_3: "نخدم مشاريع القطاعين الحكومي والخاص بالمملكة",
        trust_stat_4: "دعم فني وصيانة تشغيلية على مدار الساعة",
        about_tag: "عن سمارت سيكيور آي تي",
        about_title: "هندسة الثقة وتطوير البنية التحتية في المملكة",
        about_p1: "مؤسسة سمارت سيكيور آي تي لشبكات تقنية المعلومات والمقاولات العامة هي مؤسسة سعودية رائدة تقدم أحدث أنظمة تقنية المعلومات والحلول الأمنية المعتمدة، وتأجير المعدات الثقيلة، والمقاولات المدنية والميكانيكية الشاملة.",
        about_p2: "يقع مقرنا الرئيسي في الرياض مع مراكز دعم لوجستي تخدم المنطقة الشرقية والغربية والمشاريع الكبرى مثل نيوم، موفرين قدرات تجمع الذكاء الرقمي بقوة البناء والتشييد.",
        vision_title: "رؤيتنا",
        vision_text: "أن نكون المقاول الأكثر موثوقية وشريكاً أساسياً في تحقيق مستهدفات رؤية السعودية 2030 من خلال أعلى معايير الحماية التقنية وجودة التنفيذ الإنشائي.",
        mission_title: "رسالتنا",
        mission_text: "توفير حلول تقنية وأنظمة مراقبة مطابقة لمعايير الهيئة العليا للأمن الصناعي، وأسطول معدات حديث وكوادر هندسية مدربة بأعلى معايير السلامة المهنية.",
        val_1_title: "الريادة",
        val_1_desc: "تبني أنظمة المراقبة بالذكاء الاصطناعي وتقنيات البناء الحديثة لتلبية متطلبات المشاريع الكبرى.",
        val_2_title: "المرونة والسرعة",
        val_2_desc: "سرعة استجابة واستنفار لوجستي فوري للآليات والكوادر في مختلف مناطق المملكة على مدار 24/7.",
        val_3_title: "الموثوقية",
        val_3_desc: "معايير الجودة العالمية ISO 9001:2015 وتراخيص سلامة معتمدة من أرامكو والجهات المعنية.",
        val_4_title: "المثابرة",
        val_4_desc: "التزام صارم بالجداول الزمنية من أول خطوة تقنية إلى تسليم آخر أعمال الخرسانة والتشطيب.",
        serv_badge: "مجالات اختصاصنا",
        serv_title: "خدمات وحلول مؤسسية متكاملة",
        serv_desc: "أقسام متخصصة تضمن تنفيذ مشاريع البنية التحتية والصناعية بأعلى درجات الاحترافية.",
        learn_more: "المزيد من التفاصيل",
        serv_1_title: "أنظمة تقنية المعلومات والأمن",
        serv_1_desc: "كاميرات المراقبة التلفزيونية عالية الدقة، أنظمة IP الشبكية، والتعرف بالذكاء الاصطناعي وغرف التحكم والمراقبة المركزية.",
        serv_2_title: "أنظمة التحكم بالدخول وتسجيل الحضور",
        serv_2_desc: "أجهزة البصمة، بطاقات القرب الذكية، بوابات الدخول الآلية، والربط البرمجي مع أنظمة الموارد البشرية والرواتب.",
        serv_3_title: "تأجير المعدات والآليات الثقيلة",
        serv_3_desc: "أسطول يضم أكثر من 2,700 رافعة وشاحنة هيدروليكية ورافعات شوكية ومولدات كهربائية معتمدة.",
        serv_4_title: "إمداد القوى العاملة الفنية",
        serv_4_desc: "مهندسون ومسؤولو سلامة HSE معتمدون من أرامكو، وفنيو لحام وتركيب في أكثر من 40 تخصصاً مهنياً.",
        serv_5_title: "المقاولات المدنية والميكانيكية",
        serv_5_desc: "الأعمال الإنشائية والخرسانية، تصنيع وتوريد الهياكل الفولاذية، تمديدات الأنابيب وأنظمة التكييف والالكتروميكانيك.",
        serv_6_title: "تجارة وتوريد المواد الصناعية",
        serv_6_desc: "قطع الغيار الأصلية، الهياكل المعدنية، المباني الجاهزة، العوازل الحرارية ومواد البناء المتنوعة.",
        serv_7_title: "توريد وتصنيع السقالات والسياج الأمني",
        serv_7_desc: "أنظمة السقالات المعتمدة (كابلوك ورينج لوك)، التصنيع الهيكلي، والسياج الأمني المحيط للمنشآت.",
        serv_8_title: "الخدمات الهندسية والمرافق والبيئة",
        serv_8_desc: "شبكات توزيع الطاقة، حفر وتمديد المرافق البلدية، والتدقيق البيئي وإدارة سلامة المواقع.",
        cctv_badge: "الهندسة الأمنية",
        cctv_title: "أنظمة المراقبة التلفزيونية المعتمدة (CCTV)",
        cctv_desc: "بنية أمنية مطابقة للمواصفات واللوائح المعتمدة من الهيئة العليا للأمن الصناعي (HCIS).",
        tab_1_title: "أنظمة HD التناظرية",
        tab_2_title: "أنظمة الشبكات (IP)",
        tab_3_title: "مراقبة الذكاء الاصطناعي",
        tab_1_heading: "أنظمة الكاميرات التناظرية عالية الوضوح",
        tab_1_text: "حلول موثوقة واقتصادية حتى دقة 4K عبر الكابلات المحورية، مثالية لتحديث المنشآت الحالية دون الحاجة لإعادة التمديد مع نقاء رؤية فائق في ظروف الإضاءة المنخفضة.",
        tab_2_heading: "كاميرات IP الشبكية السحابية",
        tab_2_text: "شبكات متطورة عبر الألياف الضوئية وكابلات PoE، مع تشفير عسكري AES-256، وإمكانية الربط متعدد المواقع مع مراكز المراقبة وغرف العمليات المركزية.",
        tab_3_heading: "تحليلات الذكاء الاصطناعي والتعلم العميق",
        tab_3_text: "أنظمة ذكية للتعرف التلقائي على لوحات المركبات (ALPR)، كشف التسلل المحيطي بالكاميرات الحرارية، والتعرف على الوجوه والتنبيه الاستباقي لأي خطر.",
        cctv_check_1: "الاستشارة والتصميم الهندسي المتخصص",
        cctv_check_2: "معدات وأجهزة معتمدة بأعلى جودة",
        cctv_check_3: "المراقبة والربط المركزي عن بُعد",
        cctv_check_4: "الصيانة المستمرة والدعم الفني",
        cctv_check_5: "حلول مخصصة تناسب كل قطاع ومنشأة",
        fleet_badge: "جاهزية الاستنفار",
        fleet_title: "تأجير المعدات الثقيلة والكوادر البشرية المعتمدة",
        fleet_desc: "أكثر من 2,700 آلية ومعدة معتمدة وكوادر مهنية مستعدة للتواجد في أي موقع بالمملكة.",
        eq_tab_label: "أسطول المعدات الثقيلة (2,700+ معدة)",
        mp_tab_label: "الكوادر البشرية المؤهلة (40+ مهنة)",
        eq_1: "رافعات الأراضي الوعرة (30 طن - 160 طن)",
        eq_2: "الرافعات المجنزرة (50 طن - 500 طن)",
        eq_3: "رافعات الشاحنات لجميع التضاريس",
        eq_4: "شاحنات البوم كرين (3 طن - 15 طن)",
        eq_5: "الرافعات الشوكية (3 إلى 16 طن ديزل وكهرباء)",
        eq_6: "منصات العمل الهوائية والرافعات المقصية",
        eq_7: "رافعات التلسكوبية (تيلي هاندلر 4 إلى 7 طن)",
        eq_8: "مولدات الديزل (25 كيلو فولت أمبير - 1500 ك.ف.أ)",
        eq_9: "أبراج الإنارة الشمسية والديزل",
        eq_10: "مكائن اللحام الصناعية الثقيلة (400A - 600A)",
        mp_cat_1: "1. كوادر المشتريات وسلاسل الإمداد",
        mp_cat_1_desc: "مراقبو مواد، فاحصو موردين، ومختصو مشتريات ومشرفو مستودعات من ذوي الخبرة في معايير أرامكو السعودية وسابك والهيئة الملكية.",
        mp_cat_2: "2. مهندسو البناء وإدارة المشاريع",
        mp_cat_2_desc: "مهندسو مشاريع مدنية وكهربائية وميكانيكية، ومخططو مشاريع ومفتشو جودة QA/QC معتمدون ومديرو مواقع للمشاريع الكبرى.",
        mp_cat_3: "3. الكوادر الإدارية ومراقبة الوثائق",
        mp_cat_3_desc: "مراقبو وثائق ثنائيو اللغة، مسؤولو حساب أوقات، ومنسقو موارد بشرية وإداريون لتسيير العمليات التشغيلية بالمشاريع.",
        mp_cat_4: "4. مسؤولو الصحة والسلامة والبيئة (HSE)",
        mp_cat_4_desc: "مديرو ومفتشو سلامة معتمدون من NEBOSH و OSHA ومعتمدون من أرامكو السعودية ومسعفون مؤهلون لضمان بيئة عمل آمنة تماماً.",
        mp_cat_5: "5. القوى العاملة الفنية المتخصصة",
        mp_cat_5_desc: "فنيو لحام 6G معتمدون، مركبو هياكل فولاذية، فنيو شبكات ألياف ضوئية، فنيو كاميرات وتيار خفيف، ومشغلو رافعات معتمدون من TUV وأرامكو.",
        mat_badge: "الإمداد والتوريد",
        mat_title: "تجارة وتوريد مواد البناء والمنتجات الإنشائية",
        mat_desc: "توريد بالجملة لمواد التشييد عالية المواصفات والتشطيبات المعمارية في جميع أنحاء المملكة.",
        mat_1: "هياكل وجسور الحديد الإنشائي",
        mat_2: "طوابق الميزانين الصناعية الثقيلة",
        mat_3: "المباني الجاهزة والوحدات النمطية",
        mat_4: "العوازل الحرارية والصوتية (الصوف الصخري)",
        mat_5: "بلاط السيراميك والبورسلان التجاري",
        mat_6: "الأبواب الفولاذية المقاومة للحريق (UL)",
        mat_7: "ألواح الجبس بورد المقاومة للرطوبة",
        mat_8: "المثبتات والعدد والأدوات الإنشائية",
        why_badge: "ميزتنا التنافسية",
        why_title: "لماذا تختار الشركات السعودية سمارت سيكيور آي تي؟",
        why_desc: "نبني شراكاتنا على موثوقية القطاع الصناعي الخليجي وأعلى معايير السلامة وسرعة الإنجاز.",
        why_1_title: "حل متكامل من مصدر واحد",
        why_1_desc: "تخلص من تعدد المقاولين. نتولى البنية الأمنية وتأجير الآليات والمقاولات العامة تحت مظلة عقد موحد معتمد.",
        why_2_title: "الأولوية للسلامة والجودة",
        why_2_desc: "التزام كامل بمعايير ISO 9001:2015، وتوجيهات الهيئة العليا للأمن الصناعي، وقواعد السلامة المعتمدة لدى كبرى الجهات.",
        why_3_title: "مرونة وقابلية للتوسع السريع",
        why_3_desc: "سواء كان مشروعك تحديثاً أمنياً أو صيانة شاملة لمصفاة تتطلب أكثر من 500 عامل ومعدات ثقيلة، نتحرك بسرعة لمواكبة جدولك.",
        why_4_title: "أسعار تنافسية وقيمة مستدامة",
        why_4_desc: "توريد مباشر من المصنع، أسطول معدات مملوك للمؤسسة، وإدارة تنفيذية محترفة تضمن أفضل عائد لاستثمارك الإنشائي والتقني.",
        cta_title: "هل تبحث عن شريك موثوق لمشروعك القادم؟",
        cta_desc: "تواصل مع مؤسسة سمارت سيكيور آي تي لاستنفار فوري للمعدات أو تركيب الأنظمة الأمنية أو مناقصات المقاولات العامة.",
        cta_btn_quote: "طلب تسعيرة رسمية",
        cta_btn_whatsapp: "محادثة عبر واتساب",
        contact_badge: "تواصل معنا",
        contact_title: "طلب استشارة وعرض أسعار فني",
        contact_desc: "سيقوم فريقنا الهندسي بالرد عليكم خلال 24 ساعة بدراسة المشروع وتقدير التكلفة.",
        form_label_name: "الاسم الكامل *",
        form_label_phone: "رقم الجوال / واتساب *",
        form_label_email: "البريد الإلكتروني للشركة *",
        form_label_service: "الخدمة المطلوبة *",
        form_opt_select: "اختر القسم المطلوب...",
        form_opt_1: "أنظمة تقنية المعلومات وكاميرات المراقبة",
        form_opt_2: "أنظمة التحكم بالدخول وتسجيل الدوام",
        form_opt_3: "تأجير المعدات والآليات الثقيلة",
        form_opt_4: "توريد الكوادر البشرية والمهن الفنية",
        form_opt_5: "المقاولات المدنية والميكانيكية",
        form_opt_6: "تجارة وتوريد المواد ومنتجات البناء",
        form_opt_7: "توريد السقالات والسياج الأمني",
        form_opt_8: "الخدمات الهندسية والمرافق والبيئة",
        form_label_message: "نطاق المشروع والمتطلبات التفصيلية *",
        form_btn_submit: "إرسال طلب التسعيرة والاستشارة",
        card_info_title: "بيانات التواصل الرسمية",
        info_phone_lbl: "الخط المباشر وقناة واتساب",
        info_email_lbl: "البريد الإلكتروني الرسمي",
        info_web_lbl: "الموقع الإلكتروني",
        info_loc_lbl: "المقر الرئيسي والفروع",
        info_loc_val: "الرياض المقر الرئيسي • مركز الشرقية والجبيل • المنطقة الغربية",
        map_title: "مراكز العمليات والتوزيع في المملكة العربية السعودية",
        map_sub: "الرياض • الخبر / الجبيل • جدة • نيوم / تبوك",
        footer_about: "مؤسسة سمارت سيكيور آي تي لشبكات تقنية المعلومات والمقاولات العامة مؤسسة سعودية تقدم حلولاً أمنية وتقنية معتمدة، وتأجير الآليات الثقيلة، ومقاولات متكاملة في مختلف مناطق المملكة.",
        footer_links_title: "روابط سريعة",
        footer_serv_title: "أقسامنا الرئيسية",
        footer_contact_title: "مكتب التنسيق المركزي",
        footer_rights: "جميع الحقوق محفوظة. المملكة العربية السعودية.",
        wa_tooltip: "تحدث معنا مباشرة",
        form_channel_label: "طريقة الإرسال المفضلة:",
        channel_wa: "واتساب المباشر",
        channel_email: "البريد الإلكتروني",
        form_btn_submit_wa: "إرسال الطلب عبر واتساب",
        form_btn_submit_email: "إرسال عبر البريد الإلكتروني",
        wa_status: "متصل الآن • رد فوري",
        wa_greeting: "أهلاً بك! 👋 مرحباً بك في شركة سمارت سيكيور. كيف يمكن لمكتبنا الفني مساعدة مشروعك اليوم؟",
        wa_quick_label: "خيارات الاستفسار السريع:",
        wa_chip_1: "📹 كاميرات ومراقبة أمنية",
        wa_chip_2: "🚜 تأجير المعدات الثقيلة",
        wa_chip_3: "👷 توريد الكوادر الفنية",
        wa_chip_4: "🏗️ المقاولات والإنشاءات",
        wa_placeholder: "اكتب رسالتك أو اختر من الخيارات أعلاه...",
        wa_send: "إرسال"
    }
};

/* ----------------------------------------------------
 * 3. BILINGUAL SWITCHING CONTROLLER
 * ---------------------------------------------------- */
let currentLang = 'en';

function initBilingualEngine() {
    const langBtn = document.getElementById('lang-toggle-btn');
    const dockLangBtn = document.getElementById('dock-lang-toggle');

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
    }

    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    if (dockLangBtn) {
        dockLangBtn.addEventListener('click', toggleLanguage);
    }
}

function applyLanguage(lang) {
    const htmlElem = document.documentElement;
    const langLabel = document.getElementById('lang-label');
    const dockLangText = document.getElementById('dock-lang-text');
    
    // Set direction and lang attributes
    htmlElem.setAttribute('lang', lang);
    htmlElem.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Language Toggle Button Labels
    const nextLangText = lang === 'ar' ? 'English' : 'العربية';
    if (langLabel) {
        langLabel.textContent = nextLangText;
    }
    if (dockLangText) {
        dockLangText.textContent = nextLangText;
    }

    // Update all text elements with data-i18n
    const translatableElems = document.querySelectorAll('[data-i18n]');
    translatableElems.forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            elem.textContent = i18nData[lang][key];
        }
    });

    // Update input placeholders
    updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const msgInput = document.getElementById('form-message');
    const waInput = document.getElementById('wa-custom-msg');

    if (lang === 'ar') {
        if (nameInput) nameInput.placeholder = 'مثال: م. عبد الله العتيبي';
        if (emailInput) emailInput.placeholder = 'abdullah@company.com.sa';
        if (msgInput) msgInput.placeholder = 'حدد موقع مشروعك، الآليات المطلوبة، أو مواصفات النظام الأمني...';
        if (waInput) waInput.placeholder = 'اكتب رسالتك أو اختر من الخيارات أعلاه...';
    } else {
        if (nameInput) nameInput.placeholder = 'e.g. Eng. Abdullah Al-Otaibi';
        if (emailInput) emailInput.placeholder = 'abdullah@company.com.sa';
        if (msgInput) msgInput.placeholder = 'Detail your project location, equipment needed, or security technical specifications...';
        if (waInput) waInput.placeholder = 'Type a message or select above...';
    }
}

/* ----------------------------------------------------
 * 4. CCTV TABS SWITCHER
 * ---------------------------------------------------- */
function initCctvTabs() {
    const tabBtns = document.querySelectorAll('.cctv-tab-btn');
    const tabPanels = document.querySelectorAll('.cctv-tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            // Remove active from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Remove active from all panels
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate current
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

/* ----------------------------------------------------
 * 5. HEAVY EQUIPMENT & MANPOWER TOGGLE
 * ---------------------------------------------------- */
function initEquipmentManpowerToggle() {
    const btnEq = document.getElementById('btn-show-equipment');
    const btnMp = document.getElementById('btn-show-manpower');
    const eqView = document.getElementById('equipment-view');
    const mpView = document.getElementById('manpower-view');

    if (!btnEq || !btnMp || !eqView || !mpView) return;

    btnEq.addEventListener('click', () => {
        btnEq.classList.add('active');
        btnMp.classList.remove('active');
        eqView.style.display = 'block';
        mpView.style.display = 'none';
    });

    btnMp.addEventListener('click', () => {
        btnMp.classList.add('active');
        btnEq.classList.remove('active');
        eqView.style.display = 'none';
        mpView.style.display = 'block';
    });
}

/* ----------------------------------------------------
 * 6. MANPOWER ACCORDION CONTROLLER
 * ---------------------------------------------------- */
function initManpowerAccordion() {
    const accordionItems = document.querySelectorAll('.mp-accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.mp-accordion-header');
        if (!header) return;

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all
            accordionItems.forEach(i => {
                i.classList.remove('active');
                const arrow = i.querySelector('.mp-arrow');
                if (arrow) arrow.textContent = '▾';
            });

            // Toggle selected
            if (!isOpen) {
                item.classList.add('active');
                const arrow = item.querySelector('.mp-arrow');
                if (arrow) arrow.textContent = '▴';
            }
        });
    });
}

/* ----------------------------------------------------
 * 7. MOBILE NAVIGATION DRAWER
 * ---------------------------------------------------- */
function initMobileNav() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navPanel = document.getElementById('mobile-nav-panel');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !navPanel) return;

    menuBtn.addEventListener('click', () => {
        navPanel.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navPanel.classList.remove('active');
        });
    });
}

/* ----------------------------------------------------
 * 8. WHATSAPP INTERACTIVE SWITCH & CHAT ENGINE
 * ---------------------------------------------------- */
function initWhatsAppSwitchEngine() {
    const waTriggerBtn = document.getElementById('whatsapp-toggle-btn');
    const waChatCard = document.getElementById('whatsapp-chat-card');
    const waCloseBtn = document.getElementById('wa-close-btn');
    const dockWaBtn = document.getElementById('dock-wa-toggle');
    const waTooltip = document.getElementById('whatsapp-tooltip');
    const waForm = document.getElementById('wa-chat-form');
    const waInput = document.getElementById('wa-custom-msg');
    const waChips = document.querySelectorAll('.wa-prompt-chip');
    const waIconOpen = document.querySelector('.wa-icon-open');
    const waIconClose = document.querySelector('.wa-icon-close');
    const waTimeElem = document.getElementById('wa-msg-time');

    if (!waTriggerBtn || !waChatCard) return;

    function openWhatsAppChat() {
        waChatCard.classList.add('active');
        waChatCard.setAttribute('aria-hidden', 'false');
        waTriggerBtn.classList.add('active');
        if (waIconOpen) waIconOpen.style.display = 'none';
        if (waIconClose) waIconClose.style.display = 'block';
        if (waTooltip) waTooltip.style.opacity = '0';
        if (waTimeElem) {
            const now = new Date();
            waTimeElem.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        if (waInput) setTimeout(() => waInput.focus(), 250);
    }

    function closeWhatsAppChat() {
        waChatCard.classList.remove('active');
        waChatCard.setAttribute('aria-hidden', 'true');
        waTriggerBtn.classList.remove('active');
        if (waIconOpen) waIconOpen.style.display = 'block';
        if (waIconClose) waIconClose.style.display = 'none';
        if (waTooltip) waTooltip.style.opacity = '1';
    }

    function toggleWhatsAppChat() {
        if (waChatCard.classList.contains('active')) {
            closeWhatsAppChat();
        } else {
            openWhatsAppChat();
        }
    }

    waTriggerBtn.addEventListener('click', toggleWhatsAppChat);

    if (waCloseBtn) {
        waCloseBtn.addEventListener('click', closeWhatsAppChat);
    }

    if (dockWaBtn) {
        dockWaBtn.addEventListener('click', () => {
            openWhatsAppChat();
        });
    }

    // Quick Prompt Chips
    waChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const msg = chip.getAttribute('data-msg') || chip.textContent.trim();
            const waUrl = `https://wa.me/966567513410?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
            closeWhatsAppChat();
        });
    });

    // Chat Form Direct Dispatch
    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const typedMsg = waInput ? waInput.value.trim() : '';
            const msgToSend = typedMsg || (currentLang === 'ar' ? 'مرحباً مؤسسة سمارت سيكيور، أود الاستفسار عن خدماتكم.' : 'Hello Smart Secure IT, I would like to enquire about your services.');
            const waUrl = `https://wa.me/966567513410?text=${encodeURIComponent(msgToSend)}`;
            window.open(waUrl, '_blank');
            if (waInput) waInput.value = '';
            closeWhatsAppChat();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && waChatCard.classList.contains('active')) {
            closeWhatsAppChat();
        }
    });
}

/* ----------------------------------------------------
 * 9. QUOTE INQUIRY FORM & DISPATCH CHANNEL SWITCH
 * ---------------------------------------------------- */
function initFormHandling() {
    const form = document.getElementById('quote-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');
    const submitBtnText = document.getElementById('submit-btn-text');
    const submitBtnIcon = document.getElementById('submit-btn-icon');
    const channelOptWa = document.getElementById('channel-opt-wa');
    const channelOptEmail = document.getElementById('channel-opt-email');

    let activeChannel = 'whatsapp';

    function setChannel(channel) {
        activeChannel = channel;
        if (channel === 'whatsapp') {
            if (channelOptWa) channelOptWa.classList.add('active');
            if (channelOptEmail) channelOptEmail.classList.remove('active');
            if (submitBtnText) submitBtnText.textContent = currentLang === 'ar' ? 'إرسال الطلب عبر واتساب' : 'Send Request via WhatsApp';
            if (submitBtnIcon) {
                submitBtnIcon.innerHTML = '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>';
            }
        } else {
            if (channelOptWa) channelOptWa.classList.remove('active');
            if (channelOptEmail) channelOptEmail.classList.add('active');
            if (submitBtnText) submitBtnText.textContent = currentLang === 'ar' ? 'إرسال عبر البريد الإلكتروني' : 'Submit via Corporate Email';
            if (submitBtnIcon) {
                submitBtnIcon.innerHTML = '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
            }
        }
    }

    if (channelOptWa) {
        channelOptWa.addEventListener('click', () => setChannel('whatsapp'));
    }
    if (channelOptEmail) {
        channelOptEmail.addEventListener('click', () => setChannel('email'));
    }

    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const phone = document.getElementById('form-phone').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const serviceSelect = document.getElementById('form-service');
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const message = document.getElementById('form-message').value.trim();

        if (!name || !phone || !email || !message) {
            feedback.style.display = 'block';
            feedback.style.background = 'rgba(239, 68, 68, 0.15)';
            feedback.style.color = '#F87171';
            feedback.style.border = '1px solid rgba(239, 68, 68, 0.3)';
            feedback.textContent = currentLang === 'ar' ? 'يرجى تعبئة كافة الحقول المطلوبة بشكل صحيح.' : 'Please fill out all required fields.';
            return;
        }

        if (activeChannel === 'whatsapp') {
            const waBody = currentLang === 'ar'
                ? `طلب تسعيرة واستشارة هندسية:\n• الاسم: ${name}\n• الجوال: ${phone}\n• البريد: ${email}\n• القسم: ${serviceText}\n• التفاصيل: ${message}`
                : `New Engineering Quotation Request:\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email}\n• Division: ${serviceText}\n• Requirements: ${message}`;
            
            const waUrl = `https://wa.me/966567513410?text=${encodeURIComponent(waBody)}`;
            window.open(waUrl, '_blank');

            feedback.style.display = 'block';
            feedback.style.background = 'rgba(16, 185, 129, 0.15)';
            feedback.style.color = '#34D399';
            feedback.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            feedback.innerHTML = currentLang === 'ar'
                ? `تم فتح المحادثة على واتساب بنجاح. إذا لم تفتح تلقائياً، <a href="${waUrl}" target="_blank" style="color:#34D399; text-decoration:underline; font-weight:bold;">اضغط هنا للمتابعة</a>.`
                : `WhatsApp conversation launched. If not opened automatically, <a href="${waUrl}" target="_blank" style="color:#34D399; text-decoration:underline; font-weight:bold;">click here to proceed</a>.`;
            form.reset();
        } else {
            // Email Simulation
            submitBtn.disabled = true;
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = currentLang === 'ar' ? 'جاري إرسال البريد...' : 'Transmitting Email...';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                feedback.style.display = 'block';
                feedback.style.background = 'rgba(16, 185, 129, 0.15)';
                feedback.style.color = '#34D399';
                feedback.style.border = '1px solid rgba(16, 185, 129, 0.3)';
                feedback.textContent = currentLang === 'ar' 
                    ? `شكراً لك أ/ ${name}. تم استلام طلبك للقسم (${serviceText}) وسيتواصل معك مهندسونا عبر البريد الإلكتروني ${email}.`
                    : `Thank you, ${name}. Your consultation request for (${serviceText}) has been routed to engineering dispatch. Confirmation sent to ${email}.`;

                form.reset();
            }, 600);
        }
    });
}

/* ----------------------------------------------------
 * 9. SCROLLSPY & ACTIVE NAV STATE
 * ---------------------------------------------------- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ----------------------------------------------------
 * 10. COPYRIGHT YEAR
 * ---------------------------------------------------- */
function updateCopyrightYear() {
    const yearElem = document.getElementById('current-year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }
}
