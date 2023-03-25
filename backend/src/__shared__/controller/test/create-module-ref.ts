import { Test } from "@nestjs/testing";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { ModuleMetadata } from "@nestjs/common/interfaces/modules/module-metadata.interface";

const canActivate = async (context: ExecutionContext, uid: string) => {
  const request = context.switchToHttp().getRequest<CustomRequest>();
  if (!request.headers.authorization) throw new UnauthorizedException("認証エラー（テスト）");
  request.uid = uid;
  return true;
};

export const createModuleRef = async (uid: string, imports: ModuleMetadata["imports"]) =>
  await Test.createTestingModule({ imports: imports })
    .overrideGuard(AuthGuard)
    .useValue({ canActivate: (context) => canActivate(context, uid) }) // 認証モックを差し込む
    .compile();
