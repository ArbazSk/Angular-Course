import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentR implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in HomeR component");
    console.log("Activated Route :: ", this.route);
  }

  onClick(id: number) {
    this.router.navigate(['/routing-basic/servers', id, 'edit'], { queryParams: { allowEdit: '1', save: 'no' }, fragment: 'loading' });

  }
}
