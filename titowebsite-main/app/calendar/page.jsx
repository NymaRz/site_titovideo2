const { google } = require('googleapis');

const auth = new google.auth.OAuth2(
    '136019905711-63mvj9rm68tje52p826c2l876ic4e67s.apps.googleusercontent.com',
    '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',
    'https://accounts.google.com/o/oauth2/auth'
);

// Générer une URL d'autorisation
const authUrl = auth.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar',
});

// Redirigez l'utilisateur vers authUrl pour autoriser l'application
const calendar = google.calendar({ version: 'v3', auth });

// Exemple : lister les événements
calendar.events.list(
    {
        calendarId: 'primary', // Utilisez 'primary' pour le calendrier principal
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    },
    (err, res) => {
        if (err) return console.error('Erreur lors de la récupération des événements : ' + err);
        const events = res.data.items;
        if (events.length) {
            console.log('Prochains événements :');
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`${start} - ${event.summary}`);
            });
        } else {
            console.log('Aucun événement à venir trouvé.');
        }
    }
);