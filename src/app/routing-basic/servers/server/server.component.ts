import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  id: number;
  constructor(private serversService: ServersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // geting dynamic data from resolver
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
      // server is what we gave in route definition
    })

    // this.id = +this.route.snapshot.params["id"];
    // this.route.params.subscribe(p => {
    //   this.id = + p['id'];
    //   this.server = this.serversService.getServer(this.id);
    // })
    // this.server = this.serversService.getServer(this.id);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
