import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable, of } from "rxjs";
import { AuthRepository } from "@auth/core/repositories/auth.repository";
import { LoginRequestEntity } from "@auth/core/entities/login-information.entity";
import { LoginResponseEntity } from "@auth/core/entities/login-response.entity";
import { RequestRegisterEntity } from "@auth/core/entities/register-infortmation.entity";
import { RegisterResponseEntity } from "@auth/core/entities/register-response.entity";
import { authenticateUserMock } from "@shared/mocks/authenticate-user.mock";
import { registerUserMock } from "@shared/mocks/register-user.mock";

@Injectable({
  providedIn: 'root'
})
export class AuthImplementationRepositoryFake extends AuthRepository {
  public authenticateUser(params: LoginRequestEntity): Observable<LoginResponseEntity> {
    return of(authenticateUserMock).pipe(delay(1500))
  }
  public registerUser(params: RequestRegisterEntity): Observable<RegisterResponseEntity> {
    return of(registerUserMock).pipe(delay(1500))
  }
}
