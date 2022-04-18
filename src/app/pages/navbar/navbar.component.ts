import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

  readonly tabs = [
    'John Cleese',
    'Eric Idle',
    this.collaborators,
    'Michael Palin',
    'Terry Jones',
    'Terry Gilliam',
    'Graham Chapman',
  ];

  activeElement = String(this.tabs[0]);

  open = false;

  get activeItemIndex(): number {
    if (this.collaborators.includes(this.activeElement)) {
      return this.tabs.indexOf(this.collaborators);
    }

    return this.tabs.indexOf(this.activeElement);
  }

  stop(event: Event) {
    // We need to stop tab custom event so parent component does not think its active
    event.stopPropagation();
  }

  onClick(activeElement: string) {
    this.activeElement = activeElement;
    this.open = false;
  }

  isString(tab: unknown): tab is string {
    return typeof tab === 'string';
  }
}

