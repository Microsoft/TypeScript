let numberObject: number & { foo: any };
let stringObject: string & { foo: any };
let numberString: number & string;

let object: {
	[ index: number ]: { stringIndexer: any, numberIndexer: any },
	[ key: string]: { stringIndexer: any }
}

let a = object[numberObject];
let b = object[stringObject];
let c = object[numberString];
