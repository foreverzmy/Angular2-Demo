import { Component } from '@angular/core';
import { Site }    from './site.model';
 
@Component({
  moduleId: module.id,
  selector: 'site-form',
  templateUrl: 'site-form.component.html'
})
export class SiteFormComponent {
  urls = ['www.foreverz.cn', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, 'foreverz', this.urls[0], 10000);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); }
  active = true;
  newSite() {
    this.model = new Site(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}