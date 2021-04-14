import { useState } from "react";

const initialData = {
  status: null,
  data: null,
  error: null,
};

export function getUrl() {
  const [fetchData, setFetchData] = useState(initialData);

  function onLoad() {
    setFetchData({ ...initialData, status: "loading" });
  }

  function onError() {
    setFetchData({ ...initialData, status: "error" });
  }

  function onSuccess(data) {
    setFetchData({ ...initialData, data: data, status: "success" });
  }
  return [fetchData, { onLoad, onError, onSuccess }];
}
