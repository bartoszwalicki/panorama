import { NgIf } from '@angular/common';
import { Component, DestroyRef, inject, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, take } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  public searchTerm = output<string>();
  public setSearchTerm = input<string>();

  public searchControl!: FormControl;

  private destroyRef = inject(DestroyRef);

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((query) => {
        this.updateUrlQuerySearchParam(query);

        this.searchTerm.emit(query);
      });

    if (this.setSearchTerm()) {
      this.searchControl.setValue(this.setSearchTerm());
    }

    this.setSearchTextIfAvailableInQueryParams();
  }

  public clearButtonClickEvent(): void {
    this.searchControl.setValue('');
  }

  private setSearchTextIfAvailableInQueryParams(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      const search = params['search'];
      if (search) {
        this.searchControl.setValue(search);
      }
    });
  }

  private updateUrlQuerySearchParam(searchText: string): void {
    const queryParams: Params = {};

    if (searchText && searchText.trim() !== '') {
      queryParams['search'] = searchText;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: searchText },
      queryParamsHandling: 'merge',
    });
  }
}
