/**
 * SMART SECURE IT Networking & General Contracting Est.
 * Corporate Engine: Bilingual (EN / AR) & Responsive Navigation
 * Tone: Restrained, Factual, Established Saudi Engineering & Contracting
 */

document.addEventListener('DOMContentLoaded', () => {
    initBilingualEngine();
    initMobileNav();
    initStickyHeader();
    initHeroMultiVideoSlider();
    initSaudiMapInteraction();
    initAnimatedCounters();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
    updateCopyrightYear();
});

/* --------------------------------------------------
   1. BILINGUAL DICTIONARY (EN / AR)
   -------------------------------------------------- */
const i18nData = {
    en: {
        // Navigation
        nav_about: "About",
        nav_services: "Services",
        nav_why: "Why Choose Us",
        nav_security: "Security Systems",
        nav_services: "IT & Services",
        nav_why: "Why Choose Us",
        nav_equipment: "Equipment & Manpower",
        nav_materials: "Materials",
        nav_projects: "Projects & Clients",
        nav_map: "Operational Base",
        nav_contact: "Contact",
        nav_quote: "Get Your Quote",

        // Hero
        hero_badge: "Commercial Electronic Security & Enterprise IT Infrastructure • KSA",
        hero_title_1: "Advanced Electronic Security.",
        hero_title_2: "Trusted Execution.",
        hero_title: "Advanced Electronic Security. Trusted Execution.",
        hero_subtext: "Turnkey commercial CCTV surveillance, biometric access control, 24/7 central SOC monitoring, and enterprise IT networking across Saudi Arabia.",
        hero_btn_security: "Security Solutions",
        hero_btn_services: "Our Services",
        hero_btn_quote: "Request Security Quote",

        // KPI Counter Strip
        kpi_eq_lbl: "Heavy Equipment Fleet Units",
        kpi_trade_lbl: "Specialized Technical Trades",
        kpi_hubs_lbl: "Kingdom Operations Hubs",
        kpi_cov_lbl: "Nationwide Saudi Coverage",
        kpi_readiness_lbl: "24/7 Security Dispatch & Support",

        // Section 3: Intro & Vision/Mission
        intro_label: "Company Profile",
        intro_heading: "Commercial Electronic Security & Integrated IT Solutions",
        intro_lead: "SMART SECURE IT Networking & General Contracting Est. specializes in providing cutting-edge electronic security systems, commercial AI CCTV surveillance, biometric access control, and enterprise IT infrastructure across the Kingdom of Saudi Arabia, backed by full-scale civil contracting, equipment rental, and technical manpower support.",
        intro_cr: "Commercial Registration: [Add CR number]",
        intro_est: "Establishment: [Add year founded]",
        vision_title: "Vision",
        vision_text: "To be the leading provider of secure, resilient IT and electronic security solutions across the Kingdom of Saudi Arabia, fostering protected environments where businesses grow with confidence.",
        mission_title: "Mission",
        mission_text: "To deliver exceptional security systems, AI surveillance, cloud networking, and turnkey engineering services—maintaining uncompromising reliability and standards compliance from code to concrete.",

        // Section 4: Services
        serv_label: "- CORE DIVISIONS -",
        serv_heading: "Commercial Security, IT Infrastructure & Engineering Services",
        serv_subheading: "Kingdom-wide electronic security engineering, AI surveillance, and low-current solutions—supported by integrated civil contracting and machinery fleet operations.",
        serv_01_title: "Commercial CCTV & AI Video Surveillance",
        serv_01_desc: "IP mega-pixel camera arrays, AI object identification, NVR storage arrays, and 24/7 central SOC operations rooms.",
        serv_02_title: "Biometric Access Control & Time Attendance",
        serv_02_desc: "Fingerprint, facial recognition, proximity RFID, optical turnstiles, and integrated payroll time attendance software.",
        serv_03_title: "IT Networking, Fiber Optics & Data Centers",
        serv_03_desc: "Structured copper/fiber cabling, server rack installations, UPS backup, low-current telecom, and network resilience.",
        serv_04_title: "Perimeter Security & Anti-Crash Fencing",
        serv_04_desc: "High-security chain link, razor wire, anti-ram barriers, automated gate access, and perimeter intrusion detection.",
        serv_05_title: "Heavy Equipment Rental Fleet (Supporting Division)",
        serv_05_desc: "2,700+ fleet units: all-terrain cranes, crawler cranes, boom trucks, forklifts, generators, and heavy machinery rental.",
        serv_06_title: "Manpower Supply & Technical Trades",
        serv_06_desc: "Certified security technicians, network engineers, 6G welders, crane operators, and multidisciplinary field teams.",
        serv_07_title: "Civil & Mechanical Contracting",
        serv_07_desc: "Structural foundations, industrial plant erection, pipe spooling, certified scaffolding, and mechanical contracting.",
        serv_08_title: "Material Trading & OEM Industrial Parts",
        serv_08_desc: "OEM spare parts, structural steel, prefab modular units, electrical switchgear, and commercial construction materials.",

        // Section 5: Security Feature Band
        sec_label: "Core Enterprise Specialization",
        sec_heading: "Electronic Security & AI Surveillance Engineering",
        sec_subheading: "Turnkey electronic security, AI-powered CCTV surveillance, biometric access control, and low-current telecommunications engineered for commercial, industrial, and government facilities across the Kingdom of Saudi Arabia.",
        sec_spec_1: "AI-Powered CCTV Surveillance: Mega-pixel IP cameras, object classification, and facial recognition",
        sec_spec_2: "IP & High-Definition (HD) Arrays: Scalable network cameras and high-definition surveillance infrastructure",
        sec_spec_3: "24/7 Remote Monitoring & Alerting: Real-time live feeds, smartphone access, and incident management",
        sec_spec_4: "Biometric Access & Time Attendance: Fingerprint, proximity, PIN type, and smart credential systems",
        sec_spec_5: "Facial Recognition Terminals: Contactless attendance integrated with enterprise payroll software",
        sec_spec_6: "Centralized Operations Rooms (SOC): Multi-screen monitoring consoles, NVR storage, and rack servers",
        sec_spec_7: "Structured Cabling & Fiber Backbones: Optical fiber splicing, low-current distribution, and server racks",
        sec_spec_8: "24/7 Routine Maintenance & Upgrades: Rapid SLA troubleshooting, preventative servicing, and firmware updates",

        // Section 6: Equipment & Manpower
        eq_label: "Supporting Plant & Workforce Division",
        eq_heading: "Heavy Equipment Fleet & Technical Manpower Support",
        eq_subheading: "Supporting client projects across KSA with an extensive fleet exceeding 2,700 pieces of heavy machinery and multidisciplinary certified technical manpower.",
        eq_table_title: "Heavy Equipment Rental Fleet",
        eq_th_cat: "Category",
        eq_th_types: "Equipment Types",
        eq_th_status: "Rental Status",
        eq_row1_cat: "Mobile & Crawler Cranes",
        eq_row1_types: "Rough Terrain Cranes, Crawler Cranes, All-Terrain Truck Cranes",
        eq_row1_status: "Available for Short & Long Term Rental",
        eq_row2_cat: "Lifting & Handling",
        eq_row2_types: "Boom Trucks, Diesel & Electric Forklifts, Telehandlers, Aerial Scissor Lifts",
        eq_row2_status: "Mobilized Across All KSA Regions",
        eq_row3_cat: "Power & Lighting",
        eq_row3_types: "Industrial Diesel Generators, Mobile Tower Lights",
        eq_row3_status: "Supplied with Regular Maintenance Support",
        eq_row4_cat: "Earthmoving & Site Plant",
        eq_row4_types: "Excavators, Wheel Loaders, Compaction Rollers, Motor Graders",
        eq_row4_status: "Site-Ready with Certified Operators",
        eq_row5_cat: "Welding & Mechanical Tools",
        eq_row5_types: "Heavy-Duty Industrial Welding Machines, High-Capacity Air Compressors",
        eq_row5_status: "Commercial & Industrial Grade Units",

        mp_table_title: "Technical Manpower Supply",
        mp_th_cat: "Discipline",
        mp_th_roles: "Roles & Classifications",
        mp_th_deploy: "Mobilization",
        mp_row1_cat: "Engineering & Supervision",
        mp_row1_roles: "Civil Engineers, Mechanical Engineers, Electrical Engineers, Site Superintendents",
        mp_row1_deploy: "Project-Based or Turnkey Contracts",
        mp_row2_cat: "Safety & Quality Control",
        mp_row2_roles: "HSE Managers, Safety Officers, Environmental Auditors, QA/QC Inspectors",
        mp_row2_deploy: "Certified Site Safety Deployment",
        mp_row3_cat: "Certified Operators & Riggers",
        mp_row3_roles: "Heavy Crane Operators, Forklift Drivers, Certified Riggers, Plant Drivers",
        mp_row3_deploy: "Third-Party Certified Personnel",
        mp_row4_cat: "Specialized Technical Trades",
        mp_row4_roles: "Structural Welders (6G), Pipefitters, Industrial Electricians, Low-Current Techs",
        mp_row4_deploy: "Direct Deployment Across KSA",
        mp_row5_cat: "General Construction Workforce",
        mp_row5_roles: "Certified Scaffolders, Steel Fixers, Concrete Masons, General Site Labor",
        mp_row5_deploy: "Scalable Manpower Teams",

        // Section 7: Material Trading
        mat_label: "Procurement & Trading",
        mat_heading: "Material Trading & Civil Products",
        mat_subheading: "Direct commercial supply of structural components, civil materials, and architectural hardware.",
        mat_1: "Structural Steel Sections (Beams, Columns, Angles, Channels)",
        mat_2: "Rebar and Reinforcement Steel",
        mat_3: "Prefabricated Modular Buildings & Site Offices",
        mat_4: "Thermal and Acoustic Insulation Materials",
        mat_5: "Fire-Rated Commercial Steel Doors & Hardware",
        mat_6: "Industrial Fasteners, Anchors, and Fixings",
        mat_7: "Civil Construction Chemicals and Waterproofing",
        mat_8: "High-Security Perimeter Wire & Fencing Systems",

        // Section 8: Projects & Clients
        proj_label: "Track Record",
        proj_heading: "Projects & Clients",
        proj_subheading: "A representative record of contracting, equipment supply, and technical engineering delivered throughout the Kingdom.",
        proj_tag_1: "Commercial Facility CCTV Network",
        proj_sub_1: "Project photo &bull; [Location, KSA]",
        proj_tag_2: "Industrial Plant Equipment Mobilization",
        proj_sub_2: "Project photo &bull; [Location, KSA]",
        proj_tag_3: "Structural Steel Fabrication Package",
        proj_sub_3: "Project photo &bull; [Location, KSA]",
        proj_tag_4: "Civil Concrete Foundation Works",
        proj_sub_4: "Project photo &bull; [Location, KSA]",
        proj_tag_5: "Perimeter Security & Access Control System",
        proj_sub_5: "Project photo &bull; [Location, KSA]",
        proj_tag_6: "Turnkey Manpower Supply Agreement",
        proj_sub_6: "Project photo &bull; [Location, KSA]",
        client_logo_txt: "[Client Logo]",

        // Section 9: Realistic Map & Hubs
        map_label: "Kingdom Presence",
        map_heading: "Operations & Regional Hubs",
        map_subheading: "Strategic deployment and technical mobilization capabilities across all major provinces and industrial cities of Saudi Arabia.",
        map_inquire_btn: "Inquire for This Hub",
        map_direct_phone: "Direct Dispatch Desk:",

        // Section 10: Contact
        contact_label: "Communications",
        contact_heading: "Contact Our Office",
        contact_subheading: "Submit project specifications or equipment requirements for direct review by our technical team.",
        contact_address_lbl: "Office Address",
        contact_address_val: "[Add office address, City, KSA]",
        contact_phone_lbl: "Telephone",
        contact_email_lbl: "Email Address",
        contact_web_lbl: "Website",
        contact_cr_lbl: "Commercial Registration",
        contact_cr_val: "[Add CR number]",

        form_title: "Contract Inquiry Form",
        form_name: "Full Name *",
        form_name_ph: "e.g. Abdullah Al-Otaibi",
        form_company: "Company Name *",
        form_company_ph: "e.g. Al-Mansoor Contracting Co.",
        form_phone: "Phone Number *",
        form_phone_ph: "+966 5X XXX XXXX",
        form_email: "Email Address *",
        form_email_ph: "name@company.com.sa",
        form_service: "Service Required *",
        form_opt_default: "Select a Division...",
        form_opt_1: "IT & Security Systems (CCTV, Access Control)",
        form_opt_2: "Heavy Equipment Rental",
        form_opt_3: "Manpower Supply",
        form_opt_4: "Civil & Mechanical Contracting",
        form_opt_5: "Material Trading & Civil Products",
        form_opt_6: "Scaffolding, Fabrication & Fencing",
        form_opt_7: "Utility & Environmental Services",
        form_msg: "Project Details / Requirements *",
        form_msg_ph: "Please state project location, scope of work, duration, or specific equipment requirements...",
        form_submit: "Submit Inquiry",
        form_success: "Thank you. Your inquiry has been received. Our technical team will review the requirements and contact you promptly.",

        // Face Indus Additions
        oper_base_title: "- OUR OPERATIONAL BASE -",
        province_western: "WESTERN PROVINCE",
        province_central: "CENTRAL PROVINCE",
        province_eastern: "EASTERN PROVINCE",
        v2030_title: "Saudi Vision 2030",
        v2030_desc: "Actively driving national transformation through turnkey contracting, intelligent security infrastructure, and rapid industrial mobilization for the Kingdom's Giga-projects.",
        iktva_title: "IKTVA & Local Supply",
        iktva_desc: "Dedicated commitment to maximizing in-Kingdom value creation, local procurement of civil materials, and continuous professional training for Saudi technical talent.",
        know_more: "Know More",
        footer_contact_phone_lbl: "Direct Hotline",
        footer_contact_mail_lbl: "Tenders & Inquiries",
        footer_contact_loc_lbl: "Kingdom Presence",
        newsletter_title: "Stay Updated with Project Tender Capabilities",
        newsletter_btn: "SUBSCRIBE",

        // FFHAT Multi-Video Reference Keys
        slide_tab_1: "Electronic Security & CCTV",
        slide_tab_2: "IT & Data Centers",
        slide_tab_3: "Civil & General Works",
        slide_tab_4: "Heavy Fleet & Equipment",
        eq_video_badge: "2,700+ Certified Machinery & Fleet Units Mobilized Across KSA",
        cta_video_badge: "RAPID MOBILIZATION • KINGDOM-WIDE DEPLOYMENT",
        cta_video_title: "Ready to Mobilize for Your Kingdom Project?",
        cta_video_desc: "Connect directly with our engineering and procurement team for rapid tender response, verified equipment allocation, and turnkey contracting execution.",
        cta_video_btn1: "REQUEST TENDER QUOTE",
        cta_video_btn2: "DIRECT HOTLINE: +966 56 751 3410",

        // Section 11: Footer
        footer_desc: "SMART SECURE IT Networking & General Contracting Est. is a specialized Saudi establishment providing turnkey electronic security systems, commercial CCTV surveillance, biometric access control, and enterprise IT infrastructure, backed by civil contracting, heavy equipment rental, and technical manpower support across the Kingdom of Saudi Arabia.",
        footer_nav_title: "Navigation",
        footer_contact_title: "Office Details",
        footer_cr: "CR: [Add CR number]",
        footer_chamber: "Chamber of Commerce: [Add Chamber city]",
        footer_rights: "All Rights Reserved. Kingdom of Saudi Arabia."
    },

    ar: {
        // Navigation
        nav_about: "نبذة عنا",
        nav_security: "الأنظمة الأمنية",
        nav_services: "تقنية المعلومات والخدمات",
        nav_why: "لماذا تختارنا",
        nav_equipment: "المعدات والكوادر",
        nav_materials: "تجارة المواد",
        nav_projects: "المشاريع والعملاء",
        nav_map: "قاعدة العمليات",
        nav_contact: "اتصل بنا",
        nav_quote: "طلب عرض أسعار",

        // Hero
        hero_badge: "الأنظمة الأمنية الإلكترونية وبنية تقنية المعلومات المؤسسية • المملكة",
        hero_title_1: "أنظمة أمنية متقدمة.",
        hero_title_2: "تنفيذ موثوق.",
        hero_title: "أنظمة أمنية متقدمة. تنفيذ موثوق.",
        hero_subtext: "شبكات كاميرات المراقبة التلفزيونية التجارية، أنظمة التحكم بالدخول، غرف المراقبة والتحكم المركزية (SOC)، وبنية تقنية المعلومات في كافة مناطق المملكة العربية السعودية.",
        hero_btn_security: "حلول الأنظمة الأمنية",
        hero_btn_services: "خدماتنا المتكاملة",
        hero_btn_quote: "طلب عرض أسعار أمني",

        // KPI Counter Strip
        kpi_eq_lbl: "وحدة أسطول معدات ثقيلة",
        kpi_trade_lbl: "تخصص فني وهندسي معتمد",
        kpi_hubs_lbl: "مراكز عمليات رئيسية بالمملكة",
        kpi_cov_lbl: "تغطية شاملة لكافة مناطق المملكة",
        kpi_readiness_lbl: "استجابة أمنية وطوارئ 24/7",

        // Section 3: Intro & Vision/Mission
        intro_label: "الملف التعريفي",
        intro_heading: "الأنظمة الأمنية الإلكترونية وحلول تقنية المعلومات المتكاملة",
        intro_lead: "تتخصص مؤسسة سمارت سيكيور لشبكات الحاسب الآلي والمقاولات العامة في تقديم أحدث حلول الأنظمة الأمنية الإلكترونية، شبكات المراقبة التلفزيونية بالذكاء الاصطناعي، أنظمة التحكم بالدخول البيومترية، وبنية تقنية المعلومات، مدعومة بقطاعات متكاملة للمقاولات المدنية، تأجير المعدات الثقيلة، والكوادر الفنية.",
        intro_cr: "السجل التجاري: [أدخل رقم السجل التجاري]",
        intro_est: "سنة التأسيس: [أدخل سنة التأسيس]",
        vision_title: "رؤيتنا",
        vision_text: "أن نكون المزود الرائد للأنظمة الأمنية الإلكترونية وحلول تقنية المعلومات الموثوقة بالمملكة، وتوفير بيئات عمل آمنة تدعم نمو الأعمال بثقة تامة.",
        mission_title: "رسالتنا",
        mission_text: "تقديم أنظمة أمنية فائقة الدقة، شبكات مراقبة ذكية، وحلول تكامل الأنظمة مع الامتثال الصارم لأعلى معايير السلامة والجودة من البرمجيات إلى الخرسانة.",

        // Section 4: Services
        serv_label: "- القطاعات الرئيسية -",
        serv_heading: "الأنظمة الأمنية، بنية تقنية المعلومات والخدمات الهندسية",
        serv_subheading: "هندسة أمنية متطورة، مراقبة بالذكاء الاصطناعي، وتمديدات التيار الخفيف—مدعومة بأسطول معدات ثقيلة ومقاولات إنشائية متكاملة.",
        serv_01_title: "كاميرات المراقبة التجارية والمراقبة بالذكاء الاصطناعي",
        serv_01_desc: "مصفوفات كاميرات IP ميجابكسل، خوارزميات التعرف على الأشخاص والمركبات، وحدات تخزين NVR، وغرف عمليات مركزية.",
        serv_02_title: "أنظمة التحكم بالدخول وتسجيل الحضور البيومترية",
        serv_02_desc: "التعرف على الوجه، بصمة الإصبع، بطاقات القرب RFID، البوابات الدوارة، وبرمجيات تتبع الحضور المرتبطة بالرواتب.",
        serv_03_title: "شبكات تقنية المعلومات والألياف الضوئية ومراكز البيانات",
        serv_03_desc: "تمديدات الكابلات النحاسية والألياف، كبائن الخوادم، أنظمة الطاقة غير المنقطعة UPS، وشبكات التيار الخفيف.",
        serv_04_title: "الأسوار الأمنية وموانع الاقتحام وحماية المحيط",
        serv_04_desc: "أسوار شبكية مشددة، أسلاك شائكة، موانع اصطدام، بوابات دخول أوتوماتيكية، وأنظمة استشعار الاختراق.",
        serv_05_title: "أسطول تأجير المعدات الثقيلة (قطاع مساند)",
        serv_05_desc: "أكثر من 2,700 آلية: رافعات تضاريسية وجنزيرية، شاحنات بوم ترك، رافعات شوكية، ومولدات صناعية للتأجير.",
        serv_06_title: "توريد الكوادر الفنية المتخصصة",
        serv_06_desc: "فنيو أنظمة أمنية معتمدون، مهندسو شبكات، لحامون (6G)، مشغلو رافعات، وفرق ميدانية متعددة التخصصات.",
        serv_07_title: "المقاولات المدنية والميكانيكية",
        serv_07_desc: "الأعمال الخرسانية الإنشائية، تمديد الأنابيب الصناعية، السقالات المعتمدة، وتركيب الهياكل الفولاذية.",
        serv_08_title: "تجارة المواد والقطع الصناعية الأصلية (OEM)",
        serv_08_desc: "قطع غيار المصنعين الأصليين، حديد تسليح، مبانٍ مسبقة الصنع، لوحات توزيع كهربائية ومواد إنشائية.",

        // Section 5: Security Feature Band
        sec_label: "التخصص المؤسسي الرئيسي",
        sec_heading: "هندسة الأنظمة الأمنية والمراقبة الذكية",
        sec_subheading: "حلول متكاملة للأنظمة الأمنية الإلكترونية، شبكات المراقبة التلفزيونية، التحكم بالدخول، وتمديدات التيار الخفيف للمنشآت التجارية والصناعية والحكومية بالمملكة.",
        sec_spec_1: "مراقبة تلفزيونية بالذكاء الاصطناعي: كاميرات IP ميجابكسل، تمييز الأهداف والتعرف على الوجوه",
        sec_spec_2: "أنظمة IP وشبكات عالية الدقة: كاميرات شبكية متطورة وبنية مراقبة فائقة الوضوح",
        sec_spec_3: "مراقبة وإشعارات على مدار الساعة: بث حي فوري، متابعة عبر الهواتف الذكية وإدارة الحوادث",
        sec_spec_4: "تحكم بالدخول وتسجيل حضور بيومتري: بصمة اليد، بطاقات RFID، أرقام سرية وبطاقات ذكية",
        sec_spec_5: "أجهزة التعرف على الوجه: تسجيل حضور بدون تلامس متكامل مع برامج الرواتب وإدارة الموظفين",
        sec_spec_6: "غرف العمليات والتحكم المركزي (SOC): شاشات مراقبة جدارية، وحدات تخزين NVR وكبائن خوادم",
        sec_spec_7: "تمديدات شبكية وألياف ضوئية: لحام ألياف بصرية، شبكات التيار الخفيف وخزائن معدات",
        sec_spec_8: "صيانة دورية وترقيات 24/7: استجابة فورية للأعطال، فحص وقائي دوري وتحديثات مستمرة",

        // Section 6: Equipment & Manpower
        eq_label: "قطاع المعدات والكوادر المساند",
        eq_heading: "أسطول تأجير المعدات الثقيلة والكوادر الفنية",
        eq_subheading: "دعم مشاريع العملاء بأسطول متكامل يتجاوز 2,700 آلية ومعدة ثقيلة وكوادر فنية معتمدة لمختلف التخصصات في المملكة.",
        eq_table_title: "جدول أسطول المعدات الثقيلة",
        eq_th_cat: "الفئة",
        eq_th_types: "أنواع المعدات",
        eq_th_status: "حالة التأجير",
        eq_row1_cat: "الرافعات الثقيلة والمتحركة",
        eq_row1_types: "رافعات للأراضي الوعرة، رافعات جنزيرية، رافعات شاحنة لجميع التضاريس",
        eq_row1_status: "متاحة للتأجير قصير وطويل الأجل",
        eq_row2_cat: "معدات الرفع والمناولة",
        eq_row2_types: "شاحنات بوم ترك، رافعات شوكية (ديزل وكهرباء)، تلسكوبيات، منصات مقصية",
        eq_row2_status: "جاهزة للتوريد لكافة مناطق المملكة",
        eq_row3_cat: "الطاقة والإنارة",
        eq_row3_types: "مولدات كهربائية ديزل صناعية، أبراج إنارة متحركة",
        eq_row3_status: "مجهزة مع خدمات الصيانة الدورية",
        eq_row4_cat: "معدات تسوية وحفر المواقع",
        eq_row4_types: "حفارات، لوادر (شيولات)، مداحل ومداكل، قريدرات",
        eq_row4_status: "جاهزة للمواقع مع مشغلين معتمدين",
        eq_row5_cat: "معدات اللحام والأدوات الميكانيكية",
        eq_row5_types: "ماكينات لحام صناعية عالية الكفاءة، كمبروسرات هواء للمواقع",
        eq_row5_status: "وحدات تجارية وصناعية ذات اعتمادية",

        mp_table_title: "جدول توريد الكوادر الفنية",
        mp_th_cat: "المجال",
        mp_th_roles: "المسميات والتخصصات",
        mp_th_deploy: "طبيعة التوريد",
        mp_row1_cat: "الهندسة والإشراف الإنشائي",
        mp_row1_roles: "مهندسون مدنيون، مهندسو ميكانيكا وكهرباء، مشرفو مواقع معتمدون",
        mp_row1_deploy: "عقود مشاريع محددة أو توريد مستمر",
        mp_row2_cat: "السلامة وضبط الجودة",
        mp_row2_roles: "مديرو سلامة وصحة مهنية (HSE)، ضباط سلامة، مفتشو جودة (QA/QC)",
        mp_row2_deploy: "كوادر حاصلة على شهادات معتمدة",
        mp_row3_cat: "مشغلو المعدات والرافعات",
        mp_row3_roles: "مشغلو رافعات ثقيلة، سائقو رافعات شوكية، فنيو شد وحبال (رجرز)",
        mp_row3_deploy: "شهادات كفاءة وتراخيص سارية",
        mp_row4_cat: "المهن الفنية المتخصصة",
        mp_row4_roles: "لحامون معتمدون (6G)، فنيو أنابيب، فنيو كهرباء صناعية، فنيو تيار خفيف",
        mp_row4_deploy: "جاهزية فورية للعمل بالمواقع",
        mp_row5_cat: "العمالة الإنشائية العامة",
        mp_row5_roles: "مركبو سقالات، حدادو مسلح، نجارو خرسانة، عمال مساندة مواقع",
        mp_row5_deploy: "أعداد مرنة وقابلة للزيادة حسب المتطلبات",

        // Section 7: Material Trading
        mat_label: "التوريد والتجارة",
        mat_heading: "تجارة المواد والمنتجات المدنية",
        mat_subheading: "توريد مباشر للمنتجات والمواد الإنشائية الأساسية والمعدات التكميلية للمشاريع.",
        mat_1: "قطاعات الحديد الإنشائي (كمرات، أعمدة، زوايا، ومقاطع C)",
        mat_2: "حديد التسليح بمختلف المقاسات المعتمدة",
        mat_3: "المباني والمكاتب الجاهزة للمواقع (Modular Buildings)",
        mat_4: "مواد العزل الحراري والصوتي المعتمدة للمباني",
        mat_5: "أبواب فولاذية مقاومة للحريق وإكسسواراتها",
        mat_6: "المثبتات والمسامير الصناعية ومعدات التثبيت",
        mat_7: "الكيماويات الإنشائية ومواد عزل المياه والرطوبة",
        mat_8: "أنظمة الشباك والأسوار الأمنية المحيطية والأسلاك الشائكة",

        // Section 8: Projects & Clients
        proj_label: "سجل الإنجاز",
        proj_heading: "المشاريع والعملاء",
        proj_subheading: "سجل تمثيلي للمشاريع الإنشائية، توريد المعدات، والحلول الهندسية المنفذة في المملكة.",
        proj_tag_1: "شبكة مراقبة تلفزيونية لمنشأة تجارية",
        proj_sub_1: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        proj_tag_2: "تعبئة أسطول معدات لموقع صناعي",
        proj_sub_2: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        proj_tag_3: "توريد وتركيب هياكل فولاذية إنشائية",
        proj_sub_3: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        proj_tag_4: "أعمال القواعد الخرسانية الإنشائية",
        proj_sub_4: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        proj_tag_5: "أنظمة حماية المحيط والتحكم بالدخول",
        proj_sub_5: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        proj_tag_6: "اتفاقية توريد كوادر مهنية متخصصة",
        proj_sub_6: "صورة المشروع &bull; [الموقع، المملكة العربية السعودية]",
        client_logo_txt: "[شعار العميل]",

        // Section 9: Realistic Map & Hubs
        map_label: "التواجد في المملكة",
        map_heading: "مراكز العمليات والتوزيع الإقليمي",
        map_subheading: "قدرات التعبئة الميدانية والانتشار التقني عبر كافة المناطق الإدارية والمدن الصناعية في المملكة العربية السعودية.",
        map_inquire_btn: "طلب عرض أسعار لهذا المركز",
        map_direct_phone: "مكتب التوجيه الميداني:",

        // Section 10: Contact
        contact_label: "التواصل",
        contact_heading: "اتصل بمكتبنا",
        contact_subheading: "أرسل متطلبات مشروعك أو طلبات تأجير المعدات لتتم مراجعتها من قبل فريقنا الهندسي مباشرة.",
        contact_address_lbl: "عنوان المكتب",
        contact_address_val: "[أدخل عنوان المكتب، المدينة، المملكة العربية السعودية]",
        contact_phone_lbl: "الهاتف المباشر",
        contact_email_lbl: "البريد الإلكتروني",
        contact_web_lbl: "الموقع الإلكتروني",
        contact_cr_lbl: "السجل التجاري",
        contact_cr_val: "[أدخل رقم السجل التجاري]",

        form_title: "نموذج الاستفسار والتعاقد",
        form_name: "الاسم الكامل *",
        form_name_ph: "مثال: م. عبدالله العتيبي",
        form_company: "اسم الشركة / الجهة *",
        form_company_ph: "مثال: شركة المنصور للمقاولات",
        form_phone: "رقم الهاتف / الجوال *",
        form_phone_ph: "+966 5X XXX XXXX",
        form_email: "البريد الإلكتروني *",
        form_email_ph: "name@company.com.sa",
        form_service: "الخدمة المطلوبة *",
        form_opt_default: "اختر القسم المطلوب...",
        form_opt_1: "أنظمة تقنية المعلومات والأمن (CCTV والتحكم بالدخول)",
        form_opt_2: "تأجير المعدات الثقيلة",
        form_opt_3: "توريد الكوادر البشرية المتخصصة",
        form_opt_4: "المقاولات المدنية والميكانيكية",
        form_opt_5: "تجارة المواد والمنتجات الإنشائية",
        form_opt_6: "السقالات والتصنيع والأسوار الأمنية",
        form_opt_7: "خدمات المرافق والبيئة",
        form_msg: "تفاصيل المشروع أو المتطلبات *",
        form_msg_ph: "يرجى توضيح موقع المشروع، نطاق العمل، المدة المتوقعة، أو أنواع المعدات المطلوبة بالتحديد...",
        form_submit: "إرسال الطلب",
        form_success: "شكراً لتواصلك. تم استلام طلبك بنجاح وسيقوم فريقنا الهندسي بمراجعته والتواصل معك قريباً.",

        // Face Indus Additions
        oper_base_title: "- قاعدة عملياتنا بالمملكة -",
        province_western: "المنطقة الغربية",
        province_central: "المنطقة الوسطى",
        province_eastern: "المنطقة الشرقية",
        v2030_title: "رؤية السعودية 2030",
        v2030_desc: "دفع عجلة التحول الوطني من خلال المقاولات المتكاملة، البنية التحتية الأمنية الذكية، والتعبئة السريعة للمعدات للمشاريع الكبرى بالمملكة.",
        iktva_title: "برنامج اكتفاء والتوريد المحلي",
        iktva_desc: "التزام راسخ بتعظيم القيمة المضافة الإجمالية للمملكة، وتوطين سلاسل التوريد، والتدريب المستمر للكوادر الهندسية والمهنية السعودية.",
        know_more: "المزيد",
        footer_contact_phone_lbl: "الخط المباشر",
        footer_contact_mail_lbl: "المناقصات والاستفسارات",
        footer_contact_loc_lbl: "التواجد بالمملكة",
        newsletter_title: "ابقَ على اطلاع على قدراتنا في تنفيذ المناقصات والمشاريع",
        newsletter_btn: "اشتراك",

        // FFHAT Multi-Video Reference Keys
        slide_tab_1: "الأنظمة الأمنية والمراقبة",
        slide_tab_2: "تقنية المعلومات والبيانات",
        slide_tab_3: "المقاولات والأعمال المدنية",
        slide_tab_4: "أسطول المعدات والرافعات",
        eq_video_badge: "أكثر من 2,700 آلية ومعدة معتمدة جاهزة للتعبئة في جميع أنحاء المملكة",
        cta_video_badge: "تعبئة فورية للمشاريع • انتشار على مستوى المملكة",
        cta_video_title: "هل أنت مستعد لتنفيذ مشروعك القادم في المملكة؟",
        cta_video_desc: "تواصل مباشرة مع فريقنا الهندسي والتوريدي لسرعة الاستجابة للمناقصات، حجز المعدات، وتنفيذ العقود المتكاملة.",
        cta_video_btn1: "طلب عرض سعر للمناقصة",
        cta_video_btn2: "الخط المباشر: 3410 751 56 966+",

        // Section 11: Footer
        footer_desc: "مؤسسة سمارت سيكيور لشبكات الحاسب الآلي والمقاولات العامة هي مؤسسة سعودية متخصصة تقدم حلول الأنظمة الأمنية الإلكترونية، شبكات المراقبة التلفزيونية، التحكم بالدخول، وبنية تقنية المعلومات، مدعومة بقطاعات المقاولات العامة وتأجير المعدات والكوادر في جميع أنحاء المملكة العربية السعودية.",
        footer_nav_title: "روابط سريعة",
        footer_contact_title: "بيانات المكتب",
        footer_cr: "السجل التجاري: [أدخل رقم السجل التجاري]",
        footer_chamber: "الغرفة التجارية: [أدخل مدينة الغرفة]",
        footer_rights: "جميع الحقوق محفوظة. المملكة العربية السعودية."
    }
};

