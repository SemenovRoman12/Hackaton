import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTokenService {
  public getItem(): string | null {
    return localStorage.getItem('token') || null;
  }

  public setItem(data: string): string {
    localStorage.setItem('token', data);
    return data;
  }

  public removeItem(): boolean {
    localStorage.removeItem('token');
    return true;
  }
}
