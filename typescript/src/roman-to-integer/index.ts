export default function romanToInt(s: string): number {
    const elements = s.split('')
    const charValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0;

    for (let i = 0; i < elements.length; i++) {
            if (charValue[elements[i] as keyof typeof charValue] < charValue[elements[i + 1] as keyof typeof charValue]) {
                total -= charValue[elements[i] as keyof typeof charValue]
            }
            else {
                total += charValue[elements[i] as keyof typeof charValue]
            }
    }
    return total
};

// https://www.zhenghao.io/posts/object-vs-map
// try this next time using map.object is slow af