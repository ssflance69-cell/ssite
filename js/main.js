/**
 * SMART SECURE IT Networking & General Contracting Est.
 * Corporate Engine: Bilingual (EN / AR) & Responsive Navigation
 * Tone: Restrained, Factual, Established Saudi Engineering & Contracting
 */

document.addEventListener('DOMContentLoaded', () => {
    initBilingualEngine();
    initMobileNav();
    initSaudiMapInteraction();
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
        nav_security: "Security Systems",
        nav_equipment: "Equipment & Manpower",
        nav_materials: "Materials",
        nav_projects: "Projects & Clients",
        nav_map: "Kingdom Operations",
        nav_contact: "Contact",
        nav_quote: "Request a Quote",

        // Hero
        hero_title: "Integrated Solutions. Trusted Execution.",
        hero_subtext: "IT, Security and Contracting across the Kingdom of Saudi Arabia.",
        hero_btn_services: "Our Services",
        hero_btn_quote: "Request a Quote",

        // Section 3: Intro & Vision/Mission
        intro_label: "Company Profile",
        intro_heading: "Established Contracting & Technical Engineering",
        intro_lead: "SMART SECURE IT Networking & General Contracting Est. is a multi-disciplinary establishment providing integrated physical contracting, technical engineering, heavy machinery mobilization, and industrial supply across the Kingdom of Saudi Arabia.",
        intro_cr: "Commercial Registration: [Add CR number]",
        intro_est: "Establishment: [Add year founded]",
        vision_title: "Vision",
        vision_text: "To stand as the Kingdom's most dependable single-source contractor, advancing Saudi Vision 2030 through uncompromised technological security and robust civil execution.",
        mission_title: "Mission",
        mission_text: "Deliver precision-engineered IT infrastructure, surveillance, certified heavy machinery, and specialized manpower with zero safety compromises.",

        // Section 4: Services
        serv_label: "Divisions & Capabilities",
        serv_heading: "Core Contract Services",
        serv_subheading: "Factual, turnkey project capabilities executing civil, mechanical, and technical scopes across Saudi Arabia.",
        serv_01_title: "IT & Security Systems",
        serv_01_desc: "Commercial IP CCTV networks, surveillance monitoring infrastructure, central control rooms, and low-current telecommunications.",
        serv_02_title: "Access Control & Time Attendance",
        serv_02_desc: "Biometric identification systems, RFID security barriers, automated turnstiles, and integrated personnel tracking.",
        serv_03_title: "Heavy Equipment Rental",
        serv_03_desc: "Fleet mobilization including mobile cranes, crawler cranes, boom trucks, forklifts, generators, and heavy site machinery.",
        serv_04_title: "Manpower Supply",
        serv_04_desc: "Certified technical trades, QA/QC inspectors, HSE safety personnel, crane operators, and multi-disciplinary site teams.",
        serv_05_title: "Civil & Mechanical Contracting",
        serv_05_desc: "Structural reinforced concrete, industrial piping, structural steel erection, and commercial MEP installations.",
        serv_06_title: "Material Trading",
        serv_06_desc: "Wholesale supply of prime structural steel sections, prefabricated modular units, insulation, and civil construction materials.",
        serv_07_title: "Scaffolding, Fabrication & Fencing",
        serv_07_desc: "Industrial scaffolding systems, custom structural steel fabrication, and high-security perimeter fence installations.",
        serv_08_title: "Utility & Environmental Services",
        serv_08_desc: "Underground trenching, power distribution works, site drainage, and environmental containment compliance.",

        // Section 5: Security Feature Band
        sec_label: "Specialized Division",
        sec_heading: "Security Systems Engineering",
        sec_subheading: "Turnkey electronic security and surveillance infrastructure engineered for commercial, industrial, and institutional assets across the Kingdom.",
        sec_spec_1: "IP & High-Definition CCTV Surveillance Networks",
        sec_spec_2: "Biometric Access Control & Time Attendance Hardware",
        sec_spec_3: "Perimeter Security & Automated Access Barriers",
        sec_spec_4: "Centralized Operations Room & Server Infrastructure",
        sec_spec_5: "Structured Cabling, Fiber Optic Splicing & Low-Current Systems",
        sec_spec_6: "Scheduled Preventative Maintenance & Technical Support",

        // Section 6: Equipment & Manpower
        eq_label: "Plant & Workforce",
        eq_heading: "Equipment Fleet & Manpower Supply",
        eq_subheading: "Systematic mobilization of industrial plant machinery and certified site professionals for projects across Saudi Arabia.",
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

        // Section 11: Footer
        footer_desc: "SMART SECURE IT Networking & General Contracting Est. is an established Saudi establishment providing IT and security systems, heavy equipment rental, manpower supply, and civil contracting across the Kingdom of Saudi Arabia.",
        footer_nav_title: "Navigation",
        footer_contact_title: "Office Details",
        footer_cr: "CR: [Add CR number]",
        footer_chamber: "Chamber of Commerce: [Add Chamber city]",
        footer_rights: "All Rights Reserved. Kingdom of Saudi Arabia."
    },

    ar: {
        // Navigation
        nav_about: "نبذة عنا",
        nav_services: "خدماتنا",
        nav_security: "الأنظمة الأمنية",
        nav_equipment: "المعدات والكوادر",
        nav_materials: "تجارة المواد",
        nav_projects: "المشاريع والعملاء",
        nav_map: "العمليات بالمملكة",
        nav_contact: "اتصل بنا",
        nav_quote: "طلب عرض أسعار",

        // Hero
        hero_title: "حلول متكاملة. تنفيذ موثوق.",
        hero_subtext: "خدمات تقنية المعلومات، الأنظمة الأمنية والمقاولات العامة في جميع أنحاء المملكة العربية السعودية.",
        hero_btn_services: "خدماتنا",
        hero_btn_quote: "طلب عرض أسعار",

        // Section 3: Intro & Vision/Mission
        intro_label: "الملف التعريفي",
        intro_heading: "مؤسسة مقاولات وهندسة تقنية رائدة",
        intro_lead: "تعد مؤسسة سمارت سيكيور لشبكات الحاسب الآلي والمقاولات العامة مؤسسة سعودية متخصصة تقدم خدمات المقاولات المتكاملة، الهندسة التقنية، تأجير المعدات الثقيلة، والتوريد الصناعي في كافة مناطق المملكة العربية السعودية.",
        intro_cr: "السجل التجاري: [أدخل رقم السجل التجاري]",
        intro_est: "سنة التأسيس: [أدخل سنة التأسيس]",
        vision_title: "رؤيتنا",
        vision_text: "أن نكون المقاول المعتمد الأكثر موثوقية في المملكة، مساهمين في تحقيق رؤية السعودية 2030 من خلال أعلى معايير الأمان التقني والتنفيذ المدني الرصين.",
        mission_title: "رسالتنا",
        mission_text: "تقديم بنية تحتية هندسية دقيقة لتقنية المعلومات، وأنظمة مراقبة متقدمة، ومعدات ثقيلة معتمدة، وكوادر بشرية متخصصة مع الالتزام التام بالسلامة.",

        // Section 4: Services
        serv_label: "القطاعات والقدرات",
        serv_heading: "الخدمات الرئيسية للمؤسسة",
        serv_subheading: "قدرات تنفيذية متكاملة للمشاريع المدنية والميكانيكية والتقنية عبر مختلف مناطق المملكة العربية السعودية.",
        serv_01_title: "أنظمة تقنية المعلومات والأمن",
        serv_01_desc: "شبكات المراقبة التلفزيونية IP CCTV، غرف التحكم والمراقبة المركزية، والبنية التحتية للاتصالات والتيار الخفيف.",
        serv_02_title: "أنظمة التحكم بالدخول وتسجيل الحضور",
        serv_02_desc: "أجهزة التحقق البيومترية، بوابات الدخول ببطاقات RFID، البوابات الدوارة، وأنظمة تتبع دوام الموظفين.",
        serv_03_title: "تأجير المعدات الثقيلة",
        serv_03_desc: "أسطول معدات يشمل الرافعات التضاريسية والبرجية، شاحنات الرافعة (بوم ترك)، الرافعات الشوكية، والمولدات.",
        serv_04_title: "توريد الكوادر البشرية المتخصصة",
        serv_04_desc: "فنيون معتمدون، مفتشو الجودة والسلامة المهنية (HSE)، مشغلو رافعات، وفرق تنفيذية بمختلف التخصصات.",
        serv_05_title: "المقاولات المدنية والميكانيكية",
        serv_05_desc: "الأعمال الخرسانية الإنشائية، تمديد الأنابيب الصناعية، تركيب الهياكل الحديدية، والأعمال الكهروميكانيكية (MEP).",
        serv_06_title: "تجارة المواد الإنشائية",
        serv_06_desc: "توريد قطاعات الحديد الإنشائي، المباني الجاهزة (كرفانات)، العوازل الصناعية، ومواد البناء المدنية.",
        serv_07_title: "السقالات والتصنيع والأسوار الأمنية",
        serv_07_desc: "أنظمة السقالات الصناعية المعتمدة، تصنيع وتشكيل المعادن، وتركيب الأسوار الأمنية المحيطية.",
        serv_08_title: "خدمات المرافق والبيئة",
        serv_08_desc: "أعمال حفر وتمديد المرافق الأرضية، شبكات توزيع الطاقة، تسوية المواقع، والالتزام بالاشتراطات البيئية.",

        // Section 5: Security Feature Band
        sec_label: "قطاع الأنظمة الأمنية",
        sec_heading: "هندسة الأنظمة الأمنية والمراقبة",
        sec_subheading: "حلول متكاملة للأنظمة الأمنية الإلكترونية وشبكات المراقبة التلفزيونية المصممة للمنشآت التجارية والصناعية في المملكة.",
        sec_spec_1: "شبكات مراقبة تلفزيونية IP CCTV عالية الدقة",
        sec_spec_2: "أجهزة بيومترية للتحكم بالدخول وتسجيل الحضور والانصراف",
        sec_spec_3: "أنظمة حماية الأسوار والمحيط الأمني والبوابات الآلية",
        sec_spec_4: "تجهيز غرف العمليات والتحكم المركزي ومراكز البيانات",
        sec_spec_5: "تمديدات الكابلات الهيكلية، لحام الألياف البصرية والتيار الخفيف",
        sec_spec_6: "عقود صيانة وقائية دورية ودعم فني متخصص",

        // Section 6: Equipment & Manpower
        eq_label: "المعدات والعمالة",
        eq_heading: "أسطول المعدات الثقيلة والكوادر البشرية",
        eq_subheading: "تعبئة منظمة للآليات والمعدات الثقيلة والكوادر الفنية المعتمدة للمشاريع في جميع مناطق المملكة.",
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

        // Section 11: Footer
        footer_desc: "مؤسسة سمارت سيكيور لشبكات الحاسب الآلي والمقاولات العامة هي مؤسسة سعودية تقدم خدمات الأنظمة التقنية والأمنية، تأجير المعدات الثقيلة، الكوادر البشرية، والمقاولات العامة في جميع أنحاء المملكة العربية السعودية.",
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
