const { plusHandler, server, primeNumber, isHateFamus } = require("./index"); // Import your Express route handler function

describe("Plus endpoint handler", () => {
  test("returns the sum of two numbers passed in parameters", () => {
    const req = {
      params: {
        num1: "5",
        num2: "10",
      },
    };
    const res = {
      json: jest.fn(),
    };

    plusHandler(req, res);

    expect(res.json).toHaveBeenCalledWith(15);
  });

  test("returns NaN if parameters are not valid numbers", () => {
    const req = {
      params: {
        num1: "abc",
        num2: "def",
      },
    };
    const res = {
      json: jest.fn(),
    };

    plusHandler(req, res);

    expect(res.json).toHaveBeenCalledWith(NaN);
  });

  test("true_when_x_is_17", () => {
    const req = {
      params: {
        num: 17,
      },
    };
    const res = {
      json: jest.fn(),
    };
    primeNumber(req, res);
    expect(res.json).toHaveBeenCalledWith(true);
  }),
    test("true_when_x_is_36", () => {
      const req = {
        params: {
          num: 36,
        },
      };
      const res = {
        json: jest.fn(),
      };
      primeNumber(req, res);
      expect(res.json).toHaveBeenCalledWith(false);
    });
  test("true_when_x_is_13219", () => {
    const req = {
      params: {
        num: 13219,
      },
    };
    const res = {
      json: jest.fn(),
    };
    primeNumber(req, res);
    expect(res.json).toHaveBeenCalledWith(true);
  });

  test("is1honor 3.6",()=>{
    const req = {
      params: {
        grade: 3.6,
      },
    };
    const res = {
      json: jest.fn(),
    };
    isHateFamus(req,res)
    expect(res.json).toHaveBeenCalledWith(true);
  })

  test("is1honor 3.5",()=>{
    const req = {
      params: {
        grade: 3.5,
      },
    };
    const res = {
      json: jest.fn(),
    };
    isHateFamus(req,res)
    expect(res.json).toHaveBeenCalledWith(true);
  })

  test("is1honor 3.4",()=>{
    const req = {
      params: {
        grade: 3.4,
      },
    };
    const res = {
      json: jest.fn(),
    };
    isHateFamus(req,res)
    expect(res.json).toHaveBeenCalledWith(false);
  })
});
afterAll((done) => {
  server.close(done);
});
