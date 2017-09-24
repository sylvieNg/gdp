/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, NgZone, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`test unilever 3 classic 1 premium`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.jobAds = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
    {id: 'standout', name:'Standout Ad', price:'322.99'}, 
    {id: 'premium', name:'Premium Ad', price:'394.99'}];

    app.jobAdsArray = [{id: 'classic', name:'Classic Ad', price:'269.99'},
    {id: 'classic', name:'Classic Ad', price:'269.99'},
    {id: 'classic', name:'Classic Ad', price:'269.99'},
    {id: 'premium', name:'Premium Ad', price:'394.99'}];
    app.form.patchValue({
      customerName: 'unilever'
    })
    app.submitForm();
    expect(app.totalPrice).toBe(934.97)
  }));

  it('test apple 3 standout 1 premium', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.jobAds = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
    {id: 'standout', name:'Standout Ad', price:'322.99'}, 
    {id: 'premium', name:'Premium Ad', price:'394.99'}];

    app.jobAdsArray = [{id: 'standout', name:'Standout Ad', price:'322.99'},
    {id: 'standout', name:'Standout Ad', price:'322.99'},
    {id: 'standout', name:'Standout Ad', price:'322.99'},
    {id: 'premium', name:'Premium Ad', price:'394.99'}];
    app.form.patchValue({
      customerName: 'Apple'
    })
    app.submitForm();
    expect(app.totalPrice).toBe(1294.96)
  }));

  it('test nike 4 premium', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.jobAds = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
    {id: 'standout', name:'Standout Ad', price:'322.99'}, 
    {id: 'premium', name:'Premium Ad', price:'394.99'}];

    app.jobAdsArray = [{id: 'premium', name:'Premium Ad', price:'394.99'},
    {id: 'premium', name:'Premium Ad', price:'394.99'},
    {id: 'premium', name:'Premium Ad', price:'394.99'},
    {id: 'premium', name:'Premium Ad', price:'394.99'}];
    app.form.patchValue({
      customerName: 'nike'
    })
    app.submitForm();
    expect(app.totalPrice).toBe(1519.96)
  }));

  it('test default 1 classic 1 standout 1 premium', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.jobAds = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
    {id: 'standout', name:'Standout Ad', price:'322.99'}, 
    {id: 'premium', name:'Premium Ad', price:'394.99'}];

    app.jobAdsArray = [{id: 'classic', name:'Classic Ad', price:'269.99'}, 
    {id: 'standout', name:'Standout Ad', price:'322.99'}, 
    {id: 'premium', name:'Premium Ad', price:'394.99'}];
    app.form.patchValue({
      customerName: 'default'
    })
    app.submitForm();
    expect(app.totalPrice).toBe(987.97)
  }));
});
