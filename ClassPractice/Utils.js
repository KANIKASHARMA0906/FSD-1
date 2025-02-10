export function avg(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function avgsqrt(n1, n2, n3) {
    return Math.sqrt(avg(n1, n2, n3)); // Use avg function inside avgsqrt
}
