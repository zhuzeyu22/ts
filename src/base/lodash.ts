import _ from "lodash";

function testLodashIntersectionWith() {
  const a: any = {
    uut: [
      {
        vr: "qwe",
        type: "3",
        value: 0,
      },
      {
        vr: "qwe4",
        type: "1",
        value: 0,
      },
      {
        vr: "qwe1",
        type: "",
        value: 0,
      },
      {
        vr: "qwe2",
        type: "222",
        value: 0,
      },
      {
        vr: "qwe",
        type: "3",
        value: 33333,
      },
      {
        vr: "qwe",
        type: "",
        value: 1,
      },
      {
        vr: "qwe",
        type: "",
        value: 20,
      },
    ],
  };
  const b = ["qwe", "qwe3"];

  const ret: any = {};
  for (const k in a) {
    ret[k] = _.intersectionWith(
      a[k],
      b,
      (a: { [x: string]: any }, b: any) => a["vr"] === b
    );
  }
}
