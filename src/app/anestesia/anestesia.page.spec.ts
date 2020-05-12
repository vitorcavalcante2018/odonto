import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnestesiaPage } from './anestesia.page';

describe('AnestesiaPage', () => {
  let component: AnestesiaPage;
  let fixture: ComponentFixture<AnestesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnestesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnestesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
