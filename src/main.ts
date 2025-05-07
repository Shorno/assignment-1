function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase()
    } else {
        return input.toLowerCase()
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4)
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return [...arrays.flat()]
}


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }

    getModel(): string {
        return `Model: ${this.model}`
    }
}


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    const prices = products.map((product) => product.price)
    const maxPrice = Math.max(...prices)
    return products.find((product) => product.price === maxPrice) || null
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) return "Weekend"
    else return "Weekday"
}


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => resolve(n * n), 1000);
        }
    });
}

