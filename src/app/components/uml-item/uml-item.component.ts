import {Component, Input} from '@angular/core';
import {UmlClassEntity} from '../../entities';

@Component({
  selector: '[ngs-demo-uml-item]',
  templateUrl: './uml-item.component.svg',
  styleUrls: ['./uml-item.component.scss']
})
export class UmlItemComponent {
  @Input() umlClass: UmlClassEntity;

  selectedAttribute: string;

  onItemDrag(event: MouseEvent | DragEvent) {
    this.umlClass.position.x += event.movementX;
    this.umlClass.position.y += event.movementY;
  }

  onAttributeDblclick(attribute) {
    this.selectedAttribute = attribute;
  }
}
