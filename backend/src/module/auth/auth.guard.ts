import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "src/module/auth/auth.service";
import { RequestValidator } from "./request-validator";

export type CustomRequest = Request & { uid: string };

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly requestValidator: RequestValidator;

  constructor(private readonly authService: AuthService) {
    this.requestValidator = new RequestValidator();
  }

  private pullOutToken(request: CustomRequest): string {
    const authorization = request.headers.authorization;
    return authorization.split(" ")[1];
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = await context.switchToHttp().getRequest<CustomRequest>();
    this.requestValidator.validateRequest(request);
    this.requestValidator.validateBearer(request.headers.authorization);
    const token = this.pullOutToken(request);
    const uid = await this.authService.execute(token);
    request.uid = uid;
    return true;
  }
}
