import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarVotedComponent } from './star-voted.component';

describe('StarVotedComponent', () => {
  let component: StarVotedComponent;
  let fixture: ComponentFixture<StarVotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarVotedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
