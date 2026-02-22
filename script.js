// ==================================================================
// ======  10 ÉQUIPES AVEC LOGOS  ======
// ======  OU KA CHANJE LOGO SI OU VLE  ======
// ==================================================================

let teams = [
    // Groupe A
    {nom:"Leverkusen", logo:"https://i.postimg.cc/44LTZfVZ/IMG-20260213-WA0067.jpg", groupe:"A"},
    {nom:"Celtic", logo:"https://i.postimg.cc/ZRb1t2qr/IMG-20260213-WA0068.jpg", groupe:"A"},
    {nom:"Barcelona", logo:"https://i.postimg.cc/zDP46dYg/IMG-20260213-WA0069.jpg", groupe:"A"},
    {nom:"Breda", logo:"https://i.postimg.cc/t4Ff1pZd/IMG-20260213-WA0070.jpg", groupe:"A"},
    {nom:"Inter Fc", logo:"https://i.postimg.cc/B67wWvyw/IMG-20260213-WA0071.jpg", groupe:"A"},
    
    // Groupe B
    {nom:"@AFC", logo:"https://files.catbox.moe/gb3sxu.jpg", groupe:"B"},
    {nom:"NOGAME CITY", logo:"https://i.postimg.cc/Jzx1y926/IMG-20260214-WA0089.jpg", groupe:"B"},
    {nom:"BABAYAGA", logo:"https://i.postimg.cc/wxnY76T9/IMG-20260214-WA0087.jpg", groupe:"B"},
    {nom:"Team Heineken", logo:"https://i.postimg.cc/nrj2yb6g/IMG-20260214-WA0086.jpg", groupe:"B"},
    {nom:"1i__phada", logo:"https://i.postimg.cc/K82XDJM9/IMG-20260214-WA0088.jpg", groupe:"B"}
];

// ==================================================================
// ======  MATCHS - SE LA W AP CHANJE NÒT YO  ======
// ======  CHANJE homeScore, awayScore, AK jwe:true  ======
// ==================================================================

let matches = [
    // ========== GROUPE A ==========
    
    // JOURNÉE 1
    {home:"Leverkusen", away:"Celtic", homeScore:3, awayScore:3, journee:1, jwe:true},
    {home:"Barcelona", away:"Breda", homeScore:2, awayScore:0, journee:1, jwe:true},
    
    // JOURNÉE 2
    {home:"Inter Fc", away:"Leverkusen", homeScore:0, awayScore:0, journee:2, jwe:false},
    {home:"Celtic", away:"Barcelona", homeScore:6, awayScore:0, journee:2, jwe:true},
    
    // JOURNÉE 3
    {home:"Breda", away:"Inter Fc", homeScore:0, awayScore:0, journee:3, jwe:false},
    {home:"Leverkusen", away:"Barcelona", homeScore:0, awayScore:0, journee:3, jwe:false},
    
    // JOURNÉE 4
    {home:"Celtic", away:"Inter Fc", homeScore:0, awayScore:0, journee:4, jwe:false},
    {home:"Breda", away:"Leverkusen", homeScore:0, awayScore:2, journee:4, jwe:true},
    
    // JOURNÉE 5
    {home:"Barcelona", away:"Inter Fc", homeScore:0, awayScore:0, journee:5, jwe:false},
    {home:"Celtic", away:"Breda", homeScore:5, awayScore:1, journee:5, jwe:true},
    
    // ========== GROUPE B ==========
    
    // JOURNÉE 1
    {home:"NOGAME CITY", away:"BABAYAGA", homeScore:3, awayScore:1, journee:1, jwe:true},  // KOREJE: jwe:true
    {home:"Team Heineken", away:"1i__phada", homeScore:0, awayScore:0, journee:1, jwe:false},
    
    // JOURNÉE 2
    {home:"@AFC", away:"NOGAME CITY", homeScore:0, awayScore:0, journee:2, jwe:false},      // KOREJE: homeScore:0
    {home:"BABAYAGA", away:"Team Heineken", homeScore:0, awayScore:0, journee:2, jwe:false},
    
    // JOURNÉE 3
    {home:"1i__phada", away:"@AFC", homeScore:0, awayScore:0, journee:3, jwe:false},
    {home:"NOGAME CITY", away:"Team Heineken", homeScore:3, awayScore:3, journee:3, jwe:true},
    
    // JOURNÉE 4
    {home:"BABAYAGA", away:"1i__phada", homeScore:1, awayScore:0, journee:4, jwe:true},
    {home:"@AFC", away:"Team Heineken", homeScore:0, awayScore:0, journee:4, jwe:false},
    
    // JOURNÉE 5
    {home:"1i__phada", away:"NOGAME CITY", homeScore:0, awayScore:0, journee:5, jwe:false},
    {home:"BABAYAGA", away:"@AFC", homeScore:0, awayScore:0, journee:5, jwe:false}
];

