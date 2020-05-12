import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnMandibulaPage } from './tecn-mandibula.page';

describe('TecnMandibulaPage', () => {
  let component: TecnMandibulaPage;
  let fixture: ComponentFixture<TecnMandibulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnMandibulaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnMandibulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
