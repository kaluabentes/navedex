import navers from "data/navers";

export interface Naver {
  id: number;
  image: string;
  name: string;
  role: string;
  age: string;
  companyTime: string;
  projects: string;
}

function getLocalData() {
  const persistedData = localStorage.getItem("navers") as string;
  return JSON.parse(persistedData);
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

  static delete(id: number): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getLocalData();
        const newData = data.filter((naver: Naver) => naver.id !== id);

        localStorage.setItem("navers", JSON.stringify(newData));
        resolve({ data: { message: "ok" } });
      }, 2000);
    });
  }

  static store(naver: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getLocalData();
        const newData = [...data, { id: data.length + 1, ...naver }];

        localStorage.setItem("navers", JSON.stringify(newData));
        resolve({ data: { message: "ok" } });
      }, 2000);
    });
  }

  static show(id: number): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getLocalData();
        const naver = data.find((naver: Naver) => naver.id === Number(id));

        resolve({ data: naver });
      }, 1000);
    });
  }

  static update(id: number, payload: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = getLocalData();
        const newData = data.map((naver: Naver) => {
          if (naver.id === Number(id)) {
            return { ...naver, ...payload };
          }

          return naver;
        });

        localStorage.setItem("navers", JSON.stringify(newData));
        resolve({ data: { message: "ok" } });
      }, 2000);
    });
  }
}
