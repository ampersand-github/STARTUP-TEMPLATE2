import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FirebaseService } from "src/firebase/firebase.service";

@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService, private readonly firebase: FirebaseService) {}

  async execute(token: string): Promise<string> {
    try {
      const decodedIdToken = await this.firebase.getAuth().verifyIdToken(token);
      return decodedIdToken.uid;
    } catch {
      throw new UnauthorizedException(`authentication failed`);
    }
  }
}
