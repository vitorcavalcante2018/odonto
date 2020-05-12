import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pdf3Page } from './pdf3.page';

describe('Pdf3Page', () => {
  let component: Pdf3Page;
  let fixture: ComponentFixture<Pdf3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pdf3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pdf3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
