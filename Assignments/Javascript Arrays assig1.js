// Support Ticket Queue Processor

//Initial Queue
let ticketQueue = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "MEDIUM", resolved: true },
  { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "HIGH", resolved: false },
  { id: "T105", priority: "MEDIUM", resolved: true }
];

//  Add urgent ticket to the front
ticketQueue.unshift({ id: "T100", priority: "HIGH", resolved: false });

// Add two normal tickets to the end
ticketQueue.push(
  { id: "T106", priority: "LOW", resolved: false },
  { id: "T107", priority: "MEDIUM", resolved: true }
);

// Process first ticket
let currentTicket = ticketQueue.shift();

// Remove duplicate last ticket
let droppedTicket = ticketQueue.pop();

// Get unresolved tickets
let pending = ticketQueue.filter(ticket => !ticket.resolved);

// Extract only pending ticket IDs
let pendingIds = pending.map(ticket => ticket.id);

console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);