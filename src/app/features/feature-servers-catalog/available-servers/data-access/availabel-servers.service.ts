import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, pipe, throwError, Observable} from "rxjs";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {ApiService} from "@core/http/api.service";
import {HttpEventType} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AvailableServerService {
  private readonly apiService = inject(ApiService);

  private readonly _availableServersSubject$ = new BehaviorSubject<Server[]>([]);
  public readonly availableServers$ = this._availableServersSubject$.asObservable();

  public loadServers() {
    return this.apiService.get<Server[]>('/servers/available').subscribe(
      (servers) => this._availableServersSubject$.next(servers)
    );
  }

  public rentServer(server: Server, days: number): Observable<any> {
    return this.apiService.post<null, any>(`/rent/${server.ID}`, {booking_days: days});
  }
}
// fetch('http://localhost:80/rent/3f45b109-0e26-43b0-abcb-52b216b69a1e', {
//   method: 'DELETE',
// })
//   .then(response => response.json())
//   .then(data => console.log('Unrent successful:', data))
//   .catch(error => console.error('Failed to unrent server:', error));


// http://localhost:80/
