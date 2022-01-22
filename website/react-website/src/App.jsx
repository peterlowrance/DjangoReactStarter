import { useEffect, useState } from "react";
import Table from "./Table";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "./state/peopleSlice";

export default function App() {
  const dispatch = useDispatch();

  const people = useSelector((state) => state.people.people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <div className="App">
      <Header />
      <Table data={people} />
    </div>
  );
}
