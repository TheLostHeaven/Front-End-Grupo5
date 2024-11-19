import { Injectable } from "@angular/core";
import { LoginUseCase } from "../usecases";
import { AuthRepository } from "../repositories/auth.repository";

@Injectable()
export class LoginInteractor {
  private loginUseCase: LoginUseCase;
  constructor(readonly repository: AuthRepository){
    this.loginUseCase = new LoginUseCase(repository);
  }

  public login(): Promise<void> {
    return this.loginUseCase.execute();
  }
}
