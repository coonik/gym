import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import DATA from 'src/assets/const/data.const';
import IData, { IBigData } from 'src/assets/interface/data.interface';
import IProduct from 'src/assets/interface/product.interface';
import IProductsParams from 'src/assets/interface/products-params.interface';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
class ProductDetailPageComponent implements OnInit {
  public product!: IProduct;
  private dataTemp: IProduct[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.routeChangeEvent();
  }

  ngOnInit(): void {
  }

  public get randomProducts(): IProduct[] {
    const keys = Object.keys(DATA);
    const allProducts = keys
      .map(key => (DATA[key as keyof IBigData]).products)
      .reduce((pre, cur) => ([...pre, ...cur]), []);
    let randomIndexArray = [this.getRandomIndex(0, allProducts.length - 1)];
    randomIndexArray.push(this.getRandomIndex(0, allProducts.length - 1, randomIndexArray));
    randomIndexArray.push(this.getRandomIndex(0, allProducts.length - 1, randomIndexArray));
    return randomIndexArray.map(i => allProducts[i]);
  }

  public get commonDescription(): string {
    return DATA[this.product.key as keyof IBigData].description;
  }

  private routeChangeEvent(): void {
    this.activatedRoute.queryParams.subscribe((params: IProductsParams) => {
      if (params.searchName) {
        this.dataTemp = [];
        Object.keys(DATA).forEach((key) => {
          this.dataTemp = [
            ...this.dataTemp,
            ...(DATA[key as keyof IBigData].products as IProduct[]).filter((product) =>
              this.convertViToEn(product.name).match(this.convertViToEn(params.searchName!)),
            )
            ?.map(i => ({ ...i, key})),
          ];
        });
        const product = this.dataTemp.find(d => this.convertViToEn(d.name).match(this.convertViToEn(params.searchName!)));
        if (!!product) {
          this.product = product;
        } else {
          this.navigateToProductsPage();
        }
      } else {
        this.navigateToProductsPage();
      }
    });
  }

  private navigateToProductsPage(): void {
    this.router.navigate(['products']);
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

  private getRandomIndex(min: number, max: number, exceptions: number[] = []): number {
    let result;
    do {
      result = Math.floor(Math.random() * (max - min + 1) ) + min;
    } while (exceptions.includes(result))
    return result;
  }
}

export default ProductDetailPageComponent;

