import instance from ".";

// Get payment info JSON from stub API
export const getPaymentInfoAsync = async (pageIndex) => {
  if (pageIndex) {
    return await instance.get(`/payments?nextPageIndex=${pageIndex}`);
  } else {
    return await instance.get("/payments");
  }
};
