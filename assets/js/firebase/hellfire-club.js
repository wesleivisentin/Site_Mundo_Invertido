
import app from "./app.js"
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClun(subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, "hellfire-clube")
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}

export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, "hellfire-clube")
    const subscriptions = hellfireClubCollection.docs.map(doc => doc.data());
    return subscriptions;
  }


// CODIGO TIRADO DA DOCUMENTAÇÃO PARA EDITAR O DE CIMA:
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }