import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Movie3Page } from './movie3.page';

describe('Movie3Page', () => {
  let component: Movie3Page;
  let fixture: ComponentFixture<Movie3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movie3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Movie3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
