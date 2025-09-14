"use strict";
const newusers = new Map();
newusers.set("id@1", { name: "Anmol", age: 18, email: "@id1" });
newusers.set("id@2", { name: "Anmolji", age: 181, email: "@id2" });
newusers.set("id@3", { name: "Anmolw", age: 1811, email: "@id3" });
const log = newusers.get("id@1");
