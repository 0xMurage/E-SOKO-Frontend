export function resolveErrorCode(code: number) {
    if (code === 0) {
        return 'Could not reach the server. Kindly check your internet connection';
    }
    if (code === 400) {
        return 'Request could not be fulfilled due to missing data.';
    }
    if (code === 401) {
        return 'Not authorized. You need to login again';
    }
    if (code === 404) {
        return 'Requested item not found. Kindly try again';
    }

    if (code === 422) {
        return 'Server received invalid data and was unable to process your request.';
    }

    if (code === 500) {
        return 'Server is experiencing some error. Kindly try again later';
    }
    if (code === 503) {
        return 'We are unable to process your request at this time, try again later.';
    }
    if (code === 405) {
        return 'Server could not process your request. Kindly contact the IT support';
    }
    return `Unable to process your request. Kindly email support for further assistance. (code:${code})`;
}

export function httpErrorResolver(error): string {
    let message = '';

    if (error.error instanceof Object) {
        message = error.error.message;
    } else {
        if (error.error.results) {
            message = error.error.results;
        } else {
            message = resolveErrorCode(error.status);
        }
    }

    return message;
}

export function formatRequestDate(date: any) {
    const originalDate: Date = isValidDate(date) ? date : new Date(date);
    return originalDate.toISOString().split('T')[0];
}

export function isValidDate(date: Date) {
    return date && Object.prototype.toString.call(date) === '[object Date]';

}

export function addDaysToDate(start: any, days: number): Date {
    const prev = isValidDate(start) ? new Date(start.getTime()) : new Date(start);
    prev.setDate(prev.getDate() + days);
    return prev;
}


export function uuid(splitBy = '') {
    const lut = [];
    for (let i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + splitBy +
        lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + splitBy + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + splitBy +
        lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + splitBy + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
        lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}
