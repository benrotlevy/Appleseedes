const functions = require("./app");

describe("getAgencyByName", () => {
    const agency = {
        agencyName: 'Car Werks',
        cash: 302502,
        credit: 150000,
        agencyId: '9KeaYbRLP',
        cars: [],
    }
    const carMarket = {
        sellers: [
          {
            agencyName: 'Best Deal',
            cash: 1245000,
            credit: 200000,
            agencyId: 'Plyq5M5AZ',
            cars: [],
          },
          {
            agencyName: 'CarMax',
            cash: 968541,
            credit: 500000,
            agencyId: '26_IPfHU1',
            cars: [],
          },
          {
            agencyName: 'The Auto World',
            cash: 687450,
            credit: 200000,
            agencyId: 'gNHjNFL12',
            cars: [],
          },
          {
            agencyName: 'Car Werks',
            cash: 302502,
            credit: 150000,
            agencyId: '9KeaYbRLP',
            cars: [],
          },
          {
            agencyName: 'Carsova',
            cash: 72450,
            credit: 50000,
            agencyId: 'oqQmsZoUo',
            cars: [],
          },
        ],
    }
    test("valid carMarket and valid name", () => {
        expect(functions.getAgencyByName(carMarket, "Car Werks")).toEqual(agency);
    });
    test("valid carMarket and invalid name", () => {
        expect(functions.getAgencyByName(carMarket, "CAR Werks")).toBe(undefined);
    });
    test("invalid carMarket-sellers and valid name", () => {
        expect(functions.getAgencyByName("carMarket", "Car Werks")).toBe(undefined);
    });
    test("no args", () => {
        expect(functions.getAgencyByName()).toBe(undefined);
    });
})

describe("getAgencyIdByName", ()=> {
    const carMarket = {
        sellers: [
          {
            agencyName: 'Best Deal',
            cash: 1245000,
            credit: 200000,
            agencyId: 'Plyq5M5AZ',
            cars: [],
          },
          {
            agencyName: 'CarMax',
            cash: 968541,
            credit: 500000,
            agencyId: '26_IPfHU1',
            cars: [],
          },
          {
            agencyName: 'The Auto World',
            cash: 687450,
            credit: 200000,
            agencyId: 'gNHjNFL12',
            cars: [],
          },
          {
            agencyName: 'Car Werks',
            cash: 302502,
            credit: 150000,
            agencyId: '9KeaYbRLP',
            cars: [],
          },
          {
            agencyName: 'Carsova',
            cash: 72450,
            credit: 50000,
            agencyId: 'oqQmsZoUo',
            cars: [],
          },
        ],
    }
    test("valid carMarket and valid name", () => {
        expect(functions.getAgencyIdByName(carMarket, "CarMax")).toBe("26_IPfHU1");
    });
    test("valid carMarket and invalid name", () => {
        expect(functions.getAgencyIdByName(carMarket, "CAR Werks")).toBe(undefined);
    });
    test("invalid carMarket-sellers and valid name", () => {
        expect(functions.getAgencyIdByName("carMarket", "Car Werks")).toBe(undefined);
    });
    test("no args", () => {
        expect(functions.getAgencyIdByName()).toBe(undefined);
    });
})
