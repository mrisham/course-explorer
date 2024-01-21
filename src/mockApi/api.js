import { createServer, Model } from "miragejs";
import mockData from "../utils/mockData";
export function makeServer({ environment = "production" } = {}) {
  let server = createServer({
    environment,
    models: {
      notes: Model,
    },
    seeds(server) {
      server.db.loadData({
        notes: mockData,
      });
    },
    routes() {
      this.namespace = "api/notes";
      this.get("/", (schema, request) => {
        return schema.notes.all();
      });
      this.get("/:id", (schema, request) => {
        let id = request.params.id;
        return schema.notes.find(id);
      });
      this.post("/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.notes.create(attrs);
      });
      this.patch("/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.notes.find(id);
        return note.update(newAttrs);
      });
      this.delete("/:id", (schema, request) => {
        let id = request.params.id;
        return schema.notes.find(id).destroy();
      });
    },
  });
  return server;
}
