import navers from "data/navers";

export interface Naver {
  id: number;
  image: string;
  name: string;
  role: string;
}

export default class NaversApi {
  static index(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const persistedData = localStorage.getItem("navers");

        if (!persistedData) {
          localStorage.setItem("navers", JSON.stringify(navers));
          resolve({ data: navers });
          return;
        }

        resolve({ data: JSON.parse(persistedData) });
      }, 2000);
    });
  }
}
