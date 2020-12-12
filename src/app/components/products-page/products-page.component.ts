import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DATA from 'src/assets/const/data.const';
import IData from 'src/assets/interface/data.interface';
import IProductsParams from 'src/assets/interface/products-params.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
class ProductsPageComponent implements OnInit {
  private data: IData;

  public paginatedData: IData;

  public totalItems: number;

  public currentPage = 1;

  public itemsPerPage = 10;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: IProductsParams) => {
      this.data = DATA[`${params.pageName}`];
      this.totalItems = this.data.products.length;
      this.pageChanged();
    });
  }

  pageChanged(event?) {
    if (event) {
      this.currentPage = event.page;
    }

    this.paginatedData = {
      name: this.data.name,
      products: this.data.products.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage,
      ),
    };
  }
}

export default ProductsPageComponent;
