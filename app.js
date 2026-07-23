        const classList = [
            "1/A", "1/B", "1/C", "1/D", "2/A", "2/B", "2/C", "2/D", "3/A", "3/B", "3/C", "3/D", "4/A", "4/B", "4/C", "4/D"
        ];

        const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

        let bellHours = [
            { id: 1, start: "08:40", end: "09:20" },
            { id: 2, start: "09:35", end: "10:15" },
            { id: 3, start: "10:30", end: "11:10" },
            { id: 4, start: "11:20", end: "12:00" },
            { id: 5, start: "13:20", end: "14:00" },
            { id: 6, start: "14:10", end: "14:50" },
            { id: 7, start: "15:00", end: "15:40" }
        ];

        const defaultAppConfig = {
            schoolName: "2071 MELİKŞAH İLKOKULU",
            quote: "Akıllı kimsenin lisanı kalbindedir. Düşünerek söyler.",
            quoteAuthor: "Hz. Ali (r.a.)",
            quotes: [
                { text: "Akıllı kimsenin lisanı kalbindedir. Düşünerek söyler.", author: "Hz. Ali (r.a.)", date: "" }
            ],
            cityName: "Muş",
            weatherLat: "38.73",
            weatherLng: "41.49",
            adminPin: "",
            theme: "standard",
            themeMode: "dark",
            customColors: null,
            schoolLogo: "",
            logoSize: 54,
            schoolNameSize: 24,
            logoPosition: "left",
            namePosition: "left",
            schoolNameFont: "'Rajdhani', sans-serif",
            logoOffsetX: 0,
            nameOffsetX: 0,
            brandSubText: "Yönetici Paneli için Tıklayın veya 'A' Tuşuna Basın",
            brandSubVisible: true,
            specialDays: [
                { title: "Okuma ve Yazma Bayramı Coşkusu", startDate: "", endDate: "" },
                { title: "İlköğretim Haftası Kutlu Olsun", startDate: "", endDate: "" }
            ],
            moduleSettings: {
                brand: { title: "", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true },
                birthday: { title: "BUGÜN DOĞANLAR 🎂", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 6 },
                schedule: { title: "SINIFLARIN DERS DURUMLARI", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 12 },
                quote: { title: "GÜNÜN SÖZÜ", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 9 },
                specialday: { title: "Belirli Gün / Hafta", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 8 },
                bellhours: { title: "GÜNLÜK ZİL SAATLERİ", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true },
                announcements: { title: "DUYURULAR 📢", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true },
                clock: { title: "", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true },
                achievements: { title: "AYIN ENLERİ", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 7 },
                duty: { title: "BUGÜN GÖREVLİ NÖBETÇİ ÖĞRETMENLER", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true },
                media: { title: "", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true, interval: 10 }
            },
            cleanClassList: [
                { title: "3/C Sınıfı", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=120", active: true }
            ],
            bestStudentList: [
                { title: "M. Asaf ÇÖZÜM (3/C)", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=120", active: true }
            ],
            mediaPlaylist: [
                { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000", caption: "Çocuklarımız uygulamalı eğitimlerle trafik kurallarını öğrendiler" },
                { url: "https://images.unsplash.com/photo-1577896851231-70ee18881754?q=80&w=1000", caption: "Okulumuzda eğlenceli bilim şenliği etkinlikleri düzenlendi" }
            ],
            announcements: [
                { text: "Merdivenlerin her zaman sağından inip çıkalım.", color: "", bgColor: "", font: "", fontSize: 11, bold: false },
                { text: "Teneffüs bitiminde sınıflarımıza zamanında geçelim.", color: "", bgColor: "", font: "", fontSize: 11, bold: false },
                { text: "Sevgili Çocuklar, Okulumuzu temiz tutalım.", color: "", bgColor: "", font: "", fontSize: 11, bold: false },
                { text: "Değerli velilerimiz, ders esnasında öğretmenlerimizle koridorlarda görüşmeyelim.", color: "", bgColor: "", font: "", fontSize: 11, bold: false }
            ],
            birthdays: [
                { class: "2/B", name: "Beyza KIZILŞARA", date: "24.11" },
                { class: "3/C", name: "Enes DEMİR", date: "15.05" },
                { class: "1/A", name: "Elif BULUT", date: "20.07" }
            ],
            birthdayWidget: {
                title: "BUGÜN DOĞANLAR 🎂",
                cardSize: 1,
                todaySubtitle: "İYİ Kİ DOĞDUN! 🎉",
                upcomingSubtitle: "Yaklaşan Doğum Günleri 🎂",
                emptyText: "Bugün doğum günü olan kayıt bulunmuyor.",
                showUpcomingWhenEmpty: true,
                upcomingCount: 5,
                celebrationDateLabel: "Kutlama Tarihi"
            },
            weeklyDuties: {
                "Pazartesi": { admin: "Nihan Öztürk", canteen: "Ahmet Ak", garden: "Veli Can", floor1: "Zeynep Şen", floor2: "Murat Koç" },
                "Salı": { admin: "Mehmet Çelik", canteen: "Canan Yılmaz", garden: "Kemal Sun", floor1: "Özlem Er", floor2: "Tarık Aka" },
                "Çarşamba": { admin: "Nihan Öztürk", canteen: "Fatih Yaşar", garden: "Deniz Gözü", floor1: "Seda Gül", floor2: "Canan Demir" },
                "Perşembe": { admin: "Mehmet Çelik", canteen: "Seda Süs", garden: "Arif Mert", floor1: "Zeynep Şen", floor2: "Murat Koç" },
                "Cuma": { admin: "Kadir Bal", canteen: "Gönül Bağı", garden: "Ali Kemal", floor1: "Hülya Avşar", floor2: "Cem Karaca" }
            },
            weeklyClassSchedules: {
                "1/A": {
                    "Pazartesi": ["Türkçe", "Türkçe", "Matematik", "Müzik", "Görsel San.", "Beden Eğt.", "Beden Eğt."],
                    "Salı": ["Matematik", "Matematik", "Türkçe", "Türkçe", "Hayat Bil.", "Müzik", "Oyun Etk."],
                    "Çarşamba": ["Türkçe", "Türkçe", "Hayat Bil.", "Hayat Bil.", "Matematik", "Serbest Etk.", "Serbest Etk."],
                    "Perşembe": ["Okuma-Yazma", "Okuma-Yazma", "Beden Eğt.", "Matematik", "Türkçe", "Görsel San.", "Müzik"],
                    "Cuma": ["Türkçe", "Türkçe", "Hayat Bil.", "Hayat Bil.", "Matematik", "Oyun Etk.", "Oyun Etk."]
                },
                "3/C": {
                    "Pazartesi": ["Hayat Bil.", "Hayat Bil.", "Türkçe", "Türkçe", "Matematik", "Görsel San.", "Serbest Etk."],
                    "Salı": ["Fen Bil.", "Fen Bil.", "Matematik", "Matematik", "Türkçe", "Türkçe", "Müzik"],
                    "Çarşamba": ["İngilizce", "İngilizce", "Matematik", "Matematik", "Türkçe", "Türkçe", "Fen Bil."],
                    "Perşembe": ["Türkçe", "Türkçe", "Matematik", "İngilizce", "İngilizce", "Beden Eğt.", "Beden Eğt."],
                    "Cuma": ["Hayat Bil.", "Matematik", "Türkçe", "Türkçe", "Müzik", "Serbest Etk.", "Serbest Etk."]
                }
            },
            /* Nöbetçi öğretmen kadrosu: isimle eşleşen öğretmenin fotoğrafı veya ikonu
               nöbet panosunda otomatik gösterilir. Ad -> {photo, icon} */
            teacherRoster: {},

            /* Öğretmen kadrosunun admin panelindeki gösterim sırası (sürükle-bırak ile
               değiştirilebilir). İçinde olmayan / silinmiş isimler otomatik göz ardı edilir,
               yeni eklenen isimler otomatik olarak sona eklenir. */
            rosterOrder: [],

            /* NÖBET YERLERİ (dinamik): id değerleri, eski aylikNobet kayıtlarıyla (kantin,
               bahce, zemin, kat1, kat2, idareci) uyumlu kalması için bilerek aynı tutulmuştur.
               Kullanıcı dilediği kadar yeni nöbet yeri ekleyip silebilir, sırasını değiştirebilir. */
            dutyPositions: [
                { id: 'idareci', label: 'İdareci',  icon: 'fa-user-tie',       color: '#00b4d8' },
                { id: 'kantin',  label: 'Kantin',    icon: 'fa-cookie-bite',   color: '#ffb703' },
                { id: 'bahce',   label: 'Bahçe',     icon: 'fa-tree',          color: '#38b000' },
                { id: 'zemin',   label: 'Zemin Kat', icon: 'fa-door-open',     color: '#38bdf8' },
                { id: 'kat1',    label: '1. Kat',    icon: 'fa-arrow-up-1-9',  color: '#d90429' },
                { id: 'kat2',    label: '2. Kat',    icon: 'fa-stairs',        color: '#9d4edd' }
            ],

            /* NÖBET KARTI GÖRSEL ÖZELLEŞTİRME AYARLARI */
            dutyStyle: {
                template: 'classic',
                shape: 'rounded',          // rounded | square | oval | card
                nameColorMode: 'auto',     // auto | custom
                nameColor: '#02040a',
                activeBg: {
                    color: '#00b4d8',
                    opacity: 15,           // 0-100
                    highlight: 'left-bar'  // none | border | glow | left-bar | underline
                }
            }
        };

        /* =========================================================================
           YERLEŞİM DÜZENLEYİCİ (LAYOUT ENGINE)
           Pano artık 96 sütun x 64 satırlık serbest (Excel benzeri) bir ızgara
           üzerinde çalışır. Sütun/satır sayısı yüksek olduğu için modüller
           çok daha ince adımlarla (excel hücreleri gibi) istenen yere taşınıp
           istenen boyuta getirilebilir.
           Her modülün konumu/ebadı {c, cs, r, rs, fs, hh, hfs, hcolor} olarak saklanır:
             c  = başlangıç sütunu (1-96)   cs = sütun genişliği (kaç hücre)
             r  = başlangıç satırı (1-64)   rs = satır yüksekliği (kaç hücre)
             fs = yazı boyutu ölçeği (%), varsayılan 100
             hh = modül başlığı yüksekliği (px, opsiyonel)
             hfs = modül başlığı yazı boyutu (px, opsiyonel)
             hcolor = modül başlığı yazı rengi (hex, opsiyonel)
           ========================================================================= */
        const PANO_GRID_COLS = 96;
        const PANO_GRID_ROWS = 64;

        const PANO_MODULE_IDS = ['brand', 'media', 'birthday', 'schedule', 'quote', 'specialday', 'bellhours', 'announcements', 'clock', 'achievements', 'duty'];

        const PANO_MODULE_LABELS = {
            brand: 'Okul Marka Alanı',
            media: 'Görsel Medya',
            birthday: 'Bugün Doğanlar',
            schedule: 'Ders Programı',
            quote: 'Günün Sözü',
            specialday: 'Belirli Gün / Hava',
            bellhours: 'Zil Saatleri',
            announcements: 'Duyurular',
            clock: 'Saat / Geri Sayım',
            achievements: 'Ayın Enleri',
            duty: 'Nöbetçi Öğretmenler'
        };

        // Hazır yerleşim şablonları. Her şablon 11 modülün tamamını, boşluk bırakmadan
        // 96x64 ızgara üzerinde konumlandırır (aşağıda 48x32 baz değerler yazılıp
        // otomatik 2 katına ölçeklenir; görünüm aynı, hassasiyet iki kat artmış olur).
        const PANO_LAYOUT_TEMPLATES = {
            klasik: {
                birthday:      { c: 1,  cs: 12, r: 1,  rs: 12, fs: 100 },
                schedule:      { c: 1,  cs: 12, r: 13, rs: 12, fs: 100 },
                clock:         { c: 1,  cs: 12, r: 25, rs: 8,  fs: 100 },
                brand:         { c: 13, cs: 24, r: 1,  rs: 4,  fs: 100 },
                media:         { c: 13, cs: 24, r: 5,  rs: 20, fs: 100 },
                duty:          { c: 13, cs: 24, r: 25, rs: 8,  fs: 100 },
                quote:         { c: 37, cs: 12, r: 1,  rs: 6,  fs: 100 },
                specialday:    { c: 37, cs: 12, r: 7,  rs: 6,  fs: 100 },
                bellhours:     { c: 37, cs: 12, r: 13, rs: 8,  fs: 100 },
                announcements: { c: 37, cs: 12, r: 21, rs: 6,  fs: 100 },
                achievements:  { c: 37, cs: 12, r: 27, rs: 6,  fs: 100 }
            },
            duyuru_odakli: {
                birthday:      { c: 1,  cs: 12, r: 1,  rs: 10, fs: 100 },
                schedule:      { c: 1,  cs: 12, r: 11, rs: 12, fs: 100 },
                clock:         { c: 1,  cs: 12, r: 23, rs: 10, fs: 100 },
                brand:         { c: 13, cs: 24, r: 1,  rs: 4,  fs: 100 },
                media:         { c: 13, cs: 24, r: 5,  rs: 12, fs: 100 },
                duty:          { c: 13, cs: 24, r: 17, rs: 16, fs: 110 },
                quote:         { c: 37, cs: 12, r: 1,  rs: 4,  fs: 90 },
                specialday:    { c: 37, cs: 12, r: 5,  rs: 4,  fs: 90 },
                bellhours:     { c: 37, cs: 12, r: 9,  rs: 6,  fs: 100 },
                announcements: { c: 37, cs: 12, r: 15, rs: 10, fs: 115 },
                achievements:  { c: 37, cs: 12, r: 25, rs: 8,  fs: 100 }
            },
            ders_programi_odakli: {
                birthday:      { c: 1,  cs: 12, r: 1,  rs: 6,  fs: 95 },
                schedule:      { c: 1,  cs: 12, r: 7,  rs: 20, fs: 110 },
                clock:         { c: 1,  cs: 12, r: 27, rs: 6,  fs: 100 },
                brand:         { c: 13, cs: 24, r: 1,  rs: 4,  fs: 100 },
                media:         { c: 13, cs: 24, r: 5,  rs: 18, fs: 100 },
                duty:          { c: 13, cs: 24, r: 23, rs: 10, fs: 100 },
                quote:         { c: 37, cs: 12, r: 1,  rs: 6,  fs: 100 },
                specialday:    { c: 37, cs: 12, r: 7,  rs: 6,  fs: 100 },
                bellhours:     { c: 37, cs: 12, r: 13, rs: 8,  fs: 100 },
                announcements: { c: 37, cs: 12, r: 21, rs: 6,  fs: 100 },
                achievements:  { c: 37, cs: 12, r: 27, rs: 6,  fs: 100 }
            },
            medya_odakli: {
                birthday:      { c: 1,  cs: 12, r: 1,  rs: 10, fs: 100 },
                schedule:      { c: 1,  cs: 12, r: 11, rs: 12, fs: 100 },
                clock:         { c: 1,  cs: 12, r: 23, rs: 10, fs: 100 },
                brand:         { c: 13, cs: 24, r: 1,  rs: 2,  fs: 85 },
                media:         { c: 13, cs: 24, r: 3,  rs: 26, fs: 100 },
                duty:          { c: 13, cs: 24, r: 29, rs: 4,  fs: 85 },
                quote:         { c: 37, cs: 12, r: 1,  rs: 6,  fs: 100 },
                specialday:    { c: 37, cs: 12, r: 7,  rs: 6,  fs: 100 },
                bellhours:     { c: 37, cs: 12, r: 13, rs: 6,  fs: 100 },
                announcements: { c: 37, cs: 12, r: 19, rs: 6,  fs: 100 },
                achievements:  { c: 37, cs: 12, r: 25, rs: 8,  fs: 100 }
            }
        };

        // Yukarıdaki şablonlar 48x32 ızgara baz alınarak yazılmıştır; yeni 96x64
        // ızgaraya (2 katı hassasiyet) otomatik olarak ölçeklenir (görünüm aynı kalır).
        Object.values(PANO_LAYOUT_TEMPLATES).forEach(tpl => {
            Object.keys(tpl).forEach(id => {
                const m = tpl[id];
                m.c = (m.c - 1) * 2 + 1;
                m.r = (m.r - 1) * 2 + 1;
                m.cs = m.cs * 2;
                m.rs = m.rs * 2;
            });
        });

        const PANO_TEMPLATE_LABELS = {
            klasik: { title: 'Klasik', desc: 'Varsayılan dengeli düzen', icon: 'fa-table-columns' },
            duyuru_odakli: { title: 'Duyuru Odaklı', desc: 'Duyurular ve nöbet bilgisi öne çıkar', icon: 'fa-bullhorn' },
            ders_programi_odakli: { title: 'Ders Programı Odaklı', desc: 'Ders programı büyük gösterilir', icon: 'fa-calendar-days' },
            medya_odakli: { title: 'Medya Odaklı', desc: 'Görsel/slayt alanı büyütülür', icon: 'fa-photo-film' }
        };

        // Yerleşik modüller için PANO_MODULE_LABELS'tan, özel modüller için moduleDefs/customModuleDefs
        // içindeki 'label' alanından modül adını döndürür.
        function panoModuleLabel(id) {
            if (PANO_MODULE_LABELS[id]) return PANO_MODULE_LABELS[id];
            const custom = (appConfig.customModuleDefs || []).find(d => d.id === id);
            return (custom && custom.label) || id;
        }

        // Yerleşik + kullanıcı tarafından eklenen özel modüllerin TÜMÜNÜN id listesini döndürür.
        // Yerleşim Düzenleyici, sürükle-bırak ve etiket/tutamaç sistemleri artık bu listeyi kullanır,
        // böylece özel modüller de yerleşik modüller gibi konumlandırılabilir/boyutlandırılabilir.
        function panoAllModuleIds() {
            const customIds = ((typeof appConfig !== 'undefined' && appConfig.customModuleDefs) || [])
                .filter(d => d && d.id)
                .map(d => d.id);
            return PANO_MODULE_IDS.concat(customIds);
        }

        // localStorage'dan gelen eski/eksik bir yerleşimde kayıp modül varsa klasik şablondan tamamlar.
        // Özel modüller için klasik şablonda tanım olmadığından, uygun bir varsayılan konum üretilir.
        function panoFillMissingModules(layout) {
            const merged = { ...layout };
            const fallback = PANO_LAYOUT_TEMPLATES.klasik;
            panoAllModuleIds().forEach((id, idx) => {
                const isBuiltIn = PANO_MODULE_IDS.includes(id);
                const def = fallback[id] || { c: 1, cs: 24, r: 1 + ((idx * 8) % 56), rs: 8, fs: 100 };
                if (!merged[id]) merged[id] = { ...def };
                else merged[id] = { c: 1, cs: 12, r: 1, rs: 4, fs: 100, ...def, ...merged[id] };
            });
            return merged;
        }

        function panoModuleEl(id) {
            return document.querySelector('.pano-module[data-module="' + id + '"]');
        }

        // Özel (kullanıcı tarafından eklenen) bir modül için panoda gerçek bir kart oluşturur
        // (yoksa). Kart oluşturulunca cardSel/titleSel otomatik olarak bu karta bağlanır,
        // böylece kullanıcının elle CSS seçici girmesine gerek kalmaz.
        function ensureCustomModuleCard(def) {
            if (!def || def.builtIn) return null;
            const grid = document.getElementById('pano-main-dashboard');
            if (!grid) return null;
            let el = document.querySelector('.pano-module[data-module="' + def.id + '"]');
            if (!el) {
                el = document.createElement('div');
                el.className = 'dashboard-card pano-module custom-module-card';
                el.id = 'custom-card-' + def.id;
                el.dataset.module = def.id;
                el.innerHTML = `
                    <div class="card-header" id="display-${def.id}-title"></div>
                    <div class="card-body" id="custom-body-${def.id}" style="padding:8px; white-space:pre-wrap; overflow:auto;"></div>
                `;
                grid.appendChild(el);
            }
            // cardSel/titleSel'i her zaman bu otomatik karta senkronla (kullanıcı elle
            // farklı bir seçici girmediyse); böylece taşınan/yeniden oluşturulan kartlar hep bağlı kalır.
            if (!def.cardSel || def.cardSel.trim() === '' || def.cardSel === ('#' + el.id)) {
                def.cardSel = '#' + el.id;
            }
            if (!def.titleSel) def.titleSel = '#display-' + def.id + '-title';
            def.hasTitle = true;
            return el;
        }

        // Kayıtlı tüm özel modüller için panodaki kartlarının var olduğundan emin olur
        // (sayfa her yüklendiğinde çağrılmalı, çünkü DOM elemanları localStorage'da saklanmaz).
        function ensureAllCustomModuleCards() {
            (appConfig.customModuleDefs || []).forEach(def => ensureCustomModuleCard(def));
            _rebuildModuleDefs();
        }

        // Geçerli yerleşimi (kaydedilmiş halini) döndürür; yoksa klasik şablonu kurar.
        function panoGetLayoutState() {
            if (!appConfig.panoLayout) appConfig.panoLayout = JSON.parse(JSON.stringify(PANO_LAYOUT_TEMPLATES.klasik));
            return appConfig.panoLayout;
        }

        function panoClampLayoutValue(m) {
            m.c = Math.min(Math.max(1, Math.round(m.c)), PANO_GRID_COLS);
            m.r = Math.min(Math.max(1, Math.round(m.r)), PANO_GRID_ROWS);
            m.cs = Math.min(Math.max(1, Math.round(m.cs)), PANO_GRID_COLS - m.c + 1);
            m.rs = Math.min(Math.max(1, Math.round(m.rs)), PANO_GRID_ROWS - m.r + 1);
            m.fs = Math.min(Math.max(40, Math.round(m.fs || 100)), 250);
            if (m.hh) m.hh = Math.min(Math.max(16, Math.round(m.hh)), 120);
            if (m.hfs) m.hfs = Math.min(Math.max(8, Math.round(m.hfs)), 48);
            return m;
        }

        // Yerleşimi gerçek DOM elemanlarına (grid-column/grid-row + yazı ölçeği) uygular.
        function applyPanoLayout(layout) {
            layout = layout || panoGetLayoutState();
            panoAllModuleIds().forEach(id => {
                const el = panoModuleEl(id);
                if (!el) return;
                const m = panoClampLayoutValue({ ...(layout[id] || PANO_LAYOUT_TEMPLATES.klasik[id]) });
                el.style.gridColumn = m.c + ' / span ' + m.cs;
                el.style.gridRow = m.r + ' / span ' + m.rs;
                el.dataset.c = m.c;
                el.dataset.r = m.r;
                el.dataset.cs = m.cs;
                el.dataset.rs = m.rs;
                el.dataset.fs = m.fs;
                const scale = m.fs / 100;
                const header = el.querySelector(':scope > .card-header');
                const body = el.querySelector(':scope > .card-body');
                if (header) {
                    header.style.zoom = scale;
                    header.style.height = m.hh ? (m.hh + 'px') : '';
                    header.style.fontSize = m.hfs ? (m.hfs + 'px') : '';
                    // Not: Modül Ayarları sekmesindeki "Başlık Rengi" (titleColor) ayarını
                    // ezmemek için burada sadece hcolor tanımlıysa uyguluyoruz.
                    if (m.hcolor) header.style.color = m.hcolor;
                }
                if (body) body.style.zoom = scale;
                if (!header && !body) {
                    // card-header/card-body içermeyen modüller (saat kutusu, marka alanı, medya alanı):
                    // etiket/tutamaç dışındaki doğrudan çocuklara ölçek uygula.
                    Array.from(el.children).forEach(child => {
                        if (child.classList.contains('pano-module-label') || child.classList.contains('pano-resize-handle')) return;
                        child.style.zoom = scale;
                    });
                }
            });
        }

        function panoPersist() {
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
        }

        // Modüllerin üzerine etiket ve boyutlandırma tutamacı ekler (bir kere çalışır).
        function panoSetupOverlays() {
            panoAllModuleIds().forEach(id => {
                const el = panoModuleEl(id);
                if (!el || el.querySelector('.pano-resize-handle')) return;
                const label = document.createElement('div');
                label.className = 'pano-module-label';
                label.textContent = panoModuleLabel(id);
                const handle = document.createElement('div');
                handle.className = 'pano-resize-handle';
                handle.dataset.moduleId = id;
                el.appendChild(label);
                el.appendChild(handle);
            });
        }

        function panoInitLayout() {
            panoSetupOverlays();
            applyPanoLayout(panoGetLayoutState());
        }

        /* ================== CANLI SÜRÜKLE / BOYUTLANDIR DÜZENLEME MODU ================== */
        let panoEditActive = false;
        let panoEditWorkingLayout = null;   // düzenleme başlarken alınan çalışma kopyası
        let panoEditBeforeSnapshot = null;  // vazgeç için orijinal (girişteki) durum
        let panoEditSelectedModule = null;
        let panoDragState = null; // {type:'move'|'resize', moduleId, startX, startY, orig:{c,r,cs,rs}, cellW, cellH}

        function panoGridEl() {
            return document.getElementById('pano-main-dashboard');
        }

        function panoCellSize() {
            const grid = panoGridEl();
            const rect = grid.getBoundingClientRect();
            const styles = getComputedStyle(grid);
            const gap = parseFloat(styles.gap) || 0;
            return {
                w: (rect.width - gap * (PANO_GRID_COLS - 1)) / PANO_GRID_COLS + gap,
                h: (rect.height - gap * (PANO_GRID_ROWS - 1)) / PANO_GRID_ROWS + gap,
                rect
            };
        }

        function panoEnterEditMode() {
            panoEditWorkingLayout = JSON.parse(JSON.stringify(panoGetLayoutState()));
            panoEditBeforeSnapshot = JSON.parse(JSON.stringify(panoGetLayoutState()));
            panoEditActive = true;
            document.body.classList.add('pano-edit-mode');
            document.getElementById('pano-edit-toolbar').classList.add('active');
            panoBindModuleDragHandlers();
            panoBindEditPanelDrag();
        }

        // Sağ üstteki "Seçili Modül Ayar Paneli"ni başlığından tutup serbestçe
        // sürükleyebilmeyi sağlar (ekranın istenen bir köşesine taşınabilir).
        function panoBindEditPanelDrag() {
            const panel = document.getElementById('pano-edit-panel');
            const handle = document.getElementById('pano-edit-panel-header');
            if (!panel || !handle || handle.dataset.dragBound) return;
            handle.dataset.dragBound = '1';
            handle.addEventListener('pointerdown', function(e) {
                e.preventDefault();
                const rect = panel.getBoundingClientRect();
                panel.style.left = rect.left + 'px';
                panel.style.top = rect.top + 'px';
                panel.style.right = 'auto';
                panel.style.bottom = 'auto';
                panel.classList.add('pano-panel-dragging');
                const startX = e.clientX, startY = e.clientY;
                const origLeft = rect.left, origTop = rect.top;
                function onMove(ev) {
                    const maxLeft = Math.max(4, window.innerWidth - panel.offsetWidth - 4);
                    const maxTop = Math.max(4, window.innerHeight - panel.offsetHeight - 4);
                    let newLeft = origLeft + (ev.clientX - startX);
                    let newTop = origTop + (ev.clientY - startY);
                    newLeft = Math.min(Math.max(4, newLeft), maxLeft);
                    newTop = Math.min(Math.max(4, newTop), maxTop);
                    panel.style.left = newLeft + 'px';
                    panel.style.top = newTop + 'px';
                }
                function onUp() {
                    document.removeEventListener('pointermove', onMove);
                    panel.classList.remove('pano-panel-dragging');
                }
                document.addEventListener('pointermove', onMove);
                document.addEventListener('pointerup', onUp, { once: true });
            });
        }

        function panoBindModuleDragHandlers() {
            panoAllModuleIds().forEach(id => {
                const el = panoModuleEl(id);
                if (!el || el.dataset.panoBound) return;
                el.dataset.panoBound = '1';
                el.addEventListener('pointerdown', function(e) {
                    if (!panoEditActive) return;
                    if (e.target.classList.contains('pano-resize-handle')) return;
                    panoStartDrag('move', id, e);
                });
                const handle = el.querySelector('.pano-resize-handle');
                if (handle) {
                    handle.addEventListener('pointerdown', function(e) {
                        if (!panoEditActive) return;
                        e.stopPropagation();
                        panoStartDrag('resize', id, e);
                    });
                }
                el.addEventListener('click', function(e) {
                    if (!panoEditActive || panoDragState) return;
                    panoSelectModuleForPanel(id);
                });
            });
        }

        function panoStartDrag(type, moduleId, e) {
            const cell = panoCellSize();
            const m = panoEditWorkingLayout[moduleId];
            panoDragState = {
                type, moduleId,
                startX: e.clientX, startY: e.clientY,
                orig: { c: m.c, r: m.r, cs: m.cs, rs: m.rs },
                cellW: cell.w, cellH: cell.h
            };
            const el = panoModuleEl(moduleId);
            el.classList.add('pano-dragging');
            el.setPointerCapture(e.pointerId);
            document.addEventListener('pointermove', panoOnDragMove);
            document.addEventListener('pointerup', panoOnDragEnd, { once: true });
        }

        function panoOnDragMove(e) {
            if (!panoDragState) return;
            const { type, moduleId, startX, startY, orig, cellW, cellH } = panoDragState;
            const dCols = Math.round((e.clientX - startX) / cellW);
            const dRows = Math.round((e.clientY - startY) / cellH);
            const m = panoEditWorkingLayout[moduleId];
            if (type === 'move') {
                m.c = Math.min(Math.max(1, orig.c + dCols), PANO_GRID_COLS - orig.cs + 1);
                m.r = Math.min(Math.max(1, orig.r + dRows), PANO_GRID_ROWS - orig.rs + 1);
            } else {
                m.cs = Math.min(Math.max(1, orig.cs + dCols), PANO_GRID_COLS - orig.c + 1);
                m.rs = Math.min(Math.max(1, orig.rs + dRows), PANO_GRID_ROWS - orig.r + 1);
            }
            applyPanoLayout(panoEditWorkingLayout);
            if (panoEditSelectedModule === moduleId) panoRefreshPanelValues(moduleId);
        }

        function panoOnDragEnd() {
            document.removeEventListener('pointermove', panoOnDragMove);
            if (panoDragState) {
                const el = panoModuleEl(panoDragState.moduleId);
                if (el) el.classList.remove('pano-dragging');
            }
            panoDragState = null;
        }

        function panoSelectModuleForPanel(moduleId) {
            document.querySelectorAll('.pano-module.pano-selected').forEach(e => e.classList.remove('pano-selected'));
            const el = panoModuleEl(moduleId);
            if (el) el.classList.add('pano-selected');
            panoEditSelectedModule = moduleId;
            document.getElementById('pano-edit-panel-title').textContent = PANO_MODULE_LABELS[moduleId] || moduleId;
            panoRefreshPanelValues(moduleId);
            document.getElementById('pano-edit-panel').classList.add('active');
        }

        function panoRefreshPanelValues(moduleId) {
            const m = panoEditWorkingLayout[moduleId];
            const headerEl = panoModuleEl(moduleId) ? panoModuleEl(moduleId).querySelector(':scope > .card-header') : null;
            const naturalHh = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 32;
            const naturalHfs = headerEl ? Math.round(parseFloat(getComputedStyle(headerEl).fontSize)) : 15;
            document.getElementById('pano-panel-cs').value = m.cs;
            document.getElementById('pano-panel-cs-val').textContent = m.cs;
            document.getElementById('pano-panel-rs').value = m.rs;
            document.getElementById('pano-panel-rs-val').textContent = m.rs;
            document.getElementById('pano-panel-fs').value = m.fs;
            document.getElementById('pano-panel-fs-val').textContent = m.fs;
            const hhVal = m.hh || naturalHh || 32;
            const hfsVal = m.hfs || naturalHfs || 15;
            document.getElementById('pano-panel-hh').value = hhVal;
            document.getElementById('pano-panel-hh-val').textContent = hhVal;
            document.getElementById('pano-panel-hfs').value = hfsVal;
            document.getElementById('pano-panel-hfs-val').textContent = hfsVal;
        }

        function panoPanelUpdate() {
            if (!panoEditSelectedModule) return;
            const m = panoEditWorkingLayout[panoEditSelectedModule];
            m.cs = Math.min(parseInt(document.getElementById('pano-panel-cs').value, 10), PANO_GRID_COLS - m.c + 1);
            m.rs = Math.min(parseInt(document.getElementById('pano-panel-rs').value, 10), PANO_GRID_ROWS - m.r + 1);
            m.fs = parseInt(document.getElementById('pano-panel-fs').value, 10);
            m.hh = parseInt(document.getElementById('pano-panel-hh').value, 10);
            m.hfs = parseInt(document.getElementById('pano-panel-hfs').value, 10);
            document.getElementById('pano-panel-cs-val').textContent = m.cs;
            document.getElementById('pano-panel-rs-val').textContent = m.rs;
            document.getElementById('pano-panel-fs-val').textContent = m.fs;
            document.getElementById('pano-panel-hh-val').textContent = m.hh;
            document.getElementById('pano-panel-hfs-val').textContent = m.hfs;
            applyPanoLayout(panoEditWorkingLayout);
        }

        function panoFinishLiveEdit(save) {
            panoEditActive = false;
            document.body.classList.remove('pano-edit-mode');
            document.getElementById('pano-edit-toolbar').classList.remove('active');
            document.getElementById('pano-edit-panel').classList.remove('active');
            document.querySelectorAll('.pano-module.pano-selected').forEach(e => e.classList.remove('pano-selected'));
            panoEditSelectedModule = null;
            if (save) {
                appConfig.panoLayout = panoEditWorkingLayout;
                panoPersist();
                applyPanoLayout(appConfig.panoLayout);
                panoRenderModuleSizeList();
                showCustomNotification('Düzen Kaydedildi', 'Yeni modül yerleşimi başarıyla kaydedildi.');
            } else {
                applyPanoLayout(panoEditBeforeSnapshot);
            }
        }

        function panoStartLiveEditFromAdmin() {
            closeAdminPanelWithoutSaving();
            panoEnterEditMode();
        }

        /* ================== ŞABLONLAR ================== */
        function panoApplyTemplate(templateKey) {
            const tpl = PANO_LAYOUT_TEMPLATES[templateKey];
            if (!tpl) return;
            appConfig.panoLayout = JSON.parse(JSON.stringify(tpl));
            panoPersist();
            applyPanoLayout(appConfig.panoLayout);
            panoRenderModuleSizeList();
            writeCMSLog(`"${(PANO_TEMPLATE_LABELS[templateKey] || {}).title || templateKey}" yerleşim şablonu uygulandı.`);
        }

        function panoRenderTemplateList() {
            const wrap = document.getElementById('admin-layout-template-list');
            if (!wrap) return;
            wrap.innerHTML = '';
            Object.keys(PANO_LAYOUT_TEMPLATES).forEach(key => {
                const meta = PANO_TEMPLATE_LABELS[key] || { title: key, desc: '', icon: 'fa-table-cells' };
                const card = document.createElement('button');
                card.className = 'text-left bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-xl p-3 transition group';
                card.onclick = () => panoApplyTemplate(key);
                card.innerHTML = `
                    <div class="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2 group-hover:bg-cyan-500/20">
                        <i class="fa-solid ${meta.icon}"></i>
                    </div>
                    <div class="text-white font-bold text-sm">${meta.title}</div>
                    <div class="text-[11px] text-slate-500 mt-0.5">${meta.desc}</div>
                `;
                wrap.appendChild(card);
            });
        }

        /* ================== KAYITLI (KULLANICI) DÜZENLERİ ================== */
        function panoSaveCurrentLayoutAs() {
            const input = document.getElementById('admin-layout-save-name');
            const name = (input.value || '').trim();
            if (!name) {
                showCustomNotification('İsim Gerekli', 'Kaydetmeden önce düzen için bir isim girin.');
                return;
            }
            if (!appConfig.savedLayouts) appConfig.savedLayouts = {};
            appConfig.savedLayouts[name] = JSON.parse(JSON.stringify(panoGetLayoutState()));
            panoPersist();
            input.value = '';
            panoRenderSavedLayoutsList();
            writeCMSLog(`"${name}" adıyla yeni bir yerleşim kaydedildi.`);
            showCustomNotification('Kaydedildi', `"${name}" adlı düzen kaydedildi. İstediğiniz zaman listeden yükleyebilirsiniz.`);
        }

        function panoLoadSavedLayout(name) {
            if (!appConfig.savedLayouts || !appConfig.savedLayouts[name]) return;
            appConfig.panoLayout = panoFillMissingModules(JSON.parse(JSON.stringify(appConfig.savedLayouts[name])));
            panoPersist();
            applyPanoLayout(appConfig.panoLayout);
            panoRenderModuleSizeList();
            writeCMSLog(`"${name}" adlı kayıtlı düzen yüklendi.`);
        }

        function panoDeleteSavedLayout(name) {
            askCustomConfirmation('Düzeni Sil', `"${name}" adlı kayıtlı düzeni silmek istediğinize emin misiniz?`, function() {
                delete appConfig.savedLayouts[name];
                panoPersist();
                panoRenderSavedLayoutsList();
                writeCMSLog(`"${name}" adlı kayıtlı düzen silindi.`);
            });
        }

        function panoRenderSavedLayoutsList() {
            const wrap = document.getElementById('admin-layout-saved-list');
            if (!wrap) return;
            wrap.innerHTML = '';
            const names = Object.keys(appConfig.savedLayouts || {});
            if (names.length === 0) {
                wrap.innerHTML = '<p class="text-[11px] text-slate-600 italic px-1">Henüz kayıtlı bir düzeniniz yok.</p>';
                return;
            }
            names.forEach(name => {
                const row = document.createElement('div');
                row.className = 'flex items-center justify-between bg-slate-900 border border-slate-700 rounded-lg px-3 py-2';
                row.innerHTML = `
                    <span class="text-sm text-slate-200 font-bold flex items-center gap-2"><i class="fa-solid fa-bookmark text-emerald-400"></i> ${name}</span>
                    <span class="flex items-center gap-2">
                        <button class="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg">Yükle</button>
                        <button class="px-3 py-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold rounded-lg"><i class="fa-solid fa-trash"></i></button>
                    </span>
                `;
                row.querySelectorAll('button')[0].onclick = () => panoLoadSavedLayout(name);
                row.querySelectorAll('button')[1].onclick = () => panoDeleteSavedLayout(name);
                wrap.appendChild(row);
            });
        }

        /* ================== MODÜL EBAT / YAZI BOYUTU LİSTESİ (ADMİN SEKMESİ İÇİNDE) ================== */
        function panoRenderModuleSizeList() {
            const wrap = document.getElementById('admin-layout-module-list');
            if (!wrap) return;
            wrap.innerHTML = '';
            const layout = panoGetLayoutState();
            panoAllModuleIds().forEach(id => {
                const m = layout[id];
                const headerElNow = panoModuleEl(id) ? panoModuleEl(id).querySelector(':scope > .card-header') : null;
                const naturalHfs = headerElNow ? Math.round(parseFloat(getComputedStyle(headerElNow).fontSize)) : 15;
                const hfsCurrent = m.hfs || naturalHfs || 15;
                const hcolorCurrent = m.hcolor || '#ffffff';
                const row = document.createElement('div');
                row.className = 'grid grid-cols-[repeat(16,minmax(0,1fr))] gap-3 items-center bg-slate-900 border border-slate-700 rounded-lg px-3 py-2';
                row.innerHTML = `
                    <div class="col-span-3 text-sm text-slate-200 font-bold">${panoModuleLabel(id)}</div>
                    <div class="col-span-2"><input type="number" min="1" max="96" value="${m.cs}" class="w-full bg-slate-950 border border-slate-700 rounded-md text-center text-white text-sm py-1" data-field="cs"></div>
                    <div class="col-span-2"><input type="number" min="1" max="64" value="${m.rs}" class="w-full bg-slate-950 border border-slate-700 rounded-md text-center text-white text-sm py-1" data-field="rs"></div>
                    <div class="col-span-3"><input type="range" min="40" max="250" value="${m.fs}" class="w-full" data-field="fs"></div>
                    <div class="col-span-2 text-center text-xs text-cyan-400 font-bold" data-role="fsval">${m.fs}%</div>
                    <div class="col-span-2"><input type="number" min="8" max="48" value="${hfsCurrent}" class="w-full bg-slate-950 border border-slate-700 rounded-md text-center text-white text-sm py-1" data-field="hfs"></div>
                    <div class="col-span-2 flex items-center justify-center"><input type="color" value="${hcolorCurrent}" class="w-8 h-8 bg-slate-950 border border-slate-700 rounded-md cursor-pointer" data-field="hcolor"></div>
                `;
                const csInput = row.querySelector('[data-field="cs"]');
                const rsInput = row.querySelector('[data-field="rs"]');
                const fsInput = row.querySelector('[data-field="fs"]');
                const fsVal = row.querySelector('[data-role="fsval"]');
                const hfsInput = row.querySelector('[data-field="hfs"]');
                const hcolorInput = row.querySelector('[data-field="hcolor"]');
                function commit() {
                    const state = panoGetLayoutState();
                    const mod = state[id];
                    mod.cs = Math.min(Math.max(1, parseInt(csInput.value, 10) || mod.cs), PANO_GRID_COLS - mod.c + 1);
                    mod.rs = Math.min(Math.max(1, parseInt(rsInput.value, 10) || mod.rs), PANO_GRID_ROWS - mod.r + 1);
                    mod.fs = parseInt(fsInput.value, 10) || 100;
                    mod.hfs = Math.min(Math.max(8, parseInt(hfsInput.value, 10) || 15), 48);
                    mod.hcolor = hcolorInput.value || '';
                    fsVal.textContent = mod.fs + '%';
                    panoPersist();
                    applyPanoLayout(state);
                }
                csInput.addEventListener('change', commit);
                rsInput.addEventListener('change', commit);
                fsInput.addEventListener('input', commit);
                hfsInput.addEventListener('change', commit);
                hcolorInput.addEventListener('input', commit);
                wrap.appendChild(row);
            });
        }

        let appConfig = JSON.parse(localStorage.getItem('okulPanoDataV8')) || defaultAppConfig;

        // ESKİ SÜRÜM UYUMLULUĞU: Duyurular önceden düz metin (string) dizisiydi.
        // Her duyuru için ayrı biçimlendirme desteği eklendiğinde, eski kayıtları
        // varsayılan biçimlendirme değerleriyle nesne (object) formatına dönüştürüyoruz.
        function normalizeAnnouncement(a) {
            if (typeof a === 'string') {
                return { text: a, color: '', bgColor: '', font: '', fontSize: 11, bold: false };
            }
            return {
                text: (a && a.text) || '',
                color: (a && a.color) || '',
                bgColor: (a && a.bgColor) || '',
                font: (a && a.font) || '',
                fontSize: (a && a.fontSize) ? parseInt(a.fontSize, 10) : 11,
                bold: !!(a && a.bold)
            };
        }
        if (Array.isArray(appConfig.announcements)) {
            appConfig.announcements = appConfig.announcements.map(normalizeAnnouncement);
        }

        // IZGARA SÜRÜM GEÇMİŞİ: v1 = 24x16, v2 = 48x32, v3 = 96x64
        // Daha önceki bir sürümde tarayıcıya kaydedilmiş özel bir pano düzeni varsa,
        // koordinatları eski ızgaraya göredir. Görünüm bozulmasın diye bu düzeni
        // otomatik olarak her adımda 2 katı ölçekleyip güncel ızgaraya taşıyoruz.
        const PANO_GRID_VERSION = 3;
        function panoScaleLayoutToNewGrid(layout) {
            Object.keys(layout).forEach(id => {
                const m = layout[id];
                if (!m) return;
                if (typeof m.c === 'number') m.c = (m.c - 1) * 2 + 1;
                if (typeof m.r === 'number') m.r = (m.r - 1) * 2 + 1;
                if (typeof m.cs === 'number') m.cs = m.cs * 2;
                if (typeof m.rs === 'number') m.rs = m.rs * 2;
            });
        }
        if ((appConfig.panoLayout || appConfig.savedLayouts) && (appConfig.panoGridVersion || 1) < PANO_GRID_VERSION) {
            let v = appConfig.panoGridVersion || 1;
            while (v < PANO_GRID_VERSION) {
                if (appConfig.panoLayout) panoScaleLayoutToNewGrid(appConfig.panoLayout);
                if (appConfig.savedLayouts) {
                    Object.keys(appConfig.savedLayouts).forEach(name => {
                        panoScaleLayoutToNewGrid(appConfig.savedLayouts[name]);
                    });
                }
                v++;
            }
            appConfig.panoGridVersion = PANO_GRID_VERSION;
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
        } else if (!appConfig.panoGridVersion) {
            appConfig.panoGridVersion = PANO_GRID_VERSION;
        }

        applyBrandPositions();
        
        if (!appConfig.bellHours) appConfig.bellHours = bellHours; else bellHours = appConfig.bellHours;
        if (!appConfig.weeklyDuties) appConfig.weeklyDuties = defaultAppConfig.weeklyDuties;
        if (!appConfig.weeklyClassSchedules) appConfig.weeklyClassSchedules = defaultAppConfig.weeklyClassSchedules;
        if (!appConfig.aylikNobet) appConfig.aylikNobet = {};
        if (!appConfig.teacherRoster) appConfig.teacherRoster = {};
        if (!appConfig.dutyPositions || !Array.isArray(appConfig.dutyPositions) || appConfig.dutyPositions.length === 0) {
            appConfig.dutyPositions = JSON.parse(JSON.stringify(defaultAppConfig.dutyPositions));
        } else {
            // Eksik alanları (icon/color) tamamla, id'siz kayıt varsa üret
            appConfig.dutyPositions = appConfig.dutyPositions.map((p, idx) => ({
                id: p.id || ('yer_' + Date.now() + '_' + idx),
                label: p.label || ('Nöbet Yeri ' + (idx + 1)),
                icon: p.icon || 'fa-user-shield',
                color: p.color || '#00b4d8'
            }));
        }
        if (!appConfig.dutyStyle) {
            appConfig.dutyStyle = JSON.parse(JSON.stringify(defaultAppConfig.dutyStyle));
        } else {
            appConfig.dutyStyle = {
                ...JSON.parse(JSON.stringify(defaultAppConfig.dutyStyle)),
                ...appConfig.dutyStyle,
                activeBg: { ...defaultAppConfig.dutyStyle.activeBg, ...(appConfig.dutyStyle.activeBg || {}) }
            };
        }
        if (!appConfig.panoLayout) appConfig.panoLayout = JSON.parse(JSON.stringify(PANO_LAYOUT_TEMPLATES['klasik']));
        else appConfig.panoLayout = panoFillMissingModules(appConfig.panoLayout);
        if (!appConfig.savedLayouts) appConfig.savedLayouts = {};
        if (!appConfig.quotes || appConfig.quotes.length === 0) {
            appConfig.quotes = [{ text: appConfig.quote || defaultAppConfig.quote, author: appConfig.quoteAuthor || defaultAppConfig.quoteAuthor, date: "" }];
        }
        if (!appConfig.birthdayWidget) appConfig.birthdayWidget = { ...defaultAppConfig.birthdayWidget };
        else appConfig.birthdayWidget = { ...defaultAppConfig.birthdayWidget, ...appConfig.birthdayWidget };

        // Eski (string dizisi) belirli gün/hafta verisini yeni obje formatına taşı
        if (!appConfig.specialDays) appConfig.specialDays = [...defaultAppConfig.specialDays];
        appConfig.specialDays = appConfig.specialDays.map(sd => {
            if (typeof sd === 'string') return { title: sd, startDate: "", endDate: "" };
            return { title: sd.title || "", startDate: sd.startDate || "", endDate: sd.endDate || "" };
        });

        // Eski (tek kayıtlı) Ayın Enleri verisini yeni çoklu-kayıt liste formatına taşı
        if (!appConfig.cleanClassList || appConfig.cleanClassList.length === 0) {
            if (appConfig.cleanClass || appConfig.cleanClassImg) {
                appConfig.cleanClassList = [{ title: appConfig.cleanClass || "", img: appConfig.cleanClassImg || "", active: true }];
            } else {
                appConfig.cleanClassList = [...defaultAppConfig.cleanClassList];
            }
        }
        if (!appConfig.bestStudentList || appConfig.bestStudentList.length === 0) {
            if (appConfig.bestStudent || appConfig.bestStudentImg) {
                appConfig.bestStudentList = [{ title: appConfig.bestStudent || "", img: appConfig.bestStudentImg || "", active: true }];
            } else {
                appConfig.bestStudentList = [...defaultAppConfig.bestStudentList];
            }
        }
        appConfig.cleanClassList = appConfig.cleanClassList.map(r => ({ title: r.title || "", img: r.img || "", active: r.active !== false }));
        appConfig.bestStudentList = appConfig.bestStudentList.map(r => ({ title: r.title || "", img: r.img || "", active: r.active !== false }));

        // Modül ayarlarını (başlık/renk/boyut/aktiflik) varsayılanlarla birleştir
        if (!appConfig.moduleSettings) appConfig.moduleSettings = {};
        Object.keys(defaultAppConfig.moduleSettings).forEach(key => {
            appConfig.moduleSettings[key] = { ...defaultAppConfig.moduleSettings[key], ...(appConfig.moduleSettings[key] || {}) };
        });

        // Okul Marka modülünü moduleSettings'e ekle (yoksa)
        if (!appConfig.moduleSettings.brand) {
            appConfig.moduleSettings.brand = { title: '', color: '', bgType: '', bgColor1: '', bgColor2: '', titleBgType: '', titleBgColor1: '', titleBgColor2: '', titleColor: '', font: '', size: 'normal', active: true, titleActive: true };
        }

        // Tüm modüllerin (kart) tanımları: id, panel etiketi, panodaki DOM seçicileri
        // TEMEL MODÜL DEFİNİSYONLARI — yeni modül eklemek için sadece bu listeye satır ekle.
        // Dinamik sistem bu listeyi kullanarak tüm ayar panelini, geri alma geçmişini ve otomatik
        // kaydetmeyi kendiliğinden yönetir. Özel (kullanıcı tarafından eklenen) modüller de
        // appConfig.customModuleDefs içinde tutulur ve buraya çalışma zamanında birleştirilir.
        // NOT: Bu tanım, aşağıdaki _rebuildModuleDefs() çağrısından ÖNCE gelmeli — aksi halde
        // "Cannot access 'BUILTIN_MODULE_DEFS' before initialization" hatası oluşur.
        const BUILTIN_MODULE_DEFS = [
            { id: 'brand',         label: 'Okul Marka Alanı',         cardSel: '#brand-dashboard-card',         titleSel: null,                            hasTitle: false, hasInterval: false, builtIn: true },
            { id: 'birthday',      label: 'Doğum Günleri',            cardSel: '#birthday-dashboard-card',      titleSel: '#display-birthday-title',       hasTitle: true,  hasInterval: true,  defaultInterval: 6,  builtIn: true },
            { id: 'schedule',      label: 'Ders Programı',            cardSel: '#schedule-dashboard-card',      titleSel: '#display-schedule-group-title', hasTitle: true,  hasInterval: true,  defaultInterval: 12, builtIn: true },
            { id: 'quote',         label: 'Günün Sözü',               cardSel: '#quote-dashboard-card',         titleSel: '#display-quote-title',          hasTitle: true,  hasInterval: true,  defaultInterval: 9,  builtIn: true },
            { id: 'specialday',    label: 'Belirli Gün & Hava Durumu',cardSel: '#specialday-weather-card',      titleSel: '#display-specialday-title',     hasTitle: true,  hasInterval: true,  defaultInterval: 8,  builtIn: true },
            { id: 'bellhours',     label: 'Zil Saatleri',             cardSel: '#bellhours-dashboard-card',     titleSel: '#display-bellhours-title',      hasTitle: true,  hasInterval: false, builtIn: true },
            { id: 'announcements', label: 'Duyurular',                cardSel: '#announcements-dashboard-card', titleSel: '#display-announcements-title',   hasTitle: true,  hasInterval: false, builtIn: true },
            { id: 'clock',         label: 'Saat / Geri Sayım',        cardSel: '#clock-dashboard-card',         titleSel: null,                            hasTitle: false, hasInterval: false, builtIn: true },
            { id: 'achievements',  label: 'Ayın Enleri',              cardSel: '#achievements-dashboard-card',  titleSel: '#display-achievements-title',   hasTitle: true,  hasInterval: true,  defaultInterval: 7,  builtIn: true },
            { id: 'duty',          label: 'Nöbetçi Öğretmenler',      cardSel: '#duty-dashboard-card',          titleSel: '#display-duty-title-text',      hasTitle: true,  hasInterval: false, builtIn: true },
            { id: 'media',         label: 'Görsel Slayt Alanı',       cardSel: '#media-dashboard-card',         titleSel: null,                            hasTitle: false, hasInterval: true,  defaultInterval: 10, builtIn: true }
        ];

        // Çalışma zamanında kullanılan birleşik modül listesi (yerleşik + kullanıcı eklentileri)
        let moduleDefs = [...BUILTIN_MODULE_DEFS];

        // Kullanıcı tarafından eklenen özel modülleri yükle ve birleştir
        if (!appConfig.customModuleDefs) appConfig.customModuleDefs = [];
        _rebuildModuleDefs();

        // Modül ayarları geri alma yığını
        let moduleSettingsUndoStack = [];
        const MODULE_SETTINGS_UNDO_LIMIT = 20;

        // Geri alma yığınına anlık durumu ekler
        function moduleSettingsPushUndo() {
            const snapshot = {
                moduleSettings: JSON.parse(JSON.stringify(appConfig.moduleSettings || {})),
                customModuleDefs: JSON.parse(JSON.stringify(appConfig.customModuleDefs || []))
            };
            moduleSettingsUndoStack.push(snapshot);
            if (moduleSettingsUndoStack.length > MODULE_SETTINGS_UNDO_LIMIT) moduleSettingsUndoStack.shift();
            document.getElementById('btn-module-undo') && document.getElementById('btn-module-undo').classList.remove('hidden');
        }

        // Son durumu geri alır
        function moduleSettingsUndo() {
            if (!moduleSettingsUndoStack.length) return;
            const snap = moduleSettingsUndoStack.pop();
            const idsBefore = (appConfig.customModuleDefs || []).map(d => d.id);
            appConfig.moduleSettings = snap.moduleSettings;
            appConfig.customModuleDefs = snap.customModuleDefs || [];
            _rebuildModuleDefs();
            const idsAfter = appConfig.customModuleDefs.map(d => d.id);
            // Geri alma ile kaldırılan özel modüllerin panodaki kartlarını temizle
            idsBefore.filter(id => !idsAfter.includes(id)).forEach(id => {
                const el = panoModuleEl(id);
                if (el && el.parentNode) el.parentNode.removeChild(el);
                if (appConfig.panoLayout) delete appConfig.panoLayout[id];
            });
            // Geri alma ile geri gelen özel modüllerin kartlarını yeniden oluştur
            ensureAllCustomModuleCards();
            appConfig.panoLayout = panoFillMissingModules(panoGetLayoutState());
            applyPanoLayout(appConfig.panoLayout);
            panoSetupOverlays();
            panoBindModuleDragHandlers();
            moduleSettingsAutoSave();
            renderAdminModuleSettings();
            applyModuleSettingsToDashboard();
            if (!moduleSettingsUndoStack.length) {
                document.getElementById('btn-module-undo') && document.getElementById('btn-module-undo').classList.add('hidden');
            }
            writeCMSLog('Modül ayarları geri alındı.');
        }

        // customModuleDefs listesine göre moduleDefs'i yeniden oluşturur
        function _rebuildModuleDefs() {
            const customs = (appConfig.customModuleDefs || []).filter(d => d && d.id);
            moduleDefs = [...BUILTIN_MODULE_DEFS, ...customs];
        }

        // Modül ayarlarını localStorage'a otomatik yazar (kaydet butonuna basmadan)
        function moduleSettingsAutoSave() {
            appConfig.moduleSettings = collectModuleSettingsFromAdmin();
            appConfig.customModuleDefs = (appConfig.customModuleDefs || []);
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
        }

        // Yeni özel modül ekle
        function moduleSettingsAddNew() {
            moduleSettingsPushUndo();
            const newId = 'custom_' + Date.now();
            const newDef = { id: newId, label: 'Yeni Modül', cardSel: '', titleSel: null, hasTitle: true, hasInterval: false, builtIn: false, isCustom: true };
            if (!appConfig.customModuleDefs) appConfig.customModuleDefs = [];
            appConfig.customModuleDefs.push(newDef);
            if (!appConfig.moduleSettings) appConfig.moduleSettings = {};
            appConfig.moduleSettings[newId] = { title: 'Yeni Modül Başlığı', content: 'Bu alana metin yazabilirsiniz.', color: '', bgType: '', bgColor1: '', bgColor2: '', titleBgType: '', titleBgColor1: '', titleBgColor2: '', titleColor: '', font: '', size: 'normal', active: true, titleActive: true };
            _rebuildModuleDefs();
            ensureCustomModuleCard(newDef);
            appConfig.panoLayout = panoFillMissingModules(panoGetLayoutState());
            applyPanoLayout(appConfig.panoLayout);
            panoSetupOverlays();
            panoBindModuleDragHandlers();
            renderAdminModuleSettings();
            applyModuleSettingsToDashboard();
            moduleSettingsAutoSave();
            writeCMSLog('Yeni modül eklendi: ' + newId);
            showCustomNotification('Modül Eklendi', 'Yeni modül panoya eklendi. Konumunu/boyutunu "Yerleşim Düzenleyici" bölümünden ayarlayabilirsiniz.');
        }

        // Yerleşik bir modülün o anki (canlı) gövde içeriğinden statik bir metin
        // anlık görüntüsü (snapshot) çıkarır. Başlık ayrı tutulduğu için başlık
        // elemanı hariç tutulur; gövde (.card-body) yoksa kartın tamamı okunur.
        function panoSnapshotBuiltinContent(def) {
            const card = def.cardSel ? document.querySelector(def.cardSel) : null;
            if (!card) return '';
            const bodyEl = card.querySelector(':scope > .card-body') || card;
            const clone = bodyEl.cloneNode(true);
            // Başlık çubuğu klon içine sızdıysa temizle
            clone.querySelectorAll(':scope > .card-header').forEach(h => h.remove());
            const text = (clone.innerText || clone.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
            return text;
        }

        // Var olan bir modülü kopyala
        function moduleSettingsDuplicate(id) {
            const srcDef = moduleDefs.find(d => d.id === id);
            const srcSetting = (appConfig.moduleSettings && appConfig.moduleSettings[id]) ? JSON.parse(JSON.stringify(appConfig.moduleSettings[id])) : {};
            let contentSnapshot;
            if (srcDef && srcDef.builtIn) {
                // Yerleşik modüllerin gövdesi canlı veriden üretilir (dinamik); gerçek
                // bir "kopya" mümkün değildir. Kullanıcıyı bilgilendirip onay al: devam
                // edilirse o anki görünen içeriğin SABİT (statik) bir anlık görüntüsü alınır;
                // bundan sonra kaynak modül güncellense bile bu kopya otomatik güncellenmez.
                const proceed = window.confirm(
                    '"' + (srcDef.label || id) + '" yerleşik bir modüldür ve içeriği otomatik/canlı olarak üretilir.\n\n' +
                    'Bu modülü kopyalarsanız işlevsel bir kopya OLUŞTURULAMAZ — sadece şu an ekranda görünen ' +
                    'içeriğin durağan (statik) bir metin kopyası alınır. Yeni modül daha sonra otomatik güncellenmez, ' +
                    'içeriğini elle düzenlemeniz gerekir.\n\nYine de devam etmek istiyor musunuz?'
                );
                if (!proceed) return;
                contentSnapshot = panoSnapshotBuiltinContent(srcDef);
            }
            moduleSettingsPushUndo();
            const newId = 'custom_' + Date.now();
            const newDef = { ...srcDef, id: newId, label: (srcDef ? srcDef.label : 'Modül') + ' (Kopya)', cardSel: '', titleSel: null, builtIn: false, isCustom: true };
            if (!appConfig.customModuleDefs) appConfig.customModuleDefs = [];
            appConfig.customModuleDefs.push(newDef);
            srcSetting.title = (srcSetting.title || '') + ' (Kopya)';
            srcSetting.content = (contentSnapshot !== undefined) ? contentSnapshot : (srcSetting.content || '');
            if (!appConfig.moduleSettings) appConfig.moduleSettings = {};
            appConfig.moduleSettings[newId] = srcSetting;
            _rebuildModuleDefs();
            ensureCustomModuleCard(newDef);
            appConfig.panoLayout = panoFillMissingModules(panoGetLayoutState());
            applyPanoLayout(appConfig.panoLayout);
            panoSetupOverlays();
            panoBindModuleDragHandlers();
            renderAdminModuleSettings();
            applyModuleSettingsToDashboard();
            moduleSettingsAutoSave();
            writeCMSLog('Modül kopyalandı: ' + id + ' → ' + newId + (contentSnapshot !== undefined ? ' (statik anlık görüntü)' : ''));
            if (contentSnapshot !== undefined) {
                showCustomNotification('Modül Statik Olarak Kopyalandı', 'Yerleşik modülün o anki içeriği durağan metin olarak kopyalandı. Otomatik güncellenmez; içeriğini "Modül Ayarları" bölümünden elle düzenleyebilirsiniz.');
            } else {
                showCustomNotification('Modül Kopyalandı', 'Kopyalanan modül panoya eklendi. Konumunu/boyutunu "Yerleşim Düzenleyici" bölümünden ayarlayabilirsiniz.');
            }
        }

        // Özel (kullanıcı eklentisi) modülü sil
        function moduleSettingsDelete(id) {
            const def = moduleDefs.find(d => d.id === id);
            if (def && def.builtIn) { showCustomNotification('Uyarı', 'Yerleşik modüller silinemez.'); return; }
            askCustomConfirmation('Modülü Sil', 'Bu modül ve ayarları kalıcı olarak silinecek. Emin misiniz?', function() {
                moduleSettingsPushUndo();
                const el = panoModuleEl(id);
                if (el && el.parentNode) el.parentNode.removeChild(el);
                if (appConfig.panoLayout) delete appConfig.panoLayout[id];
                appConfig.customModuleDefs = (appConfig.customModuleDefs || []).filter(d => d.id !== id);
                if (appConfig.moduleSettings) delete appConfig.moduleSettings[id];
                _rebuildModuleDefs();
                moduleSettingsAutoSave();
                renderAdminModuleSettings();
                writeCMSLog('Modül silindi: ' + id);
            });
        }


        // Modül adını (label) inline düzenle
        function moduleSettingsRenameLabel(id, newLabel) {
            const ci = (appConfig.customModuleDefs || []).findIndex(d => d.id === id);
            if (ci >= 0) appConfig.customModuleDefs[ci].label = newLabel;
            _rebuildModuleDefs();
        }

        let editingBirthdayIndex = -1;
        let editingAnnouncementIndex = -1;
        let selectedBirthdayIndices = new Set(); // Toplu silme için seçilen doğum günü satır indeksleri
        let editingSpecialDayIndex = -1;
        let editingQuoteIndex = -1;
        let editingCleanClassIndex = -1;
        let editingBestStudentIndex = -1;
        let editingMediaSlideIndex = -1;
        let cyclingIntervalTimers = {}; // Süreli (döngüsel) modüllerin setInterval id'lerini tutar

        let activeScheduleGroup = 1; 
        let birthdayCycleIndex = 0;
        let quoteCycleIndex = 0;
        let specialDayCycleIndex = 0;
        let activeMediaSlideIndex = 0;
        let activeCleanClassIndex = 0;
        let activeBestStudentIndex = 0;
        let activeAdminEditClass = "1/A"; 

        let tempCleanClassList = [];
        let tempBestStudentList = [];

        let tempAnnouncements = [...appConfig.announcements];
        let tempBirthdays = [...appConfig.birthdays];
        let tempQuotes = [...(appConfig.quotes || [])];
        let tempSpecialDays = [...appConfig.specialDays];
        let tempMediaPlaylist = [...(appConfig.mediaPlaylist || [])];

        window.onload = function() {
            writeCMSLog("Pano sistemi başarıyla başlatıldı.");
            appConfig.theme = appConfig.theme || 'standard';
            appConfig.themeMode = appConfig.themeMode || 'dark';
            ensureAllCustomModuleCards();
            renderThemeClasses();
            applyModuleSettingsToDashboard();
            renderPanoData();
            startPanoClocksAndIntervals();
            fetchLiveWeather();
            buildAdminClassSelector();
            panoInitLayout();
            panoRenderTemplateList();
            panoRenderSavedLayoutsList();
            panoRenderModuleSizeList();

            document.addEventListener('keydown', function(e) {
                if (e.key === 'a' || e.key === 'A') {
                    const isModalOpen = !document.getElementById('admin-panel').classList.contains('hidden') || 
                                        !document.getElementById('pin-prompt-modal').classList.contains('hidden');
                    if (!isModalOpen) tryOpenAdminPanel();
                }
            });
        };

        function writeCMSLog(message) {
            const consoleEl = document.getElementById('cms-log-console');
            if (!consoleEl) return;
            const now = new Date();
            const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
            const logItem = document.createElement('div');
            logItem.className = 'text-slate-400 font-mono text-[10px]';
            logItem.innerHTML = `<span class="text-slate-500">[${timeStr}]</span> ${message}`;
            consoleEl.appendChild(logItem);
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }

        function clearCMSLogs() {
            document.getElementById('cms-log-console').innerHTML = '';
        }

        let confirmCallback = null;

        function showCustomNotification(title, message) {
            document.getElementById('custom-alert-title').innerText = title;
            document.getElementById('custom-alert-message').innerText = message;
            document.getElementById('custom-alert-overlay').style.display = 'flex';
        }

        function closeCustomAlert() {
            document.getElementById('custom-alert-overlay').style.display = 'none';
        }

        function askCustomConfirmation(title, message, onConfirm) {
            document.getElementById('custom-confirm-title').innerText = title;
            document.getElementById('custom-confirm-message').innerText = message;
            confirmCallback = onConfirm;
            document.getElementById('custom-confirm-overlay').style.display = 'flex';
        }

        document.getElementById('custom-confirm-cancel-btn').onclick = function() {
            document.getElementById('custom-confirm-overlay').style.display = 'none';
            confirmCallback = null;
        };

        document.getElementById('custom-confirm-ok-btn').onclick = function() {
            document.getElementById('custom-confirm-overlay').style.display = 'none';
            if (confirmCallback) confirmCallback();
            confirmCallback = null;
        };

        function renderPanoData() {
            applyBrandPositions();
            document.getElementById('display-school-name').innerText = appConfig.schoolName;
            document.getElementById('display-school-name').style.fontSize = (appConfig.schoolNameSize || 24) + 'px';
            document.getElementById('display-school-name').style.fontFamily = appConfig.schoolNameFont || defaultAppConfig.schoolNameFont;
            document.getElementById('display-brand-sub').innerText = appConfig.brandSubText || defaultAppConfig.brandSubText;
            document.getElementById('display-brand-sub').style.display = (appConfig.brandSubVisible === false) ? 'none' : '';

            const logoBox = document.getElementById('brand-logo-box');
            const logoImg = document.getElementById('brand-logo-img');
            const logoText = document.getElementById('brand-logo-text');
            const logoSize = (appConfig.logoSize || 54) + 'px';
            logoBox.style.width = logoSize;
            logoBox.style.height = logoSize;
            logoText.style.fontSize = Math.round((appConfig.logoSize || 54) * 0.48) + 'px';
            logoBox.style.transform = `translateX(${appConfig.logoOffsetX || 0}px)`;
            document.getElementById('brand-name-block').style.transform = `translateX(${appConfig.nameOffsetX || 0}px)`;
            if (appConfig.schoolLogo) {
                logoImg.src = appConfig.schoolLogo;
                logoImg.classList.remove('hidden');
                logoText.classList.add('hidden');
                logoBox.classList.add('has-image');
            } else {
                logoImg.classList.add('hidden');
                logoImg.src = '';
                logoText.classList.remove('hidden');
                logoText.innerText = appConfig.schoolName ? appConfig.schoolName.charAt(0) : 'M';
                logoBox.classList.remove('has-image');
            }
            cycleCleanClassWidget();
            cycleBestStudentWidget();
            cycleMediaSlides();
            renderActiveDuties();

            const annListContainer = document.getElementById('display-announcements-list');
            annListContainer.innerHTML = '';
            const anns = appConfig.announcements && appConfig.announcements.length > 0 ? appConfig.announcements : [{ text: 'Duyuru bulunmamaktadır.', color: '', bgColor: '', font: '', fontSize: 11, bold: false }];
            anns.slice(0, 4).forEach(ann => {
                const item = document.createElement('div');
                item.className = 'ann-item';
                const styleParts = [];
                if (ann.color) styleParts.push(`color:${ann.color}`);
                if (ann.font) styleParts.push(`font-family:${ann.font}`);
                if (ann.fontSize) styleParts.push(`font-size:${ann.fontSize}px`);
                if (ann.bold) styleParts.push(`font-weight:700`);
                if (ann.bgColor) styleParts.push(`background-color:${ann.bgColor}`, `padding:4px 6px`, `border-radius:6px`);
                item.setAttribute('style', styleParts.join(';'));
                item.innerHTML = `<i class="fa-solid fa-diamond"></i> <span>${escapeHtml(ann.text)}</span>`;
                annListContainer.appendChild(item);
            });

            const zilTableBody = document.getElementById('lesson-hours-table-body');
            zilTableBody.innerHTML = '';
            bellHours.forEach(bell => {
                const tr = document.createElement('tr');
                tr.setAttribute('id', `bell-row-${bell.id}`);
                tr.innerHTML = `<td>${bell.id}. Ders</td><td>${bell.start}</td><td>${bell.end}</td>`;
                zilTableBody.appendChild(tr);
            });

            cycleBirthdayWidget();
            cycleQuoteWidget();
            cycleSpecialDayWidget();
            renderActiveScheduleGroup();
        }

        function applyBrandPositions() {
            const logoPos = appConfig.logoPosition || 'left';
            const namePos = appConfig.namePosition || 'left';
            const logoBox = document.getElementById('brand-logo-box');
            const nameBlock = document.getElementById('brand-name-block');
            const zoneLogo = document.getElementById('brand-zone-' + logoPos);
            const zoneName = document.getElementById('brand-zone-' + namePos);
            if (zoneLogo && logoBox && logoBox.parentElement !== zoneLogo) zoneLogo.appendChild(logoBox);
            if (zoneName && nameBlock && nameBlock.parentElement !== zoneName) zoneName.appendChild(nameBlock);
        }

        let tempSchoolLogo = null;

        function handleLogoUpload(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            if (file.size > 2 * 1024 * 1024) {
                showCustomNotification("Dosya Çok Büyük", "Lütfen 2MB'tan küçük bir görsel dosyası seçin.");
                event.target.value = '';
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                tempSchoolLogo = e.target.result;
                const previewImg = document.getElementById('logo-preview-img');
                const previewText = document.getElementById('logo-preview-text');
                previewImg.src = tempSchoolLogo;
                previewImg.classList.remove('hidden');
                previewText.classList.add('hidden');
                writeCMSLog("Yeni okul logosu seçildi (kaydetmeyi unutmayın).");
            };
            reader.readAsDataURL(file);
        }

        function removeSchoolLogo() {
            tempSchoolLogo = "";
            const previewImg = document.getElementById('logo-preview-img');
            const previewText = document.getElementById('logo-preview-text');
            previewImg.classList.add('hidden');
            previewImg.src = '';
            previewText.classList.remove('hidden');
            document.getElementById('school-logo-input').value = '';
        }

        function handleLiveIdentityPreview() {
            const logoSize = document.getElementById('input-logo-size').value;
            const nameSize = document.getElementById('input-school-name-size').value;
            document.getElementById('logo-size-value').innerText = logoSize + 'px';
            document.getElementById('school-name-size-value').innerText = nameSize + 'px';
            const previewBox = document.getElementById('logo-preview-box');
            previewBox.style.width = logoSize + 'px';
            previewBox.style.height = logoSize + 'px';
            document.getElementById('logo-preview-text').style.fontSize = Math.round(logoSize * 0.48) + 'px';

            const logoOffset = document.getElementById('input-logo-offset').value;
            const nameOffset = document.getElementById('input-name-offset').value;
            document.getElementById('logo-offset-value').innerText = logoOffset + 'px';
            document.getElementById('name-offset-value').innerText = nameOffset + 'px';
        }

        function getTurkishDayName(dayIndex) {
            const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
            return days[dayIndex];
        }

        // Eski sabit haftalık nöbet alanları (weeklyDuties) ile yeni dinamik nöbet yeri id'leri
        // arasındaki eşleşme — sadece varsayılan (fabrika) nöbet yerleri için geçerlidir.
        // Kullanıcının sonradan eklediği yeni nöbet yerlerinin haftalık tabloda karşılığı yoktur.
        const DUTY_LEGACY_WEEKLY_MAP = { idareci: 'admin', kantin: 'canteen', bahce: 'garden', kat1: 'floor1', kat2: 'floor2' };

        // Hex rengi rgba() string'ine çevirir (aktif nöbetçi arka planı opaklık ayarı için)
        function hexToRgba(hex, alpha) {
            let h = (hex || '#00b4d8').replace('#', '');
            if (h.length === 3) h = h.split('').map(c => c + c).join('');
            const r = parseInt(h.substring(0, 2), 16) || 0;
            const g = parseInt(h.substring(2, 4), 16) || 0;
            const b = parseInt(h.substring(4, 6), 16) || 0;
            return `rgba(${r},${g},${b},${alpha})`;
        }

        // Kadroda fotoğrafı/ikonu olmayan nöbetçiler için nöbet yerinin kendi rengi/ikonuyla
        // oluşturulan varsayılan (fallback) avatar HTML'i.
        function buildFallbackAvatarHtml(pos) {
            return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${pos.color}22;"><i class="fa-solid ${pos.icon || 'fa-user-shield'}" style="color:${pos.color};font-size:20px;"></i></div>`;
        }

        // İsme göre kadrodan (teacherRoster) fotoğraf/ikon bulup avatar HTML'i üretir.
        // Kadroda kayıt yoksa veya fotoğraf/ikon seçilmemişse nöbet yerinin varsayılan ikonuna döner.
        function getRosterAvatarHtml(name, fallbackHtml) {
            const key = (name || '').trim();
            const entry = key && appConfig.teacherRoster ? appConfig.teacherRoster[key] : null;
            if (entry && entry.photo) {
                return `<img src="${entry.photo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`;
            }
            if (entry && entry.icon) {
                return `<span style="font-size:22px;line-height:1;">${entry.icon}</span>`;
            }
            return fallbackHtml;
        }

        // Tek bir nöbet kartının HTML'ini, güncel appConfig.dutyStyle ayarlarına göre üretir.
        // Hem canlı pano hem de yönetim panelindeki "Canlı Önizleme" tarafından kullanılır.
        function buildDutyCardHtml(pos, name) {
            const style = (appConfig.dutyStyle) || defaultAppConfig.dutyStyle;
            const activeBg = style.activeBg || defaultAppConfig.dutyStyle.activeBg;
            const shapeClass = 'duty-shape-' + (style.shape || 'rounded');
            const hasName = !!(name && name.trim());
            const highlight = activeBg.highlight || 'none';
            const stateClass = hasName ? `duty-active duty-highlight-${highlight}` : 'duty-empty';
            const opacity = (typeof activeBg.opacity === 'number' ? activeBg.opacity : 15) / 100;
            const boxStyle = hasName
                ? `background-color:${hexToRgba(activeBg.color, opacity)}; --duty-highlight-color:${activeBg.color}; border-color:${pos.color}55;`
                : `border-color:${pos.color}33;`;
            const nameStyle = style.nameColorMode === 'custom' ? `color:${style.nameColor || '#02040a'};` : '';
            const avatarHtml = getRosterAvatarHtml(name, buildFallbackAvatarHtml(pos));

            return `
                <div class="duty-card-box ${shapeClass} ${stateClass}" style="${boxStyle}">
                    <div class="duty-avatar-box ${shapeClass}" style="border-color:${pos.color};">${avatarHtml}</div>
                    <div class="duty-info-box">
                        <div class="duty-title" style="color:${pos.color};"><i class="fa-solid ${pos.icon || 'fa-user-shield'}"></i> ${escapeHtml(pos.label)}</div>
                        <div class="duty-name-pill ${shapeClass}" style="${nameStyle}">${escapeHtml(hasName ? name : 'Nöbet Yok')}</div>
                    </div>
                </div>`;
        }

        function renderActiveDuties() {
            const now = new Date();
            let dayName = getTurkishDayName(now.getDay());

            if (dayName === "Cumartesi" || dayName === "Pazar") {
                dayName = "Pazartesi";
            }

            const dayNameEl = document.getElementById('display-duty-day-name');
            if (dayNameEl) dayNameEl.innerText = dayName.toUpperCase();

            // Önce aylık nöbet tablosuna bak (daha öncelikli)
            let gunKayit = null;
            const ayAnahtar = nobetAyAnahtari ? nobetAyAnahtari(now.getFullYear(), now.getMonth()) : null;
            if (ayAnahtar && appConfig.aylikNobet && appConfig.aylikNobet[ayAnahtar]) {
                gunKayit = appConfig.aylikNobet[ayAnahtar][String(now.getDate())] || null;
            }
            const weeklyFallback = appConfig.weeklyDuties[dayName] || {};

            const grid = document.getElementById('duty-grid-container');
            if (!grid) return;
            const positions = appConfig.dutyPositions || [];

            grid.innerHTML = positions.map(pos => {
                let name = gunKayit ? (gunKayit[pos.id] || '') : '';
                if (!name) {
                    const legacyKey = DUTY_LEGACY_WEEKLY_MAP[pos.id];
                    if (legacyKey) name = weeklyFallback[legacyKey] || '';
                }
                return buildDutyCardHtml(pos, name);
            }).join('');

            // Gelişmiş görsel ayarları uygula
            if (appConfig.dutyAdvancedSettings) {
                applyDutyAdvancedStyleToGrid(grid, positions, appConfig.dutyAdvancedSettings, appConfig.dutyStyle);
                // Modül başlığını güncelle
                const adv = appConfig.dutyAdvancedSettings;
                if (adv.moduleTitle) {
                    const titleEl = document.getElementById('display-duty-title-text');
                    if (titleEl) titleEl.innerText = adv.moduleTitle;
                }
            }
        }

        /* =========================================
           NÖBETÇİ KADROSU (Fotoğraf / İkon) YÖNETİMİ
        ========================================= */
        const ROSTER_ICON_CHOICES = [
            { v: '👨‍🏫', l: 'Öğretmen (E)' },
            { v: '👩‍🏫', l: 'Öğretmen (K)' },
            { v: '🧑‍💼', l: 'İdareci' },
            { v: '👮‍♂️', l: 'Nöbetçi (E)' },
            { v: '👮‍♀️', l: 'Nöbetçi (K)' },
            { v: '🧑', l: 'Kişi' },
            { v: '😀', l: 'Gülümseme' }
        ];

        function escapeHtml(s) {
            return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        }

        // Sürükle-bırak sırasında hangi kadro kartının taşındığını tutar
        let rosterDragFromIndex = null;

        // appConfig.rosterOrder'ı gerçek teacherRoster kayıtlarıyla senkron eder:
        // silinmiş isimleri listeden çıkarır, henüz sırada olmayan (yeni eklenen) isimleri sona ekler.
        function getOrderedRosterNames() {
            if (!appConfig.teacherRoster) appConfig.teacherRoster = {};
            if (!Array.isArray(appConfig.rosterOrder)) appConfig.rosterOrder = [];
            const allNames = Object.keys(appConfig.teacherRoster);
            const allSet = new Set(allNames);

            // Sırada olup artık kadroda olmayanları temizle
            appConfig.rosterOrder = appConfig.rosterOrder.filter(n => allSet.has(n));

            // Sırada henüz yer almayan (yeni eklenen) isimleri alfabetik olarak sona ekle
            const orderedSet = new Set(appConfig.rosterOrder);
            const missing = allNames.filter(n => !orderedSet.has(n)).sort((a, b) => a.localeCompare(b, 'tr'));
            appConfig.rosterOrder.push(...missing);

            return appConfig.rosterOrder.slice();
        }

        function renderRosterList() {
            const wrap = document.getElementById('roster-list');
            if (!wrap) return;
            if (!appConfig.teacherRoster) appConfig.teacherRoster = {};
            const names = getOrderedRosterNames();

            if (names.length === 0) {
                wrap.innerHTML = `<div class="text-slate-500 text-xs italic p-3 col-span-full">Henüz kadroya öğretmen eklenmedi. Yukarıdan isim girip "Ekle" deyin ya da "Çizelgeden Otomatik Doldur" düğmesini kullanın.</div>`;
                return;
            }

            wrap.innerHTML = names.map((name, idx) => {
                const entry = appConfig.teacherRoster[name] || {};
                const thumb = entry.photo
                    ? `<img src="${entry.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
                    : (entry.icon ? `<span style="font-size:20px;">${entry.icon}</span>` : `<i class="fa-solid fa-user text-slate-500"></i>`);
                const iconOptions = ROSTER_ICON_CHOICES.map(ic =>
                    `<option value="${ic.v}" ${entry.icon === ic.v ? 'selected' : ''}>${ic.v} ${ic.l}</option>`
                ).join('');

                return `
                <div class="roster-row bg-slate-900 border border-slate-800 rounded-lg p-2 flex items-center gap-2" draggable="true" data-index="${idx}" data-name="${escapeHtml(name)}">
                    <span class="roster-drag-handle" title="Sürükle"><i class="fa-solid fa-grip-vertical"></i></span>
                    <div class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">${thumb}</div>
                    <div class="flex-1 min-w-0">
                        <div class="text-white text-xs font-bold truncate mb-1">${escapeHtml(name)}</div>
                        <div class="flex items-center gap-1">
                            <label class="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 rounded text-[10px] cursor-pointer" title="Fotoğraf yükle">
                                <i class="fa-solid fa-upload"></i>
                                <input type="file" accept="image/*" class="hidden roster-photo-input">
                            </label>
                            <select class="roster-icon-select bg-slate-900 border border-slate-800 rounded text-[10px] text-white p-1" title="İkon seç">
                                <option value="">(ikon yok)</option>
                                ${iconOptions}
                            </select>
                            <button class="roster-remove-btn px-2 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded text-[10px]" title="Kadrodan çıkar"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>`;
            }).join('');

            wrap.querySelectorAll('.roster-row').forEach(row => {
                const name = row.dataset.name;
                const idx = parseInt(row.dataset.index, 10);
                row.querySelector('.roster-photo-input').addEventListener('change', (e) => handleRosterPhotoUpload(name, e));
                row.querySelector('.roster-icon-select').addEventListener('change', (e) => {
                    appConfig.teacherRoster[name].icon = e.target.value;
                    if (e.target.value) appConfig.teacherRoster[name].photo = ''; // ikon seçilirse fotoğrafla karışmasın
                    renderRosterList();
                    writeCMSLog(`"${name}" için ikon güncellendi (kaydetmeyi unutmayın).`);
                });
                row.querySelector('.roster-remove-btn').addEventListener('click', () => {
                    delete appConfig.teacherRoster[name];
                    appConfig.rosterOrder = (appConfig.rosterOrder || []).filter(n => n !== name);
                    renderRosterList();
                    writeCMSLog(`"${name}" kadrodan çıkarıldı (kaydetmeyi unutmayın).`);
                });

                // Sürükle-bırak ile sıralama
                row.addEventListener('dragstart', () => { rosterDragFromIndex = idx; row.classList.add('dragging'); });
                row.addEventListener('dragend', () => { row.classList.remove('dragging'); wrap.querySelectorAll('.roster-row').forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom')); });
                row.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    const rect = row.getBoundingClientRect();
                    const isTop = (e.clientY - rect.top) < rect.height / 2;
                    row.classList.toggle('drag-over-top', isTop);
                    row.classList.toggle('drag-over-bottom', !isTop);
                });
                row.addEventListener('dragleave', () => row.classList.remove('drag-over-top', 'drag-over-bottom'));
                row.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const rect = row.getBoundingClientRect();
                    const isTop = (e.clientY - rect.top) < rect.height / 2;
                    let targetIdx = idx + (isTop ? 0 : 1);
                    reorderRoster(rosterDragFromIndex, targetIdx);
                });
            });
        }

        // Kadro isim sırasını taşı ve yeniden çiz (appConfig.rosterOrder üzerinde çalışır)
        function reorderRoster(fromIdx, toIdx) {
            if (fromIdx === null || fromIdx === undefined || fromIdx === toIdx) { renderRosterList(); return; }
            const order = getOrderedRosterNames();
            const [item] = order.splice(fromIdx, 1);
            let insertAt = toIdx > fromIdx ? toIdx - 1 : toIdx;
            insertAt = Math.max(0, Math.min(insertAt, order.length));
            order.splice(insertAt, 0, item);
            appConfig.rosterOrder = order;
            rosterDragFromIndex = null;
            renderRosterList();
            writeCMSLog(`Kadro sırası güncellendi (kaydetmeyi unutmayın).`);
        }

        function addRosterTeacher() {
            const input = document.getElementById('roster-new-name');
            const name = input.value.trim();
            if (!name) return;
            if (!appConfig.teacherRoster) appConfig.teacherRoster = {};
            if (!appConfig.teacherRoster[name]) appConfig.teacherRoster[name] = { photo: '', icon: '' };
            input.value = '';
            renderRosterList();
            writeCMSLog(`"${name}" kadroya eklendi (kaydetmeyi unutmayın).`);
        }

        function handleRosterPhotoUpload(name, event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            if (file.size > 2 * 1024 * 1024) {
                showCustomNotification("Dosya Çok Büyük", "Lütfen 2MB'tan küçük bir görsel dosyası seçin.");
                event.target.value = '';
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                if (!appConfig.teacherRoster[name]) appConfig.teacherRoster[name] = { photo: '', icon: '' };
                appConfig.teacherRoster[name].photo = e.target.result;
                appConfig.teacherRoster[name].icon = ''; // fotoğraf yüklenince ikon önceliğini bırak
                renderRosterList();
                writeCMSLog(`"${name}" için fotoğraf seçildi (kaydetmeyi unutmayın).`);
            };
            reader.readAsDataURL(file);
        }

        // Haftalık ve aylık nöbet çizelgelerinde geçen tüm isimleri tarar,
        // kadroda henüz olmayanları boş (fotoğrafsız/ikonsuz) olarak ekler.
        function autoFillRosterFromDuties() {
            if (!appConfig.teacherRoster) appConfig.teacherRoster = {};
            const found = new Set();

            Object.values(appConfig.weeklyDuties || {}).forEach(d => {
                ['admin', 'canteen', 'garden', 'floor1', 'floor2'].forEach(k => {
                    if (d[k] && d[k].trim()) found.add(d[k].trim());
                });
            });

            const dutyIds = (appConfig.dutyPositions || []).map(p => p.id);
            Object.values(appConfig.aylikNobet || {}).forEach(ay => {
                Object.values(ay || {}).forEach(gun => {
                    dutyIds.forEach(k => {
                        if (gun[k] && gun[k].trim()) found.add(gun[k].trim());
                    });
                });
            });

            let added = 0;
            found.forEach(name => {
                if (!appConfig.teacherRoster[name]) {
                    appConfig.teacherRoster[name] = { photo: '', icon: '' };
                    added++;
                }
            });

            renderRosterList();
            showCustomNotification("Tamamlandı", `${added} yeni öğretmen kadroya eklendi. Fotoğraf/ikon seçip kaydedin.`);
            writeCMSLog(`Çizelgeden otomatik doldurma: ${added} yeni kayıt eklendi.`);
        }

        /* =========================================================================
           NÖBET YERLERİ YÖNETİMİ (Dinamik Ekle / Sil / Sırala) VE
           NÖBET KARTI GÖRSEL ÖZELLEŞTİRME (Şablon / Şekil / Renk / Arka Plan)
           ========================================================================= */

        // Nöbet yeri ikonu seçimi için kullanılabilir FontAwesome ikon listesi
        const DUTY_ICON_CHOICES = [
            { v: 'fa-user-tie', l: 'İdareci' },
            { v: 'fa-cookie-bite', l: 'Kantin' },
            { v: 'fa-tree', l: 'Bahçe' },
            { v: 'fa-door-open', l: 'Zemin Kat / Giriş' },
            { v: 'fa-arrow-up-1-9', l: '1. Kat' },
            { v: 'fa-stairs', l: 'Merdiven / Kat' },
            { v: 'fa-user-shield', l: 'Genel Nöbetçi' },
            { v: 'fa-book-open', l: 'Kütüphane' },
            { v: 'fa-flask', l: 'Laboratuvar' },
            { v: 'fa-dumbbell', l: 'Spor Salonu' },
            { v: 'fa-bus', l: 'Servis / Otopark' },
            { v: 'fa-toilet', l: 'Tuvalet / Koridor' },
            { v: 'fa-utensils', l: 'Yemekhane' },
            { v: 'fa-gate', l: 'Bahçe Kapısı' },
            { v: 'fa-shield-halved', l: 'Güvenlik' }
        ];

        // En az 4 hazır görsel şablon: her biri kart şekli + isim rengi modu +
        // aktif nöbetçi arka plan rengi/opaklığı/vurgu şeklini bir arada uygular.
        const DUTY_STYLE_TEMPLATES = {
            classic: {
                label: 'Klasik Pano',
                desc: 'Orijinal hap-biçim isim etiketi, ince sol çubuk vurgu',
                style: { template: 'classic', shape: 'rounded', nameColorMode: 'auto', nameColor: '#02040a',
                    activeBg: { color: '#00b4d8', opacity: 15, highlight: 'left-bar' } }
            },
            cyberCard: {
                label: 'Cyber Kart',
                desc: 'Dikey kart tasarımı, neon parıltılı vurgu',
                style: { template: 'cyberCard', shape: 'card', nameColorMode: 'custom', nameColor: '#e2fbff',
                    activeBg: { color: '#00e5ff', opacity: 22, highlight: 'glow' } }
            },
            softOval: {
                label: 'Yumuşak Oval',
                desc: 'Oval/hap şekilli kartlar, alt çizgi vurgusu',
                style: { template: 'softOval', shape: 'oval', nameColorMode: 'auto', nameColor: '#02040a',
                    activeBg: { color: '#38b000', opacity: 18, highlight: 'underline' } }
            },
            minimalSquare: {
                label: 'Minimal Köşeli',
                desc: 'Keskin köşeli sade kartlar, kenarlık vurgusu',
                style: { template: 'minimalSquare', shape: 'square', nameColorMode: 'custom', nameColor: '#ffffff',
                    activeBg: { color: '#9d4edd', opacity: 20, highlight: 'border' } }
            },
            highContrast: {
                label: 'Yüksek Kontrast',
                desc: 'Belirgin sarı vurgu, vurgusuz sade kart zemini',
                style: { template: 'highContrast', shape: 'rounded', nameColorMode: 'custom', nameColor: '#02040a',
                    activeBg: { color: '#ffb703', opacity: 30, highlight: 'left-bar' } }
            }
        };

        let tempDutyPositions = [];
        let dutyDragFromIndex = null;

        function populateDutyIconSelect(selectEl, selectedIcon) {
            if (!selectEl) return;
            // Hem temel ikonları hem özel ikonları dahil et
            const all = (typeof getDutyIconList === 'function') ? getDutyIconList() : DUTY_ICON_CHOICES;
            selectEl.innerHTML = all.map(ic =>
                `<option value="${ic.v}" ${ic.v === selectedIcon ? 'selected' : ''}>${ic.l}</option>`
            ).join('');
        }

        function renderDutyPositionsAdmin() {
            const wrap = document.getElementById('dutypos-list');
            if (!wrap) return;
            wrap.innerHTML = '';

            tempDutyPositions.forEach((pos, idx) => {
                const row = document.createElement('div');
                row.className = 'dutypos-row';
                row.draggable = true;
                row.dataset.index = idx;
                row.innerHTML = `
                    <span class="dutypos-drag-handle" title="Sürükle"><i class="fa-solid fa-grip-vertical"></i></span>
                    <input type="text" class="dutypos-label-input flex-1 bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white" value="${escapeHtml(pos.label)}" placeholder="Nöbet yeri adı">
                    <input type="color" class="dutypos-color-input w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer" value="${pos.color}" title="Renk">
                    <select class="dutypos-icon-select bg-slate-900 border border-slate-800 rounded text-[10px] text-white p-1.5"></select>
                    <button class="dutypos-up-btn px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]" title="Yukarı taşı" ${idx === 0 ? 'disabled style="opacity:.3;cursor:not-allowed;"' : ''}><i class="fa-solid fa-arrow-up"></i></button>
                    <button class="dutypos-down-btn px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]" title="Aşağı taşı" ${idx === tempDutyPositions.length - 1 ? 'disabled style="opacity:.3;cursor:not-allowed;"' : ''}><i class="fa-solid fa-arrow-down"></i></button>
                    <button class="dutypos-remove-btn px-2 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded text-[10px]" title="Sil"><i class="fa-solid fa-trash-can"></i></button>
                `;
                wrap.appendChild(row);

                populateDutyIconSelect(row.querySelector('.dutypos-icon-select'), pos.icon);

                row.querySelector('.dutypos-label-input').addEventListener('input', (e) => {
                    tempDutyPositions[idx].label = e.target.value;
                    renderDutyLivePreview();
                });
                row.querySelector('.dutypos-color-input').addEventListener('input', (e) => {
                    tempDutyPositions[idx].color = e.target.value;
                    renderDutyLivePreview();
                });
                row.querySelector('.dutypos-icon-select').addEventListener('change', (e) => {
                    tempDutyPositions[idx].icon = e.target.value;
                    renderDutyLivePreview();
                });
                row.querySelector('.dutypos-up-btn').addEventListener('click', () => moveDutyPosition(idx, -1));
                row.querySelector('.dutypos-down-btn').addEventListener('click', () => moveDutyPosition(idx, 1));
                row.querySelector('.dutypos-remove-btn').addEventListener('click', () => removeDutyPosition(idx));

                // Sürükle-bırak ile sıralama
                row.addEventListener('dragstart', () => { dutyDragFromIndex = idx; row.classList.add('dragging'); });
                row.addEventListener('dragend', () => { row.classList.remove('dragging'); wrap.querySelectorAll('.dutypos-row').forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom')); });
                row.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    const rect = row.getBoundingClientRect();
                    const isTop = (e.clientY - rect.top) < rect.height / 2;
                    row.classList.toggle('drag-over-top', isTop);
                    row.classList.toggle('drag-over-bottom', !isTop);
                });
                row.addEventListener('dragleave', () => row.classList.remove('drag-over-top', 'drag-over-bottom'));
                row.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const rect = row.getBoundingClientRect();
                    const isTop = (e.clientY - rect.top) < rect.height / 2;
                    let targetIdx = idx + (isTop ? 0 : 1);
                    reorderDutyPositions(dutyDragFromIndex, targetIdx);
                });
            });

            renderDutyLivePreview();
        }

        function addDutyPosition() {
            const input = document.getElementById('dutypos-new-label');
            const label = input.value.trim();
            if (!label) { showCustomNotification("Uyarı", "Lütfen yeni nöbet yeri için bir ad girin."); return; }
            const color = document.getElementById('dutypos-new-color').value || '#00b4d8';
            const icon = document.getElementById('dutypos-new-icon').value || 'fa-user-shield';
            const id = 'yer_' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
            tempDutyPositions.push({ id, label, icon, color });
            input.value = '';
            renderDutyPositionsAdmin();
            writeCMSLog(`Yeni nöbet yeri eklendi: ${label}`);
        }

        function removeDutyPosition(idx) {
            const pos = tempDutyPositions[idx];
            if (!pos) return;
            askCustomConfirmation(
                'Nöbet Yerini Sil',
                `"${pos.label}" nöbet yerini silmek istediğinize emin misiniz? Bu nöbet yerine ait geçmiş aylık kayıtlar çizelgede saklı kalır ancak artık gösterilmez.`,
                function() {
                    tempDutyPositions.splice(idx, 1);
                    renderDutyPositionsAdmin();
                    writeCMSLog(`Nöbet yeri silindi: ${pos.label}`);
                }
            );
        }

        function moveDutyPosition(idx, dir) {
            const newIdx = idx + dir;
            if (newIdx < 0 || newIdx >= tempDutyPositions.length) return;
            const [item] = tempDutyPositions.splice(idx, 1);
            tempDutyPositions.splice(newIdx, 0, item);
            renderDutyPositionsAdmin();
        }

        function reorderDutyPositions(fromIdx, toIdx) {
            if (fromIdx === null || fromIdx === undefined || fromIdx === toIdx) { renderDutyPositionsAdmin(); return; }
            const [item] = tempDutyPositions.splice(fromIdx, 1);
            let insertAt = toIdx > fromIdx ? toIdx - 1 : toIdx;
            insertAt = Math.max(0, Math.min(insertAt, tempDutyPositions.length));
            tempDutyPositions.splice(insertAt, 0, item);
            dutyDragFromIndex = null;
            renderDutyPositionsAdmin();
        }

        let tempDutyStyle = null;

        function renderDutyTemplateList() {
            const wrap = document.getElementById('dutypos-template-list');
            if (!wrap) return;
            wrap.innerHTML = Object.entries(DUTY_STYLE_TEMPLATES).map(([key, tpl]) => `
                <div class="theme-preset-card bg-slate-900 p-3 border rounded-lg cursor-pointer hover:border-cyan-500 transition ${tempDutyStyle && tempDutyStyle.template === key ? 'border-cyan-500' : 'border-slate-800'}" data-tpl="${key}">
                    <h4 class="text-white font-bold text-xs mb-1">${tpl.label}</h4>
                    <p class="text-[10px] text-slate-500">${tpl.desc}</p>
                </div>
            `).join('');
            wrap.querySelectorAll('[data-tpl]').forEach(card => {
                card.addEventListener('click', () => applyDutyTemplate(card.dataset.tpl));
            });
        }

        function applyDutyTemplate(key) {
            const tpl = DUTY_STYLE_TEMPLATES[key];
            if (!tpl) return;
            tempDutyStyle = JSON.parse(JSON.stringify(tpl.style));
            loadDutyStyleIntoInputs();
            renderDutyTemplateList();
            renderDutyLivePreview();
        }

        function loadDutyStyleIntoInputs() {
            const s = tempDutyStyle || defaultAppConfig.dutyStyle;
            document.getElementById('dutystyle-shape').value = s.shape || 'rounded';
            document.getElementById('dutystyle-namecolor-mode').value = s.nameColorMode || 'auto';
            document.getElementById('dutystyle-namecolor').value = s.nameColor || '#02040a';
            document.getElementById('dutystyle-bgcolor').value = (s.activeBg && s.activeBg.color) || '#00b4d8';
            const opacityVal = (s.activeBg && typeof s.activeBg.opacity === 'number') ? s.activeBg.opacity : 15;
            document.getElementById('dutystyle-opacity').value = opacityVal;
            document.getElementById('dutystyle-opacity-val').innerText = opacityVal;
            document.getElementById('dutystyle-highlight').value = (s.activeBg && s.activeBg.highlight) || 'none';
        }

        function applyDutyStyleFromInputs() {
            tempDutyStyle = {
                template: (tempDutyStyle && tempDutyStyle.template) || 'custom',
                shape: document.getElementById('dutystyle-shape').value,
                nameColorMode: document.getElementById('dutystyle-namecolor-mode').value,
                nameColor: document.getElementById('dutystyle-namecolor').value,
                activeBg: {
                    color: document.getElementById('dutystyle-bgcolor').value,
                    opacity: parseInt(document.getElementById('dutystyle-opacity').value, 10) || 0,
                    highlight: document.getElementById('dutystyle-highlight').value
                }
            };
            renderDutyLivePreview();
        }

        // Canlı önizleme: yönetim panelinde yapılan değişiklikleri, panoyu etkilemeden
        // örnek isimlerle anında gösterir.
        function renderDutyLivePreview() {
            const grid = document.getElementById('dutypos-preview-grid');
            if (!grid) return;
            const savedStyle = appConfig.dutyStyle;
            const savedPositions = appConfig.dutyPositions;
            // Geçici olarak önizleme verisiyle değiştirip aynı kart üretim fonksiyonunu kullan
            appConfig.dutyStyle = tempDutyStyle || appConfig.dutyStyle;
            const sampleNames = ['Ayşe Yılmaz', 'Mehmet Kaya', '', 'Elif Demir'];
            grid.innerHTML = tempDutyPositions.map((pos, i) => buildDutyCardHtml(pos, sampleNames[i % sampleNames.length])).join('');
            appConfig.dutyStyle = savedStyle;
            appConfig.dutyPositions = savedPositions;
        }

        /* =========================================================================
           NÖBET MODÜLÜ KAPSAMLI AYARLAR (Yeni "Nöbet Modülü Ayarları" Sekmesi)
           appConfig.dutyAdvancedSettings altında saklanır.
           ========================================================================= */

        // Varsayılan gelişmiş ayarlar
        const DEFAULT_DUTY_ADVANCED = {
            fontFamily: 'inherit',
            gap: 10,
            minWidth: 140,
            padding: 6,
            avatarSize: 44,
            cardBgColor: '#09101f',
            cardOpacity: 50,
            avatarBgColor: '#111b2d',
            titleColor: '#00b4d8',
            pillBgColor: '#e2e8f0',
            pillTextColor: '#02040a',
            pillOpacity: 100,
            pillBorderColor: '#00b4d8',
            pillBorderWidth: 0,
            borderWidth: 1,
            borderColor: '#111b2d',
            borderStyle: 'solid',
            borderRadius: 6,
            shadowType: 'none',
            shadowColor: '#00b4d8',
            bgType: 'solid',
            bgColor2: '#0e1726',
            animation: 'none',
            animDur: 5,
            hoverEffect: 'none',
            transition: '0.4s',
            moduleTitle: 'BUGÜN GÖREVLİ NÖBETÇİ ÖĞRETMENLER',
            customIcons: [] // { v, l } ek ikonlar
        };

        // appConfig.dutyAdvancedSettings'i varsayılanlarla birleştir
        function getDutyAdvanced() {
            return Object.assign({}, DEFAULT_DUTY_ADVANCED, appConfig.dutyAdvancedSettings || {});
        }

        // Gelişmiş nöbet ayarlarını forma yükle
        function loadDutyAdvancedSettingsIntoForm() {
            const s = getDutyAdvanced();
            const set = (id, val) => { const el = document.getElementById(id); if (el) { el.value = val; } };
            const setText = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };

            set('ds-module-title', s.moduleTitle);
            set('ds-font-family', s.fontFamily);
            set('ds-gap', s.gap);            setText('ds-gap-val', s.gap + 'px');
            set('ds-minw', s.minWidth);      setText('ds-minw-val', s.minWidth + 'px');
            set('ds-padding', s.padding);    setText('ds-padding-val', s.padding + 'px ' + (s.padding * 2) + 'px');
            set('ds-avatar', s.avatarSize);  setText('ds-avatar-val', s.avatarSize + 'px');
            set('ds-card-bg-color', s.cardBgColor);
            set('ds-card-opacity', s.cardOpacity); setText('ds-card-opacity-val', s.cardOpacity + '%');
            set('ds-avatar-bg-color', s.avatarBgColor);
            set('ds-title-color', s.titleColor);
            set('ds-pill-bg-color', s.pillBgColor);
            set('ds-pill-text-color', s.pillTextColor);
            set('ds-pill-opacity', s.pillOpacity); setText('ds-pill-opacity-val', s.pillOpacity + '%');
            set('ds-pill-border-color', s.pillBorderColor);
            set('ds-pill-border-width', s.pillBorderWidth); setText('ds-pill-border-val', s.pillBorderWidth + 'px');
            set('ds-border-width', s.borderWidth); setText('ds-border-val', s.borderWidth + 'px');
            set('ds-border-color', s.borderColor);
            set('ds-border-style', s.borderStyle);
            set('ds-border-radius', s.borderRadius); setText('ds-radius-val', s.borderRadius + 'px');
            set('ds-shadow-type', s.shadowType);
            set('ds-shadow-color', s.shadowColor);
            set('ds-bg-type', s.bgType);
            set('ds-bg-color2', s.bgColor2);
            set('ds-animation', s.animation);
            set('ds-anim-dur', s.animDur); setText('ds-anim-dur-val', (s.animDur / 10).toFixed(1) + 's');
            set('ds-hover-effect', s.hoverEffect);
            set('ds-transition', s.transition);

            renderDutyIconList();
            dutySettingsLivePreview();
        }

        // Formdaki değerleri toplayıp geri döndür
        function collectDutyAdvancedFromForm() {
            const get = (id) => { const el = document.getElementById(id); return el ? el.value : null; };
            const getNum = (id) => parseInt(get(id), 10) || 0;
            const s = getDutyAdvanced();
            return {
                ...s,
                moduleTitle: get('ds-module-title') || DEFAULT_DUTY_ADVANCED.moduleTitle,
                fontFamily: get('ds-font-family'),
                gap: getNum('ds-gap'),
                minWidth: getNum('ds-minw'),
                padding: getNum('ds-padding'),
                avatarSize: getNum('ds-avatar'),
                cardBgColor: get('ds-card-bg-color'),
                cardOpacity: getNum('ds-card-opacity'),
                avatarBgColor: get('ds-avatar-bg-color'),
                titleColor: get('ds-title-color'),
                pillBgColor: get('ds-pill-bg-color'),
                pillTextColor: get('ds-pill-text-color'),
                pillOpacity: getNum('ds-pill-opacity'),
                pillBorderColor: get('ds-pill-border-color'),
                pillBorderWidth: getNum('ds-pill-border-width'),
                borderWidth: getNum('ds-border-width'),
                borderColor: get('ds-border-color'),
                borderStyle: get('ds-border-style'),
                borderRadius: getNum('ds-border-radius'),
                shadowType: get('ds-shadow-type'),
                shadowColor: get('ds-shadow-color'),
                bgType: get('ds-bg-type'),
                bgColor2: get('ds-bg-color2'),
                animation: get('ds-animation'),
                animDur: getNum('ds-anim-dur'),
                hoverEffect: get('ds-hover-effect'),
                transition: get('ds-transition'),
                customIcons: s.customIcons || []
            };
        }

        // Gelişmiş ayarları pano duty kartlarına uygula (CSS değişkenleri + sınıflar + inline stiller)
        function applyDutyAdvancedStyleToGrid(gridEl, positions, advSettings, dutyStyle) {
            if (!gridEl) return;
            const s = advSettings || getDutyAdvanced();
            const ds = dutyStyle || appConfig.dutyStyle || defaultAppConfig.dutyStyle;
            const animDurSec = (s.animDur / 10).toFixed(1) + 's';

            // Grid layout
            gridEl.style.setProperty('gap', s.gap + 'px');
            gridEl.style.setProperty('grid-template-columns', `repeat(auto-fit, minmax(${s.minWidth}px, 1fr))`);
            gridEl.style.setProperty('font-family', s.fontFamily);

            // CSS custom property for animation duration
            gridEl.style.setProperty('--duty-anim-dur', animDurSec);
            gridEl.style.setProperty('--duty-transition', s.transition);

            // Apply each card
            const cards = gridEl.querySelectorAll('.duty-card-box');
            cards.forEach((card, i) => {
                // Background
                let bg = '';
                const bgAlpha = s.cardOpacity / 100;
                const c1 = hexToRgba(s.cardBgColor, bgAlpha);
                const c2 = hexToRgba(s.bgColor2, bgAlpha);
                if (s.bgType === 'solid') {
                    bg = c1;
                    card.style.backgroundImage = 'none';
                    card.style.backgroundColor = c1;
                } else if (s.bgType === 'gradient-lr') {
                    card.style.backgroundImage = `linear-gradient(to right, ${c1}, ${c2})`;
                    card.style.backgroundColor = '';
                } else if (s.bgType === 'gradient-tb') {
                    card.style.backgroundImage = `linear-gradient(to bottom, ${c1}, ${c2})`;
                    card.style.backgroundColor = '';
                } else if (s.bgType === 'gradient-diag') {
                    card.style.backgroundImage = `linear-gradient(135deg, ${c1}, ${c2})`;
                    card.style.backgroundColor = '';
                } else {
                    card.style.backgroundColor = c1;
                    card.style.backgroundImage = 'none';
                }

                // Patterns via class
                card.classList.remove('duty-bg-pattern-dots','duty-bg-pattern-lines','duty-bg-pattern-grid');
                if (s.bgType === 'pattern-dots') card.classList.add('duty-bg-pattern-dots');
                if (s.bgType === 'pattern-lines') card.classList.add('duty-bg-pattern-lines');
                if (s.bgType === 'pattern-grid') card.classList.add('duty-bg-pattern-grid');

                // Border
                card.style.borderWidth = s.borderWidth + 'px';
                card.style.borderColor = s.borderColor;
                card.style.borderStyle = s.borderStyle;
                card.style.borderRadius = s.borderRadius + 'px';

                // Shadow
                let shadow = '';
                const sc = s.shadowColor || '#00b4d8';
                if (s.shadowType === 'sm')   shadow = `0 2px 6px rgba(0,0,0,0.3)`;
                if (s.shadowType === 'md')   shadow = `0 4px 16px rgba(0,0,0,0.4)`;
                if (s.shadowType === 'lg')   shadow = `0 8px 32px rgba(0,0,0,0.5)`;
                if (s.shadowType === 'neon') shadow = `0 0 14px 2px ${hexToRgba(sc, 0.55)}`;
                card.style.boxShadow = card.style.boxShadow || shadow; // don't overwrite glow highlight
                if (!card.classList.contains('duty-highlight-glow') && !card.classList.contains('duty-highlight-border')) {
                    card.style.boxShadow = shadow;
                }

                // Padding
                card.style.padding = s.padding + 'px ' + (s.padding * 2) + 'px';

                // Hover
                card.classList.remove('duty-hover-lift','duty-hover-glow','duty-hover-scale');
                if (s.hoverEffect === 'lift')  card.classList.add('duty-hover-lift');
                if (s.hoverEffect === 'glow')  card.classList.add('duty-hover-glow');
                if (s.hoverEffect === 'scale') card.classList.add('duty-hover-scale');

                // Animation (staggered by index)
                card.classList.remove('duty-anim-fade-in','duty-anim-slide-up','duty-anim-zoom-in','duty-anim-pulse-glow','duty-anim-shimmer');
                if (s.animation !== 'none') {
                    card.classList.add('duty-anim-' + s.animation.replace('-','').replace(' ','-').replace(/-/g, '-'));
                    card.style.animationDelay = (i * 0.08).toFixed(2) + 's';
                }

                // Transition
                card.style.transition = `transform ${s.transition}, box-shadow ${s.transition}`;

                // Avatar
                const avatar = card.querySelector('.duty-avatar-box');
                if (avatar) {
                    avatar.style.width = s.avatarSize + 'px';
                    avatar.style.height = s.avatarSize + 'px';
                    avatar.style.background = s.avatarBgColor;
                }

                // Title
                const titleEl = card.querySelector('.duty-title');
                if (titleEl) {
                    titleEl.style.color = s.titleColor;
                    titleEl.style.fontFamily = s.fontFamily;
                }

                // Name pill — renk, şeffaflık (opaklık), çerçeve rengi ve şekil
                // (şekil zaten shapeClass ile duty-shape-* sınıfı olarak uygulanıyor)
                const pill = card.querySelector('.duty-name-pill');
                if (pill) {
                    const pillAlpha = (typeof s.pillOpacity === 'number' ? s.pillOpacity : 100) / 100;
                    pill.style.background = hexToRgba(s.pillBgColor, pillAlpha);
                    pill.style.color = s.pillTextColor;
                    pill.style.fontFamily = s.fontFamily;
                    const pillBorderW = (typeof s.pillBorderWidth === 'number' ? s.pillBorderWidth : 0);
                    pill.style.borderWidth = pillBorderW + 'px';
                    pill.style.borderStyle = pillBorderW > 0 ? 'solid' : 'none';
                    pill.style.borderColor = s.pillBorderColor || 'transparent';
                }
            });
        }

        // Canlı önizleme (Nöbet Ayarları sekmesi)
        function dutySettingsLivePreview() {
            const grid = document.getElementById('ds-live-preview-grid');
            if (!grid) return;
            const s = collectDutyAdvancedFromForm();
            const savedStyle = appConfig.dutyStyle;
            const savedPositions = appConfig.dutyPositions;

            appConfig.dutyStyle = tempDutyStyle || appConfig.dutyStyle;
            const sampleNames = ['Ayşe Yılmaz', 'Mehmet Kaya', '', 'Elif Demir'];
            const previewPositions = (tempDutyPositions.length ? tempDutyPositions : appConfig.dutyPositions || []).slice(0, 4);
            grid.innerHTML = previewPositions.map((pos, i) => buildDutyCardHtml(pos, sampleNames[i % sampleNames.length])).join('');
            appConfig.dutyStyle = savedStyle;
            appConfig.dutyPositions = savedPositions;

            // Apply advanced styles
            applyDutyAdvancedStyleToGrid(grid, previewPositions, s, tempDutyStyle || appConfig.dutyStyle);
        }

        // Kaydet & Uygula
        function dutySettingsSave() {
            appConfig.dutyAdvancedSettings = collectDutyAdvancedFromForm();
            // Update module title in moduleSettings if present
            const moduleTitle = appConfig.dutyAdvancedSettings.moduleTitle;
            if (appConfig.moduleSettings && appConfig.moduleSettings.duty) {
                appConfig.moduleSettings.duty.title = moduleTitle;
            }
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
            // Apply to live pano
            const liveGrid = document.getElementById('duty-grid-container');
            if (liveGrid) applyDutyAdvancedStyleToGrid(liveGrid, appConfig.dutyPositions, appConfig.dutyAdvancedSettings, appConfig.dutyStyle);
            const titleEl = document.getElementById('display-duty-title-text');
            if (titleEl) titleEl.innerText = moduleTitle;
            showCustomNotification('Başarılı', 'Nöbet modülü görsel ayarları kaydedildi ve uygulandı.');
            writeCMSLog('Nöbet Modülü Ayarları kaydedildi.');
        }

        // Sıfırla
        function dutySettingsReset() {
            appConfig.dutyAdvancedSettings = Object.assign({}, DEFAULT_DUTY_ADVANCED);
            loadDutyAdvancedSettingsIntoForm();
            writeCMSLog('Nöbet Modülü Ayarları varsayılana sıfırlandı.');
        }

        /* --- Hazır İkon Listesi Yönetimi --- */
        function getDutyIconList() {
            const base = JSON.parse(JSON.stringify(DUTY_ICON_CHOICES));
            const custom = (getDutyAdvanced().customIcons || []);
            return base.concat(custom);
        }

        function renderDutyIconList() {
            const wrap = document.getElementById('ds-icon-list');
            if (!wrap) return;
            const all = getDutyIconList();
            const customIcons = getDutyAdvanced().customIcons || [];
            wrap.innerHTML = all.map((ic, idx) => {
                const isCustom = idx >= DUTY_ICON_CHOICES.length;
                return `<div class="ds-icon-row">
                    <span class="ds-icon-preview"><i class="fa-solid ${ic.v}"></i></span>
                    <span class="ds-icon-class text-[9px] font-mono text-slate-500">.${ic.v}</span>
                    <span class="ds-icon-label">${ic.l}</span>
                    ${isCustom ? `<button class="ds-icon-remove" onclick="removeCustomDutyIcon(${idx - DUTY_ICON_CHOICES.length})" title="Sil"><i class="fa-solid fa-trash-can"></i></button>` : '<span class="text-[9px] text-slate-600">Sistem</span>'}
                </div>`;
            }).join('');
            // Refresh icon selects in duty positions admin
            if (document.getElementById('dutypos-new-icon')) {
                populateDutyIconSelectFromAll(document.getElementById('dutypos-new-icon'), '');
            }
        }

        function populateDutyIconSelectFromAll(selectEl, selectedIcon) {
            populateDutyIconSelect(selectEl, selectedIcon);
        }

        function addCustomDutyIcon() {
            const classInput = document.getElementById('ds-new-icon-class');
            const labelInput = document.getElementById('ds-new-icon-label');
            let cls = (classInput.value || '').trim().replace(/^fa-/, '');
            const lbl = (labelInput.value || '').trim();
            if (!cls || !lbl) { showCustomNotification('Uyarı', 'İkon sınıfı ve etiket alanlarını doldurun.'); return; }
            cls = 'fa-' + cls;
            const adv = getDutyAdvanced();
            if (!adv.customIcons) adv.customIcons = [];
            if (adv.customIcons.find(ic => ic.v === cls)) { showCustomNotification('Uyarı', 'Bu ikon zaten listede mevcut.'); return; }
            adv.customIcons.push({ v: cls, l: lbl });
            appConfig.dutyAdvancedSettings = adv;
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
            classInput.value = '';
            labelInput.value = '';
            renderDutyIconList();
            // Refresh all icon selects in duty positions
            renderDutyPositionsAdmin();
            writeCMSLog(`Yeni ikon eklendi: ${cls} (${lbl})`);
        }

        function removeCustomDutyIcon(customIdx) {
            const adv = getDutyAdvanced();
            if (!adv.customIcons || !adv.customIcons[customIdx]) return;
            const removed = adv.customIcons.splice(customIdx, 1);
            appConfig.dutyAdvancedSettings = adv;
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
            renderDutyIconList();
            renderDutyPositionsAdmin();
            writeCMSLog(`İkon silindi: ${removed[0] && removed[0].v}`);
        }

        function renderActiveScheduleGroup() {
            const container = document.getElementById('class-schedule-container');
            const titleEl = document.getElementById('display-schedule-group-title');
            container.innerHTML = '';

            let filteredClasses = [];
            if (activeScheduleGroup === 1) {
                titleEl.innerText = "DERS PROGRAMI (3. VE 4. SINIFLAR)";
                filteredClasses = classList.filter(c => c.startsWith('3/') || c.startsWith('4/'));
            } else {
                titleEl.innerText = "DERS PROGRAMI (1. VE 2. SINIFLAR)";
                filteredClasses = classList.filter(c => c.startsWith('1/') || c.startsWith('2/'));
            }

            const now = new Date();
            let dayName = getTurkishDayName(now.getDay());
            if (dayName === "Cumartesi" || dayName === "Pazar") {
                dayName = "Pazartesi";
            }

            const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            let currentLessonObj = null;
            let isRecess = false;
            let currentLessonIndex = -1;

            for (let i = 0; i < bellHours.length; i++) {
                const start = bellHours[i].start;
                const end = bellHours[i].end;
                
                if (timeString >= start && timeString <= end) {
                    currentLessonObj = bellHours[i];
                    currentLessonIndex = i;
                    break;
                }
                
                if (i < bellHours.length - 1) {
                    const nextStart = bellHours[i+1].start;
                    if (timeString > end && timeString < nextStart) {
                        isRecess = true;
                        currentLessonIndex = i; 
                        break;
                    }
                }
            }

            filteredClasses.forEach(className => {
                const box = document.createElement('div');
                box.className = 'class-schedule-box';
                
                const classWeek = appConfig.weeklyClassSchedules[className] || {};
                const schedule = classWeek[dayName] || Array(bellHours.length).fill("-");
                
                let lessonText = "Ders Yok";
                let recessClass = "";

                if (currentLessonObj) {
                    lessonText = schedule[currentLessonIndex] || "Boş Ders";
                    box.classList.add('active');
                } else if (isRecess) {
                    lessonText = "Teneffüs ⚽";
                    recessClass = "recess";
                } else {
                    lessonText = "Paydos 🏠";
                }

                box.innerHTML = `
                    <span class="class-name-badge">${className}</span>
                    <div class="class-lesson-name ${recessClass}">${lessonText}</div>
                `;
                container.appendChild(box);
            });
        }

        function cycleMediaSlides() {
            const displayImg = document.getElementById('display-media-img');
            const displayCaption = document.getElementById('display-media-caption');
            const playlist = appConfig.mediaPlaylist || [];

            if (playlist.length === 0) {
                displayImg.src = 'https://placehold.co/800x450/070b13/fff?text=Medya';
                displayCaption.innerText = 'Görsel yüklenmedi.';
                return;
            }

            if (activeMediaSlideIndex >= playlist.length) activeMediaSlideIndex = 0;
            const currentSlide = playlist[activeMediaSlideIndex];
            
            displayImg.style.opacity = 0;
            setTimeout(() => {
                displayImg.src = currentSlide.url;
                displayCaption.innerText = currentSlide.caption;
                displayImg.style.opacity = 1;
            }, 500);

            activeMediaSlideIndex++;
        }

        function cycleCleanClassWidget() {
            const titleEl = document.getElementById('display-clean-class');
            const imgEl = document.getElementById('display-achievement-clean-img');
            const list = (appConfig.cleanClassList || []).filter(r => r.active !== false);

            if (list.length === 0) {
                titleEl.innerText = 'Açıklanmadı';
                imgEl.src = 'https://placehold.co/120x120/070b13/fff?text=Sinif';
                return;
            }

            if (activeCleanClassIndex >= list.length) activeCleanClassIndex = 0;
            const record = list[activeCleanClassIndex];

            imgEl.style.opacity = 0;
            setTimeout(() => {
                titleEl.innerText = record.title || 'Açıklanmadı';
                imgEl.src = record.img || 'https://placehold.co/120x120/070b13/fff?text=Sinif';
                imgEl.style.opacity = 1;
            }, 400);

            activeCleanClassIndex++;
        }

        function cycleBestStudentWidget() {
            const titleEl = document.getElementById('display-best-student');
            const imgEl = document.getElementById('display-achievement-student-img');
            const list = (appConfig.bestStudentList || []).filter(r => r.active !== false);

            if (list.length === 0) {
                titleEl.innerText = 'Açıklanmadı';
                imgEl.src = 'https://placehold.co/120x120/070b13/fff?text=Ogrenci';
                return;
            }

            if (activeBestStudentIndex >= list.length) activeBestStudentIndex = 0;
            const record = list[activeBestStudentIndex];

            imgEl.style.opacity = 0;
            setTimeout(() => {
                titleEl.innerText = record.title || 'Açıklanmadı';
                imgEl.src = record.img || 'https://placehold.co/120x120/070b13/fff?text=Ogrenci';
                imgEl.style.opacity = 1;
            }, 400);

            activeBestStudentIndex++;
        }

        function startPanoClocksAndIntervals() {
            setInterval(() => {
                const now = new Date();
                const dayStr = getTurkishDayName(now.getDay());
                const dateString = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()} | ${dayStr}`;
                const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                
                document.getElementById('display-clock-date').innerText = dateString;
                document.getElementById('display-clock-time').innerText = timeString;

                calculateCountdownAndTableHighlight(now);
            }, 1000);

            startCyclingModuleIntervals();
        }

        // Modül ayarlarındaki (Modül Ayarları sekmesi) süre (sn) değerlerini okuyup
        // ekrana süreli gelen tüm modüllerin döngü zamanlayıcılarını kurar/yeniden kurar.
        function getModuleIntervalMs(moduleId) {
            const def = moduleDefs.find(m => m.id === moduleId);
            const s = (appConfig.moduleSettings && appConfig.moduleSettings[moduleId]) || {};
            const seconds = (s.interval && s.interval > 0) ? s.interval : (def ? def.defaultInterval : 8) || 8;
            return seconds * 1000;
        }

        function startCyclingModuleIntervals() {
            // Önce çalışan zamanlayıcılar varsa temizle (ayarlar kaydedildiğinde yeniden kurulabilsin diye)
            Object.values(cyclingIntervalTimers).forEach(timerId => clearInterval(timerId));
            cyclingIntervalTimers = {};

            cyclingIntervalTimers.schedule = setInterval(() => {
                activeScheduleGroup = activeScheduleGroup === 1 ? 2 : 1;
                renderActiveScheduleGroup();
            }, getModuleIntervalMs('schedule'));

            cyclingIntervalTimers.birthday = setInterval(cycleBirthdayWidget, getModuleIntervalMs('birthday'));
            cyclingIntervalTimers.quote = setInterval(cycleQuoteWidget, getModuleIntervalMs('quote'));
            cyclingIntervalTimers.specialday = setInterval(cycleSpecialDayWidget, getModuleIntervalMs('specialday'));
            cyclingIntervalTimers.media = setInterval(cycleMediaSlides, getModuleIntervalMs('media'));
            cyclingIntervalTimers.cleanClass = setInterval(cycleCleanClassWidget, getModuleIntervalMs('achievements'));
            cyclingIntervalTimers.bestStudent = setInterval(cycleBestStudentWidget, getModuleIntervalMs('achievements'));
        }

        function calculateCountdownAndTableHighlight(now) {
            const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            let activeId = -1;
            let countdownText = "Eğitim Saatleri Dışındasınız";

            bellHours.forEach(bell => {
                const row = document.getElementById(`bell-row-${bell.id}`);
                if (row) row.classList.remove('active-row');
            });

            for (let i = 0; i < bellHours.length; i++) {
                const start = bellHours[i].start;
                const end = bellHours[i].end;

                if (timeStr >= start && timeStr <= end) {
                    activeId = bellHours[i].id;
                    const row = document.getElementById(`bell-row-${activeId}`);
                    if (row) row.classList.add('active-row');

                    const diffMs = calculateTimeDifference(now, end);
                    const mins = Math.floor(diffMs / 60000);
                    const secs = Math.floor((diffMs % 60000) / 1000);
                    countdownText = `Zilin Çalmasına: <span style="color: #ef4444; font-weight:bold">${mins} dk. ${secs} sn kaldı (Derste)</span>`;
                    break;
                }

                if (i < bellHours.length - 1) {
                    const nextStart = bellHours[i+1].start;
                    if (timeStr > end && timeStr < nextStart) {
                        const diffMs = calculateTimeDifference(now, nextStart);
                        const mins = Math.floor(diffMs / 60000);
                        const secs = Math.floor((diffMs % 60000) / 1000);
                        countdownText = `Derse Giriş Ziline: <span style="color: #22c55e; font-weight:bold">${mins} dk. ${secs} sn (Teneffüs)</span>`;
                        break;
                    }
                }
            }

            document.getElementById('display-bell-countdown').innerHTML = countdownText;
        }

        function calculateTimeDifference(now, targetTimeStr) {
            const [targetHour, targetMin] = targetTimeStr.split(':').map(Number);
            const targetDate = new Date(now);
            targetDate.setHours(targetHour, targetMin, 0, 0);
            return targetDate - now;
        }

        function daysUntilNextBirthday(dateStr, now) {
            const m = String(dateStr || '').trim().match(/^(\d{1,2})[.\/](\d{1,2})$/);
            if (!m) return 9999;
            const day = parseInt(m[1], 10);
            const month = parseInt(m[2], 10);
            if (!day || !month || month < 1 || month > 12) return 9999;
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let target = new Date(now.getFullYear(), month - 1, day);
            if (target < today) target = new Date(now.getFullYear() + 1, month - 1, day);
            return Math.round((target - today) / 86400000);
        }

        function applyBirthdayWidgetChrome() {
            const settings = appConfig.birthdayWidget || defaultAppConfig.birthdayWidget;
            const titleEl = document.getElementById('display-birthday-title');
            const cardEl = document.getElementById('birthday-dashboard-card');
            if (titleEl) titleEl.innerText = settings.title || defaultAppConfig.birthdayWidget.title;
            if (cardEl) cardEl.style.flex = String(settings.cardSize || 1);
        }

        function cycleBirthdayWidget() {
            const container = document.getElementById('birthday-container-box');
            const settings = appConfig.birthdayWidget || defaultAppConfig.birthdayWidget;
            applyBirthdayWidgetChrome();

            const birthdays = appConfig.birthdays || [];
            const now = new Date();
            const todayStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}`;
            const todaysBirthdays = birthdays.filter(b => b.date === todayStr);

            if (todaysBirthdays.length === 0 && (birthdays.length === 0 || !settings.showUpcomingWhenEmpty)) {
                container.innerHTML = `
                    <div class="birthday-slider" style="color: var(--text-muted); font-size: 12px;">
                        <i class="fa-solid fa-cake-candles" style="font-size: 28px; color: var(--neon-red); margin-bottom: 8px;"></i>
                        <p>${settings.emptyText || defaultAppConfig.birthdayWidget.emptyText}</p>
                    </div>
                `;
                return;
            }

            let sourceList, subtitle, isUpcoming;
            if (todaysBirthdays.length > 0) {
                sourceList = todaysBirthdays;
                subtitle = settings.todaySubtitle || defaultAppConfig.birthdayWidget.todaySubtitle;
                isUpcoming = false;
            } else {
                const sorted = [...birthdays].sort((a, b) => daysUntilNextBirthday(a.date, now) - daysUntilNextBirthday(b.date, now));
                const count = parseInt(settings.upcomingCount, 10);
                sourceList = (count && count > 0) ? sorted.slice(0, count) : sorted;
                subtitle = settings.upcomingSubtitle || defaultAppConfig.birthdayWidget.upcomingSubtitle;
                isUpcoming = true;
            }

            if (sourceList.length === 0) {
                container.innerHTML = `
                    <div class="birthday-slider" style="color: var(--text-muted); font-size: 12px;">
                        <i class="fa-solid fa-cake-candles" style="font-size: 28px; color: var(--neon-red); margin-bottom: 8px;"></i>
                        <p>${settings.emptyText || defaultAppConfig.birthdayWidget.emptyText}</p>
                    </div>
                `;
                return;
            }

            if (birthdayCycleIndex >= sourceList.length) birthdayCycleIndex = 0;
            const target = sourceList[birthdayCycleIndex];
            const celebrationLabel = settings.celebrationDateLabel || defaultAppConfig.birthdayWidget.celebrationDateLabel;

            container.innerHTML = `
                <div class="birthday-slider">
                    <div class="b-class">${target.class} Sınıfı</div>
                    <div class="b-name">${target.name}</div>
                    <div style="font-size: 32px; margin: 6px 0;">🎈🎉🍰</div>
                    <div style="font-size: 11px; color: var(--neon-yellow); font-weight: 600;">${subtitle}</div>
                    ${isUpcoming ? `<div class="b-count">${celebrationLabel}: ${target.date}</div>` : ''}
                </div>
            `;
            birthdayCycleIndex++;
        }

        function cycleQuoteWidget() {
            const quoteEl = document.getElementById('display-quote');
            const authorEl = document.getElementById('display-quote-author');
            if (!quoteEl || !authorEl) return;

            const quotes = (appConfig.quotes && appConfig.quotes.length > 0)
                ? appConfig.quotes
                : [{ text: defaultAppConfig.quote, author: defaultAppConfig.quoteAuthor, date: "" }];

            const now = new Date();
            const todayStr = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}`;

            const todaysQuotes = quotes.filter(q => q.date && q.date === todayStr);
            const sourceList = todaysQuotes.length > 0 ? todaysQuotes : quotes;

            if (quoteCycleIndex >= sourceList.length) quoteCycleIndex = 0;
            const target = sourceList[quoteCycleIndex];

            quoteEl.innerText = `"${target.text}"`;
            authorEl.innerText = target.author || "";
            quoteCycleIndex++;
        }

        function isSpecialDayActiveToday(sd) {
            if (!sd.startDate && !sd.endDate) return true; // Tarihsiz kayıt = sürekli havuzda
            const parseVal = (str) => {
                const parts = String(str || '').split('.');
                if (parts.length < 2) return null;
                const d = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
                if (isNaN(d) || isNaN(m)) return null;
                return m * 100 + d;
            };
            const startVal = parseVal(sd.startDate);
            if (startVal === null) return true;
            const endVal = parseVal(sd.endDate) ?? startVal;
            const now = new Date();
            const todayVal = (now.getMonth() + 1) * 100 + now.getDate();
            if (endVal >= startVal) {
                return todayVal >= startVal && todayVal <= endVal;
            }
            // Yıl sonu/başı sarması (örn: 28.12 - 05.01)
            return todayVal >= startVal || todayVal <= endVal;
        }

        function cycleSpecialDayWidget() {
            const displayEl = document.getElementById('display-special-day');
            const specials = appConfig.specialDays || [];
            if (specials.length === 0) {
                displayEl.innerText = "İyi Dersler Dileriz";
                return;
            }

            const todaysSpecials = specials.filter(sd => (sd.startDate || sd.endDate) && isSpecialDayActiveToday(sd));
            const generalSpecials = specials.filter(sd => !sd.startDate && !sd.endDate);
            const sourceList = todaysSpecials.length > 0 ? todaysSpecials : (generalSpecials.length > 0 ? generalSpecials : specials);

            if (specialDayCycleIndex >= sourceList.length) specialDayCycleIndex = 0;
            displayEl.innerText = sourceList[specialDayCycleIndex].title || "";
            specialDayCycleIndex++;
        }

        async function fetchLiveWeather() {
            try {
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${appConfig.weatherLat}&longitude=${appConfig.weatherLng}&current_weather=true`);
                const data = await response.json();
                if (data && data.current_weather) {
                    const temp = Math.round(data.current_weather.temperature);
                    document.getElementById('display-weather').innerHTML = `${appConfig.cityName} ${temp}°C 🌤️`;
                    writeCMSLog(`Canlı hava durumu başarıyla çekildi: ${appConfig.cityName} ${temp}°C`);
                }
            } catch (e) {
                document.getElementById('display-weather').innerHTML = `${appConfig.cityName} --°C ⛅`;
                writeCMSLog("Hava durumu bağlantı hatası.");
            }
        }

        /* TÜM MODÜLLER İÇİN: BAŞLIK / EBAT / RENK / ARKA PLAN / YAYIN DURUMU UYGULAMA */

        // Sayfa ilk açıldığında (kullanıcı hiçbir özelleştirme yapmadan önce) her modülün
        // kenarlık rengi, kart arka planı ve başlık arka planı için HTML içinde tanımlı
        // ORİJİNAL/VARSAYILAN değerlerini bir kereliğine yakalar. "Varsayılana Dön" seçeneği
        // bu yakalanan gerçek özgün değerlere geri döner (boş bırakmak yerine).
        let panoModuleDefaultAppearance = null;
        function captureModuleDefaultAppearance() {
            if (panoModuleDefaultAppearance) return;
            panoModuleDefaultAppearance = {};
            moduleDefs.forEach(def => {
                const card = document.querySelector(def.cardSel);
                if (!card) return;
                const headerEl = card.querySelector(':scope > .card-header');
                panoModuleDefaultAppearance[def.id] = {
                    borderColor: card.style.borderColor || '',
                    cardBg: card.style.background || '',
                    headerBg: headerEl ? (headerEl.style.background || '') : '',
                    headerColor: headerEl ? (headerEl.style.color || '') : ''
                };
            });
        }

        function applyModuleSettingsToDashboard() {
            captureModuleDefaultAppearance();
            const zoomMap = { small: 0.85, normal: 1, large: 1.15 };
            moduleDefs.forEach(def => {
                if (!def.cardSel) return; // Özel modüllerde cardSel boş olabilir
                const card = document.querySelector(def.cardSel);
                if (!card) return;
                const s = (appConfig.moduleSettings && appConfig.moduleSettings[def.id]) || {};
                const dflt = panoModuleDefaultAppearance[def.id] || { borderColor: '', cardBg: '', headerBg: '', headerColor: '' };

                // Brand (header-bar) için sadece renk/arka plan ayarı yap,
                // zoom ve display değiştirme — bozulmasını önler
                const isBrand = def.id === 'brand';

                // Yayında / Yayın Dışı
                if (!isBrand) card.style.display = (s.active === false) ? 'none' : '';

                // Ebat (Kart İçeriği Ölçeklendirme) — brand için uygulanmaz
                if (!isBrand) card.style.zoom = zoomMap[s.size] || 1;

                // Kenarlık Rengi (özel seçilmemişse özgün varsayılana döner)
                if (s.color) {
                    card.style.borderColor = s.color;
                    card.style.boxShadow = `0 0 15px ${s.color}33`;
                } else {
                    card.style.borderColor = dflt.borderColor;
                    card.style.boxShadow = '';
                }

                // Modül Arka Planı (düz renk / degrade / varsayılan)
                if (s.bgType === 'gradient' && s.bgColor1 && s.bgColor2) {
                    card.style.background = `linear-gradient(135deg, ${s.bgColor1}, ${s.bgColor2})`;
                } else if (s.bgType === 'solid' && s.bgColor1) {
                    card.style.background = s.bgColor1;
                } else {
                    card.style.background = dflt.cardBg;
                }

                // Başlık Arka Planı (düz renk / degrade / varsayılan) + Başlık Yazı Rengi
                const headerEl = card.querySelector(':scope > .card-header');
                if (headerEl) {
                    if (s.titleBgType === 'gradient' && s.titleBgColor1 && s.titleBgColor2) {
                        headerEl.style.background = `linear-gradient(to right, ${s.titleBgColor1}, ${s.titleBgColor2})`;
                    } else if (s.titleBgType === 'solid' && s.titleBgColor1) {
                        headerEl.style.background = s.titleBgColor1;
                    } else {
                        headerEl.style.background = dflt.headerBg;
                    }
                    headerEl.style.color = s.titleColor || dflt.headerColor;
                }

                // Başlık (metin) + Başlık Aktif/Pasif (başlık çubuğunu göster/gizle)
                if (def.hasTitle && def.titleSel) {
                    const titleEl = document.querySelector(def.titleSel);
                    if (titleEl && s.title) titleEl.innerText = s.title;
                    // .card-header (başlık çubuğu) varsa onu, yoksa doğrudan başlık öğesini göster/gizle
                    const titleBar = headerEl || titleEl;
                    if (titleBar) titleBar.style.display = (s.titleActive === false) ? 'none' : '';
                }

                // Özel modüller: panoda otomatik oluşturulan kartın gövdesine kullanıcı metnini yaz
                if (!def.builtIn) {
                    const bodyEl = card.querySelector(':scope > .card-body');
                    if (bodyEl) bodyEl.innerText = s.content || '';
                }
            });

            applyModuleFontOverrides();
        }

        // Her modül için seçilen fontu, o modülün TÜM içeriğine (başlık + gövde)
        // FontAwesome ikonları hariç tutarak !important ile zorunlu kılan dinamik
        // bir <style> etiketi oluşturur/günceller.
        function applyModuleFontOverrides() {
            let css = '';
            moduleDefs.forEach(def => {
                if (!def.cardSel) return;
                const s = (appConfig.moduleSettings && appConfig.moduleSettings[def.id]) || {};
                if (s.font) {
                    css += `${def.cardSel}, ${def.cardSel} *:not(i) { font-family: ${s.font} !important; }
`;
                }
            });
            let styleTag = document.getElementById('pano-module-font-overrides');
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = 'pano-module-font-overrides';
                document.head.appendChild(styleTag);
            }
            styleTag.textContent = css;
        }

        function renderAdminModuleSettings() {
            const wrap = document.getElementById('admin-module-settings-list');
            if (!wrap) return;
            wrap.innerHTML = "";
            const fontOptions = [
                { value: "", label: "Varsayılan" },
                { value: "'Rajdhani', sans-serif", label: "Rajdhani" },
                { value: "'Roboto', sans-serif", label: "Roboto" },
                { value: "'Fira Code', monospace", label: "Fira Code" },
                { value: "Arial, sans-serif", label: "Arial" },
                { value: "Georgia, serif", label: "Georgia" },
                { value: "'Times New Roman', serif", label: "Times New Roman" },
                { value: "Verdana, sans-serif", label: "Verdana" }
            ];

            moduleDefs.forEach(def => {
                const s = (appConfig.moduleSettings && appConfig.moduleSettings[def.id]) || { title: "", color: "", bgType: "", bgColor1: "", bgColor2: "", titleBgType: "", titleBgColor1: "", titleBgColor2: "", titleColor: "", font: "", size: "normal", active: true, titleActive: true };
                const isCustom = !def.builtIn;
                const row = document.createElement('div');
                row.className = 'bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-3';
                row.setAttribute('data-module-row', def.id);

                // Modül adı: özel modüller için düzenlenebilir
                const labelHtml = isCustom
                    ? `<input type="text" value="${(def.label || '').replace(/"/g, '&quot;')}" placeholder="Modül Adı"
                         onchange="moduleSettingsRenameLabel('${def.id}', this.value)"
                         class="bg-transparent border-b border-slate-700 text-white text-xs font-bold w-full outline-none focus:border-cyan-500 pb-0.5">`
                    : `<span class="text-xs font-bold text-white">${def.label}</span>`;

                // Eylem butonları
                const actionBtns = `
                    <div class="flex items-center gap-1 ml-auto">
                        <button type="button" title="Bu modülü kopyala" onclick="moduleSettingsDuplicate('${def.id}')"
                            class="px-2 py-1 bg-slate-800 hover:bg-cyan-600 text-slate-400 hover:text-white text-[10px] rounded-lg transition flex items-center gap-1">
                            <i class="fa-solid fa-copy"></i>
                        </button>
                        ${isCustom ? `<button type="button" title="Bu modülü sil" onclick="moduleSettingsDelete('${def.id}')"
                            class="px-2 py-1 bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white text-[10px] rounded-lg transition flex items-center gap-1">
                            <i class="fa-solid fa-trash"></i>
                        </button>` : ''}
                    </div>`;

                // Özel modüller için kart seçici alanı (artık opsiyonel — kart otomatik oluşturulur)
                // ve panoda gösterilecek serbest metin içeriği alanı
                const cardSelHtml = isCustom ? `
                    <div class="col-span-12 flex items-center gap-2 pb-1 border-b border-slate-800/50">
                        <i class="fa-solid fa-circle-check text-emerald-400 text-[10px]"></i>
                        <span class="text-[10px] text-emerald-500 font-bold">Bu modül için panoda kart otomatik oluşturuldu.</span>
                    </div>
                    <div class="col-span-12 flex items-start gap-2 pb-1 border-b border-slate-800/50">
                        <i class="fa-solid fa-align-left text-emerald-400 text-[10px] mt-1.5"></i>
                        <span class="text-[10px] uppercase text-slate-500 font-bold whitespace-nowrap mt-1">İçerik</span>
                        <textarea id="mod-content-${def.id}" rows="2" placeholder="Bu kartta gösterilecek metin"
                            oninput="moduleSettingsOnChange('${def.id}')"
                            class="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-white text-xs outline-none focus:border-cyan-500">${(s.content || '').replace(/</g, '&lt;')}</textarea>
                    </div>
                    <details class="col-span-12">
                        <summary class="text-[10px] text-slate-600 cursor-pointer select-none">Gelişmiş: farklı bir HTML elemanına bağla (opsiyonel)</summary>
                        <div class="flex items-center gap-2 pt-1.5">
                            <span class="text-[10px] uppercase text-slate-500 font-bold whitespace-nowrap">Kart Seçici (CSS)</span>
                            <input type="text" id="mod-cardsel-${def.id}" value="${(def.cardSel || '').replace(/"/g, '&quot;')}"
                                placeholder="#kart-id veya .sinif"
                                onchange="moduleSettingsUpdateCardSel('${def.id}', this.value)"
                                class="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-white text-[10px] font-mono outline-none focus:border-cyan-500">
                        </div>
                    </details>` : '';

                row.innerHTML = `
                    <div class="grid grid-cols-12 gap-3 items-center">
                        <div class="col-span-3 flex items-center gap-2 min-w-0">
                            <i class="fa-solid fa-cube ${def.builtIn ? 'text-cyan-400' : 'text-emerald-400'} shrink-0"></i>
                            <div class="min-w-0 flex-1">${labelHtml}</div>
                            ${isCustom ? '<span class="text-[9px] text-emerald-600 font-bold shrink-0">ÖZEL</span>' : ''}
                        </div>
                        <div class="col-span-3">
                            ${def.hasTitle
                                ? `<input type="text" id="mod-title-${def.id}" value="${(s.title || '').replace(/"/g, '&quot;')}" placeholder="Modül Başlığı"
                                     oninput="moduleSettingsOnChange('${def.id}')"
                                     class="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs">`
                                : `<span class="text-[10px] text-slate-500 italic">Bu modülün başlığı yoktur</span>`}
                        </div>
                        <div class="col-span-2">
                            <select id="mod-size-${def.id}" onchange="moduleSettingsOnChange('${def.id}')" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs">
                                <option value="small" ${s.size === 'small' ? 'selected' : ''}>Küçük</option>
                                <option value="normal" ${(!s.size || s.size === 'normal') ? 'selected' : ''}>Normal</option>
                                <option value="large" ${s.size === 'large' ? 'selected' : ''}>Büyük</option>
                            </select>
                        </div>
                        <div class="col-span-1 flex justify-center">
                            ${def.hasInterval
                                ? `<input type="number" min="1" step="1" id="mod-interval-${def.id}" value="${s.interval || def.defaultInterval || 8}"
                                     title="Bu modülün ekranda kaç saniyede bir değişeceğini belirler"
                                     oninput="moduleSettingsOnChange('${def.id}')"
                                     class="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs text-center">`
                                : `<span class="text-[10px] text-slate-500 italic">—</span>`}
                        </div>
                        <div class="col-span-1 flex justify-center">
                            <label class="flex items-center gap-1 cursor-pointer" title="Modül yayında mı?">
                                <input type="checkbox" id="mod-active-${def.id}" ${s.active === false ? '' : 'checked'}
                                    onchange="moduleSettingsOnChange('${def.id}')" class="w-4 h-4 accent-emerald-500">
                            </label>
                        </div>
                        <div class="col-span-1 flex justify-center">
                            <label class="flex items-center gap-1 ${def.hasTitle ? 'cursor-pointer' : 'cursor-not-allowed opacity-30'}"
                                title="${def.hasTitle ? 'Başlık çubuğunu göster/gizle' : 'Bu modülün başlığı yoktur'}">
                                <input type="checkbox" id="mod-title-active-${def.id}" ${s.titleActive === false ? '' : 'checked'}
                                    ${def.hasTitle ? '' : 'disabled'}
                                    onchange="moduleSettingsOnChange('${def.id}')" class="w-4 h-4 accent-cyan-500">
                            </label>
                        </div>
                        <div class="col-span-1 flex justify-end">${actionBtns}</div>
                    </div>
                    ${cardSelHtml}
                    <div class="space-y-3 pt-2 border-t border-slate-800/70">
                        <div class="flex flex-wrap items-center gap-4">
                            <div class="flex items-center gap-2">
                                <label class="flex items-center gap-1 cursor-pointer" title="Kenarlık rengini özelleştir">
                                    <input type="checkbox" id="mod-color-enable-${def.id}" ${s.color ? 'checked' : ''}
                                        onchange="panoToggleCustomColorUI('${def.id}','color'); moduleSettingsOnChange('${def.id}')" class="w-3.5 h-3.5 accent-cyan-500">
                                    <span class="text-[10px] uppercase text-slate-500 font-bold">Kenarlık</span>
                                </label>
                                <input type="color" id="mod-color-${def.id}" value="${s.color || '#00b4d8'}" ${s.color ? '' : 'disabled'}
                                    onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer disabled:opacity-40">
                            </div>
                            <div class="flex items-center gap-2">
                                <label class="flex items-center gap-1 cursor-pointer" title="Başlık yazı rengini özelleştir">
                                    <input type="checkbox" id="mod-titlecolor-enable-${def.id}" ${s.titleColor ? 'checked' : ''}
                                        onchange="panoToggleCustomColorUI('${def.id}','titlecolor'); moduleSettingsOnChange('${def.id}')" ${def.hasTitle ? '' : 'disabled'} class="w-3.5 h-3.5 accent-cyan-500">
                                    <span class="text-[10px] uppercase text-slate-500 font-bold">Başlık Yazısı</span>
                                </label>
                                <input type="color" id="mod-titlecolor-${def.id}" value="${s.titleColor || '#ffffff'}" ${(s.titleColor && def.hasTitle) ? '' : 'disabled'}
                                    onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer disabled:opacity-40">
                            </div>
                            <div class="flex items-center gap-2 flex-1 min-w-[180px]">
                                <span class="text-[10px] uppercase text-slate-500 font-bold whitespace-nowrap">Font</span>
                                <select id="mod-font-${def.id}" onchange="moduleSettingsOnChange('${def.id}')" class="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs">
                                    ${fontOptions.map(f => `<option value="${f.value}" style="font-family:${f.value || 'inherit'};" ${((s.font || '') === f.value) ? 'selected' : ''}>${f.label}</option>`).join('')}
                                </select>
                            </div>
                            <button type="button" title="Bu modülün tüm görünüm ayarlarını varsayılana döndürür"
                                class="ml-auto px-3 py-1.5 bg-slate-800 hover:bg-red-500/80 text-slate-300 hover:text-white text-[10px] font-bold rounded-lg flex items-center gap-1.5 whitespace-nowrap transition"
                                onclick="panoResetModuleAppearance('${def.id}')">
                                <i class="fa-solid fa-rotate-left"></i> Sıfırla
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center gap-4">
                            <div class="flex items-center gap-2">
                                <span class="text-[10px] uppercase text-slate-500 font-bold whitespace-nowrap">Modül Arka Planı</span>
                                <select id="mod-bgtype-${def.id}" onchange="panoToggleBgTypeUI('${def.id}','bg'); moduleSettingsOnChange('${def.id}')" class="bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs">
                                    <option value="" ${!s.bgType ? 'selected' : ''}>Varsayılan</option>
                                    <option value="solid" ${s.bgType === 'solid' ? 'selected' : ''}>Düz Renk</option>
                                    <option value="gradient" ${s.bgType === 'gradient' ? 'selected' : ''}>Degrade</option>
                                </select>
                                <span id="mod-bgcolor1-wrap-${def.id}" style="display:${s.bgType ? 'inline-flex' : 'none'}">
                                    <input type="color" id="mod-bgcolor1-${def.id}" value="${s.bgColor1 || '#070b13'}"
                                        onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer">
                                </span>
                                <span id="mod-bgcolor2-wrap-${def.id}" style="display:${s.bgType === 'gradient' ? 'inline-flex' : 'none'}">
                                    <input type="color" id="mod-bgcolor2-${def.id}" value="${s.bgColor2 || '#0d1b35'}"
                                        onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer">
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-[10px] uppercase text-slate-500 font-bold whitespace-nowrap">Başlık Arka Planı</span>
                                <select id="mod-titlebgtype-${def.id}" onchange="panoToggleBgTypeUI('${def.id}','titlebg'); moduleSettingsOnChange('${def.id}')" ${def.hasTitle ? '' : 'disabled'} class="bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs">
                                    <option value="" ${!s.titleBgType ? 'selected' : ''}>Varsayılan</option>
                                    <option value="solid" ${s.titleBgType === 'solid' ? 'selected' : ''}>Düz Renk</option>
                                    <option value="gradient" ${s.titleBgType === 'gradient' ? 'selected' : ''}>Degrade</option>
                                </select>
                                <span id="mod-titlebgcolor1-wrap-${def.id}" style="display:${s.titleBgType ? 'inline-flex' : 'none'}">
                                    <input type="color" id="mod-titlebgcolor1-${def.id}" value="${s.titleBgColor1 || '#6b1111'}"
                                        onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer">
                                </span>
                                <span id="mod-titlebgcolor2-wrap-${def.id}" style="display:${s.titleBgType === 'gradient' ? 'inline-flex' : 'none'}">
                                    <input type="color" id="mod-titlebgcolor2-${def.id}" value="${s.titleBgColor2 || '#300a0a'}"
                                        onchange="moduleSettingsOnChange('${def.id}')" class="w-9 h-8 bg-slate-900 border border-slate-800 rounded cursor-pointer">
                                </span>
                            </div>
                        </div>
                    </div>
                `;
                wrap.appendChild(row);
            });
        }

        // Herhangi bir modül ayarı değiştiğinde çağrılır: otomatik kaydeder ve panoyu günceller
        function moduleSettingsOnChange(id) {
            // Geri alma için değişiklik öncesi durumu kaydet (debounced)
            if (!window._moduleUndoPending) {
                window._moduleUndoPending = true;
                setTimeout(() => {
                    window._moduleUndoPending = false;
                }, 800);
                // İlk tetiklemede snapshot al
                moduleSettingsPushUndo();
            }
            moduleSettingsAutoSave();
            applyModuleSettingsToDashboard();
        }

        // Özel modül için kart seçicisini günceller
        function moduleSettingsUpdateCardSel(id, value) {
            const ci = (appConfig.customModuleDefs || []).findIndex(d => d.id === id);
            if (ci >= 0) {
                appConfig.customModuleDefs[ci].cardSel = value.trim();
                _rebuildModuleDefs();
                moduleSettingsAutoSave();
            }
        }

        // Kenarlık / Başlık Yazı Rengi renk seçicilerini, yanlarındaki "özel" onay
        // kutusu işaretli değilse pasifleştirir (pasifken kaydedilince varsayılana döner).
        function panoToggleCustomColorUI(id, field) {
            const enabled = document.getElementById(`mod-${field}-enable-${id}`).checked;
            const input = document.getElementById(`mod-${field}-${id}`);
            if (input) input.disabled = !enabled;
        }

        // Modül/başlık arka planı seçimi "Düz Renk" veya "Degrade" olduğunda
        // ilgili renk seçicilerini gösterir, "Varsayılan" olduğunda gizler.
        function panoToggleBgTypeUI(id, prefix) {
            const type = document.getElementById(`mod-${prefix}type-${id}`).value;
            const c1 = document.getElementById(`mod-${prefix}color1-wrap-${id}`);
            const c2 = document.getElementById(`mod-${prefix}color2-wrap-${id}`);
            if (c1) c1.style.display = type ? 'inline-flex' : 'none';
            if (c2) c2.style.display = (type === 'gradient') ? 'inline-flex' : 'none';
        }

        // Bir modülün tüm görsel özelleştirmelerini (kenarlık, arka plan, başlık arka planı,
        // başlık yazı rengi, font) tek tıkla varsayılana döndürür. Kalıcı olması için
        // panelin genel "Kaydet" düğmesine basılması gerekir.
        function panoResetModuleAppearance(id) {
            const colorEnable = document.getElementById(`mod-color-enable-${id}`);
            const colorInput = document.getElementById(`mod-color-${id}`);
            if (colorEnable) colorEnable.checked = false;
            if (colorInput) { colorInput.disabled = true; colorInput.value = '#00b4d8'; }

            const tcEnable = document.getElementById(`mod-titlecolor-enable-${id}`);
            const tcInput = document.getElementById(`mod-titlecolor-${id}`);
            if (tcEnable) tcEnable.checked = false;
            if (tcInput) { tcInput.disabled = true; tcInput.value = '#ffffff'; }

            const bgType = document.getElementById(`mod-bgtype-${id}`);
            if (bgType) bgType.value = '';
            const bgc1 = document.getElementById(`mod-bgcolor1-${id}`);
            const bgc2 = document.getElementById(`mod-bgcolor2-${id}`);
            if (bgc1) bgc1.value = '#070b13';
            if (bgc2) bgc2.value = '#0d1b35';
            panoToggleBgTypeUI(id, 'bg');

            const tbgType = document.getElementById(`mod-titlebgtype-${id}`);
            if (tbgType) tbgType.value = '';
            const tbgc1 = document.getElementById(`mod-titlebgcolor1-${id}`);
            const tbgc2 = document.getElementById(`mod-titlebgcolor2-${id}`);
            if (tbgc1) tbgc1.value = '#6b1111';
            if (tbgc2) tbgc2.value = '#300a0a';
            panoToggleBgTypeUI(id, 'titlebg');

            const fontSel = document.getElementById(`mod-font-${id}`);
            if (fontSel) fontSel.value = '';
        }

        function collectModuleSettingsFromAdmin() {
            const result = {};
            moduleDefs.forEach(def => {
                const titleInput = document.getElementById(`mod-title-${def.id}`);
                const intervalInput = document.getElementById(`mod-interval-${def.id}`);
                let intervalVal = (appConfig.moduleSettings[def.id] || {}).interval || def.defaultInterval;
                if (def.hasInterval && intervalInput) {
                    const parsed = parseInt(intervalInput.value, 10);
                    intervalVal = (!isNaN(parsed) && parsed > 0) ? parsed : (def.defaultInterval || 8);
                }
                const colorEnable = document.getElementById(`mod-color-enable-${def.id}`);
                const colorInput = document.getElementById(`mod-color-${def.id}`);
                const titleColorEnable = document.getElementById(`mod-titlecolor-enable-${def.id}`);
                const titleColorInput = document.getElementById(`mod-titlecolor-${def.id}`);
                const bgTypeInput = document.getElementById(`mod-bgtype-${def.id}`);
                const bgColor1Input = document.getElementById(`mod-bgcolor1-${def.id}`);
                const bgColor2Input = document.getElementById(`mod-bgcolor2-${def.id}`);
                const titleBgTypeInput = document.getElementById(`mod-titlebgtype-${def.id}`);
                const titleBgColor1Input = document.getElementById(`mod-titlebgcolor1-${def.id}`);
                const titleBgColor2Input = document.getElementById(`mod-titlebgcolor2-${def.id}`);
                const fontInput = document.getElementById(`mod-font-${def.id}`);
                const titleActiveInput = document.getElementById(`mod-title-active-${def.id}`);
                const sizeInput = document.getElementById(`mod-size-${def.id}`);
                const activeInput = document.getElementById(`mod-active-${def.id}`);
                const contentInput = document.getElementById(`mod-content-${def.id}`);
                result[def.id] = {
                    title: titleInput ? titleInput.value.trim() : (appConfig.moduleSettings[def.id] || {}).title || "",
                    content: contentInput ? contentInput.value : (appConfig.moduleSettings[def.id] || {}).content || "",
                    size: sizeInput ? sizeInput.value : (appConfig.moduleSettings[def.id] || {}).size || "normal",
                    color: (colorEnable && colorEnable.checked && colorInput) ? colorInput.value : "",
                    titleColor: (titleColorEnable && titleColorEnable.checked && titleColorInput) ? titleColorInput.value : "",
                    bgType: bgTypeInput ? bgTypeInput.value : "",
                    bgColor1: bgColor1Input ? bgColor1Input.value : "",
                    bgColor2: bgColor2Input ? bgColor2Input.value : "",
                    titleBgType: titleBgTypeInput ? titleBgTypeInput.value : "",
                    titleBgColor1: titleBgColor1Input ? titleBgColor1Input.value : "",
                    titleBgColor2: titleBgColor2Input ? titleBgColor2Input.value : "",
                    font: fontInput ? fontInput.value : "",
                    active: activeInput ? activeInput.checked : ((appConfig.moduleSettings[def.id] || {}).active !== false),
                    titleActive: titleActiveInput ? titleActiveInput.checked : true,
                    interval: intervalVal
                };
            });
            return result;
        }

        function applyThemePreset(presetName, skipLog) {
            appConfig.theme = presetName || 'standard';
            renderThemeClasses();
            if (!skipLog) writeCMSLog(`Pano renk teması güncellendi: ${appConfig.theme}`);
        }

        function applyThemeMode(mode, skipLog) {
            appConfig.themeMode = (mode === 'light') ? 'light' : 'dark';
            renderThemeClasses();
            if (!skipLog) writeCMSLog(`Pano görünüm modu güncellendi: ${appConfig.themeMode === 'light' ? 'Açık Tema' : 'Koyu Tema'}`);
        }

        function renderThemeClasses() {
            const body = document.body;
            const preset = appConfig.theme || 'standard';
            const mode = appConfig.themeMode || 'dark';
            body.className = `theme-${preset} mode-${mode}`;

            // Aktif buton/kart görsel durumunu güncelle
            const darkBtn = document.getElementById('mode-btn-dark');
            const lightBtn = document.getElementById('mode-btn-light');
            if (darkBtn && lightBtn) {
                darkBtn.classList.toggle('border-cyan-500', mode === 'dark');
                darkBtn.classList.toggle('border-slate-800', mode !== 'dark');
                lightBtn.classList.toggle('border-cyan-500', mode === 'light');
                lightBtn.classList.toggle('border-slate-800', mode !== 'light');
            }
            document.querySelectorAll('.theme-preset-card').forEach(card => {
                const isActive = card.getAttribute('data-preset') === preset;
                card.classList.toggle('border-cyan-500', isActive);
                card.classList.toggle('border-slate-800', !isActive);
            });

            // Özel renkler tanımlıysa uygula (tema/mod değişse bile korunur)
            if (appConfig.customColors) {
                applyCustomColorVars(appConfig.customColors);
            } else {
                clearCustomColorVars();
            }
        }

        const CUSTOM_COLOR_VAR_MAP = {
            blue: '--neon-blue',
            red: '--neon-red',
            yellow: '--neon-yellow',
            green: '--neon-green',
            cardbg: '--card-bg',
            bgdark: '--bg-dark'
        };

        function applyCustomColorVars(colors) {
            const root = document.documentElement;
            Object.keys(CUSTOM_COLOR_VAR_MAP).forEach(key => {
                if (colors[key]) root.style.setProperty(CUSTOM_COLOR_VAR_MAP[key], colors[key]);
            });
        }

        function clearCustomColorVars() {
            const root = document.documentElement;
            Object.values(CUSTOM_COLOR_VAR_MAP).forEach(v => root.style.removeProperty(v));
        }

        function applyCustomThemeColors(fromUserClick) {
            const colors = {
                blue: document.getElementById('custom-color-blue').value,
                red: document.getElementById('custom-color-red').value,
                yellow: document.getElementById('custom-color-yellow').value,
                green: document.getElementById('custom-color-green').value,
                cardbg: document.getElementById('custom-color-cardbg').value,
                bgdark: document.getElementById('custom-color-bgdark').value
            };
            appConfig.customColors = colors;
            applyCustomColorVars(colors);
            if (fromUserClick) {
                localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
                writeCMSLog("Özel tema renkleri uygulandı ve kaydedildi.");
                showCustomNotification("Özel Tema", "Özel tema renkleriniz başarıyla uygulandı ve kaydedildi.");
            }
        }

        function resetCustomThemeColors() {
            appConfig.customColors = null;
            clearCustomColorVars();
            loadCustomThemeInputsFromConfig();
            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
            writeCMSLog("Özel tema renkleri sıfırlandı.");
            showCustomNotification("Sıfırlandı", "Özel renk özelleştirmeleri kaldırıldı, temanın orijinal renkleri geri yüklendi.");
        }

        function loadCustomThemeInputsFromConfig() {
            const defaults = { blue: '#00b4d8', red: '#d90429', yellow: '#ffb703', green: '#38b000', cardbg: '#070b13', bgdark: '#02040a' };
            const colors = appConfig.customColors || defaults;
            document.getElementById('custom-color-blue').value = colors.blue || defaults.blue;
            document.getElementById('custom-color-red').value = colors.red || defaults.red;
            document.getElementById('custom-color-yellow').value = colors.yellow || defaults.yellow;
            document.getElementById('custom-color-green').value = colors.green || defaults.green;
            document.getElementById('custom-color-cardbg').value = colors.cardbg || defaults.cardbg;
            document.getElementById('custom-color-bgdark').value = colors.bgdark || defaults.bgdark;
        }

        function tryOpenAdminPanel() {
            if (appConfig.adminPin && appConfig.adminPin.trim() !== "") {
                document.getElementById('pin-prompt-input').value = "";
                document.getElementById('pin-prompt-modal').classList.remove('hidden');
                document.getElementById('pin-prompt-input').focus();
            } else {
                openAdminPanel();
            }
        }

        function closePinPrompt() {
            document.getElementById('pin-prompt-modal').classList.add('hidden');
        }

        function handlePinKeyPress(e) {
            if (e.key === 'Enter') checkAdminPinCode();
        }

        function checkAdminPinCode() {
            const entered = document.getElementById('pin-prompt-input').value.trim();
            if (entered === appConfig.adminPin) {
                closePinPrompt();
                openAdminPanel();
                writeCMSLog("Güvenlik PIN geçidi başarıyla aşıldı.");
            } else {
                showCustomNotification("Hatalı Giriş", "Girdiğiniz PIN kodu yanlıştır.");
                document.getElementById('pin-prompt-input').value = "";
                document.getElementById('pin-prompt-input').focus();
            }
        }

        function openAdminPanel() {
            writeCMSLog("Yönetim Paneli açıldı.");
            const panel = document.getElementById('admin-panel');
            
            document.getElementById('input-school-name').value = appConfig.schoolName;
            document.getElementById('input-brand-sub').value = appConfig.brandSubText || defaultAppConfig.brandSubText;
            document.getElementById('input-brand-sub-visible').checked = appConfig.brandSubVisible !== false;
            document.getElementById('input-admin-pin').value = appConfig.adminPin || "";

            tempSchoolLogo = appConfig.schoolLogo || "";
            document.getElementById('input-logo-size').value = appConfig.logoSize || 54;
            document.getElementById('input-school-name-size').value = appConfig.schoolNameSize || 24;
            document.getElementById('input-logo-position').value = appConfig.logoPosition || 'left';
            document.getElementById('input-name-position').value = appConfig.namePosition || 'left';
            document.getElementById('input-name-font').value = appConfig.schoolNameFont || defaultAppConfig.schoolNameFont;
            document.getElementById('input-logo-offset').value = appConfig.logoOffsetX || 0;
            document.getElementById('input-name-offset').value = appConfig.nameOffsetX || 0;
            const logoPreviewImg = document.getElementById('logo-preview-img');
            const logoPreviewText = document.getElementById('logo-preview-text');
            if (tempSchoolLogo) {
                logoPreviewImg.src = tempSchoolLogo;
                logoPreviewImg.classList.remove('hidden');
                logoPreviewText.classList.add('hidden');
            } else {
                logoPreviewImg.classList.add('hidden');
                logoPreviewText.classList.remove('hidden');
            }
            handleLiveIdentityPreview();

            loadCustomThemeInputsFromConfig();
            renderThemeClasses();

            tempAnnouncements = appConfig.announcements.map(a => ({ ...a }));
            tempBirthdays = [...appConfig.birthdays];
            selectedBirthdayIndices.clear();
            tempQuotes = [...(appConfig.quotes || [])];
            tempSpecialDays = [...appConfig.specialDays];
            tempMediaPlaylist = [...(appConfig.mediaPlaylist || [])];
            tempCleanClassList = (appConfig.cleanClassList || []).map(r => ({ ...r }));
            tempBestStudentList = (appConfig.bestStudentList || []).map(r => ({ ...r }));

            cancelEditBirthday();
            cancelEditAnnouncement();
            cancelEditQuote();
            cancelEditSpecialDay();
            cancelEditCleanClass();
            cancelEditBestStudent();
            cancelEditMediaSlide();
            const bwSettings = appConfig.birthdayWidget || defaultAppConfig.birthdayWidget;
            document.getElementById('input-bday-title').value = bwSettings.title || "";
            document.getElementById('input-bday-size').value = String(bwSettings.cardSize || 1);
            document.getElementById('input-bday-today-subtitle').value = bwSettings.todaySubtitle || "";
            document.getElementById('input-bday-upcoming-subtitle').value = bwSettings.upcomingSubtitle || "";
            document.getElementById('input-bday-celebration-label').value = bwSettings.celebrationDateLabel || defaultAppConfig.birthdayWidget.celebrationDateLabel;
            document.getElementById('input-bday-empty-text').value = bwSettings.emptyText || "";
            document.getElementById('input-bday-show-upcoming').checked = bwSettings.showUpcomingWhenEmpty !== false;
            document.getElementById('input-bday-upcoming-count').value = bwSettings.upcomingCount ?? 5;

            renderAdminAnnouncements();
            renderAdminBirthdays();
            renderAdminQuotes();
            renderAdminSpecialDays();
            renderAdminMediaPlaylist();
            renderAdminCleanClassList();
            renderAdminBestStudentList();
            renderAdminModuleSettings();
            buildAdminBellHoursInputs();
            buildWeeklyScheduleMatrix();
            buildWeeklyDutiesTable();
            buildAylikNobetTablosu(); // Aylık nöbet takvimini inşa et
            renderRosterList(); // Nöbetçi kadrosu (fotoğraf/ikon) listesini inşa et

            // Nöbet yerleri (dinamik ekle/sil/sırala) ve görsel özelleştirme
            tempDutyPositions = (appConfig.dutyPositions || []).map(p => ({ ...p }));
            tempDutyStyle = JSON.parse(JSON.stringify(appConfig.dutyStyle || defaultAppConfig.dutyStyle));
            populateDutyIconSelect(document.getElementById('dutypos-new-icon'), 'fa-user-shield');
            renderDutyPositionsAdmin();
            renderDutyTemplateList();
            loadDutyStyleIntoInputs();
            // Nöbet Modülü Kapsamlı Ayarlar sekmesini başlat
            setTimeout(() => loadDutyAdvancedSettingsIntoForm(), 80);

            document.getElementById('stat-birthday-count').innerText = appConfig.birthdays.length;
            document.getElementById('stat-ann-count').innerText = appConfig.announcements.length;

            panel.classList.remove('hidden');
        }

        function closeAdminPanelWithoutSaving() {
            document.getElementById('admin-panel').classList.add('hidden');
            writeCMSLog("Yönetim Paneli kaydetmeden kapatıldı.");
        }

        function saveAdminChanges() {
            saveWeeklyScheduleMatrix();
            saveWeeklyDutiesTable();
            nobetAyiKaydet(); // Aylık nöbet verilerini kaydet

            appConfig.schoolName = document.getElementById('input-school-name').value.trim() || defaultAppConfig.schoolName;
            appConfig.brandSubText = document.getElementById('input-brand-sub').value.trim() || defaultAppConfig.brandSubText;
            appConfig.brandSubVisible = document.getElementById('input-brand-sub-visible').checked;
            appConfig.adminPin = document.getElementById('input-admin-pin').value.trim();
            appConfig.schoolLogo = tempSchoolLogo !== null ? tempSchoolLogo : (appConfig.schoolLogo || "");
            appConfig.logoSize = parseInt(document.getElementById('input-logo-size').value, 10) || 54;
            appConfig.schoolNameSize = parseInt(document.getElementById('input-school-name-size').value, 10) || 24;
            appConfig.logoPosition = document.getElementById('input-logo-position').value || 'left';
            appConfig.namePosition = document.getElementById('input-name-position').value || 'left';
            appConfig.schoolNameFont = document.getElementById('input-name-font').value || defaultAppConfig.schoolNameFont;
            appConfig.logoOffsetX = parseInt(document.getElementById('input-logo-offset').value, 10) || 0;
            appConfig.nameOffsetX = parseInt(document.getElementById('input-name-offset').value, 10) || 0;

            appConfig.cleanClassList = [...tempCleanClassList];
            appConfig.bestStudentList = [...tempBestStudentList];

            appConfig.announcements = [...tempAnnouncements];
            appConfig.birthdays = [...tempBirthdays];
            appConfig.quotes = tempQuotes.length > 0 ? [...tempQuotes] : [...defaultAppConfig.quotes];
            appConfig.quote = appConfig.quotes[0].text;
            appConfig.quoteAuthor = appConfig.quotes[0].author;
            appConfig.specialDays = [...tempSpecialDays];
            appConfig.mediaPlaylist = [...tempMediaPlaylist];

            appConfig.birthdayWidget = {
                title: document.getElementById('input-bday-title').value.trim() || defaultAppConfig.birthdayWidget.title,
                cardSize: parseFloat(document.getElementById('input-bday-size').value) || 1,
                todaySubtitle: document.getElementById('input-bday-today-subtitle').value.trim() || defaultAppConfig.birthdayWidget.todaySubtitle,
                upcomingSubtitle: document.getElementById('input-bday-upcoming-subtitle').value.trim() || defaultAppConfig.birthdayWidget.upcomingSubtitle,
                celebrationDateLabel: document.getElementById('input-bday-celebration-label').value.trim() || defaultAppConfig.birthdayWidget.celebrationDateLabel,
                emptyText: document.getElementById('input-bday-empty-text').value.trim() || defaultAppConfig.birthdayWidget.emptyText,
                showUpcomingWhenEmpty: document.getElementById('input-bday-show-upcoming').checked,
                upcomingCount: parseInt(document.getElementById('input-bday-upcoming-count').value, 10) || 0
            };
            cancelEditBirthday();

            saveBellHoursFromInputs();
            appConfig.bellHours = bellHours;

            appConfig.moduleSettings = collectModuleSettingsFromAdmin();

            // Nöbet yerleri: boş etiketli satırları at, en az 1 nöbet yeri kalmasını garanti et
            const cleanedDutyPositions = (tempDutyPositions || [])
                .map(p => ({ id: p.id, label: (p.label || '').trim(), icon: p.icon || 'fa-user-shield', color: p.color || '#00b4d8' }))
                .filter(p => p.label);
            appConfig.dutyPositions = cleanedDutyPositions.length > 0 ? cleanedDutyPositions : JSON.parse(JSON.stringify(defaultAppConfig.dutyPositions));
            appConfig.dutyStyle = tempDutyStyle || appConfig.dutyStyle;

            localStorage.setItem('okulPanoDataV8', JSON.stringify(appConfig));
            renderPanoData();
            applyModuleSettingsToDashboard();
            startCyclingModuleIntervals();

            document.getElementById('admin-panel').classList.add('hidden');
            showCustomNotification("Başarılı", "Tüm sistem değişiklikleri başarıyla kaydedildi ve pano güncellendi.");
            writeCMSLog("Tüm pano değişiklikleri başarıyla kaydedildi.");
        }

        function resetPanoToDefaults() {
            askCustomConfirmation("Fabrika Ayarları", "Tüm pano verileri sıfırlanıp varsayılan ayarlara dönülecek. Onaylıyor musunuz?", function() {
                localStorage.removeItem('okulPanoDataV8');
                appConfig = JSON.parse(JSON.stringify(defaultAppConfig));
                bellHours = appConfig.bellHours;
                cancelEditBirthday();
                clearCustomColorVars();
                renderThemeClasses();
                applyModuleSettingsToDashboard();
                startCyclingModuleIntervals();
                renderPanoData();
                document.getElementById('admin-panel').classList.add('hidden');
                showCustomNotification("Sıfırlandı", "Pano varsayılan ayarlara başarıyla döndürüldü.");
                writeCMSLog("Sistem fabrika ayarlarına sıfırlandı.");
            });
        }

        function switchTab(tabId, el) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');

            const links = document.getElementById('cms-sidebar-links').getElementsByTagName('button');
            for (let link of links) {
                link.className = "w-full text-left px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg text-sm flex items-center gap-3 transition";
            }
            el.className = "w-full text-left px-4 py-3 bg-cyan-600 text-white font-bold rounded-lg text-sm flex items-center gap-3 transition shadow-lg shadow-cyan-600/10";
            writeCMSLog(`Sekme değiştirildi: ${tabId}`);
        }

        // Duyuru biçimlendirme form kontrollerinden mevcut ayarları okur
        function readAnnouncementFormatFromForm() {
            const colorEnabled = document.getElementById('new-announcement-color-enabled').checked;
            const bgEnabled = document.getElementById('new-announcement-bgcolor-enabled').checked;
            const fontSizeVal = parseInt(document.getElementById('new-announcement-fontsize').value, 10);
            return {
                color: colorEnabled ? document.getElementById('new-announcement-color').value : '',
                bgColor: bgEnabled ? document.getElementById('new-announcement-bgcolor').value : '',
                font: document.getElementById('new-announcement-font').value || '',
                fontSize: fontSizeVal && fontSizeVal > 0 ? fontSizeVal : 11,
                bold: document.getElementById('new-announcement-bold').checked
            };
        }

        // Form kontrollerini bir duyuru nesnesindeki değerlerle doldurur
        function writeAnnouncementFormatToForm(ann) {
            const colorEnabled = !!ann.color;
            const bgEnabled = !!ann.bgColor;
            document.getElementById('new-announcement-color-enabled').checked = colorEnabled;
            document.getElementById('new-announcement-color').value = ann.color || '#cbd5e1';
            document.getElementById('new-announcement-bgcolor-enabled').checked = bgEnabled;
            document.getElementById('new-announcement-bgcolor').value = ann.bgColor || '#0f172a';
            document.getElementById('new-announcement-font').value = ann.font || '';
            document.getElementById('new-announcement-fontsize').value = ann.fontSize || 11;
            document.getElementById('new-announcement-bold').checked = !!ann.bold;
        }

        // Formdaki mevcut ayarlara göre canlı önizlemeyi günceller
        function updateAnnouncementLivePreview() {
            const preview = document.getElementById('announcement-live-preview');
            const previewText = document.getElementById('announcement-live-preview-text');
            if (!preview || !previewText) return;
            const fmt = readAnnouncementFormatFromForm();
            const text = document.getElementById('new-announcement-input').value.trim();
            previewText.innerText = text || 'Yeni bir duyuru yazın...';

            preview.style.color = fmt.color || '';
            preview.style.fontFamily = fmt.font || '';
            preview.style.fontSize = fmt.fontSize ? `${fmt.fontSize}px` : '';
            preview.style.fontWeight = fmt.bold ? '700' : '';
            preview.style.backgroundColor = fmt.bgColor || 'transparent';
        }

        function renderAdminAnnouncements() {
            const wrapper = document.getElementById('admin-announcements-list-wrapper');
            wrapper.innerHTML = "";
            tempAnnouncements.forEach((ann, index) => {
                const row = document.createElement('div');
                row.className = 'flex justify-between items-center p-2 border-b border-slate-800/50 text-xs gap-2';
                const previewStyle = [
                    ann.color ? `color:${ann.color}` : '',
                    ann.font ? `font-family:${ann.font}` : '',
                    ann.fontSize ? `font-size:${Math.min(ann.fontSize, 16)}px` : '',
                    ann.bold ? `font-weight:700` : '',
                    ann.bgColor ? `background-color:${ann.bgColor};padding:2px 6px;border-radius:4px;` : ''
                ].filter(Boolean).join(';');
                row.innerHTML = `
                    <span class="text-slate-300 truncate max-w-xs" style="${previewStyle}">${index + 1}. ${escapeHtml(ann.text)}</span>
                    <div class="flex gap-1 shrink-0">
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveAnnouncement(${index}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveAnnouncement(${index}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editAnnouncement(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteAnnouncement(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });
        }

        function addAnnouncementToList() {
            const input = document.getElementById('new-announcement-input');
            const val = input.value.trim();
            if (!val) return;

            const fmt = readAnnouncementFormatFromForm();
            const annObj = { text: val, ...fmt };

            if (editingAnnouncementIndex !== -1) {
                tempAnnouncements[editingAnnouncementIndex] = annObj;
                writeCMSLog(`Duyuru güncellendi: ${val}`);
                cancelEditAnnouncement();
            } else {
                tempAnnouncements.push(annObj);
                writeCMSLog(`Yeni duyuru eklendi: ${val}`);
                input.value = "";
                document.getElementById('new-announcement-color-enabled').checked = false;
                document.getElementById('new-announcement-bgcolor-enabled').checked = false;
                document.getElementById('new-announcement-font').value = '';
                document.getElementById('new-announcement-fontsize').value = 11;
                document.getElementById('new-announcement-bold').checked = false;
                updateAnnouncementLivePreview();
            }
            renderAdminAnnouncements();
        }

        function editAnnouncement(index) {
            editingAnnouncementIndex = index;
            const ann = tempAnnouncements[index];
            const input = document.getElementById('new-announcement-input');
            input.value = ann.text;
            input.focus();
            writeAnnouncementFormatToForm(ann);
            updateAnnouncementLivePreview();
            const btn = document.getElementById('announcement-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            const title = document.getElementById('announcement-form-title');
            if (title) title.innerHTML = '<i class="fa-solid fa-pen text-cyan-400"></i> Duyuruyu Düzenle';
            const cancelBtn = document.getElementById('announcement-cancel-edit-btn');
            if (cancelBtn) cancelBtn.classList.remove('hidden');
        }

        function cancelEditAnnouncement() {
            editingAnnouncementIndex = -1;
            const input = document.getElementById('new-announcement-input');
            if (input) input.value = "";
            document.getElementById('new-announcement-color-enabled').checked = false;
            document.getElementById('new-announcement-bgcolor-enabled').checked = false;
            document.getElementById('new-announcement-font').value = '';
            document.getElementById('new-announcement-fontsize').value = 11;
            document.getElementById('new-announcement-bold').checked = false;
            updateAnnouncementLivePreview();
            const btn = document.getElementById('announcement-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
            const title = document.getElementById('announcement-form-title');
            if (title) title.innerHTML = '<i class="fa-solid fa-bullhorn text-red-500"></i> Duyuru Panosu Yönetimi';
            const cancelBtn = document.getElementById('announcement-cancel-edit-btn');
            if (cancelBtn) cancelBtn.classList.add('hidden');
        }

        function deleteAnnouncement(index) {
            tempAnnouncements.splice(index, 1);
            if (editingAnnouncementIndex === index) cancelEditAnnouncement();
            renderAdminAnnouncements();
        }

        function moveAnnouncement(index, direction) {
            const targetIndex = index + direction;
            if (targetIndex >= 0 && targetIndex < tempAnnouncements.length) {
                const temp = tempAnnouncements[index];
                tempAnnouncements[index] = tempAnnouncements[targetIndex];
                tempAnnouncements[targetIndex] = temp;
                renderAdminAnnouncements();
            }
        }

        function renderAdminBirthdays() {
            const wrapper = document.getElementById('admin-birthdays-list-wrapper');
            wrapper.innerHTML = "";
            // Artık geçerli olmayan (silinmiş) indeksleri seçim kümesinden temizle
            selectedBirthdayIndices.forEach(i => { if (i >= tempBirthdays.length) selectedBirthdayIndices.delete(i); });

            tempBirthdays.forEach((bday, index) => {
                const row = document.createElement('div');
                row.className = 'flex justify-between items-center p-2 border-b border-slate-800/50 text-xs gap-2';
                row.innerHTML = `
                    <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer">
                        <input type="checkbox" class="birthday-row-checkbox shrink-0" data-index="${index}" ${selectedBirthdayIndices.has(index) ? 'checked' : ''} onchange="toggleBirthdaySelect(${index}, this.checked)">
                        <span class="text-slate-300 truncate"><i class="fa-solid fa-cake-candles text-amber-500 mr-1.5"></i> ${escapeHtml(bday.class)} - ${escapeHtml(bday.name)} (${escapeHtml(bday.date)})</span>
                    </label>
                    <div class="flex gap-1 shrink-0">
                        <button class="p-1 hover:bg-slate-800 rounded text-cyan-400" onclick="editBirthday(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteBirthday(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });

            updateBirthdayBulkDeleteUI();
        }

        // Bir doğum günü satırının toplu-seçim durumunu günceller
        function toggleBirthdaySelect(index, checked) {
            if (checked) selectedBirthdayIndices.add(index);
            else selectedBirthdayIndices.delete(index);
            updateBirthdayBulkDeleteUI();
        }

        // "Tümünü Seç" kutusu değiştirildiğinde tüm satırları seçer/kaldırır
        function toggleBirthdaySelectAll(checked) {
            selectedBirthdayIndices.clear();
            if (checked) {
                tempBirthdays.forEach((_, index) => selectedBirthdayIndices.add(index));
            }
            renderAdminBirthdays();
        }

        // Seçim sayısına göre "Seçilenleri Sil" butonunun durumunu ve "Tümünü Seç" kutusunu günceller
        function updateBirthdayBulkDeleteUI() {
            const countEl = document.getElementById('birthday-selected-count');
            const btn = document.getElementById('birthday-bulk-delete-btn');
            const selectAllBox = document.getElementById('birthday-select-all');
            if (countEl) countEl.innerText = selectedBirthdayIndices.size;
            if (btn) btn.disabled = selectedBirthdayIndices.size === 0;
            if (selectAllBox) selectAllBox.checked = tempBirthdays.length > 0 && selectedBirthdayIndices.size === tempBirthdays.length;
        }

        // Seçilen tüm doğum günü kayıtlarını onay alarak topluca siler
        function bulkDeleteBirthdays() {
            if (selectedBirthdayIndices.size === 0) return;
            const count = selectedBirthdayIndices.size;
            askCustomConfirmation("Toplu Silme", `Seçili ${count} doğum günü kaydını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`, function() {
                tempBirthdays = tempBirthdays.filter((_, index) => !selectedBirthdayIndices.has(index));
                selectedBirthdayIndices.clear();
                cancelEditBirthday();
                renderAdminBirthdays();
                writeCMSLog(`${count} doğum günü kaydı toplu olarak silindi.`);
            });
        }

        function addBirthdayToList() {
            const cls = document.getElementById('new-birthday-class').value;
            const name = document.getElementById('new-birthday-name').value.trim();
            const date = document.getElementById('new-birthday-date').value.trim();
            
            if (name && date) {
                if (editingBirthdayIndex !== -1) {
                    tempBirthdays[editingBirthdayIndex] = { class: cls, name: name, date: date };
                    writeCMSLog(`Doğum günü güncellendi: ${cls} - ${name} (${date})`);
                    cancelEditBirthday();
                } else {
                    tempBirthdays.push({ class: cls, name: name, date: date });
                    document.getElementById('new-birthday-name').value = "";
                    document.getElementById('new-birthday-date').value = "";
                    writeCMSLog(`Doğum günü eklendi: ${cls} - ${name} (${date})`);
                }
                renderAdminBirthdays();
            } else {
                showCustomNotification("Giriş Hatası", "Lütfen tüm doğum günü alanlarını doldurun (Tarih formatı GG.AA olmalıdır).");
            }
        }

        function editBirthday(index) {
            const bday = tempBirthdays[index];
            if (!bday) return;
            editingBirthdayIndex = index;
            document.getElementById('new-birthday-class').value = bday.class;
            document.getElementById('new-birthday-name').value = bday.name;
            document.getElementById('new-birthday-date').value = bday.date;

            document.getElementById('birthday-form-title').innerHTML = '<i class="fa-solid fa-pen text-yellow-400"></i> Doğum Günü Kaydını Düzenle';
            document.getElementById('birthday-submit-btn').innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
            document.getElementById('birthday-submit-btn').className = 'px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg text-xs hover:bg-yellow-600';
            document.getElementById('birthday-cancel-edit-btn').classList.remove('hidden');
        }

        function cancelEditBirthday() {
            editingBirthdayIndex = -1;
            document.getElementById('new-birthday-name').value = "";
            document.getElementById('new-birthday-date').value = "";
            document.getElementById('birthday-form-title').innerHTML = '<i class="fa-solid fa-pen text-cyan-400"></i> Manuel Doğum Günü Ekle';
            document.getElementById('birthday-submit-btn').innerHTML = '<i class="fa-solid fa-plus"></i>';
            document.getElementById('birthday-submit-btn').className = 'px-4 py-2 bg-emerald-500 text-white font-bold rounded-lg text-xs hover:bg-emerald-600';
            document.getElementById('birthday-cancel-edit-btn').classList.add('hidden');
        }

        function deleteBirthday(index) {
            tempBirthdays.splice(index, 1);
            if (editingBirthdayIndex === index) {
                cancelEditBirthday();
            } else if (editingBirthdayIndex > index) {
                editingBirthdayIndex--;
            }
            // Seçim kümesindeki indeksleri kaydırılan listeye göre yeniden hizala
            const newSelection = new Set();
            selectedBirthdayIndices.forEach(i => {
                if (i === index) return;
                newSelection.add(i > index ? i - 1 : i);
            });
            selectedBirthdayIndices = newSelection;
            renderAdminBirthdays();
        }

        function renderAdminQuotes() {
            const wrapper = document.getElementById('admin-quotes-list-wrapper');
            if (!wrapper) return;
            wrapper.innerHTML = "";
            if (tempQuotes.length === 0) {
                wrapper.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">Henüz kayıtlı söz yok.</div>`;
                return;
            }
            tempQuotes.forEach((q, index) => {
                const row = document.createElement('div');
                row.className = 'flex justify-between items-center gap-2 p-2 border-b border-slate-800/50 text-xs';
                row.innerHTML = `
                    <span class="text-slate-300 flex-1 truncate">
                        ${q.date ? `<span class="text-purple-400 font-mono font-bold mr-1">[${q.date}]</span>` : ''}
                        <i class="fa-solid fa-quote-left text-slate-500 mr-1"></i> ${q.text} ${q.author ? `<span class="text-cyan-400">— ${q.author}</span>` : ''}
                    </span>
                    <div class="flex gap-1 flex-shrink-0">
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editQuote(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteQuote(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });
        }

        function addQuoteToList() {
            const date = document.getElementById('new-quote-date').value.trim();
            const text = document.getElementById('new-quote-text').value.trim();
            const author = document.getElementById('new-quote-author').value.trim();

            if (text) {
                if (editingQuoteIndex !== -1) {
                    tempQuotes[editingQuoteIndex] = { text, author, date };
                    writeCMSLog(`Söz güncellendi: "${text}"${author ? ' - ' + author : ''}`);
                    cancelEditQuote();
                } else {
                    tempQuotes.push({ text, author, date });
                    writeCMSLog(`Yeni söz eklendi: "${text}"${author ? ' - ' + author : ''}`);
                }
                document.getElementById('new-quote-date').value = "";
                document.getElementById('new-quote-text').value = "";
                document.getElementById('new-quote-author').value = "";
                renderAdminQuotes();
            } else {
                showCustomNotification("Giriş Hatası", "Lütfen en azından söz metnini giriniz.");
            }
        }

        function editQuote(index) {
            const q = tempQuotes[index];
            if (!q) return;
            editingQuoteIndex = index;
            document.getElementById('new-quote-date').value = q.date || "";
            document.getElementById('new-quote-text').value = q.text || "";
            document.getElementById('new-quote-author').value = q.author || "";
            const btn = document.getElementById('quote-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
        }

        function cancelEditQuote() {
            editingQuoteIndex = -1;
            const btn = document.getElementById('quote-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        }

        function deleteQuote(index) {
            tempQuotes.splice(index, 1);
            if (editingQuoteIndex === index) cancelEditQuote();
            renderAdminQuotes();
        }

        function renderAdminSpecialDays() {
            const wrapper = document.getElementById('admin-specialdays-list-wrapper');
            wrapper.innerHTML = "";
            if (tempSpecialDays.length === 0) {
                wrapper.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">Henüz kayıtlı belirli gün/hafta yok.</div>`;
                return;
            }
            tempSpecialDays.forEach((day, index) => {
                const range = (day.startDate || day.endDate)
                    ? `<span class="text-rose-400 font-mono font-bold ml-1">[${day.startDate || '?'} - ${day.endDate || '?'}]</span>`
                    : '';
                const row = document.createElement('div');
                row.className = 'flex justify-between items-center p-2 border-b border-slate-800/50 text-xs';
                row.innerHTML = `
                    <span class="text-slate-300 flex-1 truncate"><i class="fa-solid fa-calendar-day text-rose-500 mr-1.5"></i> ${day.title}${range}</span>
                    <div class="flex gap-1 flex-shrink-0">
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editSpecialDay(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteSpecialDay(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });
        }

        function addSpecialDayToList() {
            const input = document.getElementById('new-specialday-input');
            const startInput = document.getElementById('new-specialday-start');
            const endInput = document.getElementById('new-specialday-end');
            const val = input.value.trim();
            const startDate = startInput ? startInput.value.trim() : "";
            const endDate = endInput ? endInput.value.trim() : "";
            if (val) {
                if (editingSpecialDayIndex !== -1) {
                    tempSpecialDays[editingSpecialDayIndex] = { title: val, startDate, endDate };
                    writeCMSLog(`Belirli gün/hafta kaydı güncellendi: ${val}`);
                    cancelEditSpecialDay();
                } else {
                    tempSpecialDays.push({ title: val, startDate, endDate });
                    writeCMSLog(`Belirli gün/hafta kaydı eklendi: ${val}`);
                }
                input.value = "";
                if (startInput) startInput.value = "";
                if (endInput) endInput.value = "";
                renderAdminSpecialDays();
            }
        }

        function editSpecialDay(index) {
            const day = tempSpecialDays[index];
            if (!day) return;
            editingSpecialDayIndex = index;
            document.getElementById('new-specialday-input').value = day.title || "";
            const startInput = document.getElementById('new-specialday-start');
            const endInput = document.getElementById('new-specialday-end');
            if (startInput) startInput.value = day.startDate || "";
            if (endInput) endInput.value = day.endDate || "";
            const btn = document.getElementById('specialday-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
        }

        function cancelEditSpecialDay() {
            editingSpecialDayIndex = -1;
            const btn = document.getElementById('specialday-submit-btn');
            if (btn) btn.innerHTML = 'Ekle';
        }

        function deleteSpecialDay(index) {
            tempSpecialDays.splice(index, 1);
            if (editingSpecialDayIndex === index) cancelEditSpecialDay();
            renderAdminSpecialDays();
        }

        function renderAdminMediaPlaylist() {
            const container = document.getElementById('admin-media-playlist');
            container.innerHTML = "";
            tempMediaPlaylist.forEach((slide, index) => {
                const row = document.createElement('div');
                row.className = `flex gap-2 items-center p-2 border border-slate-800 rounded-lg text-[11px] bg-slate-900/50 ${index === editingMediaSlideIndex ? 'ring-1 ring-cyan-500' : ''}`;
                row.innerHTML = `
                    <img src="${slide.url}" class="w-10 h-10 object-cover rounded-lg border border-slate-800">
                    <div class="flex-1 truncate">
                        <div class="font-bold text-white truncate">${slide.caption}</div>
                    </div>
                    <div class="flex gap-1">
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveMediaSlide(${index}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveMediaSlide(${index}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editMediaSlide(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 text-red-400 hover:bg-red-500/20 rounded" onclick="deleteMediaSlide(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                container.appendChild(row);
            });
        }

        function addMediaSlide() {
            const urlInput = document.getElementById('input-media-url');
            const captionInput = document.getElementById('input-media-caption');
            const url = urlInput.value.trim();
            const caption = captionInput.value.trim();

            if (url && caption) {
                if (editingMediaSlideIndex !== -1) {
                    tempMediaPlaylist[editingMediaSlideIndex] = { url, caption };
                    writeCMSLog(`Medya slaytı güncellendi: ${caption}`);
                    cancelEditMediaSlide();
                } else {
                    tempMediaPlaylist.push({ url, caption });
                    writeCMSLog(`Medya listesine slayt eklendi: ${caption}`);
                }
                urlInput.value = "";
                captionInput.value = "";
                renderAdminMediaPlaylist();
            } else {
                showCustomNotification("Hata", "Lütfen tüm görsel verilerini eksiksiz girin.");
            }
        }

        function editMediaSlide(index) {
            editingMediaSlideIndex = index;
            const slide = tempMediaPlaylist[index];
            document.getElementById('input-media-url').value = slide.url || "";
            document.getElementById('input-media-caption').value = slide.caption || "";
            const btn = document.getElementById('media-slide-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Güncelle';
            renderAdminMediaPlaylist();
        }

        function cancelEditMediaSlide() {
            editingMediaSlideIndex = -1;
            const btn = document.getElementById('media-slide-submit-btn');
            if (btn) btn.innerText = 'Slayda Ekle';
        }

        function deleteMediaSlide(index) {
            tempMediaPlaylist.splice(index, 1);
            if (editingMediaSlideIndex === index) cancelEditMediaSlide();
            renderAdminMediaPlaylist();
        }

        function moveMediaSlide(index, direction) {
            const targetIndex = index + direction;
            if (targetIndex >= 0 && targetIndex < tempMediaPlaylist.length) {
                const temp = tempMediaPlaylist[index];
                tempMediaPlaylist[index] = tempMediaPlaylist[targetIndex];
                tempMediaPlaylist[targetIndex] = temp;
                renderAdminMediaPlaylist();
            }
        }

        // ===================== AYIN TEMİZ SINIFI - LİSTE YÖNETİMİ =====================
        function renderAdminCleanClassList() {
            const wrapper = document.getElementById('admin-cleanclass-list-wrapper');
            const countLabel = document.getElementById('cleanclass-count-label');
            wrapper.innerHTML = "";
            countLabel.innerText = `${tempCleanClassList.length} kayıt`;
            tempCleanClassList.forEach((rec, index) => {
                const row = document.createElement('div');
                row.className = `flex gap-2 items-center p-2 border-b border-slate-800/50 text-xs ${rec.active === false ? 'opacity-50' : ''}`;
                row.innerHTML = `
                    <img src="${rec.img || 'https://placehold.co/60x60/070b13/fff?text=?'}" class="w-9 h-9 object-cover rounded-lg border border-slate-800">
                    <div class="flex-1 truncate">
                        <div class="font-bold text-white truncate">${rec.title || '(Başlıksız)'}</div>
                    </div>
                    <button class="px-2 py-1 rounded-full text-[10px] font-bold ${rec.active === false ? 'bg-slate-800 text-slate-400' : 'bg-emerald-500/20 text-emerald-400'}" onclick="toggleCleanClassActive(${index})">${rec.active === false ? 'Pasif' : 'Aktif'}</button>
                    <div class="flex gap-1">
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveCleanClassRecord(${index}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveCleanClassRecord(${index}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editCleanClassRecord(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteCleanClassRecord(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });
        }

        function addCleanClassRecord() {
            const titleInput = document.getElementById('input-cleanclass-title');
            const imgInput = document.getElementById('input-cleanclass-img');
            const title = titleInput.value.trim();
            const img = imgInput.value.trim();

            if (!title) {
                showCustomNotification("Hata", "Lütfen sınıf / başlık alanını doldurun.");
                return;
            }

            if (editingCleanClassIndex !== -1) {
                tempCleanClassList[editingCleanClassIndex].title = title;
                tempCleanClassList[editingCleanClassIndex].img = img;
                writeCMSLog(`Ayın Temiz Sınıfı kaydı güncellendi: ${title}`);
                cancelEditCleanClass();
            } else {
                tempCleanClassList.push({ title, img, active: true });
                writeCMSLog(`Ayın Temiz Sınıfı listesine yeni kayıt eklendi: ${title}`);
            }
            titleInput.value = "";
            imgInput.value = "";
            renderAdminCleanClassList();
        }

        function editCleanClassRecord(index) {
            editingCleanClassIndex = index;
            const rec = tempCleanClassList[index];
            document.getElementById('input-cleanclass-title').value = rec.title || "";
            document.getElementById('input-cleanclass-img').value = rec.img || "";
            const btn = document.getElementById('cleanclass-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Güncelle';
        }

        function cancelEditCleanClass() {
            editingCleanClassIndex = -1;
            const btn = document.getElementById('cleanclass-submit-btn');
            if (btn) btn.innerText = 'Listeye Ekle';
        }

        function deleteCleanClassRecord(index) {
            tempCleanClassList.splice(index, 1);
            if (editingCleanClassIndex === index) cancelEditCleanClass();
            renderAdminCleanClassList();
        }

        function moveCleanClassRecord(index, direction) {
            const targetIndex = index + direction;
            if (targetIndex >= 0 && targetIndex < tempCleanClassList.length) {
                const temp = tempCleanClassList[index];
                tempCleanClassList[index] = tempCleanClassList[targetIndex];
                tempCleanClassList[targetIndex] = temp;
                renderAdminCleanClassList();
            }
        }

        function toggleCleanClassActive(index) {
            tempCleanClassList[index].active = tempCleanClassList[index].active === false ? true : false;
            renderAdminCleanClassList();
        }

        // ===================== AYIN ÖRNEK ÖĞRENCİSİ - LİSTE YÖNETİMİ =====================
        function renderAdminBestStudentList() {
            const wrapper = document.getElementById('admin-beststudent-list-wrapper');
            const countLabel = document.getElementById('beststudent-count-label');
            wrapper.innerHTML = "";
            countLabel.innerText = `${tempBestStudentList.length} kayıt`;
            tempBestStudentList.forEach((rec, index) => {
                const row = document.createElement('div');
                row.className = `flex gap-2 items-center p-2 border-b border-slate-800/50 text-xs ${rec.active === false ? 'opacity-50' : ''}`;
                row.innerHTML = `
                    <img src="${rec.img || 'https://placehold.co/60x60/070b13/fff?text=?'}" class="w-9 h-9 object-cover rounded-lg border border-slate-800">
                    <div class="flex-1 truncate">
                        <div class="font-bold text-white truncate">${rec.title || '(Başlıksız)'}</div>
                    </div>
                    <button class="px-2 py-1 rounded-full text-[10px] font-bold ${rec.active === false ? 'bg-slate-800 text-slate-400' : 'bg-emerald-500/20 text-emerald-400'}" onclick="toggleBestStudentActive(${index})">${rec.active === false ? 'Pasif' : 'Aktif'}</button>
                    <div class="flex gap-1">
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveBestStudentRecord(${index}, -1)"><i class="fa-solid fa-arrow-up"></i></button>
                        <button class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white" onclick="moveBestStudentRecord(${index}, 1)"><i class="fa-solid fa-arrow-down"></i></button>
                        <button class="p-1 hover:bg-cyan-500/20 rounded text-cyan-400" onclick="editBestStudentRecord(${index})"><i class="fa-solid fa-pen"></i></button>
                        <button class="p-1 hover:bg-red-500/20 rounded text-red-400" onclick="deleteBestStudentRecord(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                wrapper.appendChild(row);
            });
        }

        function addBestStudentRecord() {
            const titleInput = document.getElementById('input-beststudent-title');
            const imgInput = document.getElementById('input-beststudent-img');
            const title = titleInput.value.trim();
            const img = imgInput.value.trim();

            if (!title) {
                showCustomNotification("Hata", "Lütfen öğrenci adı / sınıfı alanını doldurun.");
                return;
            }

            if (editingBestStudentIndex !== -1) {
                tempBestStudentList[editingBestStudentIndex].title = title;
                tempBestStudentList[editingBestStudentIndex].img = img;
                writeCMSLog(`Ayın Örnek Öğrencisi kaydı güncellendi: ${title}`);
                cancelEditBestStudent();
            } else {
                tempBestStudentList.push({ title, img, active: true });
                writeCMSLog(`Ayın Örnek Öğrencisi listesine yeni kayıt eklendi: ${title}`);
            }
            titleInput.value = "";
            imgInput.value = "";
            renderAdminBestStudentList();
        }

        function editBestStudentRecord(index) {
            editingBestStudentIndex = index;
            const rec = tempBestStudentList[index];
            document.getElementById('input-beststudent-title').value = rec.title || "";
            document.getElementById('input-beststudent-img').value = rec.img || "";
            const btn = document.getElementById('beststudent-submit-btn');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Güncelle';
        }

        function cancelEditBestStudent() {
            editingBestStudentIndex = -1;
            const btn = document.getElementById('beststudent-submit-btn');
            if (btn) btn.innerText = 'Listeye Ekle';
        }

        function deleteBestStudentRecord(index) {
            tempBestStudentList.splice(index, 1);
            if (editingBestStudentIndex === index) cancelEditBestStudent();
            renderAdminBestStudentList();
        }

        function moveBestStudentRecord(index, direction) {
            const targetIndex = index + direction;
            if (targetIndex >= 0 && targetIndex < tempBestStudentList.length) {
                const temp = tempBestStudentList[index];
                tempBestStudentList[index] = tempBestStudentList[targetIndex];
                tempBestStudentList[targetIndex] = temp;
                renderAdminBestStudentList();
            }
        }

        function toggleBestStudentActive(index) {
            tempBestStudentList[index].active = tempBestStudentList[index].active === false ? true : false;
            renderAdminBestStudentList();
        }

        function buildAdminClassSelector() {
            const container = document.getElementById('schedule-class-badge-container');
            container.innerHTML = "";
            classList.forEach(className => {
                const btn = document.createElement('button');
                btn.className = `px-3 py-1.5 rounded-lg text-xs font-bold transition border border-slate-800 ${className === activeAdminEditClass ? 'bg-yellow-500 text-black' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`;
                btn.innerText = className;
                btn.onclick = function() {
                    saveWeeklyScheduleMatrix();
                    activeAdminEditClass = className;
                    buildAdminClassSelector();
                    buildWeeklyScheduleMatrix();
                };
                container.appendChild(btn);
            });
        }

        /* HAFTALIK TOPLU DERS PROGRAMI MATRİSİ */
        function buildWeeklyScheduleMatrix() {
            const thead = document.getElementById('weekly-schedule-matrix-head');
            const tbody = document.getElementById('weekly-schedule-matrix-body');
            const title = document.getElementById('schedule-matrix-title');
            
            title.innerText = `${activeAdminEditClass} Sınıfı Haftalık Ders Programı Matrisi`;

            // Başlık satırını (Gün + N. Ders sütunları) mevcut ders saati (bellHours) sayısına göre dinamik üret
            if (thead) {
                thead.innerHTML = `
                    <tr class="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th class="p-2">Gün</th>
                        ${bellHours.map(bell => `
                            <th class="p-2 text-center whitespace-nowrap">
                                ${bell.id}. Ders
                                <button type="button" class="ml-1 text-red-400/70 hover:text-red-400" title="Bu ders saatini sil" onclick="removeLessonPeriod(${bell.id})"><i class="fa-solid fa-trash-can"></i></button>
                            </th>
                        `).join('')}
                    </tr>`;
            }

            tbody.innerHTML = "";

            const classWeek = appConfig.weeklyClassSchedules[activeAdminEditClass] || {};

            daysOfWeek.forEach((day) => {
                const schedule = classWeek[day] || Array(bellHours.length).fill("");
                const tr = document.createElement('tr');
                tr.className = "border-b border-slate-800/60 hover:bg-slate-900/50";
                
                let inputsHtml = `<td class="p-2 font-bold text-cyan-400">${day}</td>`;
                for (let i = 1; i <= bellHours.length; i++) {
                    inputsHtml += `
                        <td class="p-1">
                            <input type="text" id="matrix-${day}-${i}" value="${schedule[i-1] || ''}" 
                            class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-center text-xs text-white focus:border-cyan-500 outline-none">
                        </td>
                    `;
                }
                tr.innerHTML = inputsHtml;
                tbody.appendChild(tr);
            });
        }

        function saveWeeklyScheduleMatrix() {
            if (!appConfig.weeklyClassSchedules[activeAdminEditClass]) {
                appConfig.weeklyClassSchedules[activeAdminEditClass] = {};
            }

            daysOfWeek.forEach((day) => {
                const lessons = [];
                for (let i = 1; i <= bellHours.length; i++) {
                    const input = document.getElementById(`matrix-${day}-${i}`);
                    if (input) lessons.push(input.value.trim());
                }
                if (lessons.length > 0) appConfig.weeklyClassSchedules[activeAdminEditClass][day] = lessons;
            });
        }

        /* HAFTALIK / AYLIK NÖBET TABLOSU (eski haftalık — geriye dönük uyumluluk için korundu) */
        function buildWeeklyDutiesTable() {
            const tbody = document.getElementById('weekly-duties-table-body');
            if (!tbody) return; // Artık DOM'da yok, güvenli çık

            daysOfWeek.forEach((day) => {
                const duties = appConfig.weeklyDuties[day] || { admin: "", canteen: "", garden: "", floor1: "", floor2: "" };
                const tr = document.createElement('tr');
                tr.className = "border-b border-slate-800/60 hover:bg-slate-900/50";
                
                tr.innerHTML = `
                    <td class="p-2 font-bold text-yellow-400">${day}</td>
                    <td class="p-1"><input type="text" id="duty-${day}-admin" value="${duties.admin || ''}" class="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white"></td>
                    <td class="p-1"><input type="text" id="duty-${day}-canteen" value="${duties.canteen || ''}" class="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white"></td>
                    <td class="p-1"><input type="text" id="duty-${day}-garden" value="${duties.garden || ''}" class="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white"></td>
                    <td class="p-1"><input type="text" id="duty-${day}-floor1" value="${duties.floor1 || ''}" class="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white"></td>
                    <td class="p-1"><input type="text" id="duty-${day}-floor2" value="${duties.floor2 || ''}" class="w-full bg-slate-900 border border-slate-800 rounded p-1.5 text-xs text-white"></td>
                `;
                tbody.appendChild(tr);
            });
        }

        function saveWeeklyDutiesTable() {
            daysOfWeek.forEach((day) => {
                appConfig.weeklyDuties[day] = {
                    admin: document.getElementById(`duty-${day}-admin`) ? document.getElementById(`duty-${day}-admin`).value.trim() : "",
                    canteen: document.getElementById(`duty-${day}-canteen`) ? document.getElementById(`duty-${day}-canteen`).value.trim() : "",
                    garden: document.getElementById(`duty-${day}-garden`) ? document.getElementById(`duty-${day}-garden`).value.trim() : "",
                    floor1: document.getElementById(`duty-${day}-floor1`) ? document.getElementById(`duty-${day}-floor1`).value.trim() : "",
                    floor2: document.getElementById(`duty-${day}-floor2`) ? document.getElementById(`duty-${day}-floor2`).value.trim() : ""
                };
            });
        }

        function buildAdminBellHoursInputs() {
            const container = document.getElementById('admin-bell-hours-inputs');
            container.innerHTML = '';
            bellHours.forEach(bell => {
                const div = document.createElement('div');
                div.className = 'bg-slate-950 border border-slate-850 p-3 rounded-xl flex flex-col justify-between';
                div.innerHTML = `
                    <div class="flex items-center justify-between mb-1.5">
                        <h4 class="text-xs font-bold text-yellow-500">${bell.id}. Ders Zili</h4>
                        <button type="button" class="bell-remove-btn text-red-400 hover:text-red-300 text-[10px] px-1.5 py-0.5 rounded hover:bg-red-500/10" title="Bu ders saatini sil" ${bellHours.length <= 1 ? 'disabled style="opacity:.25;cursor:not-allowed;"' : ''}><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="text-[10px] text-slate-500 block">Başlangıç</label>
                            <input type="text" id="bell-start-${bell.id}" value="${bell.start}" class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-center font-mono text-xs text-white">
                        </div>
                        <div>
                            <label class="text-[10px] text-slate-500 block">Bitiş</label>
                            <input type="text" id="bell-end-${bell.id}" value="${bell.end}" class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-center font-mono text-xs text-white">
                        </div>
                    </div>
                `;
                container.appendChild(div);
                div.querySelector('.bell-remove-btn').addEventListener('click', () => removeLessonPeriod(bell.id));
            });
        }

        // Zil saati giriş/çıkış inputlarındaki güncel değerleri bellHours dizisine yazar
        // (yeniden çizim/ekleme/silme öncesi kullanıcının henüz kaydetmediği değerleri kaybetmemek için).
        function saveBellHoursFromInputs() {
            bellHours.forEach(bell => {
                const s = document.getElementById(`bell-start-${bell.id}`);
                const e = document.getElementById(`bell-end-${bell.id}`);
                if (s && e) { bell.start = s.value.trim(); bell.end = e.value.trim(); }
            });
        }

        // "SS:DD" formatındaki bir saate dakika ekler (24 saat içinde döner)
        function addMinutesToTimeStr(timeStr, minutes) {
            const parts = (timeStr || '08:00').split(':').map(Number);
            const h = parts[0] || 0, m = parts[1] || 0;
            let total = (h * 60 + m + minutes + 24 * 60) % (24 * 60);
            const hh = Math.floor(total / 60).toString().padStart(2, '0');
            const mm = (total % 60).toString().padStart(2, '0');
            return `${hh}:${mm}`;
        }

        // Yeni bir ders saati (zil) ekler ve TÜM sınıfların ders programına bu saate karşılık
        // gelen yeni (boş) bir sütun ekler — Zil Zamanlayıcı ile Ders Programı her zaman senkron kalır.
        function addLessonPeriod() {
            saveBellHoursFromInputs();
            saveWeeklyScheduleMatrix();

            const last = bellHours[bellHours.length - 1];
            let newStart = '08:40', newEnd = '09:20';
            if (last) {
                newStart = addMinutesToTimeStr(last.end, 10); // 10 dk teneffüs
                newEnd = addMinutesToTimeStr(newStart, 40);   // 40 dk ders
            }
            bellHours.push({ id: bellHours.length + 1, start: newStart, end: newEnd });

            // Tüm sınıfların tüm günlerine yeni (boş) ders sütunu ekle
            Object.keys(appConfig.weeklyClassSchedules || {}).forEach(cls => {
                Object.keys(appConfig.weeklyClassSchedules[cls] || {}).forEach(day => {
                    if (Array.isArray(appConfig.weeklyClassSchedules[cls][day])) {
                        appConfig.weeklyClassSchedules[cls][day].push('');
                    }
                });
            });

            appConfig.bellHours = bellHours;
            buildAdminBellHoursInputs();
            buildWeeklyScheduleMatrix();
            writeCMSLog(`Yeni ders saati eklendi: ${bellHours.length}. Ders (${newStart} - ${newEnd}). Kaydetmeyi unutmayın.`);
        }

        // Belirtilen ders saatini (zili) ve ona karşılık gelen ders programı sütununu
        // TÜM sınıflardan siler. En az 1 ders saati kalmasını garanti eder.
        function removeLessonPeriod(id) {
            if (bellHours.length <= 1) {
                showCustomNotification("Uyarı", "En az 1 ders saati kalmalıdır, bu son ders saati silinemez.");
                return;
            }
            const idx = bellHours.findIndex(b => b.id === id);
            if (idx === -1) return;

            askCustomConfirmation(
                'Ders Saatini Sil',
                `${idx + 1}. Ders saatini (${bellHours[idx].start} - ${bellHours[idx].end}) silmek istediğinize emin misiniz? Bu, zil zamanlayıcıdan ve TÜM sınıfların ders programından ilgili sütunu kaldırır.`,
                function () {
                    saveBellHoursFromInputs();
                    saveWeeklyScheduleMatrix();

                    bellHours.splice(idx, 1);
                    // Kalan ders saatlerini 1..N olacak şekilde yeniden numaralandır
                    bellHours.forEach((b, i) => { b.id = i + 1; });

                    // Tüm sınıfların tüm günlerinden ilgili sütunu (aynı indeks) çıkar
                    Object.keys(appConfig.weeklyClassSchedules || {}).forEach(cls => {
                        Object.keys(appConfig.weeklyClassSchedules[cls] || {}).forEach(day => {
                            if (Array.isArray(appConfig.weeklyClassSchedules[cls][day])) {
                                appConfig.weeklyClassSchedules[cls][day].splice(idx, 1);
                            }
                        });
                    });

                    appConfig.bellHours = bellHours;
                    buildAdminBellHoursInputs();
                    buildWeeklyScheduleMatrix();
                    writeCMSLog(`Ders saati silindi. Toplam ders saati: ${bellHours.length}. Kaydetmeyi unutmayın.`);
                }
            );
        }

        /* =========================================
           AYLIK NÖBET ÇİZELGESİ MANTIĞI
        ========================================= */
        let nobetAktifAy = new Date().getMonth(); // 0-11
        let nobetAktifYil = new Date().getFullYear();
        
        // appConfig'e aylık nöbet verisi alanı ekle (yoksa)
        if (!appConfig.aylikNobet) appConfig.aylikNobet = {};

        const TURKCE_AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
        const TURKCE_GUNLER_KISA = ["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"];
        const TURKCE_GUNLER_TAM = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

        function nobetAyAnahtari(yil, ay) {
            return `${yil}-${String(ay+1).padStart(2,'0')}`;
        }

        function nobetAyDegistir(yon) {
            // Önce mevcut ayı kaydet
            nobetAyiKaydet();
            nobetAktifAy += yon;
            if (nobetAktifAy > 11) { nobetAktifAy = 0; nobetAktifYil++; }
            if (nobetAktifAy < 0)  { nobetAktifAy = 11; nobetAktifYil--; }
            buildAylikNobetTablosu();
        }

        function buildAylikNobetTablosu() {
            const anahtar = nobetAyAnahtari(nobetAktifYil, nobetAktifAy);
            const ayVerisi = (appConfig.aylikNobet && appConfig.aylikNobet[anahtar]) || {};
            const positions = appConfig.dutyPositions || [];

            document.getElementById('nobet-ay-baslik').innerText = 
                `${TURKCE_AYLAR[nobetAktifAy].toUpperCase()} ${nobetAktifYil}`;

            // Başlık satırını nöbet yerleri listesine göre dinamik üret
            const thead = document.getElementById('nobet-aylik-tablo-head');
            if (thead) {
                thead.innerHTML = `
                    <tr class="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <th class="p-2 text-center w-10">Tarih</th>
                        <th class="p-2 text-center w-16">Gün</th>
                        ${positions.map(p => `<th class="p-2">${escapeHtml(p.label)}</th>`).join('')}
                    </tr>`;
            }

            const tbody = document.getElementById('nobet-aylik-tablo-body');
            tbody.innerHTML = '';

            // Ayın kaç gün olduğunu hesapla
            const ayinGunSayisi = new Date(nobetAktifYil, nobetAktifAy + 1, 0).getDate();
            const bugun = new Date();

            for (let gun = 1; gun <= ayinGunSayisi; gun++) {
                const tarih = new Date(nobetAktifYil, nobetAktifAy, gun);
                const haftaGunu = tarih.getDay(); // 0=Pazar, 6=Cmt
                
                // Hafta sonunu gri göster, okul günlerini normal
                const isMesaiGunu = haftaGunu >= 1 && haftaGunu <= 5;
                const gunKey = `${gun}`;
                const kayit = ayVerisi[gunKey] || {};
                
                const isToday = bugun.getFullYear() === nobetAktifYil && 
                                bugun.getMonth() === nobetAktifAy && 
                                bugun.getDate() === gun;

                const tr = document.createElement('tr');
                tr.className = `border-b border-slate-800/50 ${isToday ? 'bg-cyan-900/20' : (isMesaiGunu ? 'hover:bg-slate-900/40' : 'opacity-40 bg-slate-950')}`;
                
                const tarihStr = `${String(gun).padStart(2,'0')}.${String(nobetAktifAy+1).padStart(2,'0')}`;
                const gunAdi = TURKCE_GUNLER_KISA[haftaGunu];
                const todayMark = isToday ? ' <span class="text-cyan-400">●</span>' : '';

                if (isMesaiGunu) {
                    const cols = positions.map(p => `
                        <td class="p-1"><input type="text" data-gun="${gunKey}" data-alan="${p.id}" value="${escapeHtml(kayit[p.id] || '')}" placeholder="—" class="nobet-input w-full bg-slate-900 border border-slate-800 rounded p-1 text-xs text-white focus:border-cyan-500 outline-none"></td>
                    `).join('');
                    tr.innerHTML = `
                        <td class="p-1.5 text-center font-mono font-bold text-slate-300 text-xs">${tarihStr}${todayMark}</td>
                        <td class="p-1.5 text-center font-bold text-yellow-400 text-xs">${gunAdi}</td>
                        ${cols}
                    `;
                } else {
                    tr.innerHTML = `
                        <td class="p-1.5 text-center font-mono text-slate-500 text-xs">${tarihStr}</td>
                        <td class="p-1.5 text-center font-bold text-slate-500 text-xs">${gunAdi}</td>
                        <td colspan="${Math.max(positions.length, 1)}" class="p-1.5 text-center text-slate-600 text-xs italic">Tatil Günü</td>
                    `;
                }
                tbody.appendChild(tr);
            }
        }

        function nobetAyiKaydet() {
            const anahtar = nobetAyAnahtari(nobetAktifYil, nobetAktifAy);
            if (!appConfig.aylikNobet) appConfig.aylikNobet = {};
            const ayVerisi = {};
            document.querySelectorAll('.nobet-input').forEach(input => {
                const gun = input.dataset.gun;
                const alan = input.dataset.alan;
                if (!ayVerisi[gun]) ayVerisi[gun] = {};
                ayVerisi[gun][alan] = input.value.trim();
            });
            appConfig.aylikNobet[anahtar] = ayVerisi;
        }

        function nobetAyiTemizle() {
            const anahtar = nobetAyAnahtari(nobetAktifYil, nobetAktifAy);
            askCustomConfirmation(
                'Ayı Temizle',
                `${TURKCE_AYLAR[nobetAktifAy]} ${nobetAktifYil} ayına ait tüm nöbet verileri silinecek. Onaylıyor musunuz?`,
                function() {
                    if (appConfig.aylikNobet) delete appConfig.aylikNobet[anahtar];
                    buildAylikNobetTablosu();
                    writeCMSLog(`${TURKCE_AYLAR[nobetAktifAy]} ${nobetAktifYil} nöbet verileri temizlendi.`);
                }
            );
        }

        // Excel seri numarasını veya string tarihi JS Date'e çevirir
        function excelTarihCevir(val) {
            if (!val && val !== 0) return null;
            if (val instanceof Date) return isNaN(val) ? null : val;
            if (typeof val === 'number') {
                // Excel epoch: 1 Ocak 1900 = 1, ama 1900 yılı hata nedeniyle 61'den başlar
                const d = new Date(Math.round((val - 25569) * 86400 * 1000));
                return isNaN(d) ? null : d;
            }
            const s = String(val).trim();
            if (!s) return null;
            // GG.AA.YYYY veya GG/AA/YYYY
            let m = s.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);
            if (m) return new Date(+m[3], +m[2]-1, +m[1]);
            // YYYY-MM-DD
            m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
            if (m) return new Date(+m[1], +m[2]-1, +m[3]);
            // GG.AA (yıl yok → aktif yıl)
            m = s.match(/^(\d{1,2})[./](\d{1,2})$/);
            if (m) return new Date(nobetAktifYil, +m[2]-1, +m[1]);
            return null;
        }

        // Bilinen (fabrika ayarı) nöbet yerleri için esnek başlık tanıma kalıpları.
        const DUTY_LEGACY_HEADER_PATTERNS = {
            kantin:  /kantin/i,
            bahce:   /bahçe|bahce|bahçesi/i,
            zemin:   /zemin|giriş|giris|0\.?\s*kat/i,
            kat1:    /1\.?\s*kat/i,
            kat2:    /2\.?\s*kat/i,
            idareci: /idareci|müdür|mudur|nöbetçi\s*i|nobetci\s*i/i
        };

        const LEGACY_DUTY_IDS = ['idareci', 'kantin', 'bahce', 'zemin', 'kat1', 'kat2'];
        function isUsingLegacyDefaultDutyIds() {
            const ids = (appConfig.dutyPositions || []).map(p => p.id);
            return LEGACY_DUTY_IDS.every(id => ids.includes(id));
        }

        // Başlık satırında hangi sütunun hangi nöbet yerine ait olduğunu bulur.
        // Kullanıcının sonradan eklediği/yeniden adlandırdığı nöbet yerleri için
        // sütun etiketi doğrudan nöbet yerinin adına göre tanınır.
        function nobetSutunAlgila(headerRow) {
            const etiketler = {
                tarih: /tarih|date|gün no|günno/i,
                gun:   /^gün$|^gun$|weekday|day/i
            };
            (appConfig.dutyPositions || []).forEach(pos => {
                if (DUTY_LEGACY_HEADER_PATTERNS[pos.id]) {
                    etiketler[pos.id] = DUTY_LEGACY_HEADER_PATTERNS[pos.id];
                } else {
                    const escaped = String(pos.label || pos.id).trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    etiketler[pos.id] = new RegExp(escaped, 'i');
                }
            });
            const map = {};
            headerRow.forEach((cell, idx) => {
                const s = String(cell || '').trim();
                for (const [alan, re] of Object.entries(etiketler)) {
                    if (map[alan] === undefined && re.test(s)) map[alan] = idx;
                }
            });
            return map;
        }

        function nobetExcelYukle(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array', cellDates: false });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

                    if (!appConfig.aylikNobet) appConfig.aylikNobet = {};
                    let yuklenenSayisi = 0;
                    let hataSatir = 0;

                    // 1. Başlık satırını bul (ilk 10 satırda "Tarih" veya "Kantin" geçen satır)
                    let headerIdx = -1;
                    let sutunMap = {};
                    for (let i = 0; i < Math.min(10, jsonData.length); i++) {
                        const deneme = nobetSutunAlgila(jsonData[i]);
                        // En az tarih + 1 nöbet alanı varsa başlık kabul et
                        const alanlari = Object.keys(deneme);
                        if (deneme.tarih !== undefined && alanlari.length >= 2) {
                            headerIdx = i;
                            sutunMap = deneme;
                            break;
                        }
                        // Tarih olmadan da: en az 3 nöbet alanı varsa
                        if (alanlari.length >= 3) {
                            headerIdx = i;
                            sutunMap = deneme;
                            break;
                        }
                    }

                    // Başlık bulunamadıysa şablon formatını dene (sütun sırası: Tarih|Gün|Kantin|Bahçe|Zemin|1.Kat|2.Kat|İdareci)
                    // veya eski okul formatı (col 2=tarih, col 4-9=alanlar). Bu sabit-sıra yedeği
                    // sadece nöbet yerleri hâlâ fabrika ayarındaki 6 kalemden oluşuyorsa denenir;
                    // kullanıcı nöbet yerlerini özelleştirdiyse yalnızca başlık eşleşmesine güvenilir.
                    const kullanSablonFormat = headerIdx === -1 && isUsingLegacyDefaultDutyIds();
                    
                    const baslangicIdx = headerIdx === -1 ? 0 : headerIdx + 1;
                    const positions = appConfig.dutyPositions || [];

                    for (let i = baslangicIdx; i < jsonData.length; i++) {
                        const row = jsonData[i];
                        if (!row || row.every(c => c === '' || c === null || c === undefined)) continue;

                        let tarih = null;
                        const kayit = {};

                        if (headerIdx !== -1 && sutunMap.tarih !== undefined) {
                            // Başlık tabanlı okuma: her nöbet yeri, kendi sütun etiketinden bulunur
                            tarih = excelTarihCevir(row[sutunMap.tarih]);
                            positions.forEach(p => {
                                if (sutunMap[p.id] !== undefined) {
                                    kayit[p.id] = String(row[sutunMap[p.id]] ?? '').trim();
                                }
                            });
                        } else if (kullanSablonFormat) {
                            // Eski okul Excel formatı: col0=Tarih, col1=Gün, col2=Kantin, col3=Bahçe, col4=Zemin, col5=1.Kat, col6=2.Kat, col7=İdareci
                            // VEYA: col2=Tarih, col3=Gün, col4=Kantin... (5.satırdan başlayan eski format)
                            tarih = excelTarihCevir(row[0]) || excelTarihCevir(row[2]);
                            if (tarih && !isNaN(tarih)) {
                                const offset = excelTarihCevir(row[0]) ? 2 : 4;
                                kayit.kantin  = String(row[offset]   || '').trim();
                                kayit.bahce   = String(row[offset+1] || '').trim();
                                kayit.zemin   = String(row[offset+2] || '').trim();
                                kayit.kat1    = String(row[offset+3] || '').trim();
                                kayit.kat2    = String(row[offset+4] || '').trim();
                                kayit.idareci = String(row[offset+5] || '').trim();
                            }
                        }

                        if (!tarih || isNaN(tarih)) { hataSatir++; continue; }
                        // Anlamsız tarihleri atla (2000 öncesi veya 2100 sonrası)
                        if (tarih.getFullYear() < 2000 || tarih.getFullYear() > 2100) { hataSatir++; continue; }

                        const yil = tarih.getFullYear();
                        const ay  = tarih.getMonth();
                        const gun = tarih.getDate();
                        const ayAnahtar = nobetAyAnahtari(yil, ay);

                        if (!appConfig.aylikNobet[ayAnahtar]) appConfig.aylikNobet[ayAnahtar] = {};
                        // Aynı güne ait önceki kaydı koru, sadece Excel'de bulunan alanları güncelle
                        appConfig.aylikNobet[ayAnahtar][String(gun)] = { ...(appConfig.aylikNobet[ayAnahtar][String(gun)] || {}), ...kayit };
                        yuklenenSayisi++;
                    }

                    buildAylikNobetTablosu();
                    if (yuklenenSayisi > 0) {
                        showCustomNotification("Nöbet Yüklendi", `${yuklenenSayisi} adet nöbet kaydı aylık takvime aktarıldı.${hataSatir > 0 ? ` (${hataSatir} satır tarih okunamadı)` : ''}`);
                        writeCMSLog(`Nöbet Excel yüklendi: ${yuklenenSayisi} kayıt, ${hataSatir} atlandı.`);
                    } else {
                        showCustomNotification("Veri Bulunamadı", "Excel'de okunabilir nöbet kaydı bulunamadı. Lütfen şablonu indirip kullanın.");
                        writeCMSLog("Nöbet Excel: hiç kayıt yüklenemedi. Şablon kullanılması önerilir.");
                    }
                    e.target.value = '';
                } catch(err) {
                    showCustomNotification("Hata", "Excel dosyası okunamadı: " + err.message);
                    writeCMSLog("Nöbet Excel yükleme hatası: " + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function nobetSablonIndir() {
            const wb = XLSX.utils.book_new();
            const yil = nobetAktifYil;
            const ay  = nobetAktifAy;
            const ayAdi = TURKCE_AYLAR[ay];
            const gunSayisi = new Date(yil, ay + 1, 0).getDate();
            const positions = appConfig.dutyPositions || [];

            // Başlık satırı — güncel nöbet yerleri listesine göre dinamik üretilir
            const rows = [
                ["Tarih", "Gün", ...positions.map(p => p.label)]
            ];

            for (let g = 1; g <= gunSayisi; g++) {
                const t = new Date(yil, ay, g);
                const haftaGunu = t.getDay();
                // Sadece iş günleri (Pzt-Cuma)
                if (haftaGunu < 1 || haftaGunu > 5) continue;
                const tarihStr = `${String(g).padStart(2,'0')}.${String(ay+1).padStart(2,'0')}.${yil}`;
                const gunAdi = TURKCE_GUNLER_TAM[haftaGunu];
                rows.push([tarihStr, gunAdi, ...positions.map(() => "")]);
            }

            const ws = XLSX.utils.aoa_to_sheet(rows);
            // Sütun genişlikleri
            ws['!cols'] = [{wch:14}, {wch:12}, ...positions.map(() => ({wch:20}))];
            XLSX.utils.book_append_sheet(wb, ws, `${ayAdi}_${yil}`);
            XLSX.writeFile(wb, `Nobet_${ayAdi}_${yil}.xlsx`);
            writeCMSLog(`Nöbet şablonu indirildi: ${ayAdi} ${yil}`);
        }

        /* =========================================
           GÜNÜN SÖZÜ EXCEL YÜKLEME / ŞABLON
        ========================================= */
        function sozSutunAlgila(headerRow) {
            const etiketler = {
                tarih: /tarih|date|gün/i,
                text:  /söz|soz|metin|text|özlü/i,
                author:/yazar|sahib|sahip|author/i
            };
            const map = {};
            (headerRow || []).forEach((cell, idx) => {
                const val = String(cell || '').trim();
                if (!val) return;
                for (const key in etiketler) {
                    if (map[key] === undefined && etiketler[key].test(val)) {
                        map[key] = idx;
                    }
                }
            });
            return map;
        }

        function sozExcelYukle(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });

                    let headerIdx = -1;
                    let sutunMap = {};
                    for (let i = 0; i < Math.min(5, jsonData.length); i++) {
                        const deneme = sozSutunAlgila(jsonData[i]);
                        if (deneme.text !== undefined) { headerIdx = i; sutunMap = deneme; break; }
                    }

                    const baslangicIdx = headerIdx === -1 ? 0 : headerIdx + 1;
                    // Sütun sırası bulunamazsa varsayılan şablon sırası: Söz | Yazar | Tarih
                    const textCol = sutunMap.text !== undefined ? sutunMap.text : 0;
                    const authorCol = sutunMap.author !== undefined ? sutunMap.author : 1;
                    const dateCol = sutunMap.tarih !== undefined ? sutunMap.tarih : 2;

                    const loadedQuotes = [];
                    for (let i = baslangicIdx; i < jsonData.length; i++) {
                        const row = jsonData[i];
                        if (!row || row.every(c => c === '' || c === null || c === undefined)) continue;
                        const text = String(row[textCol] ?? '').trim();
                        if (!text) continue;
                        const author = String(row[authorCol] ?? '').trim();
                        let dateVal = row[dateCol];
                        let dateStr = '';
                        if (dateVal !== undefined && dateVal !== null && dateVal !== '') {
                            if (typeof dateVal === 'number') {
                                const d = new Date(Math.round((dateVal - 25569) * 86400 * 1000));
                                if (!isNaN(d)) dateStr = `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}`;
                            } else {
                                dateStr = String(dateVal).trim();
                            }
                        }
                        loadedQuotes.push({ text, author, date: dateStr });
                    }

                    if (loadedQuotes.length > 0) {
                        tempQuotes = loadedQuotes;
                        renderAdminQuotes();
                        showCustomNotification("Sözler Yüklendi", `${loadedQuotes.length} adet söz listeye aktarıldı. Kaydetmek için "Değişiklikleri Kaydet" butonuna basın.`);
                        writeCMSLog(`Günün Sözü Excel yüklendi: ${loadedQuotes.length} kayıt.`);
                    } else {
                        showCustomNotification("Veri Bulunamadı", "Excel'de okunabilir söz kaydı bulunamadı. Lütfen şablonu indirip kullanın.");
                        writeCMSLog("Günün Sözü Excel: hiç kayıt yüklenemedi.");
                    }
                    e.target.value = '';
                } catch (err) {
                    showCustomNotification("Hata", "Excel dosyası okunamadı: " + err.message);
                    writeCMSLog("Günün Sözü Excel yükleme hatası: " + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function sozSablonIndir() {
            const wb = XLSX.utils.book_new();
            const rows = [
                ["Söz", "Yazar", "Tarih (GG.AA - opsiyonel)"],
                ["Akıllı kimsenin lisanı kalbindedir. Düşünerek söyler.", "Hz. Ali (r.a.)", ""],
                ["Bilgi hazinedir, uygulama ise onun anahtarıdır.", "Hz. Ali (r.a.)", ""],
                ["Cumhuriyet, fikren, ilmen, fennen, bedenen kuvvetli ve yüksek karakterli nesiller ister.", "Mustafa Kemal Atatürk", "29.10"]
            ];
            const ws = XLSX.utils.aoa_to_sheet(rows);
            ws['!cols'] = [{ wch: 60 }, { wch: 28 }, { wch: 20 }];
            XLSX.utils.book_append_sheet(wb, ws, "Gunun_Sozu");
            XLSX.writeFile(wb, "Gunun_Sozu_Sablonu.xlsx");
            writeCMSLog("Günün Sözü Excel şablonu indirildi.");
        }

        /* =========================================
           BELİRLİ GÜN & HAFTALAR EXCEL YÜKLEME / ŞABLON
        ========================================= */
        function ozelGunExcelYukle(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const rows = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

                    const excelTarihCevir = (dateVal) => {
                        if (dateVal === undefined || dateVal === null || dateVal === '') return '';
                        if (typeof dateVal === 'number') {
                            const d = new Date(Math.round((dateVal - 25569) * 86400 * 1000));
                            if (!isNaN(d)) return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}`;
                            return '';
                        }
                        return String(dateVal).trim();
                    };

                    const loadedSpecialDays = [];
                    rows.forEach(r => {
                        const title = String(r["Başlık"] ?? r["Baslik"] ?? r["Belirli Gün/Hafta"] ?? '').trim();
                        if (!title) return;
                        const startDate = excelTarihCevir(r["Başlangıç Tarihi (GG.AA)"] ?? r["Baslangic Tarihi"] ?? r["Başlangıç"] ?? '');
                        const endDate = excelTarihCevir(r["Bitiş Tarihi (GG.AA - opsiyonel)"] ?? r["Bitis Tarihi"] ?? r["Bitiş"] ?? '');
                        loadedSpecialDays.push({ title, startDate, endDate });
                    });

                    if (loadedSpecialDays.length > 0) {
                        tempSpecialDays = loadedSpecialDays;
                        cancelEditSpecialDay();
                        renderAdminSpecialDays();
                        showCustomNotification("Belirli Gün/Hafta Listesi Yüklendi", `${loadedSpecialDays.length} adet kayıt listeye aktarıldı. Kaydetmek için "Değişiklikleri Kaydet" butonuna basın.`);
                        writeCMSLog(`Belirli Gün/Hafta Excel yüklendi: ${loadedSpecialDays.length} kayıt.`);
                    } else {
                        showCustomNotification("Veri Bulunamadı", "Excel'de okunabilir belirli gün/hafta kaydı bulunamadı. Lütfen şablonu indirip kullanın.");
                        writeCMSLog("Belirli Gün/Hafta Excel: hiç kayıt yüklenemedi.");
                    }
                    e.target.value = '';
                } catch (err) {
                    showCustomNotification("Hata", "Excel dosyası okunamadı: " + err.message);
                    writeCMSLog("Belirli Gün/Hafta Excel yükleme hatası: " + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function ozelGunSablonIndir() {
            const wb = XLSX.utils.book_new();
            const rows = [
                ["Başlık", "Başlangıç Tarihi (GG.AA)", "Bitiş Tarihi (GG.AA - opsiyonel)"],
                ["29 Ekim Cumhuriyet Bayramı", "29.10", ""],
                ["İlköğretim Haftası", "23.09", "27.09"],
                ["Okuma ve Yazma Bayramı Coşkusu", "", ""]
            ];
            const ws = XLSX.utils.aoa_to_sheet(rows);
            ws['!cols'] = [{ wch: 45 }, { wch: 22 }, { wch: 26 }];
            XLSX.utils.book_append_sheet(wb, ws, "Ozel_Gunler_Haftalar");
            XLSX.writeFile(wb, "Belirli_Gun_Hafta_Sablonu.xlsx");
            writeCMSLog("Belirli Gün/Hafta Excel şablonu indirildi.");
        }

        /* =========================================
           BUGÜN DOĞANLAR (DOĞUM GÜNÜ) EXCEL YÜKLEME / ŞABLON
        ========================================= */
        function dogumExcelYukle(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const rows = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

                    const loadedBirthdays = [];
                    rows.forEach(r => {
                        const cls = String(r["Sınıf"] ?? r["Sinif"] ?? '').trim();
                        const name = String(r["Ad Soyad"] ?? r["Ad-Soyad"] ?? r["İsim"] ?? '').trim();
                        let dateVal = r["Tarih (GG.AA)"] ?? r["Tarih"] ?? '';
                        let dateStr = '';
                        if (typeof dateVal === 'number') {
                            const d = new Date(Math.round((dateVal - 25569) * 86400 * 1000));
                            if (!isNaN(d)) dateStr = `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}`;
                        } else {
                            dateStr = String(dateVal).trim();
                        }
                        if (name && dateStr) {
                            loadedBirthdays.push({ class: cls || '—', name, date: dateStr });
                        }
                    });

                    if (loadedBirthdays.length > 0) {
                        tempBirthdays = loadedBirthdays;
                        cancelEditBirthday();
                        renderAdminBirthdays();
                        showCustomNotification("Doğum Günleri Yüklendi", `${loadedBirthdays.length} adet kayıt listeye aktarıldı. Kaydetmek için "Değişiklikleri Kaydet" butonuna basın.`);
                        writeCMSLog(`Doğum Günü Excel yüklendi: ${loadedBirthdays.length} kayıt.`);
                    } else {
                        showCustomNotification("Veri Bulunamadı", "Excel'de okunabilir doğum günü kaydı bulunamadı. Lütfen şablonu indirip kullanın.");
                        writeCMSLog("Doğum Günü Excel: hiç kayıt yüklenemedi.");
                    }
                    e.target.value = '';
                } catch (err) {
                    showCustomNotification("Hata", "Excel dosyası okunamadı: " + err.message);
                    writeCMSLog("Doğum Günü Excel yükleme hatası: " + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function dogumSablonIndir() {
            const wb = XLSX.utils.book_new();
            const rows = [
                ["Sınıf", "Ad Soyad", "Tarih (GG.AA)"],
                ["2/B", "Beyza KIZILŞARA", "24.11"],
                ["3/C", "Enes DEMİR", "15.05"],
                ["1/A", "Elif BULUT", "20.07"]
            ];
            const ws = XLSX.utils.aoa_to_sheet(rows);
            ws['!cols'] = [{ wch: 10 }, { wch: 28 }, { wch: 16 }];
            XLSX.utils.book_append_sheet(wb, ws, "Dogum_Gunleri");
            XLSX.writeFile(wb, "Dogum_Gunleri_Sablonu.xlsx");
            writeCMSLog("Doğum Günü Excel şablonu indirildi.");
        }

        /* =========================================
           DERS PROGRAMI EXCEL YÜKLEME
        ========================================= */
        function dersExcelYukle(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                    if (jsonData.length < 2) {
                        showCustomNotification("Hata", "Excel dosyası boş veya geçersiz.");
                        return;
                    }

                    // Format: Sütun0=Gün, Sütun1=Ders Saati/Sıra, Sütun2+=Sınıflar
                    const headerRow = jsonData[0];
                    // Sınıf listesini headerdan al (indeks 2'den itibaren)
                    const siniflarExcel = headerRow.slice(2).map(s => String(s || '').trim()).filter(s => s);

                    let sonGun = '';
                    let yuklenenSinif = 0;

                    // Geçici yapı: sinif -> gun -> [7 ders]
                    const tempSchedule = {};
                    siniflarExcel.forEach(s => { tempSchedule[s] = {}; });

                    for (let i = 1; i < jsonData.length; i++) {
                        const row = jsonData[i];
                        if (!row || row.length === 0) continue;

                        // Gün sütunu dolu ise güncelle
                        if (row[0] && String(row[0]).trim() !== '') {
                            sonGun = String(row[0]).trim();
                        }
                        if (!sonGun || !daysOfWeek.includes(sonGun)) continue;

                        // Her sınıf için ders saatlerini oluştur (mevcut ders saati sayısı kadar)
                        siniflarExcel.forEach((sinif, idx) => {
                            if (!classList.includes(sinif)) return;
                            if (!tempSchedule[sinif][sonGun]) {
                                tempSchedule[sinif][sonGun] = [];
                            }
                            const dersAdi = String(row[2 + idx] || '').trim();
                            if (tempSchedule[sinif][sonGun].length < bellHours.length) {
                                tempSchedule[sinif][sonGun].push(dersAdi);
                            }
                        });
                    }

                    // appConfig'e yaz
                    siniflarExcel.forEach(sinif => {
                        if (!classList.includes(sinif)) return;
                        if (!appConfig.weeklyClassSchedules[sinif]) appConfig.weeklyClassSchedules[sinif] = {};
                        daysOfWeek.forEach(gun => {
                            if (tempSchedule[sinif][gun]) {
                                // Mevcut ders saati sayısına tamamla
                                while (tempSchedule[sinif][gun].length < bellHours.length) tempSchedule[sinif][gun].push('');
                                appConfig.weeklyClassSchedules[sinif][gun] = tempSchedule[sinif][gun];
                            }
                        });
                        yuklenenSinif++;
                    });

                    buildWeeklyScheduleMatrix();
                    buildAdminClassSelector();
                    showCustomNotification("Ders Programı Yüklendi", `${yuklenenSinif} sınıfın haftalık ders programı başarıyla tabloya aktarıldı.`);
                    writeCMSLog(`Ders programı Excel yüklendi: ${yuklenenSinif} sınıf.`);
                    e.target.value = '';
                } catch(err) {
                    showCustomNotification("Hata", "Ders programı Excel dosyası okunamadı.");
                    writeCMSLog("Ders programı Excel yükleme hatası: " + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function dersExcelSablonIndir() {
            const wb = XLSX.utils.book_new();
            const rows = [["Gün", "Ders Sırası", ...classList]];
            daysOfWeek.forEach(gun => {
                for (let i = 1; i <= bellHours.length; i++) {
                    rows.push([i === 1 ? gun : "", `${i}. Ders`, ...classList.map(() => "")]);
                }
            });
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), "Ders_Programi");
            XLSX.writeFile(wb, "Ders_Programi_Sablonu.xlsx");
            writeCMSLog("Ders programı Excel şablonu indirildi.");
        }

        /* EXCEL ENTEGRASYON VE AKTARIM MANTIĞI */
        function downloadExcelTemplate() {
            const wb = XLSX.utils.book_new();

            // 1. Nöbet Planı Sayfası
            const dutyData = [
                ["Gün", "İdareci", "Kantin", "Bahçe", "1. Kat", "2. Kat"],
                ["Pazartesi", "Nihan Öztürk", "Ahmet Ak", "Veli Can", "Zeynep Şen", "Murat Koç"],
                ["Salı", "Mehmet Çelik", "Canan Yılmaz", "Kemal Sun", "Özlem Er", "Tarık Aka"],
                ["Çarşamba", "Nihan Öztürk", "Fatih Yaşar", "Deniz Gözü", "Seda Gül", "Canan Demir"],
                ["Perşembe", "Mehmet Çelik", "Seda Süs", "Arif Mert", "Zeynep Şen", "Murat Koç"],
                ["Cuma", "Kadir Bal", "Gönül Bağı", "Ali Kemal", "Hülya Avşar", "Cem Karaca"]
            ];
            const wsDuty = XLSX.utils.aoa_to_sheet(dutyData);
            XLSX.utils.book_append_sheet(wb, wsDuty, "Nobet_Planlar");

            // 2. Ders Programı Sayfası
            const scheduleData = [
                ["Sınıf", "Gün", "1. Ders", "2. Ders", "3. Ders", "4. Ders", "5. Ders", "6. Ders", "7. Ders"],
                ["1/A", "Pazartesi", "Türkçe", "Türkçe", "Matematik", "Müzik", "Görsel San.", "Beden Eğt.", "Beden Eğt."],
                ["1/A", "Salı", "Matematik", "Matematik", "Türkçe", "Türkçe", "Hayat Bil.", "Müzik", "Oyun Etk."],
                ["3/C", "Pazartesi", "Hayat Bil.", "Hayat Bil.", "Türkçe", "Türkçe", "Matematik", "Görsel San.", "Serbest Etk."]
            ];
            const wsSchedule = XLSX.utils.aoa_to_sheet(scheduleData);
            XLSX.utils.book_append_sheet(wb, wsSchedule, "Ders_Programlari");

            // 3. Doğum Günleri Sayfası
            const birthdayData = [
                ["Sınıf", "Ad Soyad", "Tarih (GG.AA)"],
                ["2/B", "Beyza KIZILŞARA", "24.11"],
                ["3/C", "Enes DEMİR", "15.05"]
            ];
            const wsBirthday = XLSX.utils.aoa_to_sheet(birthdayData);
            XLSX.utils.book_append_sheet(wb, wsBirthday, "Dogum_Gunleri");

            // 4. Belirli Gün & Haftalar Sayfası
            const specialDayData = [
                ["Başlık", "Başlangıç Tarihi (GG.AA)", "Bitiş Tarihi (GG.AA - opsiyonel)"],
                ["29 Ekim Cumhuriyet Bayramı", "29.10", ""],
                ["İlköğretim Haftası", "23.09", "27.09"]
            ];
            const wsSpecialDay = XLSX.utils.aoa_to_sheet(specialDayData);
            XLSX.utils.book_append_sheet(wb, wsSpecialDay, "Ozel_Gunler_Haftalar");

            XLSX.writeFile(wb, "Pano_Veri_Yukleme_Sablonu.xlsx");
            writeCMSLog("Excel şablon dosyası indirildi.");
        }

        function exportToExcel() {
            const wb = XLSX.utils.book_new();

            // Nöbet Planları
            const dutyRows = [["Gün", "İdareci", "Kantin", "Bahçe", "1. Kat", "2. Kat"]];
            daysOfWeek.forEach(day => {
                const d = appConfig.weeklyDuties[day] || {};
                dutyRows.push([day, d.admin || "", d.canteen || "", d.garden || "", d.floor1 || "", d.floor2 || ""]);
            });
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(dutyRows), "Nobet_Planlari");

            // Ders Programları
            const scheduleRows = [["Sınıf", "Gün", ...bellHours.map(b => `${b.id}. Ders`)]];
            classList.forEach(cls => {
                const classWeek = appConfig.weeklyClassSchedules[cls] || {};
                daysOfWeek.forEach(day => {
                    const row = classWeek[day] || Array(bellHours.length).fill("");
                    scheduleRows.push([cls, day, ...row]);
                });
            });
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(scheduleRows), "Ders_Programlari");

            // Doğum Günleri
            const bdayRows = [["Sınıf", "Ad Soyad", "Tarih (GG.AA)"]];
            (appConfig.birthdays || []).forEach(b => {
                bdayRows.push([b.class, b.name, b.date]);
            });
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(bdayRows), "Dogum_Gunleri");

            // Belirli Gün & Haftalar
            const specialDayRows = [["Başlık", "Başlangıç Tarihi (GG.AA)", "Bitiş Tarihi (GG.AA - opsiyonel)"]];
            (appConfig.specialDays || []).forEach(sd => {
                specialDayRows.push([sd.title || "", sd.startDate || "", sd.endDate || ""]);
            });
            XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(specialDayRows), "Ozel_Gunler_Haftalar");

            XLSX.writeFile(wb, "Pano_Mevcut_Veriler.xlsx");
            writeCMSLog("Pano verileri Excel dosyasına indirildi.");
        }

        function importFromExcel(e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = new Uint8Array(evt.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });

                    // 1. Nöbet Sayfası Okuma
                    if (workbook.SheetNames.includes("Nobet_Planlar") || workbook.SheetNames.includes("Nobet_Planlari")) {
                        const sheetName = workbook.SheetNames.includes("Nobet_Planlar") ? "Nobet_Planlar" : "Nobet_Planlari";
                        const sheet = workbook.Sheets[sheetName];
                        const rows = XLSX.utils.sheet_to_json(sheet);
                        rows.forEach(r => {
                            const day = r["Gün"];
                            if (daysOfWeek.includes(day)) {
                                appConfig.weeklyDuties[day] = {
                                    admin: r["İdareci"] || "",
                                    canteen: r["Kantin"] || "",
                                    garden: r["Bahçe"] || "",
                                    floor1: r["1. Kat"] || "",
                                    floor2: r["2. Kat"] || ""
                                };
                            }
                        });
                    }

                    // 2. Ders Programı Okuma
                    if (workbook.SheetNames.includes("Ders_Programlari")) {
                        const sheet = workbook.Sheets["Ders_Programlari"];
                        const rows = XLSX.utils.sheet_to_json(sheet);
                        rows.forEach(r => {
                            const cls = r["Sınıf"];
                            const day = r["Gün"];
                            if (classList.includes(cls) && daysOfWeek.includes(day)) {
                                if (!appConfig.weeklyClassSchedules[cls]) appConfig.weeklyClassSchedules[cls] = {};
                                appConfig.weeklyClassSchedules[cls][day] = bellHours.map(b => r[`${b.id}. Ders`] || "");
                            }
                        });
                    }

                    // 3. Doğum Günleri Okuma
                    if (workbook.SheetNames.includes("Dogum_Gunleri")) {
                        const sheet = workbook.Sheets["Dogum_Gunleri"];
                        const rows = XLSX.utils.sheet_to_json(sheet);
                        const loadedBirthdays = [];
                        rows.forEach(r => {
                            if (r["Sınıf"] && r["Ad Soyad"] && r["Tarih (GG.AA)"]) {
                                loadedBirthdays.push({
                                    class: r["Sınıf"],
                                    name: r["Ad Soyad"],
                                    date: String(r["Tarih (GG.AA)"])
                                });
                            }
                        });
                        if (loadedBirthdays.length > 0) {
                            appConfig.birthdays = loadedBirthdays;
                            tempBirthdays = [...loadedBirthdays];
                        }
                    }

                    // 4. Belirli Gün & Haftalar Okuma
                    if (workbook.SheetNames.includes("Ozel_Gunler_Haftalar")) {
                        const sheet = workbook.Sheets["Ozel_Gunler_Haftalar"];
                        const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
                        const loadedSpecialDays = [];
                        rows.forEach(r => {
                            const title = String(r["Başlık"] ?? r["Baslik"] ?? '').trim();
                            if (!title) return;
                            const startDate = String(r["Başlangıç Tarihi (GG.AA)"] ?? r["Baslangic Tarihi"] ?? '').trim();
                            const endDate = String(r["Bitiş Tarihi (GG.AA - opsiyonel)"] ?? r["Bitis Tarihi"] ?? '').trim();
                            loadedSpecialDays.push({ title, startDate, endDate });
                        });
                        if (loadedSpecialDays.length > 0) {
                            appConfig.specialDays = loadedSpecialDays;
                            tempSpecialDays = [...loadedSpecialDays];
                        }
                    }

                    buildWeeklyScheduleMatrix();
                    buildWeeklyDutiesTable();
                    renderAdminBirthdays();
                    renderAdminSpecialDays();
                    
                    showCustomNotification("Excel Yüklendi", "Excel dosyasındaki veriler pano sistemine aktarıldı.");
                    writeCMSLog("Excel dosyasından toplu veri aktarımı tamamlandı.");
                } catch (err) {
                    showCustomNotification("Hata", "Excel dosyası okunamadı. Formatın doğru olduğundan emin olun.");
                    writeCMSLog("Excel içe aktarım hatası oluştu.");
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function exportDataToJSON() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appConfig));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "Okul_Pano_Yedek.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            writeCMSLog("JSON sistem yedeği indirildi.");
        }
