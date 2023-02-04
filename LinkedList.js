class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // افزودن مقدار به انتهای لیست
  append(value) {
    const newElement = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newElement;
    }

    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  // افزودن مقدار به ابتدای لیست
  prepend(value) {
    const newElement = { value: value, next: this.head };
    this.head = newElement;

    // اگر لیست ما خالی باشد
    if (!this.tail) {
      this.tail = newElement;
    }
  }

  // افزودن مقدار به بعد از یک مقدار دیگر
  insertAfter(value, afterValue) {

    // متد فایند را تعریف کرده ایم که چگونه مقداری را پیدا کنیم و آنرا فراخوانی میکنیم
    const existingElement = this.find(afterValue)

    if(existingElement){
      const newElement = {value:value, next: existingElement.value}
      existingElement.next = newElement;
    }
  }

  // پیدا کردن یک مقدار
  find(value) {
    // اگر مقداری کلا وجود نداشت فانکشن متوقف شود یا excute
    if (!this.head) {
      return;
    }

    let curElement = this.head;

    while (curElement) {
      if (curElement.value === value) {
        return curElement;
      }

      curElement = curElement.next;
    }

    return;
  }

  // حذف مقدار از لیست
  delete(value) {
    if (!this.head) {
      // ریترن خالی به این معنیست که عملیات های بعد ازاین دستور متوقف شوند
      // also "return null" is correct or "return"
      return;
    }

    // اگر مقداری که میخواهیم حذف شود ابتدا باشد
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curElement = this.head;

    // فرآیند حذف کردن
    while (curElement.next) {
      if (curElement.next.value === value) {
        curElement.next = curElement.next.next;
      } else {
        curElement = curElement.next;
      }
    }

    // اگر مقداری که میخواهیم حذف کنیم اخرین مقدار باشد
    if (this.tail.value === value) {
      this.tail = curElement;
    }
  }

  //نمایش خروجی این ساختمان داده درون یک آرایه
  toArray() {
    const elements = [];
    let curElement = this.head;

    while (curElement) {
      elements.push(curElement);
      curElement = curElement.next;
    }

    return elements;
  }
}

// ساخت آبجکت از کنستراکتور که ساختیم
const linkedlist = new LinkedList();

// مقداردهی
linkedlist.append(2);
linkedlist.append(2);
linkedlist.append("book");
linkedlist.append(true);

linkedlist.prepend("first Vlue");

linkedlist.delete(2);
linkedlist.delete(true);

// خروجی
console.log(linkedlist.toArray());
console.log(linkedlist.find(2));
console.log(linkedlist.find("book"));


linkedlist.insertAfter("new value", "book")
console.log(linkedlist.toArray())
