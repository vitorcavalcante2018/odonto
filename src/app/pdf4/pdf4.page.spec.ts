import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pdf4Page } from './pdf4.page';

describe('Pdf4Page', () => {
  let component: Pdf4Page;
  let fixture: ComponentFixture<Pdf4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pdf4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pdf4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
