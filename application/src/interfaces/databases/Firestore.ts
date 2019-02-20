import * as firebase from 'firebase-admin';
import { Item } from 'interfaces/databases/Item';
import * as serviceAccount from 'config/firestore-serviceaccount.json';

export class Firestore {
  private static instance: Firestore;
  private db: FirebaseFirestore.Firestore;
  private constructor() {
    const params = {
      type: serviceAccount.type,
      projectId: serviceAccount.project_id,
      privateKeyId: serviceAccount.private_key_id,
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      clientId: serviceAccount.client_id,
      authUri: serviceAccount.auth_uri,
      tokenUri: serviceAccount.token_uri,
      authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
      clientC509CertUrl: serviceAccount.client_x509_cert_url
    };
   
    firebase.initializeApp({
      credential: firebase.credential.cert(params),
    });
    this.db = firebase.firestore();
  }

  public static getInstance() {
    if (!Firestore.instance) {
        Firestore.instance = new Firestore();
    }
    return Firestore.instance;
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