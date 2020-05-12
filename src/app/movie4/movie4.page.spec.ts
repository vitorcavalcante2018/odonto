import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Movie4Page } from './movie4.page';

describe('Movie4Page', () => {
  let component: Movie4Page;
  let fixture: ComponentFixture<Movie4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movie4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Movie4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
