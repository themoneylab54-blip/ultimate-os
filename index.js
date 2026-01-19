import { register } from "node:module";
import { pathToFileURL } from "node:url";

// 1. On enregistre TSX pour qu'il traduise le TypeScript à la volée
register("tsx/esm", pathToFileURL("./"));

// 2. On lance ton serveur Hostinger
await import("./server/_core/index.hostinger.ts");
