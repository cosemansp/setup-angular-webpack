/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.
*/

// the global window
interface Window {
  fetch:(url: string, options?: {}) => Promise<any>
  Response: any
}