// ==================================================================
// ======  FIN ZON PO CHANJE NÒT - PA TOUCHE APRÈ  ======
// ==================================================================

let tirageEffectue = false;
let quarts = [];

// ====== FONKSYON NAVIGASYON ======
function showSection(sectionId) {
    document.querySelectorAll('.uefa-section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.uefa-btn').forEach(b => b.classList.remove('active'));
    let btn = document.getElementById('btn' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    if (btn) btn.classList.add('active');
    
    if (sectionId === 'groupeA') displayGroup('A', 'groupeAContainer', 'matchesGroupeA');
    else if (sectionId === 'groupeB') displayGroup('B', 'groupeBContainer', 'matchesGroupeB');
    else if (sectionId === 'calendrier') displayAllMatches();
    else if (sectionId === 'phase') displayFinalPhase();
    else if (sectionId === 'accueil') displayAccueilMatches();
}

// ====== FONKSYON PLEIN ÉCRAN - TABLO PI PITI AK BOUTON ANBA ======
function openFullscreen(group) {
    // Kreye yon kontni plein écran
    let fullscreenDiv = document.createElement('div');
    fullscreenDiv.id = 'fullscreen-container';
    fullscreenDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.8);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        box-sizing: border-box;
        backdrop-filter: blur(5px);
    `;
    
    // Kontni foto a (pi piti)
    let contentDiv = document.createElement('div');
    contentDiv.style.cssText = `
        width: 90%;
        max-width: 650px;  /* Pi piti pase anvan */
        background: white;
        border-radius: 30px;
        padding: 20px 25px 70px 25px; /* Anpil espas anba pou bouton */
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        border: 4px solid #ffd700;
        position: relative;
    `;
    
    // HEADER FOTO A (pi piti)
    let headerHtml = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg" style="height: 30px; width: auto;" onerror="this.src='https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg'">
                <div>
                    <h2 style="color: #021828; font-size: 16px; margin: 0; font-weight: 900;">HAÏTI CHAMPIONS</h2>
                    <p style="color: #ffd700; margin: 2px 0 0; font-size: 9px;">★★★★★</p>
                </div>
            </div>
            <div style="background: #021828; color: #ffd700; padding: 5px 15px; border-radius: 25px; font-weight: 900; font-size: 14px;">
                GR. ${group}
            </div>
        </div>
    `;
    
    // Klasman an (pi piti anpil)
    let classement = calculateTable(group);
    
    let tableHtml = `
        <div style="flex: 1; overflow: hidden; margin-bottom: 5px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
                <thead>
                    <tr style="background: #021828;">
                        <th style="padding: 6px 2px; color: #ffd700; width: 8%;">#</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 22%;">ÉQUIPE</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 7%;">MJ</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 7%;">V</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 7%;">N</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 7%;">D</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 8%;">BP</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 8%;">BC</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 8%;">+/-</th>
                        <th style="padding: 6px 2px; color: #ffd700; width: 8%;">PTS</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    classement.forEach((t, i) => {
        let bgColor = i < 4 ? '#e8f5e9' : (i === 4 ? '#ffebee' : 'white');
        let borderLeft = i < 4 ? '3px solid #28a745' : (i === 4 ? '3px solid #dc3545' : 'none');
        let rankStyle = i === 0 ? 'background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); color: #021828;' : '';
        
        tableHtml += `
            <tr style="background: ${bgColor}; border-left: ${borderLeft};">
                <td style="padding: 4px 2px; text-align: center; font-weight: 900; font-size: 12px; ${rankStyle}">${i + 1}</td>
                <td style="padding: 3px 2px; display: flex; align-items: center; gap: 4px;">
                    <img src="${t.logo}" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid #ffd700;" onerror="this.src='https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg'">
                    <span style="font-weight: 600; font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70px;">${t.nom}</span>
                </td>
                <td style="padding: 4px 2px; text-align: center; font-size: 11px;">${t.MJ}</td>
                <td style="padding: 4px 2px; text-align: center; font-size: 11px;">${t.V}</td>
                <td style="padding: 4px 2px; text-align: center; font-size: 11px;">${t.N}</td>
                <td style="padding: 4px 2px; text-align: center; font-size: 11px;">${t.D}</td>
                <td style="padding: 4px 2px; text-align: center; font-weight: 700; font-size: 11px;">${t.BP}</td>
                <td style="padding: 4px 2px; text-align: center; font-weight: 700; font-size: 11px;">${t.BC}</td>
                <td style="padding: 4px 2px; text-align: center; font-size: 11px; color: ${t.Diff > 0 ? '#28a745' : (t.Diff < 0 ? '#dc3545' : '#666')}; font-weight: 700;">${t.Diff > 0 ? '+' : ''}${t.Diff}</td>
                <td style="padding: 4px 2px; text-align: center;"><span style="background: #ffd700; color: #021828; font-weight: 900; padding: 3px 6px; border-radius: 15px; font-size: 10px;">${t.Pts}</span></td>
            </tr>
        `;
    });
    
    tableHtml += `
                </tbody>
            </table>
        </div>
    `;
    
    // Footer ti piti
    let footerHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0 5px 0; padding-top: 5px; border-top: 2px solid #ffd700; font-size: 9px;">
            <div style="display: flex; gap: 10px;">
                <span style="color: #28a745;">✓ 4 qualifiés</span>
                <span style="color: #dc3545;">✗ 5e éliminé</span>
            </div>
            <div style="color: #021828;">© 2026</div>
        </div>
    `;
    
    // BOUTON RETOUR ANBA SANTRE (nan espas vid la)
    let boutonHtml = `
        <div style="position: absolute; bottom: 15px; left: 0; width: 100%; display: flex; justify-content: center;">
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #ffd700; color: #021828; border: none; padding: 12px 40px; border-radius: 40px; font-weight: 900; font-size: 16px; cursor: pointer; box-shadow: 0 5px 10px rgba(0,0,0,0.3); border: 2px solid white; min-width: 200px;">
                ← RETOUR
            </button>
        </div>
    `;
    
    contentDiv.innerHTML = headerHtml + tableHtml + footerHtml + boutonHtml;
    fullscreenDiv.appendChild(contentDiv);
    
    document.body.appendChild(fullscreenDiv);
}