/* --------------------------------------------------
   2. SAUDI HUBS DATA ENGINE (Bilingual)
   -------------------------------------------------- */
const saudiHubsData = {
    riyadh: {
        en: {
            badge: "National Headquarters • Central Province",
            title: "Riyadh (الرياض)",
            desc: "Corporate management core, executive project administration, centralized IT & security system engineering, and primary procurement logistics for government and private tenders.",
            specs: [
                "Corporate Headquarters & Contracting Directorate",
                "Central Command Security & Surveillance SOC",
                "Central Province Equipment Mobilization Yard",
                "Turnkey Civil & Structural Engineering Team"
            ]
        },
        ar: {
            badge: "المقر الرئيسي الوطني • المنطقة الوسطى",
            title: "الرياض (Riyadh)",
            desc: "الإدارة التنفيذية، إدارة المشاريع المركزية، هندسة أنظمة تقنية المعلومات والأمن والمراقبة، ومكتب المناقصات الحكومية والخاصة.",
            specs: [
                "المقر الإداري الرئيسي وإدارة المقاولات العامة",
                "مركز القيادة والتحكم للأنظمة الأمنية والمراقبة",
                "ساحة تعبئة وتوريد المعدات الثقيلة للمنطقة الوسطى",
                "فريق الهندسة المدنية والميكانيكية التخصصية"
            ]
        }
    },
    dammam: {
        en: {
            badge: "Eastern Province Operational Hub",
            title: "Dammam & Al-Khobar (الدمام والخبر)",
            desc: "Strategic regional base serving Eastern Province industrial sites, logistics corridors, corporate complexes, and energy infrastructure projects.",
            specs: [
                "Eastern Province Project Logistics Coordination",
                "Industrial Low-Current & Fiber Splicing Unit",
                "Certified Field Technicians & HSE Inspectors",
                "Commercial Access Control & Perimeter Security"
            ]
        },
        ar: {
            badge: "مركز عمليات المنطقة الشرقية",
            title: "الدمام والخبر (Dammam & Khobar)",
            desc: "قاعدة تشغيلية إقليمية تخدم المنشآت الصناعية والمجمعات التجارية ومشاريع الطاقة في المنطقة الشرقية.",
            specs: [
                "تنسيق العمليات اللوجستية للمنطقة الشرقية",
                "فريق تمديدات كابلات الاتصالات ولحام الألياف",
                "فنيون ميدانيون معتمدون ومفتشو سلامة مهنية",
                "أنظمة التحكم بالدخول وحماية الأسوار المحيطية"
            ]
        }
    },
    jubail: {
        en: {
            badge: "Heavy Plant & Equipment Depot • Jubail",
            title: "Jubail Industrial City (الجبيل الصناعية)",
            desc: "Dedicated heavy equipment staging yard, certified crane mobilization, industrial piping assembly, and certified scaffolding systems for petrochemical plants.",
            specs: [
                "Heavy Machinery & Crane Rental Fleet Depot",
                "Certified Cuplock & Ringlock Scaffolding Yard",
                "Trained Riggers & Aramco-Certified Operators",
                "Industrial Piping & Steel Fabrication Support"
            ]
        },
        ar: {
            badge: "أسطول المعدات الثقيلة • الجبيل الصناعية",
            title: "الجبيل الصناعية (Jubail Industrial)",
            desc: "ساحة مركزية للمعدات الثقيلة والرافعات المتنقلة، مقاولات السقالات الصناعية، وتجميع الأنابيب والهياكل للقطاع البتروكيماوي.",
            specs: [
                "أسطول الرافعات والمعدات الثقيلة التضاريسية",
                "توريد وتركيب السقالات الصناعية المعتمدة",
                "مشغلو رافعات وفنيو شد وحبال مرخصون",
                "أعمال تمديد الأنابيب وتصنيع الهياكل الفولاذية"
            ]
        }
    },
    jeddah: {
        en: {
            badge: "Western Region Commercial Hub",
            title: "Jeddah & Makkah (جدة ومكة المكرمة)",
            desc: "Regional coordination for commercial contracting, building management access control, civil works, and port logistic operations across the Western Province.",
            specs: [
                "Western Region Commercial Contracting Office",
                "Enterprise CCTV & Biometric Time Attendance",
                "Direct Construction Material Distribution",
                "Prefabricated Modular Site Office Deployment"
            ]
        },
        ar: {
            badge: "مركز المنطقة الغربية التجاري",
            title: "جدة ومكة المكرمة (Jeddah & Makkah)",
            desc: "تنسيق مشاريع المقاولات التجارية، أنظمة التحكم بالدخول، الأعمال المدنية، والدعم اللوجستي لمنطقة موانئ البحر الأحمر.",
            specs: [
                "مكتب إدارة المقاولات للمنطقة الغربية",
                "شبكات المراقبة وأجهزة الحضور والانصراف البيومترية",
                "توزيع مواد البناء والحديد الإنشائي المباشر",
                "توريد وتركيب المكاتب والمباني الجاهزة للمواقع"
            ]
        }
    },
    yanbu: {
        en: {
            badge: "Red Sea Industrial Corridor",
            title: "Yanbu Industrial City (ينبع الصناعية)",
            desc: "Turnkey utility trenching, coastal perimeter monitoring, pipeline support, and mechanical maintenance for Red Sea industrial complexes.",
            specs: [
                "Industrial Utility & Power Cable Trenching",
                "Harsh-Environment CCTV & Security Cameras",
                "Earthmoving Fleet & Heavy Compaction Machinery",
                "Site Environmental Compliance & Civil Foundation Works"
            ]
        },
        ar: {
            badge: "محور ساحل البحر الأحمر الصناعي",
            title: "ينبع الصناعية (Yanbu Industrial)",
            desc: "تمديدات المرافق الصناعية، حفر خطوط الكابلات، أنظمة المراقبة الساحلية المقاومة للظروف البيئية، وصيانة المحطات.",
            specs: [
                "أعمال حفر وتمديد كابلات الطاقة والمرافق",
                "كاميرات مراقبة متطورة للمنشآت الساحلية",
                "أسطول آليات الحفر والتسوية والدمك الثقيلة",
                "تنفيذ القواعد الخرسانية ومطابقة الاشتراطات البيئية"
            ]
        }
    },
    neom: {
        en: {
            badge: "Mega-Infrastructure Corridor • Tabuk",
            title: "NEOM & Tabuk (نيوم وتبوك)",
            desc: "Rapid-response heavy equipment deployment, high-capacity crawler cranes, qualified technical trades, and rugged security fence mobilization for visionary giga-projects.",
            specs: [
                "Mega-Project Mobilization Fleet",
                "High-Capacity Crawler & Rough Terrain Cranes",
                "Skilled Labor Teams (Welders, Riggers, Scaffolders)",
                "High-Security Perimeter Wire & Anti-Crash Fencing"
            ]
        },
        ar: {
            badge: "محور المشاريع الكبرى • منطقة تبوك",
            title: "نيوم وتبوك (NEOM & Tabuk)",
            desc: "قناة التعبئة الفورية للآليات الثقيلة، الرافعات الجنزيرية العملاقة، العمالة الفنية المتخصصة، والأسوار الأمنية للمشاريع الكبرى.",
            specs: [
                "أسطول التعبئة الفورية لمشاريع المستقبل",
                "رافعات جنزيرية وتضاريسية عالية الحمولات",
                "فرق عمالة فنية معتمدة (لحامون، رجرز، سقالات)",
                "تركيب الأسوار الأمنية المشددة والموانع للمواقع"
            ]
        }
    },
    jazan: {
        en: {
            badge: "Southern Economic City & Port",
            title: "Jazan City (مدينة جازان)",
            desc: "Civil contracting, commercial raw materials supply (structural steel, rebar), perimeter surveillance, and general contracting for Southern Province projects.",
            specs: [
                "Southern Province Logistics & Material Yard",
                "Reinforced Concrete Works & Civil Foundations",
                "Direct Wholesale Supply of Structural Steel & Rebar",
                "Facility Security & Surveillance Installation"
            ]
        },
        ar: {
            badge: "المدينة الاقتصادية الجنوبية والميناء",
            title: "مدينة جازان (Jazan City)",
            desc: "تنفيذ المقاولات المدنية، توريد المواد الإنشائية الأساسية، تركيب أنظمة المراقبة وحماية المنشآت للمنطقة الجنوبية.",
            specs: [
                "مركز التوزيع اللوجستي ومواد البناء بالجنوب",
                "تنفيذ القواعد الخرسانية الإنشائية والأعمال المدنية",
                "التوريد المباشر لحديد التسليح والمقاطع الإنشائية",
                "تركيب شبكات المراقبة التلفزيونية والتحكم بالدخول"
            ]
        }
    },
    jafurah: {
        en: {
            badge: "Unconventional Energy Basin • Eastern Province",
            title: "Jafurah Basin (حوض الجافورة)",
            desc: "Dedicated heavy machinery mobilization, certified pipeline welders, perimeter fencing, and continuous technical support for major unconventional gas fields.",
            specs: [
                "Heavy Crane & Earthmoving Mobilization Yard",
                "Certified Pipeline & Structural Welders (6G)",
                "Industrial Perimeter Security & Access Barriers",
                "High-Capacity Site Diesel Power Systems"
            ]
        },
        ar: {
            badge: "حوض الطاقة غير التقليدي • المنطقة الشرقية",
            title: "حوض الجافورة (Jafurah Basin)",
            desc: "تعبئة سريعة للرافعات الثقيلة، معدات الحفر والتسوية، فرق اللحام المعتمدة لخطوط الأنابيب، والبنية التحتية الأمنية لحقول الطاقة.",
            specs: [
                "أسطول التعبئة للرافعات والمعدات الثقيلة",
                "لحامون معتمدون لخطوط الأنابيب والإنشاءات (6G)",
                "حواجز أمنية صناعية وأسوار حماية مشددة",
                "توليد الطاقة الميدانية ومولدات الديزل عالية الكفاءة"
            ]
        }
    }
};

