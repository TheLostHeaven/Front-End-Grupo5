import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { LoginInformationEntity } from '@auth/core/entities/login-information.entity';

@Injectable({
  providedIn: 'root'
})
export class SessionProviderservice {

  public informationToken: string = '';

  public getInformationToken(): string {
    return this.informationToken;
  }

  public setInformationToken(token: string): string {
    return this.informationToken = token
  }
}

