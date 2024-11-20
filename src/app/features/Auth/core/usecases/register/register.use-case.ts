import { UseCase } from "src/app/core/base";
import { AuthRepository } from "@auth/core/repositories/auth.repository";
import { RegisterResponseEntity } from "@auth/core/entities/register-response.entity";
import { RequestRegisterEntity } from "@auth/core/entities/register-infortmation.entity";
import { Observable } from "rxjs";

export class RegisterUseCase implements UseCase<RequestRegisterEntity, RegisterResponseEntity>{
  constructor (private registerRepository: AuthRepository){}
  public execute(params: RequestRegisterEntity): Observable<RegisterResponseEntity>{
    return this.registerRepository.registerUser(params)
  }
}
