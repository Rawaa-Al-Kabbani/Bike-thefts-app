const { getDateFromTimestamp } = require("../src/utils");

describe("getDateFromTimestamp", () => {
  it("should return a correctly formatted string", () => {
    const timestamp = 1530511200;
    expect(getDateFromTimestamp(timestamp)).toEqual("2018-00-Mo 08:00");
  });
});
