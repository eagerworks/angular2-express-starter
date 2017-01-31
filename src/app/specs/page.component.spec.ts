/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PageComponent } from '../components/page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    TestBed.compileComponents();
  });

  it(`should have as title 'Another page!'`, async(() => {
    const fixture = TestBed.createComponent(PageComponent);
    const component = fixture.debugElement.componentInstance;
    component.ngOnInit();
    expect(component.message).toEqual('Another page!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(PageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Another page!');
  }));
});
