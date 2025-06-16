export function isEmpty(obj) {
    let empty = Object.keys(obj).length === 0;
    console.log(empty);
	return empty;
}
