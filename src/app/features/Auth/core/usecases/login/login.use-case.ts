import { UseCase } from "src/app/core/base";
import { AuthRepository } from "@auth/core/repositories/auth.repository";

export class LoginUseCase implements UseCase<void, void>{
  constructor (private loginRepository: AuthRepository){}
  public execute(): Promise<void>{
    return this.loginRepository.auth()
  }
}
