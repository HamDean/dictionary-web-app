import apiClient from "../assets/api-client";
import type { Definitions } from "../hooks/useDefinitions";

class DefinitionService {
  getDefinition(word: string) {
    const controller = new AbortController();
    
    const request = apiClient.get<Definitions[]>(`/${word}`, {
      signal: controller.signal,
    });

    return {request, cancel: () => controller.abort()};
  }
}

export default new DefinitionService();
