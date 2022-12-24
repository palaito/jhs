import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "../../media/radio.jpg";
import './Emisoras.css';

export default function Emisoras() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        // countryCode: 'CO',
        language: "spanish",
        tag: stationFilter,
        limit: 15,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  const filters = [
    "all",
    // "classical",
    // "country",
    // "dance",
    // "disco",
    // "house",
    // "jazz",
    // "pop",
    // "rap",
    // "retro",
    // "rock",
    // "christmas",
    // "salsa",
     "merengue",
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className="radio">
    <div className='row'>
    <div className="text-center text-white text-uppercase p-4">
      <div className="">
        {filters.map((filter) => (
          <span
           className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
  </div>
</div>
      <div className="row">
        {stations &&
          stations.map((station, index) => {
            return (
              <div className="col-xl-4 col-sm-4 p-2" >
              <div className="card bg-dark shadow-sm">
               <div className="" key={index}>
                <div className="stationName text-white bg-dark">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>

                <AudioPlayer
                  className="player text-white bg-dark"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
              </div>
              </div>
            );
          })}
      </div>
       {/* <AudioPlayer
  className="catolica"
    autoPlay
    src="https://dreamsiteradiocp2.com/proxy/rmvenezuela?mp=/stream?ver=953010"
   showJumpControls={false}

  /> */}
     </div>


    
  );
}