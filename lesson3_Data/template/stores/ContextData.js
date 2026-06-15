// import React, { createContext, useContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const DataContext = createContext({});

// export const DataContextProvider = ({ children }) => {
// 	const [data, setData] = useState([])

//     useEffect(() => {
//         getOldData();
//     }, []);

//     const getOldData = async () => {
//         let res = await AsyncStorage.getItem('DATA');
//         if (res) setData(JSON.parse(res));
//     }

// 	const updateData = (newData) => {
// 		setData(newData);
// 		AsyncStorage.setItem('DATA', JSON.stringify(newData))
// 	}

// 	return (
// 		<DataContext.Provider value={{ data, updateData }}>
// 			{children}
// 		</DataContext.Provider>
// 	);
// };

// export const useDataContext = () => {
// 	const values = useContext(DataContext);
// 	return values;
// };

//Ví dụ đơn giản trước

