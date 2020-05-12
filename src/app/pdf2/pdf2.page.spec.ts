import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pdf2Page } from './pdf2.page';

describe('Pdf2Page', () => {
  let component: Pdf2Page;
  let fixture: ComponentFixture<Pdf2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pdf2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pdf2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
