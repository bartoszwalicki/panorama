import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  public searchTerm = output<string>();

  public searchControl!: FormControl;

  private destroyRef = inject(DestroyRef);
  private readonly debounceTime: number = 200;

  public ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((query) => {
        this.searchTerm.emit(query);
      });
  }

  public clearButtonClickEvent(): void {
    this.searchControl.setValue('');
  }
}
