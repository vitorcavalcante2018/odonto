import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Movie2Page } from './movie2.page';

describe('Movie2Page', () => {
  let component: Movie2Page;
  let fixture: ComponentFixture<Movie2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movie2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Movie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
