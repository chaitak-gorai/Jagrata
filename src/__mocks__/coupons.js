import { v4 as uuid } from "uuid";

export const coupons = [
  {
    id: uuid(),
    category: "Groceries",
    image: "/static/images/products/product_2.png",
    couponCode: "tfsg45",
    isPercent: true,
    amountOff: 5,
    timesredeemed: 0,
    expiryDuration: "2022-09-30T00:00:00.000Z",
    offeredBy: "admin",
  }
];
