import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "src/module/auth/auth.service";

export type CustomRequest = Request & { uid: string };

class RequestValidator {
  public validateRequest(request: Request): boolean {
    const authorization = request.headers.authorization;
    if (!authorization) {
      throw new UnauthorizedException("authorization header is nothing");
    }
    return true;
  }
  public validateBearer(bearer: string): boolean {
    if (bearer.split(" ")[0] !== "Bearer") {
      throw new UnauthorizedException("authorization format is [Bearer 〇〇]");
    }
    if (!bearer.split(" ")[1]) {
      throw new UnauthorizedException("there is no token");
    }
    return true;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly requestValidator: RequestValidator;

  constructor(private readonly authService: AuthService) {
    this.requestValidator = new RequestValidator();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = await context.switchToHttp().getRequest<CustomRequest>();
    this.requestValidator.validateRequest(request);
    this.requestValidator.validateBearer(request.headers.authorization);
    const token = this.pullOutToken(request);
    const uid = await this.authService.execute(token);
    request.uid = uid;
    return true;
  }

  private pullOutToken(request: CustomRequest): string {
    const authorization = request.headers.authorization;
    return authorization.split(" ")[1];
  }
}
