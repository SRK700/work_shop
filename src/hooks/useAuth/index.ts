import { constant } from "@/utils/constant";
import { getLocalObject } from "@/utils/localHandier";

const useAuth = () => {
  const tokenStorage = getLocalObject(constant.STORAGE_TOKEN);
  if (!tokenStorage) return { auth: false };
  const { accessToken, isAuthenticated } = tokenStorage;
  return { auth: !!accessToken && isAuthenticated };
};
export default useAuth;
