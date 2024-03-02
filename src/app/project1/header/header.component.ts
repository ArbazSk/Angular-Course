import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStore: DataStorageService) { }

  ngOnInit(): void {
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

}
