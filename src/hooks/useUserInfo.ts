import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

type User = {
  attributes: {
    email: string;
    phone_number: string;
    sub: string;
  };
  username: string;
  userId: string;
};

export const useUserInfo = (): User => {
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    Auth.currentUserInfo().then((info) => setUserInfo(info));
  }, []);

  return { ...userInfo, userId: userInfo?.attributes.sub };
};
