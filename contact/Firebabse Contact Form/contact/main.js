var firebaseConfig = {
    apiKey: "AIzaSyCIzQ4NDvD9ZHomyoWuJ-701LcpHNfVVow",
    authDomain: "dfd-contact-form.firebaseapp.com",
    projectId: "dfd-contact-form",
    storageBucket: "dfd-contact-form.appspot.com",
    messagingSenderId: "556359340914",
    appId: "1:556359340914:web:71cf44870a96bc674403eb",
    measurementId: "G-V5YTGGD16Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function registeration(event) {
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var data = {
        name,
        company,
        email,
        phone,
        message,
    }
firebase.firestore().collection('rafay').add(data).then(()=>{
    alert('Submitted!')
    console.log('contact form submitted!')
}).catch(error=> error)
 document.getElementById('name').value = '';
 document.getElementById('company').value = '';
document.getElementById('email').value = '';
document.getElementById('phone').value = '';
document.getElementById('message').value = '';
    return false;
}

