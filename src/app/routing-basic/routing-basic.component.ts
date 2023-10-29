import { Component } from '@angular/core';
import { ServersService } from './servers/servers.service';

@Component({
  selector: 'app-routing-basic',
  templateUrl: './routing-basic.component.html',
  styleUrls: ['./routing-basic.component.css'],
  providers: [ServersService]
})
export class RoutingBasic {
}
