import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

//先mock调用的方法
const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();


//注意return里面才是真正要写的，注入进来
jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

//防止测试类的前后影响
beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockGetHasAntibodies.mockClear();
  mockAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(expect.any(Covid19Vaccine));
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockImplementation(() => true);
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    mockGetHasAntibodies.mockImplementation(() => false);
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
