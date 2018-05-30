declare const M: any;

export function toast(msg: string) {
    M.toast({ html: msg });
}

export function toastError(err: Error) {
    console.log(err);
    M.toast({ html: 'Error: ' + err.message });
}
