import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // static snapshot wont change the the data changes in URL
    let id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(p => {
      id = +p['id'];
      console.log("p :: ", p)
      this.server = this.serversService.getServer(id);
    })

    const queryParam = this.route.snapshot.queryParams;
    const fragment = this.route.snapshot.fragment;
    console.log("Static Query param :: ", queryParam);
    console.log("static fragement :: ", fragment);

    // dynamci snapshot it will give the changed data from URL
    this.route.queryParams.subscribe((param: Params) => console.log("Query param :: ", param));
    this.route.fragment.subscribe(fragment => console.log("fragement :: ", fragment));

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
