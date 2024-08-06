export const environment = {
    production: false,
    // supposing you have a backend where to send some requests
    backendUrl: "http://127.0.0.1:8000",
    // The firebase config you retrieved from the console.
    // Note that this is NOT sensitive information
    firebaseConfig: {
        apiKey: "XXXXXXXXXXXXXXXXXXXX",
        authDomain: "XXXXXXXXXXXXXXXXXXXX",
        projectId: "XXXXXXXXXXXXXXXXXXXX",
        storageBucket: "XXXXXXXXXXXXXXXXXXXX",
        messagingSenderId: "XXXXXXXXXXXXXXXXXXXX",
        appId: "XXXXXXXXXXXXXXXXXXXX"
    },
};