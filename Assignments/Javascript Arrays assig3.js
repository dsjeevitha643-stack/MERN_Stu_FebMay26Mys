//  Permission rules Engine Summary

let permissionRules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false },
  { role: "guest", action: "WRITE", allowed: false }
];

let allowedRules = permissionRules.filter(rule => rule.allowed === true);

let allowedPairs = allowedRules.map(rule => rule.role + ":" + rule.action);


let summary = allowedRules.reduce((acc, rule) => {
acc[rule.role] = (acc[rule.role] || 0) + 1;
return acc;
}, 
{ admin: 0, student: 0, guest: 0 });

console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);



