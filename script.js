// ====== 10 ÉQUIPES AVEC LOGOS ======
let teams = [
    // Groupe A
    {nom:"Leverkusen", logo:"https://i.postimg.cc/44LTZfVZ/IMG-20260213-WA0067.jpg", groupe:"A"},
    {nom:"Celtic", logo:"https://i.postimg.cc/ZRb1t2qr/IMG-20260213-WA0068.jpg", groupe:"A"},
    {nom:"Barcelona", logo:"https://i.postimg.cc/zDP46dYg/IMG-20260213-WA0069.jpg", groupe:"A"},
    {nom:"Breda", logo:"https://i.postimg.cc/t4Ff1pZd/IMG-20260213-WA0070.jpg", groupe:"A"},
    {nom:"Inter Fc", logo:"https://i.postimg.cc/B67wWvyw/IMG-20260213-WA0071.jpg", groupe:"A"},
    
    // Groupe B
    {nom:"F.J.J.Robin", logo:"https://i.postimg.cc/28tGCJ0T/IMG-20260213-WA0072.jpg", groupe:"B"},
    {nom:"NOGAME CITY", logo:"https://i.postimg.cc/Jzx1y926/IMG-20260214-WA0089.jpg", groupe:"B"},
    {nom:"BABAYAGA", logo:"https://i.postimg.cc/wxnY76T9/IMG-20260214-WA0087.jpg", groupe:"B"},
    {nom:"Team Heineken", logo:"https://i.postimg.cc/nrj2yb6g/IMG-20260214-WA0086.jpg", groupe:"B"},
    {nom:"1i__phada", logo:"https://i.postimg.cc/K82XDJM9/IMG-20260214-WA0088.jpg", groupe:"B"}
];

// ====== MATCHS - KOREJE ======
let matches = [
    // ========== GROUPE A ==========
    // Chak ekip jwe 4 match (2 lakay, 2 deyò)
    
    // Journée 1
    {home:"Leverkusen", away:"Celtic", homeScore:0, awayScore:0},
    {home:"Barcelona", away:"Breda", homeScore:2, awayScore:0},
    
    // Journée 2
    {home:"Inter Fc", away:"Leverkusen", homeScore:0, awayScore:0},
    {home:"Celtic", away:"Barcelona", homeScore:0, awayScore:0},
    
    // Journée 3
    {home:"Breda", away:"Inter Fc", homeScore:0, awayScore:0},
    {home:"Leverkusen", away:"Barcelona", homeScore:0, awayScore:0},
    
    // Journée 4
    {home:"Celtic", away:"Inter Fc", homeScore:0, awayScore:0},
    {home:"Breda", away:"Leverkusen", homeScore:0, awayScore:0},
    
    // Journée 5
    {home:"Barcelona", away:"Inter Fc", homeScore:0, awayScore:0},
    {home:"Celtic", away:"Breda", homeScore:0, awayScore:0},
    
    // ========== GROUPE B ==========
    
    // Journée 1
    {home:"NOGAME CITY", away:"BABAYAGA", homeScore:0, awayScore:0},
    {home:"Team Heineken", away:"1i__phada", homeScore:0, awayScore:0},
    
    // Journée 2
    {home:"F.J.J.Robin", away:"NOGAME CITY", homeScore:0, awayScore:0},
    {home:"BABAYAGA", away:"Team Heineken", homeScore:0, awayScore:0},
    
    // Journée 3
    {home:"1i__phada", away:"F.J.J.Robin", homeScore:0, awayScore:0},
    {home:"NOGAME CITY", away:"Team Heineken", homeScore:0, awayScore:0},
    
    // Journée 4
    {home:"BABAYAGA", away:"1i__phada", homeScore:0, awayScore:0},
    {home:"F.J.J.Robin", away:"Team Heineken", homeScore:0, awayScore:0},
    
    // Journée 5
    {home:"1i__phada", away:"NOGAME CITY", homeScore:0, awayScore:0},
    {home:"BABAYAGA", away:"F.J.J.Robin", homeScore:0, awayScore:0}
];

// Variable pou tirage
let tirageEffectue = false;
let quarts = [];

