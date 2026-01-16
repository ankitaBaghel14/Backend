const ex = require("express");
const a = ex();

a.use(ex.json());

let list = [];

a.post("/todo", (r, s) => {
  let x = { id: Date.now(), t: r.body.t };
  list.push(x);
  s.send(x);
});

a.get("/todo", (r, s) => {
  s.send(list);
});

a.put("/todo/:i", (r, s) => {
  let i = +r.params.i;
  list = list.map(e => (e.id === i ? { ...e, t: r.body.t } : e));
  s.send("done");
});

a.delete("/todo/:i", (r, s) => {
  let i = +r.params.i;
  list = list.filter(e => e.id !== i);
  s.send("deleted");
});

a.listen(3000);
