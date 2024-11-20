import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";
import { environment } from "@environments/environment";
import { ApiService } from "@shared/services/api/api.service";
import { AuthRepository } from "@auth/core/repositories/auth.repository";
import { LoginRequestEntity } from "@auth/core/entities/login-information.entity";
import { LoginResponseEntity } from "@auth/core/entities/login-response.entity";
import { RequestRegisterEntity } from "@auth/core/entities/register-infortmation.entity";
import { RegisterResponseEntity } from "@auth/core/entities/register-response.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthImplementationRepository extends AuthRepository {

  public apiUrl: string;

  constructor(private readonly apiService: ApiService){
    super();
    this.apiUrl = environment?.API_SERVICES?.API_URL;
  }

  public authenticateUser(params: LoginRequestEntity): Observable<LoginResponseEntity> {
    return this.apiService.post(`${this.apiUrl}/authenticate`, params)
  }
  public registerUser(params: RequestRegisterEntity): Observable<RegisterResponseEntity> {
    return this.apiService.post(`${this.apiUrl}/register`, params)
  }
}
