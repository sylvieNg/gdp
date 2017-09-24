import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app works!';
  jobAds = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
  {id: 'standout', name:'Standout Ad', price:'322.99'}, 
  {id: 'premium', name:'Premium Ad', price:'394.99'}]
  jobAdsArray = [];
  form: FormGroup;
  totalPrice: number = 0;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      customerName: new FormControl(''),
    });
  }

  addJobAds(ads){
    this.jobAdsArray.push(ads)
  }

  removeJobAds(selected, index){
    for(let i = 0; i <= this.jobAdsArray.length; i++){
      if(i === index){
        this.jobAdsArray.splice(index, 1)
      }
    }
  }

  reset(){
    this.ngOnInit();
    this.jobAdsArray = [];
    this.totalPrice = 0;
  }

  submitForm(){
    let numberOfClassic = 0;
    let numberOfStandout = 0;
    let numberOfPremium = 0;
    for(let i = 0; i < this.jobAdsArray.length; i++){
      if(this.jobAdsArray[i]['id'] === 'classic'){
        numberOfClassic ++;
      } else if(this.jobAdsArray[i]['id'] === 'standout'){
        numberOfStandout++;
      } else {
        numberOfPremium++;
      }
    }
    switch(this.form.value.customerName.toLowerCase()){
      case 'unilever':
      this.totalPrice = (numberOfClassic%3 * 269.99) + (Math.trunc(numberOfClassic/3) * (269.99 * 2)) + 
      (numberOfPremium * 394.99) + (numberOfStandout * 322.99);
      break;
      case 'apple':
      this.totalPrice = (numberOfStandout * 299.99) + (numberOfClassic * 269.99) + (numberOfPremium * 394.99);
      break;
      case 'nike':
      if(numberOfPremium >= 4){
        this.totalPrice = (numberOfPremium * 379.99) + (numberOfClassic * 269.99) + (numberOfStandout * 322.99);
      } else {
        this.totalPrice = (numberOfPremium * 394.99) + (numberOfClassic * 269.99) + (numberOfStandout * 322.99);        
      }
      break;
      case 'ford':
      this.totalPrice = (numberOfClassic%5 * 269.99) + (Math.trunc(numberOfClassic/5) * (309.99 * 4)) + (numberOfStandout * 309.99);
      if(numberOfPremium >= 3){
        this.totalPrice += numberOfPremium * 389.99;
      } else {
        this.totalPrice += numberOfPremium * 394.99;
      }
      break;
      default:
      this.totalPrice = numberOfClassic * 269.99 + numberOfPremium * 394.99 + numberOfStandout * 322.99;
      break;
    }
  }
}