// ====== FONKSYON NAVIGASYON ======
function showSection(sectionId) {
    document.querySelectorAll('.uefa-section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.uefa-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1)).classList.add('active');
    
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
        max-width: 650px;
        background: white;
        border-radius: 30px;
        padding: 20px 25px 70px 25px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        border: 4px solid #ffd700;
        position: relative;
    `;
    
    // HEADER FOTO A
    let headerHtml = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg" style="height: 30px; width: auto; border-radius: 50%;" onerror="this.src='https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg'">
                <div>
                    <h2 style="color: #021828; font-size: 14px; margin: 0; font-weight: 900; text-align: center;">LEAGUE EFOOT HAITIAN</h2>
                    <p style="color: #ffd700; margin: 2px 0 0; font-size: 9px;">★★★★★</p>
                </div>
            </div>
            <div style="background: #021828; color: #ffd700; padding: 5px 15px; border-radius: 25px; font-weight: 900; font-size: 14px;">
                GR. ${group}
            </div>
        </div>
    `;
    
    // Klasman an
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
    
    // Footer
    let footerHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0 5px 0; padding-top: 5px; border-top: 2px solid #ffd700; font-size: 9px;">
            <div style="display: flex; gap: 10px;">
                <span style="color: #28a745;">✓ 4 qualifiés</span>
                <span style="color: #dc3545;">✗ 5e éliminé</span>
            </div>
            <div style="color: #021828;">© 2026</div>
        </div>
    `;
    
    // BOUTON RETOUR ANBA SANTRE
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
        nom: t.nom, 
        logo: t.logo,
        MJ: -4, 
        V: 0, 
        N: -4, 
        D: 0,
        BP: 0, 
        BC: 0, 
        Diff: 0, 
        Pts: -4
    }));

    matches.forEach(m => {
        let t1 = table.find(t => t.nom === m.home);
        let t2 = table.find(t => t.nom === m.away);
        if (t1 && t2) {
            t1.MJ++; t2.MJ++;
            t1.BP += m.homeScore; t1.BC += m.awayScore;
            t2.BP += m.awayScore; t2.BC += m.homeScore;
            
            if (m.homeScore > m.awayScore) { 
                t1.V++; t1.Pts += 3; t2.D++; 
            }
            else if (m.homeScore < m.awayScore) { 
                t2.V++; t2.Pts += 3; t1.D++; 
            }
            else { 
                t1.N++; t2.N++; t1.Pts++; t2.Pts++; 
            }
        }
    });

    table.forEach(t => t.Diff = t.BP - t.BC);
    
    // TRI DÉCROISSANT: PI GWO PTS AN PREMYE
    return table.sort((a, b) => {
        if (b.Pts !== a.Pts) return b.Pts - a.Pts;
        if (b.Diff !== a.Diff) return b.Diff - a.Diff;
        return b.BP - a.BP;
    });
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
            <button onclick="openFullscreen('${group}')" style="background: #ffd700; color: #021828; border: none; padding: 12px 25px; border-radius: 40px; font-weight: 700; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 22px;">⛶</span> PLEIN ÉCRAN
            </button>
        </div>
    `;
    
    let html = headerHtml;
    html += `<table class="uefa-table">
        <tr>
            <th>#</th>
            <th>Équipe</th>
            <th>MJ</th>
            <th>V</th>
            <th>N</th>
            <th>D</th>
            <th>BP</th>
            <th>BC</th>
            <th>+/-</th>
            <th>Pts</th>
        </tr>`;
    
    classement.forEach((t, i) => {
        let rowClass = '';
        if (i < 4) rowClass = 'qualified-row';
        else if (i === 4) rowClass = 'eliminated-row';
        
        // Premye ekip la an lò
        let rankStyle = '';
        if (i === 0) rankStyle = 'background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%); color: #021828; font-weight: 900;';
        
        html += `<tr class="${rowClass}">
            <td style="${rankStyle} font-weight: 900; font-size: 18px;"><strong>${i + 1}</strong></td>
            <td style="text-align: left;">
                <div class="team-cell-mobile">
                    <img src="${t.logo}" class="team-logo-small" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #ffd700; object-fit: cover;" onerror="this.src='https://i.postimg.cc/d0yvfp5r/IMG-20260213-WA0065.jpg'">
                    <span style="font-weight: 600; font-size: 15px;">${t.nom}</span>
                </div>
            </td>
            <td style="font-size: 15px;">${t.MJ}</td>
            <td style="font-size: 15px;">${t.V}</td>
            <td style="font-size: 15px;">${t.N}</td>
            <td style="font-size: 15px;">${t.D}</td>
            <td style="font-size: 15px; font-weight: 700;">${t.BP}</td>
            <td style="font-size: 15px; font-weight: 700;">${t.BC}</td>
            <td style="font-size: 15px; color: ${t.Diff > 0 ? '#28a745' : (t.Diff < 0 ? '#dc3545' : '#666')}; font-weight: 700;">${t.Diff > 0 ? '+' : ''}${t.Diff}</td>
            <td><span class="points-badge-mobile" style="background: #ffd700; color: #021828; font-weight: 900; padding: 6px 12px; border-radius: 25px; font-size: 16px;">${t.Pts}</span></td>
        </tr>`;
    });
    
    html += "</table>";
    tableContainer.innerHTML = html;
    
    // Matchs du groupe
    let groupMatches = matches.filter(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        return h && h.groupe === group && a && a.groupe === group;
    });
    
    let mHtml = '<div class="match-grid">';
    groupMatches.forEach((m, index) => {
        let hTeam = teams.find(t => t.nom === m.home);
        let aTeam = teams.find(t => t.nom === m.away);
        let journee = Math.floor(index / 2) + 1;
        
        mHtml += `
            <div class="uefa-match-card" style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; color: #ffd700; font-size: 13px; margin-bottom: 8px;">
                    <span>⚽ JOURNÉE ${journee}</span>
                </div>
                <div class="match-teams" style="display: flex; align-items: center; justify-content: space-between;">
                    <div class="team-match" style="flex: 1; text-align: center;">
                        <img src="${hTeam.logo}" style="width: 45px; height: 45px; border-radius: 50%; border: 3px solid #ffd700; object-fit: cover; margin-bottom: 5px;">
                        <span style="color: white; font-weight: 600; font-size: 14px; display: block;">${m.home}</span>
                    </div>
                    <div class="match-score" style="background: #ffd700; color: #021828; font-size: 22px; font-weight: 900; padding: 8px 15px; border-radius: 30px; min-width: 70px; text-align: center;">
                        ${m.homeScore} - ${m.awayScore}
                    </div>
                    <div class="team-match" style="flex: 1; text-align: center;">
                        <img src="${aTeam.logo}" style="width: 45px; height: 45px; border-radius: 50%; border: 3px solid #ffd700; object-fit: cover; margin-bottom: 5px;">
                        <span style="color: white; font-weight: 600; font-size: 14px; display: block;">${m.away}</span>
                    </div>
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
    
    matches.forEach((m, index) => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        
        html += `
            <div class="uefa-match-card" style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border: 2px solid #ffd700; margin-bottom: 10px; padding: 12px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                        <img src="${h.logo}" style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #ffd700;">
                        <span style="color: white; font-size: 13px;">${m.home}</span>
                    </div>
                    <div style="background: #ffd700; color: #021828; font-weight: 900; padding: 5px 12px; border-radius: 20px;">${m.homeScore}-${m.awayScore}</div>
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; justify-content: flex-end;">
                        <span style="color: white; font-size: 13px;">${m.away}</span>
                        <img src="${a.logo}" style="width: 35px; height: 35px; border-radius: 50%; border: 2px solid #ffd700;">
                    </div>
                </div>
                <div style="color: #ffd700; font-size: 11px; text-align: center; margin-top: 8px;">⚽ GROUPE ${h.groupe}</div>
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
    
    let dernyeMatchs = matches.slice(-4);
    
    let html = '<div class="match-grid">';
    dernyeMatchs.forEach(m => {
        let h = teams.find(t => t.nom === m.home);
        let a = teams.find(t => t.nom === m.away);
        
        html += `
            <div class="uefa-match-card" style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border: 2px solid #ffd700; padding: 12px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <img src="${h.logo}" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid #ffd700;">
                        <span style="color: white; font-size: 12px;">${m.home}</span>
                    </div>
                    <div style="background: #ffd700; color: #021828; font-weight: 900; padding: 3px 10px; border-radius: 15px;">${m.homeScore}-${m.awayScore}</div>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <span style="color: white; font-size: 12px;">${m.away}</span>
                        <img src="${a.logo}" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid #ffd700;">
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// ====== TIRAGE AU SORT ======
function effectuerTirage() {
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
    
    quarts = [
        {team1: qualifiees[0], team2: qualifiees[7]},
        {team1: qualifiees[1], team2: qualifiees[6]},
        {team1: qualifiees[2], team2: qualifiees[5]},
        {team1: qualifiees[3], team2: qualifiees[4]}
    ];
    
    let html = '<h3 style="color: #ffd700; text-align: center; margin: 15px 0;">🎲 RÉSULTAT TIRAGE</h3>';
    
    quarts.forEach((q, i) => {
        html += `
            <div style="background: linear-gradient(135deg, #1a2a3a 0%, #0f1a24 100%); border: 2px solid #ffd700; border-radius: 15px; padding: 15px; margin-bottom: 15px;">
                <div style="text-align: center; color: #ffd700; font-weight: 700; margin-bottom: 10px;">QUART ${i + 1}</div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="text-align: center; flex: 1;">
                        <img src="${q.team1.logo}" style="width: 45px; height: 45px; border-radius: 50%; border: 3px solid #ffd700;">
                        <div style="color: white; font-size: 13px;">${q.team1.nom}</div>
                    </div>
                    <div style="background: #ffd700; color: #021828; font-weight: 900; padding: 5px 12px; border-radius: 20px;">VS</div>
                    <div style="text-align: center; flex: 1;">
                        <img src="${q.team2.logo}" style="width: 45px; height: 45px; border-radius: 50%; border: 3px solid #ffd700;">
                        <div style="color: white; font-size: 13px;">${q.team2.nom}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
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
            
            <!-- QUARTS -->
            <div style="margin-bottom: 25px;">
                <div style="background: #ffd700; color: #021828; padding: 10px; border-radius: 30px; font-weight: 900; text-align: center; margin-bottom: 15px;">🏁 QUARTS DE FINALE</div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white;">${A[0].nom}</span>
                        <span style="color: #ffd700; font-weight: 900;">VS</span>
                        <span style="color: white;">${B[3].nom}</span>
                    </div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white;">${B[0].nom}</span>
                        <span style="color: #ffd700; font-weight: 900;">VS</span>
                        <span style="color: white;">${A[3].nom}</span>
                    </div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white;">${A[1].nom}</span>
                        <span style="color: #ffd700; font-weight: 900;">VS</span>
                        <span style="color: white;">${B[2].nom}</span>
                    </div>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="color: white;">${B[1].nom}</span>
                        <span style="color: #ffd700; font-weight: 900;">VS</span>
                        <span style="color: white;">${A[2].nom}</span>
                    </div>
                </div>
            </div>
            
            <!-- DEMIS -->
            <div style="margin-bottom: 25px;">
                <div style="background: #ffd700; color: #021828; padding: 10px; border-radius: 30px; font-weight: 900; text-align: center; margin-bottom: 15px;">⚡ DEMI-FINALES</div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px; margin-bottom: 10px; text-align: center;">
                    <span style="color: white;">Vainqueur Q1</span>
                    <span style="color: #ffd700; font-weight: 900; margin: 0 10px;">VS</span>
                    <span style="color: white;">Vainqueur Q4</span>
                </div>
                
                <div style="background: #0f1a24; border: 2px solid #ffd700; border-radius: 12px; padding: 12px; text-align: center;">
                    <span style="color: white;">Vainqueur Q2</span>
                    <span style="color: #ffd700; font-weight: 900; margin: 0 10px;">VS</span>
                    <span style="color: white;">Vainqueur Q3</span>
                </div>
            </div>
            
            <!-- FINALE -->
            <div>
                <div style="background: #ffd700; color: #021828; padding: 10px; border-radius: 30px; font-weight: 900; text-align: center; margin-bottom: 15px;">🏆 FINALE</div>
                
                <div style="background: #0f1a24; border: 3px solid #ffd700; border-radius: 12px; padding: 15px; text-align: center;">
                    <span style="color: white;">Vainqueur D1</span>
                    <span style="color: #ffd700; font-weight: 900; margin: 0 15px;">VS</span>
                    <span style="color: white;">Vainqueur D2</span>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ====== LANSE ======
document.addEventListener("DOMContentLoaded", () => showSection('accueil'));
