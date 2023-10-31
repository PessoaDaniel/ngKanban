import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBoardsComponent } from './personal-boards.component';

describe('PersonalBoardsComponent', () => {
  let component: PersonalBoardsComponent;
  let fixture: ComponentFixture<PersonalBoardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalBoardsComponent]
    });
    fixture = TestBed.createComponent(PersonalBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
