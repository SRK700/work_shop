import { Customer } from "@/models/customer.model";
import { Product } from "@/models/product.model";
import { SignIn } from "@/models/signin.model";
import httpClient from "@/utils/httpClient";

type SignInProps = {
  username: string;
  password: string;
};
// AUTHENTICATION
export const signIn = async (credential: SignInProps): Promise<SignIn> => {
  const { data: response } = await httpClient.post<SignIn>("/auth", credential);
  return response;
};

export const signOut = async (): Promise<void> => {
  await httpClient.post("auth/logout", null);
};

//production
export const fecthPordutcs = async (): Promise<Product> => {
  const { data: response } = await httpClient.get<Product>("/products");
  return response;
};

export const fetchCustomers = async (): Promise<Customer> => {
  const { data: response } = await httpClient.get<Customer>("/customers");
  return response;
};
