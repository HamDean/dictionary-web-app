import apiClient from "./api-client";
import type { WordDefinition } from "../hooks/useDefinitions";

class DefinitionService {
  getDefinition(word: string) {
    const controller = new AbortController();

    const request = apiClient.get<WordDefinition[] >(`/${word}`, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new DefinitionService();
