module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};

let result = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string")
    {members[i] = members[i].replace(/^\s+/g, "").toUpperCase();}
   }
  members = members.sort();
  for (let i = 0; i < members.length; i++) {
     if (typeof members[i] === "string") {result +=members[i][0]}
  }
  return result;
};





