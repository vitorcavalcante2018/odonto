import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerguntasPage } from './perguntas.page';

describe('PerguntasPage', () => {
  let component: PerguntasPage;
  let fixture: ComponentFixture<PerguntasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerguntasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
