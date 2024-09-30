import React, { useEffect } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import { AppDispatch } from "./redux/store";
import { fetchForecast, fetchWeather } from "./redux/slices/weatherSlice";
import { ErrorPage } from "./components/ErrorPage";
import SearchCity from "./components/SearchSity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CurrentWeather />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "daily",
        element: <DailyWeather />,
      },
    ],
  },
]);

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentCity = "Yerevan";

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchWeather(currentCity));
      dispatch(fetchForecast(currentCity));
    };

    fetchData();
  }, [dispatch, currentCity]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Link to="daily">Daily</Link> */}
      <SearchCity />
    </>
  );
};

export default App;
