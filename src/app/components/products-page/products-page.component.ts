import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import DATA from 'src/assets/const/data.const';
import IData, { IBigData } from 'src/assets/interface/data.interface';
import IProduct from 'src/assets/interface/product.interface';
import IProductsParams from 'src/assets/interface/products-params.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
class ProductsPageComponent implements OnInit, OnDestroy {
  private data!: IData;

  public searchName: string | undefined;

  public paginatedData!: IData;

  public totalItems!: number;

  public currentPage = 1;

  public itemsPerPage!: number;

  public itemsPerRow!: number;

  private onDestroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const deviceWidth = window.outerWidth;
    if (deviceWidth > 426) {
      this.itemsPerRow = deviceWidth > 768 ? 3 : 2;
    } else {
      this.itemsPerRow = 1;
    }
    this.itemsPerPage = this.itemsPerRow * 10;
    this.routeChangeEvent();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  public pageChanged(event?: PageChangedEvent): void {
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

  private convertViToEn = (str: string): string => {
    return (
      str
        .toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
        .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
        .replace(/đ/g, 'd')
        // Some system encode vietnamese combining accent as individual utf-8 characters
        .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // Huyền sắc hỏi ngã nặng
        .replace(/\u02C6|\u0306|\u031B/g, '') // Â, Ê, Ă, Ơ, Ư
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s/g, '')
    );
  };
  private routeChangeEvent(): void {
    this.activatedRoute.queryParams.subscribe((params: IProductsParams) => {
      this.searchName = params.searchName === '' ? 'Rỗng' : params.searchName;
      if (this.searchName) {
        let dataTemp: IProduct[] = [];
        Object.keys(DATA).forEach((key: string) => {
          dataTemp = [
            ...dataTemp,
            ...(DATA[key as keyof IBigData].products as IProduct[]).filter((product) =>
              this.convertViToEn(product.name).match(this.convertViToEn(this.searchName!)),
            ),
          ];
        });

        this.data = {
          name: 'Kết quả tìm kiếm cho',
          products: dataTemp,
        };
      } else {
        this.data = this.getDataByPageName(params.pageName as keyof IBigData | undefined);
      }

      this.totalItems = this.data.products.length;
      this.pageChanged();
    });
  }

  private getDataByPageName(pageName: keyof IBigData | undefined): IData {
    if (!pageName) {
      const products: IProduct[] = Object.keys(DATA).map(key => (DATA[key as keyof IBigData].products as IProduct[])).flat();
      return {
        name: 'Tất cả sản phẩm',
        products
      }
    }

    return DATA[pageName as keyof IBigData];
  }
}

export default ProductsPageComponent;
