import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated = false;
  private authObs$: Subscription;
  constructor(private dataStore: DataStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authObs$ = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onSelect(value: string) {
    this.featureSelected.emit(value);
  }

  onSaveData() {
    this.dataStore.storeRecipes();
  }

  fetchData() {
    this.dataStore.fetchRecipe().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
