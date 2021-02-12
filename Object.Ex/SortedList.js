function createSortedList() {
    return {
      size: 0,
      arr: [],
        add (x) {
            this.arr.push(x)
            this.size++
            return this.arr.sort((a, b) => a - b)
        },
        remove (x) {
            if (this.arr[x] !== undefined) {
                this.arr.splice(x, 1)
                this.size--
                return this.arr.sort((a, b) => a - b)
            }
            throw new Error
        },
        get (x) {
            if (this.arr[x] !== undefined) {
                return this.arr[x]
            }
            throw new Error
        },
    }
}