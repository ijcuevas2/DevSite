import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-zoom',
  templateUrl: './svg-zoom.component.html',
  styleUrls: ['./svg-zoom.component.sass']
})
export class SvgZoomComponent implements OnInit {
  constructor() { }

  public ngOnInit() {
     this.loadScript('scripts.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
