import { DigimonLink } from "../models/digimon";
import { ApiRepository } from "./api.repository";
import "@testing-library/jest-dom";

let repo: ApiRepository;
describe("Given the class ApiRepository", () => {
  beforeEach(() => {
    repo = new ApiRepository();
  });
  describe("When it is instantiated implements DigimonRepo and the response is ok", () => {
    test("Then it should return", async () => {
      const mockDigimon = [{ name: "patata", id: 2 }] as unknown as DigimonLink;
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(mockDigimon),
        ok: true,
      });

      const get = await repo.getAll("patata", 1);
      expect(get).toEqual(mockDigimon);
    });
  });

  describe("When it is instantiated and the response is not ok", () => {
    test("Then it should return", async () => {
      const mockError = "Error";
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      expect(repo.getAll("test", 1)).rejects.toThrow(mockError);
    });
  });
});
