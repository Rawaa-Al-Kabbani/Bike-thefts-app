import moment from "moment-timezone";

export const getDateFromTimestamp = (timestamp) => {
  return moment
    .unix(timestamp)
    .tz("Europe/Stockholm")
    .format("yyyy-mm-dd hh:ss");
};
