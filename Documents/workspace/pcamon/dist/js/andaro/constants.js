var constants = {
    // Return Codes Server Data
    OK           :  0,
    GENERIC_ERR : -100,
    INVALID_JSON : -1,
    NOT_LOGGED_IN : -2,
    INVALID_RESPONSE : -3,
    DB_ERROR : -4,
    MAIL_ERROR : -5,
    INVALID_REQUEST : -6,

    // User Messages
    INVALID_RESPONSE_CONTACT_ADMIN : 'Ungültige Antwort vom Server. Bitte kontaktieren Sie den Administrator.',
    INVALID_REQUEST_CONTACT_ADMIN : 'Ungültige Anfrage an Server. Bitte kontaktieren Sie den Administrator.',
    NOT_LOGGED_IN_MSG : 'Sie sind nicht angemeldet.',
    DB_ERROR_MSG : 'Es liegt ein Datenbank Fehler vor.',
    MAIL_ERROR_MSG : 'Nachricht konnte nicht gesendet werden.',


    // PUSH Meldungen
    TXT_EVENT_CREATED : 'Neuer PCA Termin eingetroffen.',
    TXT_UNKNOWN_DEVICETOKEN: 'Unbekannt'
};