// ====== KALKILE KLASSMAN ======
function calculateTable(group) {
    let table = teams.filter(t => t.groupe === group).map(t => ({
        nom: t.nom, logo: t.logo,
        MJ: 0, V: 0, N: 0, D: 0,
        BP: 0, BC: 0, Diff: 0, Pts: 0
    }));

    matches.forEach(m => {
        if (m.jwe === true) {
            let t1 = table.find(t => t.nom === m.home);
            let t2 = table.find(t => t.nom === m.away);
            if (t1 && t2) {
                t1.MJ++; t2.MJ++;
                t1.BP += m.homeScore; t1.BC += m.awayScore;
                t2.BP += m.awayScore; t2.BC += m.homeScore;
                
                if (m.homeScore > m.awayScore) { t1.V++; t1.Pts += 3; t2.D++; }
                else if (m.homeScore < m.awayScore) { t2.V++; t2.Pts += 3; t1.D++; }
                else { t1.N++; t2.N++; t1.Pts++; t2.Pts++; }
            }
        }
    });

    table.forEach(t => t.Diff = t.BP - t.BC);
    return table.sort((a, b) => b.Pts - a.Pts || b.Diff - a.Diff);
}

// ====== AFICHE GROUP ======
function displayGroup(group, tableId, matchesId) {
    let tableContainer = document.getElementById(tableId);
    let matchesContainer = document.getElementById(matchesId);
    if (!tableContainer || !matchesContainer) return;
    
    let classement = calculateTable(group);
    
    // Ajoute bouton plein écran
    let headerHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="color: #ffd700; margin: 0; font-size: 22px;">${group === 'A' ? '🇦' : '🇧'} GROUPE ${group}</h3>
            <button onclick="openFullscreen('${group}')" style="background: #ffd700; color: #021828; border: none; padding: 10px 20px; border-radius: 40px; font-weight: 700; font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 18px;">⛶</span> PLEIN ÉCRAN
            </button>
        </div>
    `;
    
    let html = headerHtml;
    html += `<table class="uefa-table">
        <tr><th>#</th><th>Équipe</th><th>MJ</th><th>V</th><th>N</th><th>D</th><th>BP</th><th>BC</th><th>+/-</th><th>Pts</th></tr>`;
    
    classement.forEach((t, i) => {
        let rowClass = i < 4 ? 'qualified-row' : (i === 4 ? 'eliminated-row' : '');
        let rankStyle = i === 0 ? 'background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); color: #021828; font-weight: 900;' : '';
        
        html += `<tr class="${rowClass}">
            <td style="${rankStyle} font-weight: 900;">${i + 1}</td>
            <td style="text-align: left;">
                <div class="team-cell-mobile">
                    <img src="${t.logo}" class="team-logo-small">
                    <span>${t.nom}</span>
                </div>
            </td>
            <td>${t.MJ}</td><td>${t.V}</td><td>${t.N}</td><td>${t.D}</td>
            <td>${t.BP}</td><td>${t.BC}</td>
            <td>${t.Diff > 0 ? '+' : ''}${t.Diff}</td>
            <td><span class="points-badge-mobile">${t.Pts}</span></td>
        </tr>`;
    });
    
    html += "</table>";
    tableContainer.innerHTML = html;
    
    // Matchs du groupe
    let groupMatches = matches.filter(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        return h && h.groupe === group && a && a.groupe === group;
    }).sort((a, b) => a.journee - b.journee);
    
    let mHtml = '<div class="match-grid">';
    groupMatches.forEach(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        
        // Match jwe: border solid jòn, fond vèt
        // Match avenir: border nwa, fond blan
        let style = m.jwe ? 
            'border: 3px solid #ffd700; background: linear-gradient(135deg, #1a4a2a 0%, #0f3a1a 100%);' : 
            'border: 1px solid #333; background: #ffffff;';
        
        mHtml += `
            <div class="uefa-match-card" style="${style}">
                <div class="match-teams">
                    <div class="team-match">
                        <img src="${h.logo}" style="${!m.jwe ? 'filter: none;' : ''}"><span style="${!m.jwe ? 'color: #333;' : 'color: white;'}">${m.home}</span>
                    </div>
                    <div class="match-score" style="${m.jwe ? 'background: #ffd700;' : 'background: #e0e0e0; color: #333; border: 1px solid #999;'}">${m.homeScore}-${m.awayScore}</div>
                    <div class="team-match">
                        <img src="${a.logo}" style="${!m.jwe ? 'filter: none;' : ''}"><span style="${!m.jwe ? 'color: #333;' : 'color: white;'}">${m.away}</span>
                    </div>
                </div>
                <div class="match-info" style="color: ${m.jwe ? '#ffd700' : '#666'};">
                    JOURNÉE ${m.journee} · ${m.jwe ? '✓ TERMINÉ' : '⏳ À VENIR'}
                </div>
            </div>
        `;
    });
    mHtml += '</div>';
    matchesContainer.innerHTML = mHtml;
}

