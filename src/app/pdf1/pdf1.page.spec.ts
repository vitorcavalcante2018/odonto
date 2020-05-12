import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pdf1Page } from './pdf1.page';

describe('Pdf1Page', () => {
  let component: Pdf1Page;
  let fixture: ComponentFixture<Pdf1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pdf1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pdf1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
