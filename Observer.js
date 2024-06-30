export const Observer = class {
    #subscribers;

    constructor(){
        this.#subscribers = new Map();
    }

    subscribe(key, callback) {
        if (typeof key !== "symbol")
            throw new Error("Observer key should be of symbol type");
        
        this.#subscribers.set(key, callback);
    }

    unsubscribe(key) {
        this.#subscribers.delete(key);
    }

    notify(value) {
        for (const callback of this.#subscribers.values()) {
            callback(value);
        }
    }
}