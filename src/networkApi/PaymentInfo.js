import instance from ".";

// Get payment info JSON from stub API
export const getPaymentInfoAsync = async () => await instance.get("/payments");

