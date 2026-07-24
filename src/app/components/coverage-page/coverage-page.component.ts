import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { growHeight } from 'src/animations';
import { COVERAGES } from 'src/app/data/coverages';
import { Coverage } from 'src/app/models/Coverage';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-coverage-page',
  templateUrl: './coverage-page.component.html',
  styleUrls: ['./coverage-page.component.scss'],
  animations: [growHeight],
  standalone: false,
})
export class CoveragePageComponent implements OnInit, OnDestroy {
  env = environment;
  coverageTypes: Coverage[] = COVERAGES;
  coverage: Coverage | undefined;

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.coverage = this.coverageTypes.find(
        (x) => x.id === params['coverageType']
      );

      if (!this.coverage) {
        this.router.navigate(['/']);
        return;
      }

      // Collapse any FAQ left open from the previous coverage.
      this.coverage.faqs.forEach((faq) => (faq.expanded = false));
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  get relatedCoverages(): Coverage[] {
    if (!this.coverage) return [];
    return this.coverage.related
      .map((id) => this.coverageTypes.find((x) => x.id === id))
      .filter((x): x is Coverage => !!x);
  }

  toggleFaq(index: number): void {
    const faq = this.coverage?.faqs[index];
    if (faq) faq.expanded = !faq.expanded;
  }
}
