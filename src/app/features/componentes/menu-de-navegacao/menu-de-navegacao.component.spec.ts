import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeNavegacaoComponent } from './menu-de-navegacao.component';

describe('MenuDeNavegacaoComponent', () => {
  let component: MenuDeNavegacaoComponent;
  let fixture: ComponentFixture<MenuDeNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDeNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDeNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
