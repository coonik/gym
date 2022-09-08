import IProduct from './product.interface';

interface IData {
  name: string;
  description?: string;
  detail?: string;
  products: IProduct[];
}

export default IData;

export interface IBigData {
  thietBiDoChoiTreEm: IData;
  thietBiTheThaoCongVien: IData;
  thietBiTheThaoCongVienCaoCap: IData;
  thietBiTheThaoSanVuon: IData;
}
