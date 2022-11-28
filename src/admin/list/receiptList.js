"use strict";
export const RECEIPT_LIST = "RECEIPT_LIST";

const defaultReceiptList=[
    {
        receiptId:"abc",    
        id :"0",
        quantity:"2",
        userId:"kophaiminhhoang",
        status:1,
    },
    {
        receiptId:"abc",
        id :"1",
        quantity:"1",
        userId:"kophaiminhhoang",
        status:0,
    },
    {
        receiptId:"abc",
        id :"2",
        quantity:"2",
        userId:"kophaiminhhoang",
        status:1,
    },

];
defaultReceiptList.forEach((receipt) => {
    localStorage.getItem(receipt.id) ||
      localStorage.setItem(receipt.id, JSON.stringify(receipt));
  });
  export default defaultReceiptList;