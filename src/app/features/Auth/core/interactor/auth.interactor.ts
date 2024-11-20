import { Injectable } from "@angular/core";
import { LoginUseCase, RegisterUseCase } from "../usecases";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginResponseEntity } from "../entities/login-response.entity";
import { LoginRequestEntity } from "../entities/login-information.entity";
import { RegisterResponseEntity } from "../entities/register-response.entity";
import { RequestRegisterEntity } from "../entities/register-infortmation.entity";

@Injectable()
export class AuthInteractor {
  private loginUseCase: LoginUseCase;
  private registerUseCase: RegisterUseCase;

  constructor(readonly authRepository: AuthRepository){
    this.loginUseCase = new LoginUseCase(authRepository);
    this.registerUseCase = new RegisterUseCase(authRepository);
  }

  public authenticateUser(params: LoginRequestEntity): Promise<LoginResponseEntity> {
    return this.loginUseCase.execute(params);
  }

  public registerUser(params: RequestRegisterEntity): Promise<RegisterResponseEntity> {
    return this.registerUseCase.execute(params);
  }
}
