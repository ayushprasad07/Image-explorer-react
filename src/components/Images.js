import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ImageItems from "./ImageItems";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Images() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const updateImage = async () => {
    const url = "https://api.unsplash.com/photos/?client_id=HgSrtb887pa6iQ0KVGSaifwYAGkRZ1rN6jcqO1GeoQc&page=1&pageSize=7";
    setLoader(true);
    const response = await fetch(url);
    const parsedData = await response.json();
    setData(parsedData);
    setLoader(false);
  };

  useEffect(() => {
    updateImage();
  }, []);

  const fetchMoreData = async () => {
    const newPage = page + 1;
    const url = `https://api.unsplash.com/photos/?client_id=HgSrtb887pa6iQ0KVGSaifwYAGkRZ1rN6jcqO1GeoQc&page=${newPage}&pageSize=5`;
    setPage(newPage);
    setLoader(true);
    const response = await fetch(url);
    const parsedData = await response.json();
    setData(data.concat(parsedData));
    if (parsedData.length === 0) {
      setHasMore(false);
    }
    setLoader(false);
  };

  return (
    <>
      <div className="container">
        {loader && <Spinner />}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {data.map((element) => (
              <div className="col-md-3" key={element.id}>
                <ImageItems
                  image={element.urls.raw}
                  disc={element.alt_description}
                  full={element.links.download}
                  likes={element.likes}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
