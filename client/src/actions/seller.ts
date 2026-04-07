import axios, { endpoints } from "@/lib/axios";

// -------------------------------------------------------------

export async function registerSellerApi() {
  const URL = endpoints.general.seller.register;

  const res = await axios.put(URL, null);

  if (res.status !== 201) {
    throw new Error("Unable to register seller");
  }

  return res.data;
}

export async function unregisterSellerApi() {
  const URL = endpoints.general.seller.unregister;

  const res = await axios.put(URL, null);

  if (res.status !== 201) {
    throw new Error("Unable to unregister seller");
  }

  return res.data;
}