/* --------------------------------------------------
   3. SAUDI REALISTIC MAP & HUB HOVER INTERACTION
   -------------------------------------------------- */
function initSaudiMapInteraction() {
    const pins = document.querySelectorAll('.map-hub-pin');
    const directoryItems = document.querySelectorAll('.hub-directory-item');
    const inspectorBadge = document.getElementById('hub-inspector-badge');
    const inspectorTitle = document.getElementById('hub-inspector-title');
    const inspectorDesc = document.getElementById('hub-inspector-desc');
    const inspectorSpecs = document.getElementById('hub-inspector-specs');
    const inspectorCta = document.getElementById('hub-inspector-cta');

    let currentHub = 'riyadh';

    function setHub(hubKey) {
        if (!saudiHubsData[hubKey]) return;
        currentHub = hubKey;

        // Update active class on Map Pins
        pins.forEach(p => {
            if (p.getAttribute('data-hub') === hubKey) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });

        // Update active class on Directory Items
        directoryItems.forEach(item => {
            if (item.getAttribute('data-hub') === hubKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update Inspector Card
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const data = saudiHubsData[hubKey][lang] || saudiHubsData[hubKey].en;

        if (inspectorBadge) inspectorBadge.textContent = data.badge;
        if (inspectorTitle) inspectorTitle.textContent = data.title;
        if (inspectorDesc) inspectorDesc.textContent = data.desc;

        if (inspectorSpecs) {
            inspectorSpecs.innerHTML = '';
            data.specs.forEach(spec => {
                const row = document.createElement('div');
                row.className = 'hub-spec-row';
                row.textContent = spec;
                inspectorSpecs.appendChild(row);
            });
        }

        // Set CTA button target prefill
        if (inspectorCta) {
            inspectorCta.setAttribute('data-target-hub', data.title);
        }
    }

    // Bind Map Pin Hover & Click
    pins.forEach(pin => {
        pin.addEventListener('mouseenter', () => {
            const hub = pin.getAttribute('data-hub');
            setHub(hub);
        });
        pin.addEventListener('click', () => {
            const hub = pin.getAttribute('data-hub');
            setHub(hub);
        });
    });

    // Bind Directory Items Hover & Click
    directoryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const hub = item.getAttribute('data-hub');
            setHub(hub);
        });
        item.addEventListener('click', () => {
            const hub = item.getAttribute('data-hub');
            setHub(hub);
        });
    });

    // Bind Face Indus Province Hotspots Hover & Click
    const provinceHotspots = document.querySelectorAll('.face-hotspot-list li[data-hub]');
    provinceHotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', () => {
            const hub = hotspot.getAttribute('data-hub');
            if (hub && saudiHubsData[hub]) setHub(hub);
        });
        hotspot.addEventListener('click', () => {
            const hub = hotspot.getAttribute('data-hub');
            if (hub && saudiHubsData[hub]) setHub(hub);
        });
    });

    // Bind Inquire CTA to contact form
    if (inspectorCta) {
        inspectorCta.addEventListener('click', (e) => {
            e.preventDefault();
            const messageInput = document.getElementById('contact-message');
            const targetHub = inspectorCta.getAttribute('data-target-hub') || 'Saudi Arabia Hub';
            if (messageInput) {
                messageInput.value = `Inquiry regarding operations and mobilization for: ${targetHub}.\n`;
            }
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    }

    // Export function to re-render hub inspector on language change
    window.updateHubInspectorLang = function() {
        setHub(currentHub);
    };

    // Initialize with Riyadh
    setHub('riyadh');
}

/* --------------------------------------------------
   4. BILINGUAL SWITCHER ENGINE
   -------------------------------------------------- */
function initBilingualEngine() {
    const langBtn = document.getElementById('lang-toggle-btn');
    const langLabel = document.getElementById('lang-label');

    let currentLang = localStorage.getItem('site_lang') || 'en';
    applyLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem('site_lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        const isRtl = lang === 'ar';
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        if (langLabel) {
            langLabel.textContent = isRtl ? 'English' : 'العربية';
        }

        const dict = i18nData[lang] || i18nData.en;

        // Update all text elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update all placeholders with data-i18n-ph
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Re-render Hub Inspector card text in active language
        if (typeof window.updateHubInspectorLang === 'function') {
            window.updateHubInspectorLang();
        }

        // Re-render Hero Multi-Video Slider text in active language
        if (typeof window.updateHeroSliderLang === 'function') {
            window.updateHeroSliderLang();
        }
    }
}

/* --------------------------------------------------
   5. MOBILE NAVIGATION DRAWER
   -------------------------------------------------- */
function initMobileNav() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navDrawer = document.getElementById('mobile-nav-drawer');

    if (menuBtn && navDrawer) {
        menuBtn.addEventListener('click', () => {
            navDrawer.classList.toggle('open');
            const isOpen = navDrawer.classList.contains('open');
            menuBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close drawer when a link is clicked
        navDrawer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navDrawer.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/* --------------------------------------------------
   6. CONTACT FORM HANDLING
   -------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (feedback) {
                const currentLang = document.documentElement.getAttribute('lang') || 'en';
                const dict = i18nData[currentLang] || i18nData.en;
                feedback.textContent = dict.form_success;
                feedback.className = 'form-feedback success';
                feedback.style.display = 'block';
            }

            form.reset();
        });
    }
}

/* --------------------------------------------------
   7. SMOOTH SCROLLING WITH OFFSET
   -------------------------------------------------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* --------------------------------------------------
   8. COPYRIGHT YEAR UPDATE
   -------------------------------------------------- */
function updateCopyrightYear() {
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/* --------------------------------------------------
   9. ANIMATED KPI COUNTERS (From 0 to Target)
   -------------------------------------------------- */
function initAnimatedCounters() {
    const counterElements = document.querySelectorAll('.counter-val');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateSingleCounter(el);
                obs.unobserve(el);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
    });

    counterElements.forEach(el => observer.observe(el));
}

function animateSingleCounter(el) {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = parseInt(el.getAttribute('data-duration')) || 2000;
    const isInteger = Number.isInteger(target);

    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic: 1 - (1 - progress)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOut;

        const formatted = isInteger
            ? Math.floor(currentVal).toLocaleString('en-US')
            : currentVal.toFixed(1);

        el.textContent = `${prefix}${formatted}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            const finalFormatted = isInteger
                ? target.toLocaleString('en-US')
                : target.toFixed(1);
            el.textContent = `${prefix}${finalFormatted}${suffix}`;
        }
    }

    requestAnimationFrame(step);
}

/* --------------------------------------------------
   10. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------- */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('is-revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------
   11. STICKY HEADER SCROLL LISTENER
   -------------------------------------------------- */
function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
        if (window.scrollY > 25) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* --------------------------------------------------
   12. FFHAT-INSPIRED HERO MULTI-VIDEO SLIDER ENGINE
   -------------------------------------------------- */
function initHeroMultiVideoSlider() {
    const videoElement = document.getElementById('hero-slider-video');
    const badgeText = document.getElementById('hero-badge-text');
    const titleText = document.getElementById('hero-title-text');
    const subtextText = document.getElementById('hero-subtext-text');
    const tabs = document.querySelectorAll('.hero-video-tab');
    if (!videoElement || !tabs.length) return;

    const heroSlides = [
        {
            video: "assets/videos/video_security.mp4",
            poster: "assets/commercial_security_cctv_installation.jpg",
            badgeDefault: "Commercial Electronic Security & Enterprise IT Infrastructure • KSA",
            badgeAr: "الأنظمة الأمنية الإلكترونية وبنية تقنية المعلومات المؤسسية • المملكة",
            titleDefault: "Advanced Electronic Security. Trusted Execution.",
            titleAr: "أنظمة أمنية متقدمة. تنفيذ موثوق.",
            subtextDefault: "Turnkey commercial CCTV surveillance, biometric access control, 24/7 central SOC monitoring, and enterprise IT networking across Saudi Arabia.",
            subtextAr: "شبكات كاميرات المراقبة التلفزيونية التجارية، أنظمة التحكم بالدخول، غرف المراقبة والتحكم المركزية (SOC)، وبنية تقنية المعلومات بالمملكة."
        },
        {
            video: "assets/videos/video_datacenter.mp4",
            poster: "assets/datacenter_server_racks.jpg",
            badgeDefault: "Enterprise IT Networking & Low-Current Telecommunications",
            badgeAr: "شبكات المؤسسات السلكية واللاسلكية وتقنية المعلومات",
            titleDefault: "Turnkey Data Centers & Optical Fiber Backbones.",
            titleAr: "مراكز بيانات متكاملة وشبكات ألياف ضوئية فائقة الاعتمادية.",
            subtextDefault: "Structured copper and fiber cabling, server rack installations, uninterruptible power, and certified enterprise communications.",
            subtextAr: "تمديد كابلات الألياف الضوئية والنحاسية، تركيب خزائن الخوادم، وأنظمة الطاقة غير المنقطعة للشركات والمنشآت."
        },
        {
            video: "assets/videos/video_contracting.mp4",
            poster: "assets/saudi_industrial_contracting_hero.jpg",
            badgeDefault: "General Contracting & Turnkey Civil Engineering Division",
            badgeAr: "قطاع المقاولات العامة والأعمال المدنية والإنشائية المتكاملة",
            titleDefault: "Integrated Civil & Industrial Engineering.",
            titleAr: "حلول المقاولات العامة والأعمال الإنشائية المتكاملة.",
            subtextDefault: "Structural reinforced concrete, industrial piping, steel fabrication, and physical perimeter protection across the Kingdom.",
            subtextAr: "تنفيذ الأعمال المدنية والخرسانية، تمديدات الأنابيب الصناعية، وتصنيع وتركيب الأسوار والمنشآت الفولاذية."
        },
        {
            video: "assets/videos/video_equipment.mp4",
            poster: "assets/stitch_machinery_fleet.jpg",
            badgeDefault: "Over 2,700 Heavy Machinery Units Ready for Rapid Deployment",
            badgeAr: "أكثر من 2,700 آلية ومعدة ثقيلة جاهزة للتعبئة الفورية",
            titleDefault: "High-Capacity Industrial Fleet & Specialized Trades.",
            titleAr: "أسطول معدات صناعية ثقيلة وكوادر فنية متخصصة.",
            subtextDefault: "Rough-terrain cranes, crawler cranes, boom trucks, certified 6G welders, and multidisciplinary workforce across all provinces.",
            subtextAr: "رافعات تضاريسية وجنزيرية، شاحنات هيدروليكية، لحامون معتمدون (6G)، وفرق عمل متعددة التخصصات في كافة المناطق."
        }
    ];

    let currentSlide = 0;
    let slideTimer = null;
    const SLIDE_DURATION = 6000;

    function applySlide(index) {
        currentSlide = index;
        const slide = heroSlides[index];
        const isAr = (document.documentElement.getAttribute('lang') === 'ar');

        // Update tabs active state
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Smooth text transition
        if (titleText && subtextText) {
            titleText.style.transition = 'opacity 0.25s ease';
            subtextText.style.transition = 'opacity 0.25s ease';
            if (badgeText) badgeText.style.transition = 'opacity 0.25s ease';

            titleText.style.opacity = '0';
            subtextText.style.opacity = '0';
            if (badgeText) badgeText.style.opacity = '0';

            setTimeout(() => {
                if (badgeText) {
                    badgeText.textContent = isAr ? slide.badgeAr : slide.badgeDefault;
                    badgeText.style.opacity = '1';
                }
                titleText.textContent = isAr ? slide.titleAr : slide.titleDefault;
                titleText.style.opacity = '1';

                subtextText.textContent = isAr ? slide.subtextAr : slide.subtextDefault;
                subtextText.style.opacity = '1';
            }, 250);
        }

        // Switch video source
        if (!videoElement.src.endsWith(slide.video)) {
            videoElement.style.transition = 'opacity 0.3s ease';
            videoElement.style.opacity = '0.5';
            videoElement.src = slide.video;
            videoElement.poster = slide.poster;
            videoElement.load();
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    videoElement.style.opacity = '1';
                }).catch(() => {
                    videoElement.style.opacity = '1';
                });
            } else {
                videoElement.style.opacity = '1';
            }
        }
    }

    function startTimer() {
        stopTimer();
        slideTimer = setInterval(() => {
            const nextIndex = (currentSlide + 1) % heroSlides.length;
            applySlide(nextIndex);
        }, SLIDE_DURATION);
    }

    function stopTimer() {
        if (slideTimer) {
            clearInterval(slideTimer);
            slideTimer = null;
        }
    }

    // Bind tab clicks
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            applySlide(i);
            startTimer();
        });
    });

    // Language update hook
    window.updateHeroSliderLang = function() {
        applySlide(currentSlide);
    };

    // Initialize first slide and timer
    applySlide(0);
    startTimer();
}
