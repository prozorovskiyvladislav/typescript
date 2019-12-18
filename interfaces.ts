interface Rect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '1',
  size: {
    height: 24,
    width: 24
  },
  color: "#ccc"
}

const rect2: Rect = {
  id: '2',
  size: {
    width: 32,
    height: 32
  }
}

//Extends Interfaces

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '3',
  size: {
    width: 50,
    height: 50
  },
  getArea() {
    return this.size.width * this.size.height
  }
}

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date;
  setTime(date: Date): void {
    this.time = date;
  }
}

//
interface Styles {
  [key: string]: string
}
const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}