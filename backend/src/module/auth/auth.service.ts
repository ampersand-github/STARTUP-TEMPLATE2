import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FirebaseService } from "src/module/firebase/firebase.service";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import {
  IVerifiedStateResponseDto,
  verifiedStateResponseDto,
} from "src/module/auth/verified-state-response-dto";

@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService, private readonly firebase: FirebaseService) {}

  private async verifyIdToken(token: string): Promise<DecodedIdToken | null> {
    try {
      return await this.firebase.getAuth().verifyIdToken(token);
    } catch (e) {
      return null;
    }
  }

  async execute(token: string): Promise<string> {
    try {
      const decodedIdToken = await this.firebase.getAuth().verifyIdToken(token);
      return decodedIdToken.uid;
    } catch {
      throw new UnauthorizedException(`authentication failed`);
    }
  }

  async isVerified(token: string): Promise<IVerifiedStateResponseDto> {
    try {
      const mayBeDecodedIdToken = await this.verifyIdToken(token);
      if (!mayBeDecodedIdToken) return verifiedStateResponseDto(false, false);
      return mayBeDecodedIdToken.email_verified
        ? verifiedStateResponseDto(true, true)
        : verifiedStateResponseDto(true, false);
    } catch {
      throw new Error("あとで書く"); // todo あとで書く
    }
  }
}
