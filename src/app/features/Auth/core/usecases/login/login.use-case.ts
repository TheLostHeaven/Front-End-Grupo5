import { UseCase } from "src/app/core/base";
import { AuthRepository } from "@auth/core/repositories/auth.repository";
import { LoginResponseEntity } from "@auth/core/entities/login-response.entity";
import { LoginRequestEntity } from "@auth/core/entities/login-information.entity";

export class LoginUseCase implements UseCase<LoginRequestEntity, LoginResponseEntity>{
  constructor (private authRepository: AuthRepository){}

  public execute(params: LoginRequestEntity): Promise<LoginResponseEntity>{
    return this.authRepository.authenticateUser(params)
  }
}
