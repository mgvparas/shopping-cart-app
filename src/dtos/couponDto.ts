import { CouponCoverage } from '../enums';

type CouponDto = {
  code: string,
  discountPercentage: number,
  itemTypeCode?: string,
  coverage: CouponCoverage
}

export default CouponDto;