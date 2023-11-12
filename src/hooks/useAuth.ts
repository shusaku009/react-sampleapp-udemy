import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();
  
  const [loading, setLoding] = useState(false);

  const login = useCallback((id: string) => {
    setLoding(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        history.push("/home");
      } else {
        alert("ユーザーが見つかりません")
      }
    }).catch(() => alert("ログインできません")).finally(() => setLoding(false));
  }, 
  [history]);
  return { login, loading };
}