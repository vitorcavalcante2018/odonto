import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnMaxilaPage } from './tecn-maxila.page';

describe('TecnMaxilaPage', () => {
  let component: TecnMaxilaPage;
  let fixture: ComponentFixture<TecnMaxilaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnMaxilaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnMaxilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
