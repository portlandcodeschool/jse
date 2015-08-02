/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


// Note: I lost the original file and had to rewrite from memory;
// some details many vary from original.


//hasJob(personName,jobName) --> Boolean
function hasObj(personName, jobName) {
  return jobName in people[personName].jobs;
}

//hasJob(personObj,jobObj) --> Boolean
function hasObj(personObj, jobObj) {
  return jobObj.job in personObj.jobs;
}

// Callbacks for map:
function personNameToObj(name) {
  return people[name];
}
function jobNameToObj(name) {
  return jobs[name];
}

//peopleDoing(job) --> array of objects
function peopleDoing(jobObj) {
  return Object.keys(jobObj.who).map(personNameToObj);
}


//jobsDoneBy(person) --> array of objects
function jobsDoneBy(personObj) {
  return Object.keys(personObj.jobs).map(jobNameToObj);
}