// ====== AFICHE TOUT MATCHS ======
function displayAllMatches() {
    let container = document.getElementById("matchList");
    if (!container) return;
    
    let html = '<div class="match-grid">';
    matches.sort((a, b) => a.journee - b.journee).forEach(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        
        let style = m.jwe ? 
            'border: 3px solid #ffd700; background: linear-gradient(135deg, #1a4a2a 0%, #0f3a1a 100%);' : 
            'border: 1px solid #333; background: #ffffff;';
        
        html += `
            <div class="uefa-match-card" style="${style}">
                <div class="match-teams">
                    <div class="team-match">
                        <img src="${h.logo}" style="${!m.jwe ? 'filter: none;' : ''}"><span style="${!m.jwe ? 'color: #333;' : 'color: white;'}">${m.home}</span>
                    </div>
                    <div class="match-score" style="${m.jwe ? 'background: #ffd700;' : 'background: #e0e0e0; color: #333; border: 1px solid #999;'}">${m.homeScore}-${m.awayScore}</div>
                    <div class="team-match">
                        <img src="${a.logo}" style="${!m.jwe ? 'filter: none;' : ''}"><span style="${!m.jwe ? 'color: #333;' : 'color: white;'}">${m.away}</span>
                    </div>
                </div>
                <div class="match-info" style="color: ${m.jwe ? '#ffd700' : '#666'};">
                    JOURNÉE ${m.journee} · GR. ${h.groupe} · ${m.jwe ? '✓ TERMINÉ' : '⏳'}
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// ====== AFICHE ACCUEIL ======
function displayAccueilMatches() {
    let container = document.getElementById("accueilMatches");
    if (!container) return;
    
    let dernye = matches.filter(m => m.jwe).slice(-4);
    let html = '<div class="match-grid">';
    dernye.forEach(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        html += `
            <div class="uefa-match-card" style="border: 3px solid #ffd700; background: linear-gradient(135deg, #1a4a2a 0%, #0f3a1a 100%);">
                <div class="match-teams">
                    <div class="team-match">
                        <img src="${h.logo}" style="width: 35px; height: 35px;"><span style="font-size: 12px; color: white;">${m.home}</span>
                    </div>
                    <div class="match-score" style="font-size: 18px; padding: 5px 10px; background: #ffd700;">${m.homeScore}-${m.awayScore}</div>
                    <div class="team-match">
                        <img src="${a.logo}" style="width: 35px; height: 35px;"><span style="font-size: 12px; color: white;">${m.away}</span>
                    </div>
                </div>
                <div class="match-info" style="color: #ffd700;">JOURNÉE ${m.journee}</div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// ====== TIRAGE ======
function effectuerTirage() {
    let toutJwe = matches.every(m => m.jwe === true);
    if (!toutJwe) {
        alert("⛔ Tirage disponib sèlman lè tout match fin jwe!");
        return;
    }
    
    let A = calculateTable("A");
    let B = calculateTable("B");
    
    let qualifiees = [
        ...A.slice(0, 4).map(t => ({...t, groupe: 'A'})),
        ...B.slice(0, 4).map(t => ({...t, groupe: 'B'}))
    ];
    
    for (let i = qualifiees.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qualifiees[i], qualifiees[j]] = [qualifiees[j], qualifiees[i]];
    }
    
    let html = '<h3 style="color: #ffd700; text-align: center; margin: 20px 0;">🎲 RÉSULTAT TIRAGE</h3>';
    for (let i = 0; i < 4; i++) {
        html += `
            <div style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border: 3px solid #ffd700; border-radius: 20px; padding: 20px; margin-bottom: 15px;">
                <div style="text-align: center; color: #ffd700; font-weight: 700; font-size: 18px; margin-bottom: 15px;">🏁 QUART DE FINALE ${i + 1}</div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="text-align: center; flex: 1;">
                        <img src="${qualifiees[i].logo}" style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid #ffd700; margin-bottom: 5px;">
                        <div style="color: white; font-weight: 700;">${qualifiees[i].nom}</div>
                        <div style="color: #ffd700; font-size: 12px;">Groupe ${qualifiees[i].groupe}</div>
                    </div>
                    <div style="background: #ffd700; color: #021828; font-weight: 900; padding: 10px 20px; border-radius: 40px; font-size: 24px; margin: 0 10px;">VS</div>
                    <div style="text-align: center; flex: 1;">
                        <img src="${qualifiees[7-i].logo}" style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid #ffd700; margin-bottom: 5px;">
                        <div style="color: white; font-weight: 700;">${qualifiees[7-i].nom}</div>
                        <div style="color: #ffd700; font-size: 12px;">Groupe ${qualifiees[7-i].groupe}</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    html += `
        <div style="background: #021828; border: 3px solid #ffd700; border-radius: 20px; padding: 20px; margin-top: 20px;">
            <div style="color: #ffd700; font-weight: 900; text-align: center; font-size: 20px; margin-bottom: 20px;">⚡ DEMI-FINALES</div>
            <div style="display: flex; justify-content: space-around; color: white;">
                <div style="text-align: center;">
                    <div>Vainqueur Q1</div>
                    <div style="color: #ffd700; font-size: 24px; margin: 10px;">VS</div>
                    <div>Vainqueur Q4</div>
                </div>
                <div style="text-align: center;">
                    <div>Vainqueur Q2</div>
                    <div style="color: #ffd700; font-size: 24px; margin: 10px;">VS</div>
                    <div>Vainqueur Q3</div>
                </div>
            </div>
        </div>
    `;
    
    html += `
        <div style="background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); border-radius: 20px; padding: 20px; margin-top: 20px;">
            <div style="color: #021828; font-weight: 900; text-align: center; font-size: 22px; margin-bottom: 15px;">🏆 FINALE</div>
            <div style="text-align: center; color: #021828; font-weight: 900; font-size: 20px;">
                Vainqueur D1 vs Vainqueur D2
            </div>
        </div>
    `;
    
    document.getElementById('resultatTirage').innerHTML = html;
    tirageEffectue = true;
}

// ====== AFICHE PHASE FINALE ======
function displayFinalPhase() {
    let container = document.getElementById("finalPhase");
    if (!container) return;
    
    let A = calculateTable("A");
    let B = calculateTable("B");
    
    let html = `
        <div style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border-radius: 20px; padding: 20px; border: 3px solid #ffd700;">
            
            <div style="margin-bottom: 25px;">
                <div style="background: #ffd700; color: #021828; padding: 12px; border-radius: 40px; font-weight: 900; text-align: center; margin-bottom: 20px; font-size: 20px;">🏁 QUARTS DE FINALE</div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white; font-weight: 700;">${A[0]?.nom || '???'}</span>
                        <span style="color: #ffd700; font-weight: 900; font-size: 18px;">VS</span>
                        <span style="color: white; font-weight: 700;">${B[3]?.nom || '???'}</span>
                    </div>
                    <div style="color: #ffd700; font-size: 12px; text-align: center; margin-top: 5px;">1er A vs 4e B</div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white; font-weight: 700;">${B[0]?.nom || '???'}</span>
                        <span style="color: #ffd700; font-weight: 900; font-size: 18px;">VS</span>
                        <span style="color: white; font-weight: 700;">${A[3]?.nom || '???'}</span>
                    </div>
                    <div style="color: #ffd700; font-size: 12px; text-align: center; margin-top: 5px;">1er B vs 4e A</div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white; font-weight: 700;">${A[1]?.nom || '???'}</span>
                        <span style="color: #ffd700; font-weight: 900; font-size: 18px;">VS</span>
                        <span style="color: white; font-weight: 700;">${B[2]?.nom || '???'}</span>
                    </div>
                    <div style="color: #ffd700; font-size: 12px; text-align: center; margin-top: 5px;">2e A vs 3e B</div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white; font-weight: 700;">${B[1]?.nom || '???'}</span>
                        <span style="color: #ffd700; font-weight: 900; font-size: 18px;">VS</span>
                        <span style="color: white; font-weight: 700;">${A[2]?.nom || '???'}</span>
                    </div>
                    <div style="color: #ffd700; font-size: 12px; text-align: center; margin-top: 5px;">2e B vs 3e A</div>
                </div>
            </div>
            
            <!-- DEMIS -->
            <div style="margin-bottom: 25px;">
                <div style="background: #ffd700; color: #021828; padding: 12px; border-radius: 40px; font-weight: 900; text-align: center; margin-bottom: 20px;">⚡ DEMI-FINALES</div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 12px; text-align: center;">
                    <span style="color: white;">Vainqueur Q1</span>
                    <span style="color: #ffd700; font-weight: 900; margin: 0 15px;">VS</span>
                    <span style="color: white;">Vainqueur Q4</span>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 15px; padding: 15px; text-align: center;">
                    <span style="color: white;">Vainqueur Q2</span>
                    <span style="color: #ffd700; font-weight: 900; margin: 0 15px;">VS</span>
                    <span style="color: white;">Vainqueur Q3</span>
                </div>
            </div>
            
            <!-- FINALE -->
            <div>
                <div style="background: #ffd700; color: #021828; padding: 12px; border-radius: 40px; font-weight: 900; text-align: center; margin-bottom: 20px;">🏆 FINALE</div>
                
                <div style="background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); border-radius: 15px; padding: 20px; text-align: center;">
                    <span style="color: #021828; font-weight: 900; font-size: 20px;">Vainqueur D1 vs Vainqueur D2</span>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ====== LANSE ======
document.addEventListener("DOMContentLoaded", () => showSection('accueil'));
