import { Component } from '@angular/core';
import {CategoryNode} from "./data/CategoryNode";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {categoriesData} from "./data/CateogiesData";
import {Router} from "@angular/router";
import {CartViewService} from "../../checkout/cart.view.service";
import {checkFormControl} from "../../../utils/checkFormControl";

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  id: number
  name: string;
  parentId: number,
  level: number;
}


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  drawerOpened=true
  protected chatOpened: boolean = false;
  constructor(
    private router: Router,
    public cartService: CartViewService
  ) {
    this.dataSource.data = categoriesData;
  }

  private _transformer = (node: CategoryNode, level: number): FlatNode => {
    return {
      expandable: !!node.subCategories && node.subCategories.length > 0,
      id: node.id,
      name: node.name,
      parentId: node.parentId === null ? -1 : node.parentId,  // Handle null by assigning a default invalid id
      level: level,
    };
  };

  menuClicked(){
    this.drawerOpened = !this.drawerOpened;
  }


  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.subCategories,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: FlatNode) => node.expandable;




  subCategoryClicked(node: CategoryNode) {
    this.router.navigate(['/products/category'], {
      queryParams: {
        cat: node.parentId,
        sub: node.id
      },
      queryParamsHandling: 'merge', // 'merge' or 'replace'
      // 'merge' will merge the new parameters with existing ones
      // 'replace' will replace the existing query parameters with the new ones
      skipLocationChange: false,
    }).catch(error => {

    })
      .finally(()=>{

      });
  }

  openChat() {
    console.log('openChat');
    this.chatOpened = !this.chatOpened
  }

  protected readonly checkFormControl = checkFormControl;
}
