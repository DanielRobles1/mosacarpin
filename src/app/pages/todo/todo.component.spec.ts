import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // Para usar [(ngModel)]
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  // Ya importado de Angular

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule], // Aquí agregamos los módulos necesarios
      declarations: [TodoComponent] // Declaramos el componente a probar
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dispara ngOnInit y detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
