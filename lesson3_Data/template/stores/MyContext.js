import React from "react";
import { createContext, useContext, useState } from "react";

//1. tạo kho
const DataContext = createContext();

//2. provider truyền dữ liệu
export const DataProvider = ({ children }) => {
  // const [soDu, setSoDu] = useState(0);
  const [sanPham, setSanPham] = useState("");
  return (
    // <DataContext.Provider
    //   value={{ soDu, setSoDu }} // cho phép màn hình khác xem và chỉnh sửa
    // >
    //   {children}
    // </DataContext.Provider>
    <DataContext.Provider value={{ sanPham, setSanPham }}>
      {children}
    </DataContext.Provider>
  );
};

//3. lấy dữ liệu
export const useDataContext = () => useContext(DataContext);
