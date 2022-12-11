import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FirebaseService {
  private firebaseApp: firebase.app.App;

  constructor(private readonly config: ConfigService) {
    if (firebase.apps.length === 0) {
      const serviceAccount: ServiceAccount = {
        projectId: config.get("project_id"),
        clientEmail: config.get("client_email"),
        // https://zenn.dev/kenta0313/articles/4793935e820b6c
        privateKey: config.get("private_key").replace(/\\n/gm, "\n"),
      };

      if (firebase.apps.length === 0) {
        this.firebaseApp = firebase.initializeApp({
          credential: firebase.credential.cert(serviceAccount),
        });
      }
    }
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseApp.auth();
  };
}
