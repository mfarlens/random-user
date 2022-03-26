import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})

export class UserFilterComponent {
  filterForm: FormGroup;
  filter = {
    favorite: false,
    gender: '',
    name: ''
  }

  @Output() filtersEvent = new EventEmitter<{}>();
  
  constructor(formBuilder: FormBuilder) {
    this.filterForm = formBuilder.group({
      favorite: false,
      male: false,
      female: false,
      name: ''
    });

    this.filterForm.get('favorite')?.valueChanges.subscribe(val => {this.filter.favorite = val; this.setFilters();})
    this.filterForm.get('female')?.valueChanges.subscribe(val => {this.setGenderFilter('female', val); this.setFilters();})
    this.filterForm.get('male')?.valueChanges.subscribe(val => {this.setGenderFilter('male', val); this.setFilters();})
    this.filterForm.get('name')?.valueChanges.subscribe(val => {this.filter.name = val; this.setFilters();})
  }

  setGenderFilter(gender: string, val: boolean){
    if(val){
      this.filter.gender = gender;
      if(gender === 'female'){
        this.filterForm.get('male')?.setValue(false);
      } else {
        this.filterForm.get('female')?.setValue(false);
      }
    } else {
      if(this.filter.gender === gender){
        this.filter.gender = '';
      }
    }
  }

  setFilters(){
    this.filtersEvent.emit(this.filter);
  }
  
}
