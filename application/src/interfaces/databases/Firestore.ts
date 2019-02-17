import * as firebase from 'firebase-admin';
import * as serviceAccount from 'config/firestore-serviceaccount.json';
import { Item } from 'interfaces/databases/Item';

export class Firestore {
  private db: FirebaseFirestore.Firestore;
  constructor() {
    const params = {
      type: serviceAccount.type,
      project_id: serviceAccount.project_id,
      private_key_id: serviceAccount.private_key_id,
      private_key: serviceAccount.private_key,
      client_email: serviceAccount.client_email,
      client_id: serviceAccount.client_id,
      auth_uri: serviceAccount.auth_uri,
      token_uri: serviceAccount.token_uri,
      auth_provider_x509_cert_url: serviceAccount.auth_provider_x509_cert_url,
      client_x509_cert_url: serviceAccount.client_x509_cert_url
    };
    firebase.initializeApp({
      credential: firebase.credential.cert(JSON.stringify(params)),
    });
    this.db = firebase.firestore();
  }

  public async save(tableName: string, data: object, key?: string): Promise<string> {
    let collectionRef = this.db.collection(tableName);
    let docRef: FirebaseFirestore.DocumentReference;
    if (key) {
      docRef = collectionRef.doc(key);
      await docRef.set(data);
    } else {
      docRef = await collectionRef.add(data);
    }
    return new Promise((resolve) => resolve(docRef.id));
  }

  public async find(tableName: string, key: string): Promise<Item|null> {
    let collectionRef = this.db.collection(tableName);
    const docSnapshot = await collectionRef.doc(key).get();
    const data = docSnapshot.data();
    return new Promise((resolve) => resolve({
      key: docSnapshot.id,
      data: data
    }));
  }
}