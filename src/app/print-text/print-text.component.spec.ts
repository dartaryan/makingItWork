import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTextComponent } from './print-text.component';

describe('PrintTextComponent', () => {
  let component: PrintTextComponent;
  let fixture: ComponentFixture<PrintTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
