// 🔴 DATE DE DÉBUT DE LA RELATION (à modifier)
const startDate = new Date(2026, 1, 14, 0, 0, 0);

// ✨ Message complet affiché par séquence
const messages = [
    { id: "line1", text: "Pour mon amour  :" },

    { id: "line2", text: "Si je pouvais choisir un endroit sûr," },
    { id: "line3", text: "ce serait à tes côtés." },

    { id: "line4", text: "Plus je passe de temps avec toi," },
    { id: "line5", text: "plus je t’aime chaque jour." },

    { id: "line6", text: "Tu es mon refuge," },
    { id: "line7", text: "mon sourire dans le silence," },
    { id: "line8", text: "et la plus belle chose que la vie m’ait donnée." },

    { id: "line9", text: "Mon amour pour toi a commencé le 14 février 2026." },

    { id: "line10", text: "Pour toi, Esther Mawunyo AMOUZOU 💖" },
    { id: "line11", text: "Avec tout mon amour, GABIENU Kwaku Segnon" }
];

// ⏳ Apparition progressive (1 seconde par phrase)
messages.forEach((msg, index) => {
    setTimeout(() => {
        document.getElementById(msg.id).innerText = msg.text;
    }, (index + 1) * 1000);
});

// ⏱️ Compteur de temps
function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("time").innerText =
        `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
}

// ⏳ Le compteur démarre après la dernière phrase
setTimeout(() => {
    updateTime();
    setInterval(updateTime, 1000);
}, (messages.length + 1) * 1000);
