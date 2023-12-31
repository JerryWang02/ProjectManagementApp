import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-tags',
  templateUrl: './member-tags.component.html',
  styleUrls: ['./member-tags.component.scss']
})
export class MemberTagsComponent {
  @Input() name: string;
  @Input() tags: string[];

  removeTag(remove:string): void {
    this.tags.forEach((item, index) => {
      if (item === remove) this.tags.splice(index, 1);
    });
  }
}
