import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {ApiService} from "@core/http/api.service";

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


  public rentServer(server: Server) {
    console.log(`/rent/${server.ID}`)
    this.apiService.post(`/rent/${server.ID}`);
  }
}
